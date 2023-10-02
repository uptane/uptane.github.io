---
sidebar_position: 2
title: "Uptane Reference Implementation POUF"
---

- POUF: 1
- Title: Uptane Reference Implementation POUF
- Version: 1
- Last-Modified: 17-07-2019
- Author: Marina Moore
- Status: Draft
- Uptane Version Implemented: 1.0.0
- Created: 14-03-2019

## Abstract

This document describes the Protocols, Operations, Usage, and Formats (POUF) for the Uptane reference implementation written in Python by NYU. POUFs are designed to allow interoperable Uptane implementations. Any implementer who wishes to interoperate with the reference implementation should implement the features and data structures described in this document.

**Note that this implementation is not meant to be used in practice**. It is a guide for implementers to understand how the system should function.

The reference implementation includes all required and most optional features as a reference for others looking to implement Uptane.

## Protocols

This POUF uses ASN.1/DER encoding for transmitting files. The details of the file formats are described in {Formats} in ASN.1 notation. Note that improper decoding of ASN.1 may lead to arbitrary code execution or Denial-of-Service attacks. Any implementers of this POUF should be aware of these attacks and use a decoder which has been subject to appropriate security analysis.

The Primary ECU communicates with the Director repository, Image repository, and time server using HTTP POST requests over [XML-RPC](http://xmlrpc.scripting.com/spec.html). In this communication, the Primary ECU acts as an XML-RPC client and the Director repository, Image repository, and time server act as XML-RPC servers. Secondary ECUs communicate with a Primary ECU using HTTP POST requests over XML-RPC. The Primary acts as the XML-RPC server and the Secondary as an XML-RPC client. The requests supported by all XML-RPC servers in this POUF are described in the Message Handler Table.

All XML-RPC traffic supported in this POUF is transmitted over TCP/IP and does not support CAN or other network types. For more information about internal vehicle communication, see the [Deployment Best Practices](https://uptane.github.io/deployment-considerations/index.html) document.

## Message Handler Table

The following message handlers must be implemented. These message handlers are used during the update process described in the Uptane Standard. The format of messages in the Data and Response columns are described in {Formats}. The messages are sent using XML-RPC with the function names in the Request column and data from the Data column.

| Request                      | Sender        | Receiver            | Data                                                                                | Response    | Specification Reference                                                               |
| ---------------------------- | ------------- | ------------------- | ----------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------- |
| submit_vehicle_manifest      | Primary ECU   | Director Repository | VehicleVersionManifest                                                              |             | <https://uptane.github.io/uptane-standard/uptane-standard.html#director_repository>   |
| register_ecu_serial          | Primary ECU   | Director Repository | ecu_serial Identifier, ecu_public_key PublicKey, vin Identifier, is_primary BOOLEAN |
| get_signed_time              | Primary ECU   | Timeserver          | SequenceOfTokens                                                                    | CurrentTime |
| submit_ecu_manifest          | Secondary ECU | Primary ECU         | vin Identifier, ecu_serial Identifier, nonce, ECUVersionManifestSigned              |             | <https://uptane.github.io/uptane-standard/uptane-standard.html#create_version_report> |
| register_new_secondary       | Secondary ECU | Primary ECU         | ecu_serial Identifier                                                               |             |
| get_time_attestation_for_ecu | Secondary ECU | Primary ECU         | ecu_serial Identifier                                                               |             | <https://uptane.github.io/uptane-standard/uptane-standard.html#send_time_primary>     |
| get_image                    | Secondary ECU | Primary ECU         | ecu_serial Identifier                                                               |             | <https://uptane.github.io/uptane-standard/uptane-standard.html#send_images_primary>   |
| get_metadata                 | Secondary ECU | Primary ECU         | ecu_serial Identifier, is_partial_verification BOOLEAN                              |             | <https://uptane.github.io/uptane-standard/uptane-standard.html#send_metadata_primary> |

In addition to the above message handlers, the Director repository hosts the RootMetadata, TargetsMetadata, SnapshotMetadata, and TimestampMetadata using XML-RPC. The filenames for these files will be

<role>.der where role is the associated role (Root, Targets, Snapshot, or Timestamp) in lowercase. The url of the hosted directory will be loaded onto ECUs at the time of manufacture.</role>

The Image repository hosts the RootMetadata, TargetsMetadata, SnapshotMetadata, TimestampMetadata, and images. The filenames for the metadata files are

<role>.der where role is the associated role (Root, Targets, Snapshot, or Timestamp) in lowercase. The filenames for the images are specified in the custom field of Targets metadata on the Image repository as described in the <a href="https://uptane.github.io/uptane-standard/uptane-standard.html#targets_images_meta">Uptane Standard</a>. The url of the hosted directory will be loaded onto Primary ECUs and full verification Secondary ECUs at the time of manufacture.</role>

## Operations

Of course, as the system implements Uptane, the reference implementation follows the requirements of the Uptane Standard. In addition to the required features, the reference implementation follows most of the SHOULDs of the standard in order to demonstrate how Uptane is expected to operate. The implementation details and rationale behind any SHOULDs and MAYs that are implemented are described in this section.

The Primary ECU in this POUF is also the ECU that communicates with the Director repository, Image repository, and time server. This simplifies the reference implementation by condensing all the requirements for external communication and initial validation into a single ECU.

To access a reliable current time as needed for the [In Vehicle Implementation Requirements](https://uptane.github.io/uptane-standard/uptane-standard.html#in-vehicle-implementation-requirements), ECUs in this POUF use a time server that produces a time attestation for each update cycle. The Primary ECU sends the time server nonce tokens from each ECU, then the time server returns a time attestation that contains a signed the current time with all the tokens, as described in the [Deployment Best Practices](https://uptane.github.io/deployment-considerations/index.html) document. The ASN.1 details of the time server are listed in {Formats}. The time server is used by the reference implementation as a self contained way to ensure secure access to the current time.

Additionally, this POUF supports custom delegated Targets roles and terminating delegations, features described as optional in the [Standard](https://uptane.github.io/uptane-standard/uptane-standard.html#targets_role_delegations). As explained in the Standard, terminating delegations are not used by default. To use custom roles, the Targets role on the Image repository sets up a delegation. Delegations used in this POUF must support multi-role delegations, as explained in [TAP 3](https://github.com/theupdateframework/taps/blob/d0818e580c322815a473520f2e8cc5f5eb8df499/tap3.md). In addition, delegation filenames are listed using an enumerated list that supports shell-style [wildcards](https://uptane.github.io/uptane-standard/uptane-standard.html#delegations_meta). In the name of a directory or file the wildcard character '%' may be used to represent multiple characters and '?' may be used to represent a single character. For example, "foo/%.txt" could represent "foo/bar.txt" but not "foo/bar.md". In addition "foo/file-?.txt" could represent 'foo/file-a.txt" but not "foo/file-bar.txt". Wildcards will not be used only for standard alpha-numeric characters. Delegations are supported in the reference implementation to demonstrate how they can be used to establish a chain of trust for specific images.

Public key identifiers use the hash of the key value, encryption algorithm, and verification scheme for a condensed identifier. The format of these identifiers is further described in {Formats}. This POUF supports RSA and ED25519 hashes for public keys. The hashing algorithm must be specified in the signature method.

This POUF supports asymmetric keys and uses the [same keys for encrypting and signing](https://uptane.github.io/uptane-standard/uptane-standard.html#build-time-prerequisite-requirements-for-ecus). Using the same keys allows for a simplified reference implementation and less key management. In particular, each ECU has a private key and registers the associated public key with the Director repository. The ECU will use the private key to sign the vehicle version manifest and the Director repository may use the public key to encrypt images per ECU. In addition, each metadata role has either online or offline private keys that are used on the Director and Image repositories. The public keys associated with these roles are used by the ECUs during validation.

The Image repository and Director repository have public interfaces for communication with ECUs. To make the public interface, the Image and Directory repositories each store metadata in a filesystem that is hosted to form the public interface. These interfaces do not require authentication to read.

The Director repository identifies a vehicle using the vehicle version manifest sent by the Primary ECU to initiate an update. The Director checks the vehicle version manifest as described in the standard, but does not make any additional checks. If ECUs are added to the vehicle, they must be registered with the Director using the register_ecu_serial function described in the [Message Handler Table](#message-handler-table). If other changes are made to ECUs in a vehicle without notifying the Director, we reserve the right to change how the Director reacts to these ECUs. Using the information in the vehicle version manifest, the Director determines what images need to be installed.

This POUF does not support sending vehicle version manifests as [diffs](https://uptane.github.io/uptane-standard/uptane-standard.html#construct_manifest_primary) to simplify the Director implementation. Sending the full manifest requires some additional bandwidth, but allows the Director to more efficiently parse the manifest.

## Metadata

This POUF supports some metadata features that are optional in the Uptane Standard, but are required for an implementation of this POUF. These features are included in the metadata definitions in {Formats}. The details of these features are:

- The metadata version will increment on an update to the metadata.
- Root metadata must support [mappings of roles to lists of URLs as described in TAP 5](https://uptane.github.io/uptane-standard/uptane-standard.html#root_meta).
- Repository mapping metadata will be included using a map file. The format of this file is described in {Formats}. In the mapping metadata, files are expressed using an enumerated list that supports wildcards.
- If images are encrypted per ECU, metadata about encrypted images may be included in the custom field of Targets metadata as described in the [Standard](https://uptane.github.io/uptane-standard/uptane-standard.html#custom-metadata-about-images). The Image repository does not know which ECU will receive the image, so cannot provide an image encrypted per ECU. Therefore, both the Image and Director repositories will contain metadata about the unencrypted image in Targets metadata and metadata about encrypted images will be but in the custom field of Targets metadata from the Director.
- The custom field of Targets metadata on the Director repository must support an [encrypted target field for encrypting images per ECU](https://uptane.github.io/uptane-standard/uptane-standard.html#custom-metadata-about-images). In addition, the custom field will contain a release counter and hardware id from both the Director and Image repositories. This POUF does not support the Director adding a download URL to the custom field of Targets metadata.
- The custom field of Targets metadata on the Director and Image repositories are not compared. This means that the must match functionality described in the [Standard](https://uptane.github.io/uptane-standard/uptane-standard.html#custom-metadata-about-images) is not supported. This is not included for backwards compatibility reasons. A client may choose to compare some fields of Targets metadata, but these checks are not required by this POUF. If all other fields match, the custom metadata from the Director is used.
- Snapshot metadata in this POUF does not include the Root filename or version. These fields are included in implementations that do not use [TAP 5](https://github.com/theupdateframework/taps/blob/01726d203c9b9c029d26f6612069ce3180500d9a/tap5.md#downloading-metadata-and-target-files). Because this POUF implements TAP 5, the Root filename and version do not need to be included in Snapshot metadata.

## Usage

Key management and image generation are not handled by this POUF. The POUF uses online keys for all roles to demonstrate Uptane functionality. This practice is not recommended for Uptane implementers.

## Server Setup

The Uptane Reference Implementation does the following setup before any updates can be installed:

- The Director repository is initialized with the private keys for all roles with online keys. These keys are stored on the Director so they can be used to automatically sign valid metadata. Any offline keys, for example the Root key, should not be stored on the repository.
- An inventory database is initialized on the Director repository. This database contains fields for vehicle manifests, ECU manifests, a mapping that associates vehicles to ECUs, and the ECU public keys. This database is used and updated during the update process.
- ECUs register with the Director repository. Each ECU on a vehicle must register by sending its ECU id and ECU public key to the Director repository. This information from registration is stored in the inventory database.
- The timeserver is initialized with a timeserver private key.
- Each ECU needs to be preloaded with the urls and directory locations of the Director repository and Image repository. In addition, each ECU needs to be loaded with the Image and Director public keys at the time of manufacture. For details about what keys are needed on each ECU, see the {Data Table}.

## Data Table

Each device involved in the update process is expected to have access to certain data. The required devices are expected to have at least the following data:

| Location                           | Data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary ECU                        | ECU private key _Timeserver public key_ Currently installed version _Secondary's Vehicle Version Manifests_ The most recent Root, Timestamp, Targets, and Snapshot metadata (for a new installation, just the known Root metadata) from both the Image and Director repositories _Image repository public key for each metadata role and the associated threshold. These values are available in the current metadata files._ Director repository public key for each metadata role and the associated thresholds. These values are available in the current metadata files. |
| Full verification Secondary ECU    | ECU private key _Timeserver public key_ Currently installed version \* The most recent Root, Timestamp, Targets, and Snapshot metadata (for a new installation, just the known Root metadata) from both the Image and Director repositories                                                                                                                                                                                                                                                                                                                                  |
| Partial verification Secondary ECU | ECU private key _Timeserver public key_ Currently installed version \* Director's Targets metadata public key                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Director Repository                | ECU public keys _Metadata about images_ Inventory database _Online metadata private Director metadata keys_ Metadata signed by offline Director metadata keys                                                                                                                                                                                                                                                                                                                                                                                                                |
| Image Repository                   | ECU public keys _Metadata about images_ Images _Online metadata private image metadata keys_ Metadata signed by offline image metadata keys                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Timeserver                         | Timeserver private key \* Current time                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## Formats

## File formats

Files will be transmitted as described in the Uptane standard and in the {Message Handler Table} using the definitions in this section. These definitions describe what data should be transmitted in each of these messages and how the data will be laid out. The fields of each file should be in the exact order specified here to allow clients and servers to interoperate. Files are encoded in ASN.1/DER and sent over XML-RPC as described in {Protocols}.

At the top of this section are some definitions used throughout the files and for the metadata. After these are descriptions of the metadata and other files.

### Common Definitions

```
RoleType        ::= ENUMERATED {root, targets, snapshot, timestamp}

-- String types.
Filename        ::= VisibleString (SIZE(1..32))
-- No known path separator allowed in a strict filename.
StrictFilename  ::= VisibleString (SIZE(1..32))
                                  (PATTERN "[^/\\]+")
OctetString     ::= OCTET STRING  (SIZE(1..1024))
Paths           ::= SEQUENCE (SIZE(1..8)) OF Path
Path            ::= VisibleString (SIZE(1..32))
                                  (PATTERN "[\w\*\\/]+")
URLs            ::= SEQUENCE OF URL
URL             ::= VisibleString (SIZE(1..1024))
-- A generic identifier for vehicles, Primaries, Secondaries.
Identifier      ::= VisibleString (SIZE(1..32))

Natural         ::= INTEGER (0..MAX)
Positive        ::= INTEGER (1..MAX)
Length          ::= Natural
Threshold       ::= Positive
Version         ::= Natural
-- The date and time in UTC encoded as a UNIX timestamp.
UTCDateTime     ::= Positive

-- Adjust length of SEQUENCE OF to your needs.
Hashes          ::= SEQUENCE (SIZE(1..8)) OF Hash
Hash            ::= SEQUENCE {
  function      HashFunction,
  digest        OctetString
}
HashFunction ::= ENUMERATED {sha224, sha256, sha384, sha512, sha512-224,
                             sha512-256, ...}

-- Adjust length of SEQUENCE OF to your needs.
Keyids          ::= SEQUENCE (SIZE(1..8)) OF Keyid
-- Usually, a hash of a public key.
Keyid           ::= OctetString

-- Adjust length of SEQUENCE OF to your needs.
Signatures      ::= SEQUENCE (SIZE(1..8)) OF Signature
Signature       ::= SEQUENCE {
  keyid         Keyid,
  method        SignatureMethod,
  -- For efficient checking, sign the hash of the message instead of the
  -- message itself.
  hash          Hash,
  -- The signature itself.
  value         OctetString
}
SignatureMethod ::= ENUMERATED {rsassa-pss, ed25519, ...}

-- Adjust length of SEQUENCE OF to your needs.
PublicKeys      ::= SEQUENCE (SIZE(1..8)) OF PublicKey
PublicKey       ::= SEQUENCE {
  publicKeyid     Keyid,
  publicKeyType   PublicKeyType,
  publicKeyValue  OctetString
}
PublicKeyType   ::= ENUMERATED {rsa, ed25519, ...}
```

### Metadata Format

```
Metadata      ::= SEQUENCE {
    signed              Signed,
    numberOfSignatures  Length,
    signatures          Signatures
  }
  Signed        ::= SEQUENCE {
    type        RoleType,
    expires     UTCDateTime,
    version     Positive,
    body        SignedBody
  }
  SignedBody    ::= CHOICE {
    rootMetadata      RootMetadata,
    targetsMetadata   TargetsMetadata,
    snapshotMetadata  SnapshotMetadata,
    timestampMetadata TimestampMetadata
}
```

### Root

```
RootMetadata ::= SEQUENCE {
    numberOfKeys  Length,
    keys          PublicKeys,
    numberOfRoles Length,
    roles         TopLevelRoles,
    ...
  }
  -- Adjust length of SEQUENCE OF to your needs.
  TopLevelRoles ::= SEQUENCE (SIZE(4)) OF TopLevelRole
  TopLevelRole  ::= SEQUENCE {
    role            RoleType,
    -- TAP 5: The URLs pointing to the metadata file for this role.
    numberOfURLs    Length OPTIONAL,
    urls            URLs OPTIONAL,
    numberOfKeyids  Length,
    keyids          Keyids,
    threshold       Threshold,
    ...
}
      -- Adjust length of SEQUENCE OF to your needs.
```

### Snapshot

```
SnapshotMetadata ::= SEQUENCE {
    numberOfSnapshotMetadataFiles Length,
    snapshotMetadataFiles         SnapshotMetadataFiles
  }
  SnapshotMetadataFiles ::= SEQUENCE (SIZE(1..128)) OF SnapshotMetadataFile
  SnapshotMetadataFile ::= SEQUENCE {
    filename  StrictFilename,
    version   Version,
    ...
}
```

### Targets

```
TargetsMetadata ::= SEQUENCE {
    -- Allowed to have no targets at all.
    numberOfTargets Natural,
    -- Metadata about unencrypted images on a repository.
    targets         Targets,
    -- Delegations are optional.
    delegations     TargetsDelegations OPTIONAL,
    ...
  }

  -- Adjust length of SEQUENCE OF to your needs.
  Targets           ::= SEQUENCE (SIZE(1..128)) OF TargetAndCustom
  TargetAndCustom   ::= SEQUENCE {
    -- The filename, length, and hashes of unencrypted images on a repository.
    target  Target,
    -- This attribute is used to specify additional information, such as which
    -- images should be installed by which ECUs, and metadata about encrypted
    -- images.
    custom  Custom OPTIONAL
  }
  Target ::= SEQUENCE {
    filename        Filename,
    length          Length,
    numberOfHashes  Length,
    hashes          Hashes
  }
  Custom ::= SEQUENCE {
    -- NOTE: The following attributes are specified by both the Image and
    -- Director repositories.
    -- The release counter is used to prevent rollback attacks on images when
    -- only the Director repository is compromised.
    -- Every ECU should check that the release counter of its latest image is
    -- greater than or equal to the release counter of its previous image.
    releaseCounter        Natural OPTIONAL,
    -- The hardware identifier is used to prevent the Director repository,
    -- when it is compromised, from choosing images for an ECU that were not
    -- meant for it.
    -- Every ECU should check that the hardware ID of its latest image matches
    -- its hardware ID.
    -- An OEM MAY define other types of information to further restrict the
    -- choices that can be made by a compromised Director repository.
    hardwareIdentifier    Identifier OPTIONAL,
    -- NOTE: The following attributes are specified only by the Director
    -- repository.
    -- The ECU identifier specifies information, e.g., serial numbers, that the
    -- Director uses to point ECUs as to which images they should install.
    -- Every ECU should check that the ECU ID of its latest image matches its
    -- own ECU ID.
    ecuIdentifier         Identifier OPTIONAL,
    -- This attribute MAY be used by the Director to encrypt images per ECU.
    encryptedTarget       Target OPTIONAL,
    -- This attribute MAY be used if ECU keys are asymmetric, and a per-image
    -- symmetric encryption key is desired for faster decryption of images.
    -- In that case, the Director would use the asymmetric ECU key to encrypt
    -- this symmetric key.
    encryptedSymmetricKey EncryptedSymmetricKey OPTIONAL,
    ...
  }
  EncryptedSymmetricKey ::= SEQUENCE {
    -- This is the symmetric key type.
    encryptedSymmetricKeyType   EncryptedSymmetricKeyType,
    -- This is the symmetric key encrypted using the asymmetric ECU key.
    encryptedSymmetricKeyValue  OctetString
  }
  EncryptedSymmetricKeyType ::= ENUMERATED {aes128, aes192, aes256, ...}

  -- https://github.com/theupdateframework/taps/blob/master/tap3.md
  TargetsDelegations  ::= SEQUENCE {
    -- The public keys of all delegatees.
    numberOfKeys        Length,
    keys                PublicKeys,
    -- The role name, filename, public keys, and threshold of a delegatee.
    numberOfDelegations Length,
    -- A list of paths to roles, listed in order of priority.
    delegations         PrioritizedPathsToRoles
  }

  -- Adjust length of SEQUENCE OF to your needs.
  PrioritizedPathsToRoles ::= SEQUENCE (SIZE(1..8)) OF PathsToRoles
  PathsToRoles ::= SEQUENCE {
    -- A list of image/target paths entrusted to these roles.
    numberOfPaths   Length,
    paths           Paths,
    -- A list of roles required to sign the same metadata about the matching
    -- targets/images.
    numberOfRoles   Length,
    roles           MultiRoles,
    -- Whether or not this delegation is terminating.
    terminating     BOOLEAN DEFAULT FALSE
  }

  -- Adjust length of SEQUENCE OF to your needs.
  MultiRoles ::= SEQUENCE (SIZE(1..8)) OF MultiRole
  MultiRole ::= SEQUENCE {
    -- The rolename (e.g., "supplierA-dev").
    -- No known path separator allowed in a rolename.
    rolename        StrictFilename,
    -- The public keys used by this role.
    numberOfKeyids  Length,
    keyids          Keyids,
    -- The threshold number of these keys.
    threshold       Threshold
}
```

### Delegated targets

Delegated targets use the same ASN.1 definitions as targets.

### Timestamp

```
TimestampMetadata ::= SEQUENCE {
    filename        Filename,
    version         Version,
    length          Length,
    numberOfHashes  Length,
    hashes          Hashes,
    ...
}
```

### Map File

```
-- https://github.com/theupdateframework/taps/blob/master/tap4.md
  MapFile ::= SEQUENCE {
    -- A list of repositories.
    numberOfRepositories  Length,
    repositories          Repositories,
    --A list of mapping of images to repositories.
    numberOfMappings      Length,
    mappings              Mappings
  }

  -- Adjust length of SEQUENCE OF to your needs.
  Repositories    ::= SEQUENCE (SIZE(2)) OF Repository
  Repository      ::= SEQUENCE {
    -- A shorthand name for the repository, which also specifies the name of the
    -- directory on the client which contains previous and latest metadata.
    name              RepositoryName,
    -- A list of servers where metadata and targets may be downloaded from.
    numberOfServers   Length,
    servers           URLs,
    ...
  }
  -- Adjust length of SEQUENCE OF to your needs.
  RepositoryNames ::= SEQUENCE (SIZE(2)) OF RepositoryName
  RepositoryName  ::= StrictFilename

  -- Adjust length of SEQUENCE OF to your needs.
  Mappings ::= SEQUENCE (SIZE(1)) OF Mapping
  Mapping  ::= SEQUENCE {
    -- The list of targets delegated to the following repositories.
    numberOfPaths         Length,
    paths                 Paths,
    -- The repositories which MUST all sign the preceding targets.
    numberOfRepositories  Length,
    repositories          RepositoryNames,
    -- Whether or not this delegation is terminating.
    terminating           BOOLEAN DEFAULT FALSE,
    ...
}
```

### ECU Metadata and Vehicle Version Manifest

```
-- What a Primary sends the Director repository.
  VehicleVersionManifest ::= SEQUENCE {
    -- The signed portion of the manifest.
    signed    VehicleVersionManifestSigned,
    -- The signature on the hash of the signed portion.
    numberOfSignatures  Length,
    signatures          Signatures
  }
  VehicleVersionManifestSigned ::= SEQUENCE {
    -- A unique identifier for the vehicle.
    vehicleIdentifier           Identifier,
    -- A unique identifier for the Primary sending this manifest.
    primaryIdentifier           Identifier,
    numberOfECUVersionManifests Length,
    -- An ECU version manifest per Secondary.
    ecuVersionManifests         ECUVersionManifests,
    -- A message about a detected security attack, if any.
    securityAttack  VisibleString (SIZE(1..1024)) OPTIONAL,
    ...
  }
  -- Adjust length of SEQUENCE OF to your needs.
  ECUVersionManifests ::= SEQUENCE (SIZE(1..256)) OF ECUVersionManifest

  -- What a Secondary sends its Primary after installation.
  VersionReport ::= SEQUENCE {
    -- Token for the time server.
    tokenForTimeServer Token,
    -- The ECU version manifest for the Director.
    ecuVersionManifest ECUVersionManifest,
    ...
  }
  ECUVersionManifest ::= SEQUENCE {
    -- The signed portion of the manifest.
    signed      ECUVersionManifestSigned,
    -- The signature on the hash of the signed portion.
    numberOfSignatures  Length,
    signatures          Signatures
  }
  ECUVersionManifestSigned ::= SEQUENCE {
    -- A unique identifier for the ECU.
    ecuIdentifier   Identifier,
    -- The previous time seen on the time server.
    previousTime    UTCDateTime,
    -- The latest known time seen on the time server.
    currentTime     UTCDateTime,
    -- A message about a detected security attack, if any.
    securityAttack  VisibleString (SIZE(1..1024)) OPTIONAL,
    -- Metadata about the installed image.
    installedImage  Target,
    ...
  }
```

### Time Server

```
-- What a Primary sends the time server: a token from each of its Secondaries.
  SequenceOfTokens ::= SEQUENCE {
    numberOfTokens  Length,
    tokens          Tokens
  }
  -- Adjust length of SEQUENCE OF to your needs.
  Tokens  ::= SEQUENCE (SIZE(1..1024)) OF Token
  Token   ::= INTEGER

  -- What the time server sends in response.
  CurrentTime   ::= SEQUENCE {
    signed              TokensAndTimestamp,
    numberOfSignatures  Length,
    signatures          Signatures
  }
  TokensAndTimestamp ::= SEQUENCE {
    numberOfTokens  Length,
    tokens          Tokens,
    timestamp       UTCDateTime,
    ...
}
```
