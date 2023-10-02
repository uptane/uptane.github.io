---
title : "Offline Updates"
---

- PURE: 2
- Title: Offline Updates
- Version: 1
- Last-Modified: 2021-09-16
- Authors: Jon Oster <jon.oster@toradex.com>, Phil Wise <phil@phil-wise.com>
- Status: Approved
- Content-Type: <text/markdown>
- Created: 2021-09-16

# PURE-2: Offline Updates

## Abstract

Firmware often needs to be updated offline, in situations where the full Uptane interactive flow is not possible for some reason--usually because internet connectivity is not available, or the device to be updated has not yet registered ECU keys with the Uptane backend. In those scenarios, it is still desirable to have some degree of validation and protection of the update process, and in particular to ensure that these offline updates can be directed.

This PURE offers a method of creating a bundle of firmware images and metadata that can be put on durable storage and used to install updates in the absence of connectivity with the update server without turning that bundle into a permanent vector for rollback attacks. To accomplish this, we define a new role on the Director repository for signing Targets metadata for offline installation, along with the procedures for verifying this metadata.

## Motivation

NOTE: Although Uptane was initially designed for automotive applications, it has been adopted for use in other IoT domains. Therefore, instead of referring to "vehicles" as the target of updates, this PURE refers more generically to "devices".

Uptane requires active, two-way communication between the device and the update server. The basic Uptane flow for checking for an update is:

1.  Device sends a manifest consisting of version reports from each ECU in the device, signed by the ECU's private key, providing all of its installed software versions to the Director.

2.  Based on this information, the Director consults the inventory database, determines what updates should be installed on the device, and generates new targets, timestamp, and Snapshot metadata directing each ECU to install those updates.

3.  Device validates the update metadata from the Director, verifies that there are matching targets available in the Image repository, and downloads and installs the necessary updates.

4.  Device sends a new signed manifest indicating the success (or failure) of the update.

In principle, this process could be adapted for offline use cases by pre-generating Director metadata for each potential device and distributing this metadata via a side channel. However, this is quite difficult in practical application, and doesn't address any of the use cases involving updates to devices whose ECU keys and serial numbers are not yet registered with the inventory database, such as factory pre-provisioning.

There are a number of potential scenarios where an OEM may wish to validate and secure updates that are difficult to address with the full Uptane protocol. This is especially true in non-automotive uses of Uptane, such as in industrial automation systems or medical devices. Industrial automation systems may be on completely airgapped networks, never able to connect to update servers. Medical devices may be connected to the internet only very rarely, but still desire the advanced security benefits (in particular, selectively directed updates) that Uptane can provide over The Update Framework (TUF). Specific use cases for this PURE include:

- Initial load-out of software on the factory floor, before all ECUs are present and before they are registered with the inventory database

- Updating devices on airgapped networks where a full Uptane implementation may not be practical

- Allowing service technicians to deliver updates at their discretion, but only from an OEM-directed set of possible updates

## Specification

### The Offline-update metadata role

To solve the problems above, we add a new role to the Director repository, called the "Offline-update" role. The new Offline-update role is responsible for producing and signing metadata about sets of images that are valid for offline updates. This includes two types of metadata: Offline-update Snapshot metadata and Offline-update Targets metadata. These roles are analagous to snapshot and Targets metadata on the Image repository.

Each Offline-update Targets metadata file lists a set of images eligible for installation together as an offline update. This metadata is designed to be loaded onto a portable storage medium, such as a USB drive or a diagnostics/flashing tool with attached storage, alongside an up-to-date version of all non-device-specific metadata from both Uptane repositories and binaries for all targets listed. Uptane clients can check for the presence of Offline-update metadata, either by an automated process (e.g. periodically checking some well-known location on a filesystem or TFTP server) or via a manually-triggered diagnostic command. If Offline-update metadata is found, the clients validate it, check it against the Image repository metadata, and then install the targets.

When a device receives online updates from the Director, it receives the latest version of the Offline-update Snapshot metadata as part of the normal update cycle.

### Offline-update role in root metadata

To perform offline updates, the root metadata file in the Director repository SHALL include two new "Offline-updates" roles: one responsible for Offline-update Snapshot metadata, and one responsible for offline-update Targets metadata. These roles MAY use the same signing key as the Targets role, but SHOULD use their own. The Offline-update role's key(s) MAY be kept online or offline, depending on the security requirements of the implementor.

### Offline-update Snapshot metadata

The Offline-update Snapshot metadata lists version numbers and filenames of all Offline-update Targets metadata files.

For each Offline-update Targets metadata file on the repository, the Offline-update Snapshot metadata SHALL contain the following information:

1.  The filename and version number of the Offline-update Targets metadata file.

### Offline-update Targets metadata

Each Offline-update Targets metadata file on a repository contains information about a set of images eligible to be installed on devices. Like other Director Targets metadata files, Offline-update Targets metadata files SHALL NOT contain delegations.

When a device is validating Offline-update Targets metadata, it will only execute an update if it can unambiguously determine which images to install. For this reason, the metadata SHOULD include a mechanism to permit disambiguation in multi-ECU systems. See the deployment considerations section for more detail on this recommendation.

### Addendum to Director repository Snapshot metadata requirements

Offline-update Targets metadata files SHOULD NOT be listed in the main snapshots metadata file of the Director repository, if implemented. Because the Offline-update role signs its own Snapshot metadata, listing those files in the main snapshots metadata file is redundant, and increases the size of a file that is downloaded very frequently.

### Required files for offline updates

The following elements SHALL be present on any Offline-update storage location (in a "well-known" location configured in advance on the on the Primary):

- Image repository metadata:

  - All Root metadata files from the Image repository, from version 1 to the most-recent version at the time the offline update is generated

  - The latest version of every Targets metadata file, including delegations, at the time the offline update is generated

  - The latest version of the Snapshot metadata file at the time the offline update was generated

- Director repository metadata:

  - All Root metadata files from the Director repository, from version 1 to the most-recent version at the time the offline update is generated

  - The Offline-update Snapshot metadata file

  - Exactly one Offline-update Targets metadata file

- All target images referenced in the Offline-update Targets metadata file

### Metadata verification procedures

The procedures for verifying Offline-update metadata are similar to the procedures for verifying normal Director metadata. However, there are some key differences. The procedures for sending images from the primary to secondaries, as well as for verifying and installing the images once the metadata has been verified, remain the same.

Note: wherever the "Uptane Standard" or "the Standard" is referenced, it refers to version 1.2.0 of the Standard, available at https://uptane.github.io/uptane-standard/1.2.0/uptane-standard.html.

The primary still SHALL verify all target images listed in the Director Offline-update metadata, while secondaries MAY verify only the images they will install.

#### Download and verify metadata from the well-known location

The Primary SHALL download metadata for all Offline-update targets and perform a full verification on it. Full verification of metadata means that the ECU checks that the Targets metadata about images from the Director repository matches the Targets metadata about the same images from the Image repository. This provides resilience to a key compromise in the system.

Because of the nature of offline updates, sometimes the Offline-update bundle (i.e. the files in the well-known location) will contain newer metadata than the primary, and sometimes the converse will be true. Most of the changed or added steps in the verification process were made to deal with this reality; the rest of the differences are steps that were removed because they are no longer applicable, in particular those relating to the ECU version reports and vehicle version manifest.

In order to perform Offline-update verification, an ECU SHALL perform the following steps.

1.  Load and verify the current time or the most recent securely attested time.

2.  Check if updated Director root metadata is available in the well-known location, following the procedure listed in Section 5.4.4.3 of the Standard, loading the root metadata file(s) from the well-known location instead of attempting to download them from the repository.

3.  Update Offline-update Snapshot metadata from the well-known location:

    1.  Load the Offline-update Snapshot metadata file from the well-known location. If the version number of the existing Offline-update Snapshot metadata file the ECU has stored is equal to or greater than the one found in the well-known location, continue to step 4.

    2.  Otherwise, check that it has been signed by the threshold of unique keys specified for the Offline-update Snapshot role in the latest Root metadata file. If the new Snapshot metadata file is not signed as required, discard it, abort the update cycle, and log the signature failure. (Checks for an arbitrary software attack.)

    3.  Check that the version number listed by the previous Snapshot metadata file for each Offline-update Targets metadata file is less than or equal to its version number in this Snapshot metadata file. If this condition is not met, discard the new Snapshot metadata file, abort the update cycle, and log the failure. (Checks for a rollback attack.)

    4.  Check that the current (or latest securely attested) time is lower than the expiration timestamp in this Snapshot metadata file. If the new Snapshot metadata file is expired, discard it, abort the update cycle, and log the potential freeze attack. (Checks for a freeze attack.)

4.  Traverse the list of Offline-update Targets metadata files in the Offline-update Snapshot metadata until a matching filename is found in the well-known location. If no matching file is found, abort the update cycle and log the error. If one is found, perform the following verification procedure:

    1.  Check that the version number of this Targets metadata file matches the version number listed in the latest Snapshot metadata. If the version number does not match, discard it, abort the update cycle, and log the failure.

    2.  Check that the Targets metadata has been signed by the threshold of unique keys specified for the Offline-updates Targets role in the latest Root metadata file. If not, discard it, abort the update cycle, and log the failure. (Checks for an arbitrary software attack.)

    3.  Check that the current (or latest securely attested) time is lower than the expiration timestamp in this Targets metadata file. If not, abort the update cycle and log the failure. (Checks for a freeze attack.)

    4.  Check that there is at most one target in the metadata that can be installed on this ECU. The exact method for this will vary between implementations. For example, if each target specified a hardwareId, make sure that there is only one target listed for this ECU's hardwareId. If there is more than one target that could be installed on this ECU, abort the update cycle and log the failure (if this is the primary ECU) or report the failure to the primary ECU (if this is a secondary ECU).

5.  If the Offline-update Targets metadata indicates that there is no new target for this ECU (either because there is no target valid for installation on this ECU, or because the target is already installed), the verification process MAY be stopped here and considered complete. Otherwise, continue with the rest of the steps.

6.  Check if updated Image repository root metadata is available in the well-known location, following the procedure listed in Section 5.4.4.3 of the Standard, loading the root metadata file(s) from the well-known location instead of attempting to download them from the repository.

7.  Check if updated Image repository Snapshot metadata is available in the well-known location:

    1.  Load the Image repository Snapshot metadata file from the well-known location. If the version number of the existing Image repository Snapshot metadata file the ECU has stored is equal to or greater than the one found in the well-known location, continue to step 8.

    2.  Otherwise, check that it has been signed by the threshold of keys specified in the latest Root metadata file. If the new Snapshot metadata file is not signed as required, discard it, abort the update cycle, and log the signature failure. (Checks for an arbitrary software attack.)

    3.  Check that each Targets metadata filename listed in the previous Snapshot metadata file is also listed in this Snapshot metadata file. If this condition is not met, discard the new Snapshot metadata file, abort the update cycle, and log the failure. (Checks for a rollback attack.)

    4.  It is not necessary to check whether the Snapshot metadata file from the Image repository is expired. Image repository Snapshot metadata often has shorter expiry times than is desirable for offline updates, so this safeguard against freeze attacks SHOULD be skipped in most cases.

8.  Check if updated Image repository Targets metadata is available in the well-known location. For each Targets metadata file listed in the Image repository Snapshot metadata:

    1.  Load the Targets metadata file. If a version of this Targets metadata file already exists on the device, check if the version number of the existing file the ECU has stored is equal to or greater than the one found in the well-known location. If it is, continue to the next listed Targets metadata file. (Or to step 9 if this is the last metadata file listed.)

    2.  Check that the version number of this Targets metadata file matches the version number listed in the latest Snapshot metadata. If the version number does not match, discard it, abort the update cycle, and log the failure.

    3.  Check that the Targets metadata has been signed by the threshold of unique keys specified in the relevant metadata file. (Checks for an arbitrary software attack.):

        1.  If checking top-level Targets metadata, the threshold of keys is specified in the Root metadata.

        2.  If checking delegated Targets metadata, the threshold of keys is specified in the Targets metadata file that delegated authority to this role.

    4.  Check that the current (or latest securely attested) time is lower than the expiration timestamp in this Targets metadata file. If not, abort the update cycle and log the failure. (Checks for a freeze attack.)

9.  Verify that Offline-update Targets metadata from the Director matches the metadata from the Image repository. A Primary ECU SHALL perform this check on metadata for every image listed in the Offline-updates Targets metadata file. A Secondary ECU MAY elect to perform this check only on the metadata for the image it will install. To check that the metadata for an image matches, complete the following procedure:

    1.  Locate and load a Targets metadata file from the Image repository that contains an image with exactly the same filename listed in the Offline-update Targets metadata from the Director, resolving delegations if necessary following the procedure in Section 5.4.4.7 of the Standard.

    2.  Check that the Targets metadata from the Image repository matches the Offline-update Targets metadata from the Director repository for this image:

        1.  Check that the non-custom metadata (i.e., length and hashes) of the target are the same in both sets of metadata.

        2.  Check that all SHALL match custom metadata fields, as defined in section 5.2.3.1.1 of the Standard, are the same in both sets of metadata.

#### Additional step for full verification during an online update

Any vehicle eligible for offline updates that also receives normal OTA updates SHALL additionally download and check for a newer version of the Offline-updates Snapshot metadata from the Director repository when it executes an update cycle:

1.  Download the latest Offline-update Snapshot metadata file from the Director repository.

2.  Check that it has been signed by the threshold of unique keys specified for the Offline-updates role in the latest Root metadata file. If the new Snapshot metadata file is not signed as required, discard it and log a warning (but continue with the update cycle).

3.  Check that the version number listed by the previous Snapshot metadata file for each Targets metadata file is less than or equal to its version number in this Snapshot metadata file. If this condition is not met, discard the new Snapshot metadata file, abort the update cycle, and log the failure. (Checks for a rollback attack.)

### Addendum to Uptane Standard Build-time prerequisite requirements for ECUs

For an ECU to be capable of receiving PURE-2-secured offline updates, it MUST have the following data provisioned at the time it is manufactured or installed in the vehicle:

1. A sufficiently recent copy of required Uptane metadata at the time of manufacture or install. This is necessary for the ECU to authenticate that the remote repository is legitimate when it first downloads metadata in the field. See [Uptane Deployment Best Practices](https://uptane.github.io/deployment-considerations/index.html) for more information.
2. The current time, or a secure attestation of a sufficiently recent time.

The ECU does not require an ECU key in order to be capable of receiving PURE-2-secured offline updates.

### Sample directory structure

```
.well-known
├── images
│   ├── firmware-acme-1.0.2.bin
│   └── firmware-bravo-3.1.1.bin
└── metadata
    ├── director
    │   ├── EMEA-standard.json
    │   ├── Offline-update-snapshot.json
    │   ├── 1.root.json
    │   ├── 2.root.json
    │   ├── 3.root.json
    │   ├── 4.root.json
    │   └── 5.root.json
    └── image-repo
        ├── delegation-1.json
        ├── delegation-2.json
        ├── 1.root.json
        ├── 2.root.json
        ├── 3.root.json
        ├── snapshot.json
        └── targets.json
```

### Sample metadata files

These three examples are given because they're the only files that are unique to the offline update proposal. All the other metadata files in the directory structure are the same as existing Uptane metadata.

Note that, although the Offline-update Snapshot metadata file lists two possible offline updates (EMEA-standard.json and EMEA-premium.json, see sample metadata below), a single source of Offline-update metadata SHOULD always only include one of them--otherwise, the device wouldn't know which one to install. However, an implementor MAY choose to allow multiple offline-update targets metadata files in the same location. For example, if the Uptane client on the primary has the capability, it could display different options and allow the technician or end-user to select the one they wish to install.

#### metadata/director/EMEA-standard.json

This sample Offline-update Targets metadata file would direct a device to install firmware-acme-1.0.2.bin on the acme-flibberator-NBB2 ECU, and firmware-bravo-3.1.1.bin on the bravo-turboencabulator ECU, regardless of the specific ECU serial number of those devices. That installation directions is only valid until 2022-02-24T20:54:38Z, and furthermore is only valid if version 5 of EMEA-standard.json is the version that the device's latest Offline-update-snapshot.json file indicates.

```
{
    "signatures":
    [
        {
            "keyid": "5b2feb3184f3e566c9935230e7af3cb99f4669edcd50d0755fc1bb28fb66959d",
            "method": "rsassa-pss-sha256",
            "sig": "ao/X2/yEIW3/BVmvJ1ZeklofeS6ols0UXjRUYNWmReNi+c4eQ7DsZ6tluIab3gpTIOnf0Ct22kbxU9gfoFKdRtK2Fa5X6UI+4u67CHUbKozDVCkleeLIVoQ5V1t3rHeKNIpTfTnWJK9QFbsy7x4HU1eGGTTUzvhkIAGo8JjZ7vFKKsObY3CRaq4FMtHHihu3Zra5S5eO/QRw/yRHysIXsK3JcYQRQIJUpUWWWHerQEOvjyqWEapggGCCq3RHPziT22kAM/O/vaBmp0gcu2V9AEhoTwhAWyEnXo5mnju1IKMUu7z6ARcz8qVRYgi4/Ns2DH9yOUMjtdaIb5do2JmuQQ=="
        }
    ],
    "signed":
    {
        "_type": "Offline-Targets",
        "expires": "2022-02-24T20:54:38Z",
        "targets":
        {
            "firmware-acme-1.0.2.bin":
            {
                "hashes":
                {
                    "sha256": "994dc699d4fa98f8dd16d7a1abbd3cc7943c83e0f1aaab63a49e1f5c0aa8a363"
                },
                "length": 49827,
                "custom":
                {
                    "name": "firmware-acme",
                    "version": "1.0.2",
                    "hardwareIds":
                    [
                        "acme-flibberator-NBB2"
                    ],
                    "targetFormat": "BINARY",
                    "uri": null,
                    "createdAt": "2021-04-05T14:24:00Z",
                    "updatedAt": "2021-04-05T14:24:00Z",
                }
            },
            "firmware-bravo-3.1.1.bin":
            {
                "hashes":
                {
                    "sha256": "5614fa9539dd64735ac5afe9f81a6fafb24998f32ef0eaa62d7e88e422272d2b"
                },
                "length": 1011928,
                "custom":
                {
                    "name": "firmware-bravo",
                    "version": "3.1.1",
                    "hardwareIds":
                    [
                        "bravo-turboencabulator"
                    ],
                    "targetFormat": "BINARY",
                    "uri": null,
                    "createdAt": "2021-04-05T14:24:47Z",
                    "updatedAt": "2021-04-05T14:24:47Z",
                }
            },
        "version": 5
    }
}
```

#### metadata/director/Offline-update-snapshot.json

This sample Offline-update Snapshot metadata file indicates to the device that the latest version of EMEA-standard.json is 5, and the latest version of EMEA-premium.json is 3 (and also indicates the hashes of those files, though this is not required by PURE-2).

```
{
    "signatures":
    [
        {
            "keyid": "5b2feb3184f3e566c9935230e7af3cb99f4669edcd50d0755fc1bb28fb66959d",
            "method": "rsassa-pss-sha256",
            "sig": "o0BsPCOd190HDu4/iGs6f/zRh7tVCeysZHPizCrR2D9ZiepMszACAuCQeh3Q4CO4SVQpsfIm9Qq0AaGmGvfmHljGurq7iHNrpzEWSIPRaQoPQu1W6rE3v9l5KVgrnmtmf3Ae2L2mZvUBGAbcnRuSqk/pyU8AP9DYHgccEeBJbOiILQAkKVApHeYB+IRwXhTkF9wdO6tGzByiW6yl32zpow9C4fROdrISDhCpTM3xGVOZlx2VtjlVW7YdnEVMQ/6+vOReKv0nnonNjqb44JUrwUvxqeGIQJefgAAwxSmIsOicdXhLHJvp5/0R+bYpvaMRGHoulNYQvZEApHiJCWKBqw=="
        }
    ],
    "signed":
    {
        "_type": "Offline-Snapshot",
        "meta":
        {
            "EMEA-standard.json":
            {
                "hashes":
                {
                    "sha256": "518b46a1c5e4e3e8954123d51ddbdd1f0806995cfeef28a4b29fec53e15d89a4"
                },
                "length": 2170,
                "version": 5
            },
            "EMEA-premium.json":
            {
                "hashes":
                {
                    "sha256": "cb1c12007f2b637de3ba0fbd16f141a72c0d6fe4aa715146ce5fe918c7c0688c"
                },
                "length": 3281,
                "version": 3
            },
        },
        "expires": "2021-11-21T15:38:10Z",
        "version": 18
    }
}
```

The device will reject any version of either of those files not listed in the Snapshot. It will also reject any offline updates after 2021-11-21T15:38:10Z. But note that this doesn't mean that EMEA-standard.json version 5 and EMEA-premium.json version 3 stop being valid on that date. For example, suppose the device already has a valid version 21 of the Offline-update Snapshot metadata, instead of 18 as in the example (which might have been received from an OTA update or from another offline update). Version 21 indicates that the latest version of EMEA-standard.json is still 5, but the latest version of EMEA-premium.json is now 4. An offline update containing version 5 of EMEA-standard.json will still be valid, even if it has an outdated Offline-update Snapshot metadata file.

#### metadata/director/5.root.json

This is identical to existing root metadata files, apart from the added roles and keys.

```
{
    "signatures":
    [
        {
            "keyid": "e32270db69268abb6b709266679a065a23cfd4351d9cda63b5537195dfbab14d",
            "method": "rsassa-pss-sha256",
            "sig": "IaaPrZj2qkd+sHBW4l6Z+b4U7FcNe/Q6G3mo9E+SfHUFEclzcvxIhIPd2i6BYKDcEw39mMXAAJ8CZbTkFeUG+2qG8fN7dcCsHM++UVmeBYCythfa+LqQ66JXs4HZ5QBTDr2CZO/mWXE4qA+7HXLACrhF+B8li85wUyx2hnUEJp/n2uaftXdZePAgVGb2fffZFes6MICLJlZJhwnU3czJPVCmCawLYpAyWdjzKFnVWyTJhO+EhS7l4d2z9GZUe7CRsTQTIIMgggQgdWk8FxopmOs7SdvlSaRVMMrV8nwhkgw0B1viWz8IReVRiU+PmOMAXVaHsc95t1NOa678FcfNqQ=="
        }
    ],
    "signed":
    {
        "_type": "Root",
        "keys":
        {
            "e32270db69268abb6b709266679a065a23cfd4351d9cda63b5537195dfbab14d":
            {
                "keyval":
                {
                    "public": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAp4H7759Fi8dLXOoHPmZh\nZCFg/HiGkajFCY+LCcB6UJ/A+3fjEZu8MCKLKYrG6GkJOJT+h7Fyeu+00wZ0O64N\nWLPRFtVK3rhN/Z3mMtDlpmrKs5hFBBn6ZoVrhnckRgV1hpXES0ntfx7z2Kw0qJy2\nFn1QmjEhj5mPKB0RqhoP4AwpVrqIirXb8b22u1jKWN7HdHnVydZPYfpijXMhNBm7\n+UzHcZzz71iJErO9xGxuRE73ybdUzqti9UOYGLTK9gK9aw3o12TA2EX0TQ9PewBH\nBiiA5W3Zd2PCXYRYCdwmGUabZiLQn/3AofMr8b2Et/lHugbf5KWaIw1x78ss6Fj9\nUwIDAQAB\n-----END PUBLIC KEY-----\n"
                },
                "keytype": "RSA"
            },
            "d31bdd6fe24de1d0e865ef924ea2d23724721d4b9f338d2a93379d14aa1e953f":
            {
                "keyval":
                {
                    "public": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAj0FzYmGuGq4aAWPYNBzM\nLlY49tuf6W84eyvaWBooOx+nMxkkQoocF2zJfVOT9tNJbFk+r/Mu3COX2GSxuCtQ\nzQWetYhTWBajPy7i1OsHeeVrbyYrR3ZqZuVFuR3gC0XBmpkWZjmJf6IIzVAepKYM\nOlm1a6eKBXJU++XK0k8SEKVowqdg9IzjboPWa2gXP9vj+rFmnFCWRF6Uc2h665UZ\nv+x6a2pBQJze7AsEZeBiP0jz97gq/9yRLVAxkPnuQLNX+BOg4yFL6h9rVYK8eCit\nU6OotLZnsL/dGNjFwfl6SM6Utkc/txvAcGt8s/ZQH8th1nUK72leMvDT0YCS9goe\nEQIDAQAB\n-----END PUBLIC KEY-----\n"
                },
                "keytype": "RSA"
            },
            "741838196f58d04e9cf3c6dec8b5b6546cfe19124f637c5e31c870a71a2ec235":
            {
                "keyval":
                {
                    "public": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3Prl9CSGAcEIXCZ+NMq5\nvs+0ZHwDDH8pKgAerUKc4Ux7Rv5zVwRKB1CSfBUdDgkfEZWHtg4p+JdV2BNR89U6\nN43eZB5PnrVTmy5yfQff9Njq2r4SYx+mYBMxuBT+nS+WGAXv6eYlwztKvW3zy8ZC\n2Rj2QNAmvO/cPFRcZp55V/Zy0gJuIUr4mUZyt+lm91Qn5maCZrKJT9lvD6aYMLhe\nIDYGEhuTy8rkDScPOQ6Z2UQMKB1hMiVwisSDlTvZlihNoXFL4QKjW5asUBNI13dQ\nByQ1eLyj/ge7BHost1/OClxNMoacqun6SmjnJRiq8uPAxZgjpjTst+tKOOWxPxYJ\n7wIDAQAB\n-----END PUBLIC KEY-----\n"
                },
                "keytype": "RSA"
            },
            "fdb068e00dcd7fa7f9c2b51fb992a5b697c09e11ba1be2070d0f8337f45abda3":
            {
                "keyval":
                {
                    "public": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0oaOrQH/fEPQgucIVAgI\nCnzBB1qpGzCBQvonDKGFixIosT/VVzSMeUl8qB6IiuCajDO4uZf1VU9SYuK6ZZfK\nwBXFBllrxAuAEnUOD7dbsrMIFDBB5FML+Gl14+pK+UGfU2wyy0f8V0ipWcvLLTio\nSp1nrEUTaijblF3ghqDhxdBguUPOwpDJRyEa3z+xO+5s6XejRalHZo764I7eDMNl\nhzamK0v7RJB6bd2kVdooT+CJCFW2olB0pG8uXIfI0QE3KfQRdACzadU+UO7gQJSw\nt+kQWfmFcnvy8H8vVF/jxT2QNl73ij40tSFjxy1WJBbcMiS5ueRUazAuAo4z+rzR\nfwIDAQAB\n-----END PUBLIC KEY-----\n"
                },
                "keytype": "RSA"
            },
            "5b2feb3184f3e566c9935230e7af3cb99f4669edcd50d0755fc1bb28fb66959d":
            {
                "keyval":
                {
                    "public": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0oaOrQH/fEPQgucIVAgI\nCnzBB1qpGzCBQvonDKGFixIosT/VVzSMeUl8qB6IiuCajDO4uZf1VU9SYuK6ZZfK\nwBXFBllrxAuAEnUOD7dbsrMIFDBB5FML+Gl14+pK+UGfU2wyy0f8V0ipWcvLLTio\nSp1nrEUTaijblF3ghqDhxdBguUPOwpDJRyEa3z+xO+5s6XejRalHZo764I7eDMNl\nhzamK0v7RJB6bd2kVdooT+CJCFW2olB0pG8uXIfI0QE3KfQRdACzadU+UO7gQJSw\nt+kQWfmFcnvy8H8vVF/jxT2QNl73ij40tSFjxy1WJBbcMiS5ueRUazAuAo4z+rzR\nfwIDAQAB\n-----END PUBLIC KEY-----\n"
                },
                "keytype": "RSA"
            }
        },
        "roles":
        {
            "timestamp":
            {
                "keyids":
                [
                    "fdb068e00dcd7fa7f9c2b51fb992a5b697c09e11ba1be2070d0f8337f45abda3"
                ],
                "threshold": 1
            },
            "targets":
            {
                "keyids":
                [
                    "741838196f58d04e9cf3c6dec8b5b6546cfe19124f637c5e31c870a71a2ec235"
                ],
                "threshold": 1
            },
            "Offline-update-targets":
            {
                "keyids":
                [
                    "5b2feb3184f3e566c9935230e7af3cb99f4669edcd50d0755fc1bb28fb66959d"
                ],
                "threshold": 1
            },
            "Offline-update-snapshot":
            {
                "keyids":
                [
                    "5b2feb3184f3e566c9935230e7af3cb99f4669edcd50d0755fc1bb28fb66959d"
                ],
                "threshold": 1
            },
            "snapshot":
            {
                "keyids":
                [
                    "d31bdd6fe24de1d0e865ef924ea2d23724721d4b9f338d2a93379d14aa1e953f"
                ],
                "threshold": 1
            },
            "root":
            {
                "keyids":
                [
                    "e32270db69268abb6b709266679a065a23cfd4351d9cda63b5537195dfbab14d"
                ],
                "threshold": 1
            }
        },
        "version": 5,
        "expires": "2022-04-30T12:04:47Z"
    }
}
```

## Deployment Considerations

### Conditions for Offline-update acceptance

PURE-2 does not specify when offline updates should be accepted by devices; this is left to the discretion of implementors. For example, an implementation might allow their diagnostic tool to start the Uptane client in a special mode that permits offline updates, only checking the well-known location for Offline-update metadata under that condition. If the only desired use for offline updates is during factory provisioning, an implementation might choose to disable offline updates as soon as the device registers its ECU keys with the inventory database for the first time.

In general, we recommend being conservative and careful about the scenarios in which offline updates are accepted, because of the risk that an attacker could find a way to exploit the well-known location and install an undesirable (but not-yet-expired) offline update.

### Preparing an ECU for PURE-2

The prerequisites for PURE-2 updates are similar to the prerequisites for normal Uptane updates, except that the ECU does not need to have an ECU key yet. This follows from the fact that no ECU manifests or vehicle version reports are created during an offline update, and is useful in factory programming use cases, where ECUs may not yet have their private key material provisioned in before receiving a software update.

### Partial-verification ECUs and PURE-2

It is possible for a partial-verification ECU to perform PURE-2 offline updates. Like partial verification for normal Uptane updates, a partial-verification ECU MAY verify only the offline update Targets metadata file it receives from the primary.

### Metadata expiry times

For an offline update to be installed, both the Offline-update Snapshot metadata file and the Offline-update Targets metadata file being being processed MUST be within their validity period.

Therefore, choosing the expiry times for these files is an important security consideration, and an important usability consideration. Making the right choice will depend heavily on the implementation and what purpose offline updates are serving. For example, if offline updates are designed to be used by professional technicians who can be expected to frequently download updated images, expiry times could safely be quite short--say, every 2 weeks for the Offline-update Snapshot metadata. If the offline updates need to be more durable, for example if they're to be directly distributed to end users on storage media, and you can't count on users updating promptly, you might choose to have significantly longer expiry times--perhaps up to a year or more.

## Security Analysis

This proposal does not detract from existing security guarantees because it does not modify the normal Uptane verification procedures for online updates.

However, offline updates under PURE-2 do offer somewhat different security guarantees than online updates.

### Alternatives considered

In developing this PURE, the possibility of simply using Image repository metadata for offline updates was considered. The main argument in favor of taking this approach is that the Image repository's intended purpose is to attest _validity_ of firmware to be installed, and that in cases where offline updates are permitted/desired, the person applying the update will have the knowledge and ability to determine which specific targets to install. (This would effectively mean that offline updates would just use The Update Framework.)

This approach is certainly possible, and indeed can be implemented without an extension to Uptane. It also represents an improvement over the status quo of many real-world implementations. However, PURE-2 introduces important additional protections.

- A TUF-only approach does not offer any protection against rollback attacks, unless the Image repository is regularly pruned of older images. Because a key element of Uptane is the signed Vehicle Version Manifest, Uptane installations often keep older, potentially-exploitable firmware images in their image repositories as long as there are still some extant devices that are still running the old image. Thus, a more robust mechanism is desirable to protect against rollbacks.
- With PURE-2, it is possible to fine-tune the expiry times of offline update metadata. A TUF-only approach means that a downloaded offline update only remains valid as long as the Image repository Targets metadata remains valid, and many Uptane implementations choose short expiry times. Expressing the expiry of a bundle of images to install independently while maintaining the ability to get newer Targets metadata out of band is a significant ergonomic improvement without necessitating the major security concession of choosing longer Targets metadata expiry times.
- Directing/specifying a specific bundle of images to be installed is a very important safety, security, and regulatory concern in multi-ECU systems; using a TUF-only approach relies on the person installing the updates to make correct compatibility choices.

### Restricting side-channel updates

Any offline update scheme must deal with the fact that the Uptane server will not have perfectly up-to-date information on the firmware versions of devices in the field. Currently, Uptane implementors are left without guidance on how offline updates should be implemented, and the result of this gap is a patchwork of security measures (or non-measures). It is still relatively common for vehicle ECUs to have a flashing mode secured by nothing more than the inconvenience of physically accessing a particular jumper, and signature checking when flashing firmware via diagnostic tool is still quite uncommon. The practical upshot of this is that operators of Uptane systems must consider the possibility that any arbitrary software could be installed out-of-band.

PURE-2 limits the scope of what may have been installed on a device. If the Uptane client on the device supports PURE-2, it is much more feasible to completely lock down alternate methods of flashing, such as removing JTAG headers or removing alternate low-level flashing routines from firmware. Because the Offline Update role signs all metadata authorizing updates outside of the normal online process, the scope of possibility of what may be installed in the field can be greatly reduced. Furthermore, because the offline updates are being facilitated by the same client and within the same framework as the OTA updates, it becomes much easier to maintain an accurate and complete history of software updates on the device.

### Revocation of metadata

Like all Uptane metadata, Offline-update metadata can be revoked both implicitly (by allowing it to expire) and explicitly (by issuing new metadata superseding and invalidating the old). Explicit revocations will reach devices when they check for an online update, because they always download the latest version of the Offline-update Snapshot metadata during an update check. However, if the device does not check for updates for a long time, it will not be aware of newer metadata that includes the revocation.

### Validation and updating of metadata

An Offline-update bundle (i.e. all files included in the well-known location) also includes metadata for other Uptane roles:

- The root role from both Director and Image
- The snapshot role from Image
- All targets roles from Image

During an offline update, the device will only accept the metadata being offered if it is newer than the metadata the device already has. Note that this does not imply that an offline update will fail if the device has a newer version of some metadata than the version on offer. For an Offline-update Targets metadata file to be accepted by the device, the following conditions MUST be met:

- The file itself has not expired
- The latest valid Offline-update Snapshot metadata file the device possesses has not expired
- The file is signed by the threshold of unique keys listed in the latest Director root metadata the device possesses for the Offline-update Targets role
- The file is listed in the latest Offline-update Snapshot metadata file the device possesses, and matches the version number listed in that Snapshot metadata
- All targets that appear in the file are also present in the latest version of Image repository Targets metadata the device possesses

As a consequence, an individual Offline-update Targets metadata file will be accepted until it's invalidated by one of the following methods:

- It expires
- Director's Offline-update Snapshot metadata expires
- A new version of Offline-update Snapshot metadata is issued with the file removed or bumped to a later version, AND that new version reaches the device by some means (either online or offline update)
- The Offline-update targets signing keys are changed in Director root metadata AND the new metadata reaches the device by some means (either online or offline update)
- An individual target listed in the file is removed from the Image repository Targets metadata AND the new metadata reaches the device by some means (either online or offline update)

## Backwards Compatibility

This should be fully backwards-compatible with all previous Uptane versions. The only change to existing flows or metadata files is that two additional roles will appear in Director root metadata (Offline-update Snapshot and Offline-update Targets), and those roles will simply be ignored by Uptane clients that aren't aware of PURE-2.

## Copyright

This document has been placed in the public domain.
