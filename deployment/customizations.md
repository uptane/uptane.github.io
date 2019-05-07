---
layout: default
css_id: customizations
---

# Customizing Uptane

In this section, we discuss how OEMs and suppliers may customize Uptane to meet special requirements.

## Scope of an update

An image need not necessarily update all code and data on an ECU. The OEM and its suppliers MAY use an image to arbitrarily update code and data on an ECU. For example, an image MAY be used to update only some code but no data, all code and no data, no code and some data, or no code and all data, or all code and data.

Examples of code include the bootloader, shared libraries, and the application, which provides the actual functions of the ECU.

Examples of data include setup or initialization data, such as engine parameters, application data, such as maps, and user data, such as an address book or system logs.

### TODO Insert Figure 1 (custom_1_code_data_image.jpg)

## Delta update strategies

In order to save bandwidth costs, Uptane allows an OEM to deliver updates as
delta images. A delta image update contains only the code and / or data that differs from the previous image installed by the ECU. In order to use delta images, the OEM SHOULD make the following changes.

The OEM SHOULD add two types of information to the custom targets metadata used by the director repository: (1) the algorithm used to apply a delta image, and (2) the targets metadata about the delta image. This is done so that ECUs know how to apply and verify the delta image. The director repository SHOULD also be modified to produce delta images, because Uptane does not require it to compute deltas by default. The director repository can use the vehicle version manifest and dependency resolution to determine the differences between the previous and latest images. If desired, then the director repository MAY encrypt the delta image.

As these images are produced on demand by the director repository, primaries SHOULD download all delta and / or encrypted images only from that source. After full verification of metadata, primaries SHOULD also check whether delta images match the targets metadata from the director repository, just as they check whether encrypted images match the targets metadata from the director repository when using non-delta images.

Finally, in order to install a delta image, an ECU SHOULD take one of the actions described in Table 1, depending on whether or not the delta image has been encrypted, and if the ECU has additional storage. Note that the OEM MAY use stream ciphers in order to enable on-the-fly decryption by ECUs that have no additional storage space. In this case, the ECU would decrypt the delta image as it is downloaded, then follow the remainder of the steps in the third box below.

### TODO Recreate and insert Table D.2a from google doc and label it as Table 1.


### Dynamic delta updates vs. precomputed delta updates

There are two options when computing delta updates. Delta updates can be computed dynamically for each ECU during the installation process (dynamic delta updates), or possible delta images can be precomputed before installation begins (precomputed delta updates). The process for describing both types of updates appears below in the subsection on custom installation instructions.

### TODO Insert link to the subsection Custom installation instructions below in the last sentence above.

Dynamic delta updates reduce the amount of data sent on each update, while allowing for fine grained control of what version is placed on each ECU.  By using the custom field of the targets metadata, the director can be configured to specify a particular version of software for every ECU. Dynamic delta updates allow the director to do file granular resource tracking, which can save bandwidth by only transmitting the delta of the image.

To send dynamic delta updates, the director would compute the delta as described
earlier in this section. The computed images would be made available to the primary ECU.

One drawback of dynamic delta updates is that if many ECUs are updating from the same version, computing the delta of each would result in duplicate computation that could be time consuming or use up a lot of memory. A possible solution to this is to use precomputed delta updates.

To send precomputed delta updates the director precomputes various probable diffs and makes these available as images. The director then specifies which precomputed delta image to send to each ECU by using the custom field of targets metadata, as described below. Precomputing the delta images has the added advantage of allowing these images to be stored on the image repository, which offers additional security against a director compromise.

## Uptane in conjunction with other protocols
Implementers MAY use Uptane in conjunction with other protocols already being used
to send updates to the vehicle.

For example, implementers MAY use [SSL / TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) to encrypt the connection between
primaries and the image and director repositories as well as the time server.

For example, implementers MAY use [OMA Device Management](https://en.wikipedia.org/wiki/OMA_Device_Management) (OMA-DM) to send Uptane
metadata, images, and other messages to primaries.

For example, implementers MAY use [Unified Diagnostic Services](https://en.wikipedia.org/wiki/Unified_Diagnostic_Services) (UDS) to transport Uptane metadata, images, and other messages between primaries and secondaries.

Any system being used to transport images to ECUs needs to modified only to also transport Uptane metadata, and other messages. Note that Uptane does not require network traffic between the director and image repositories and primaries, as well as between primaries and secondaries, to be authenticated.

However, in order for an implementation to be Uptane-compliant, no ECU can cause another ECU to install an image without performing either full or partial verification of metadata. This is done in order to prevent attackers from being able to bypass Uptane, and thus execute arbitrary software attacks that way. Thus, in an Uptane-compliant implementation, an ECU performs either full or partial verification of metadata and images before installing any image, regardless of how the metadata and images were transmitted to the ECU.

## Multiple primaries

We expect that the most common deployment configuration of Uptane on vehicles would feature one primary per vehicle. However, we observe that there are cases where it may be useful to have multiple, active primaries in a vehicle. For example, this setup provides redundancy when some, but not all, primaries could fail permanently. The OEM MAY use this setup to design a failover system where one primary takes over when another fails. If so, then the OEM SHOULD take note of the following considerations, in order to prevent safety issues.

It is highly RECOMMENDED that there is a single, active primary in any given vehicle. This is because using multiple, active primaries to update secondaries can lead to problems in consistency, especially when different primaries try to update the same secondaries. If an implementation is not careful, race conditions could cause secondaries to install an inconsistent set of updates (for example, some ECUs would have installed some updates from one primary, whereas other ECUs would have installed some updates from another primary). This can cause ECUs to fail to interoperate.

If multiple primaries are active in the vehicle at the same time, then each primary SHOULD control a mutually exclusive set of secondaries, so that each secondary is controlled by one primary.

## Atomic installation of a bundle of images

An OEM may wish to require atomic installation of a bundle of images, which means that either all updates in a bundle are installed, or, in case of failure, none of them are installed. Uptane does not provide a way to guarantee atomic installation of bundles, because this problem is out of its scope. It is challenging for ECUs to atomically install a bundle in the face of arbitrary failure: if just one ECU fails to install its update in the bundle for any reason (such as hardware failure), then the guarantee is lost. Furthermore, different OEMs and suppliers already have established ways of solving this problem. Nevertheless, we discuss several different solutions for those who are interested in guidance.

The simplest solution is to use the vehicle version manifest to report to the director repository the failure to atomically install a bundle, and not to retry installation. After receiving the report, it is up to the OEM to decide how to respond. For example, the OEM MAY require the owner of the vehicle to diagnose the failure at the nearest dealership or authorized mechanic.

Another simple solution is for the primary and / or director to retry a bundle installation until it succeeds (bounded by a maximum number of retries). This solution does not require ECUs to perform a rollback in case a bundle is not fully installed. This is an advantage, because ECUs without additional storage cannot perform a rollback to undo a partial bundle installation.

If all ECUs do have additional storage, and can perform a rollback, then the OEM may use a [two-phase commit protocol](https://en.wikipedia.org/wiki/Two-phase_commit_protocol). We assume that a gateway ECU would act as the coordinator, which ensures that updates are installed atomically. This technique should ensure atomic installation as long as: (1) the gateway ECU behaves correctly and has not been compromised, and (2) the gateway ECU does not fail permanently. It is considerably less complicated than Byzantine-fault tolerant protocols, which may have a higher computation/communication overhead. Nevertheless, note that this technique does not provide other security guarantees: for example, the gateway ECU may show different bundles to different secondaries at the same time.

## 2nd-party Fleet management

### TODO insert Figure 2 (custom_2_fleet_management.jpg)
Some parties, such a vehicle rental company, or the military, may wish to exercise control on how their own fleet of vehicles are updated. We discuss two options for implementing fleet management using Uptane, illustrated by Figure 2. Choosing between these options depends on whether the fleet manager wishes to have either complete control, or better compromise-resilience.

In the first option, which we expect to be the common case, a fleet manager would configure the map file on ECUs, such that primaries and full verification secondaries would trust an image if and only if it has been signed by both the image repository managed by the OEM, and the director repository managed by the fleet instead of the OEM. Partial verification secondaries would trust an image if and only if it has been signed by this director repository. The upside of this option is that the fleet manager, instead of the OEM, has complete control over which updates are installed on its vehicles. The downside of this option is that if the directory repository controlled by the fleet manager is compromised, then attackers can execute mix-and-match attacks.

In the second option, a fleet manager would configure the map file on ECUs, such that primaries and full verification secondaries would trust an image if and only if it has been signed by the image repository, managed by the OEM, the director repository managed by OEM, and the director repository managed by the fleet. The upside of this option is that attackers cannot execute mix-and-match attacks if they have compromised only the director repository managed by either the OEM or the fleet. The downside of this option is that updates cannot be installed on vehicles unless both the OEM and fleet agree on which images should be installed together. This agreement may require both director repositories to communicate using an out-of-band channel. Using this option also means that partial verification secondaries should be configured to trust the director repository managed by either the OEM or the fleet, but not both, since these secondaries can afford to check for only one signature.

## User-customized updates

### TODO insert Figure 3 (custom_2_thirdparty_updates.jpg)

In its default implementation, Uptane allows only the OEM to fully control which updates are installed on which ECUs on which vehicles. Thus, no third party, such as a dealership, mechanic, fleet manager, or the end-user, has an input as to which updates should be installed. There are very good reasons, such as legal considerations, for enforcing this constraint. However, this capability exists to the point that the OEM wishes to make it available. We discuss two options for doing so.

In the first option, an OEM MAY elect to receive input from a third party as to which updates should be installed. The process is illustrated in Figure 3. In the first step, the vehicle would submit to the director repository controlled by the OEM its vehicle version manifest, which lists which updates are currently installed. In the second step, the director repository would perform dependency resolution using this manifest, and propose a set of updates. In the third step, the third party would either agree with the OEM, or propose a different set of updates. This step SHOULD be authenticated (e.g., using client certificates, or username and password encrypted over TLS), so that only authorized third parties are allowed to negotiate with the OEM. In fourth step, the OEM would either agree with the third party, or propose a different set of updates. The third and fourth steps MAY be repeated, for a maximum number of retries, until both the OEM and the third party agree as to which updates should be installed.

In the second option, the third party MAY choose to override the root of trust for ECUs, provided that the OEM makes this possible. Specifically, the third party may overwrite the map and root metadata file on ECUs, so that updates are trusted and installed from repositories managed by the third party, instead of the OEM. The OEM may infer whether a vehicle has done so, by monitoring from its inventory database whether the vehicle has recently updated from its repositories. The OEM MAY choose not to make this option available to third parties by, for example, using a Hardware Security Module (HSM) to store Uptane code and data, so that third parties cannot override the root of trust.

## ECUs without filesystems

(Is this still necessary? We've removed a lot of the filesystem-specific stuff)

Currently, implementation instructions are written with the implicit assumptions that: (1) ECUs are able to parse the string filenames of metadata and images, and that (2) ECUs may have filesystems to read and write these files. However, not all ECUs, especially partial verification secondaries, may fit these assumptions. There are two important observations.

First, filenames needs not be strings. Even if there is no explicit notion of “files” on an ECU, it is important for distinct pieces of metadata and images to have distinct names. This is so that  primaries can perform full verification on behalf of secondaries, which entails comparing the metadata for different images for different secondaries. Either strings or numbers may be used to refer to distinct metadata and images, as long as different “files” have different “file” names or numbers. The image and director repositories can continue to use file systems, and may also use either strings or numbers to represent “file” names.

Second, ECUs need not have a filesystem in order to use Uptane. It is only important that ECUs are able to recognize distinct metadata and images, using either strings or numbers as “file” names or numbers, and that they allocate different parts of storage to different “files.”

## Custom installation instructions for ECUs

Most inputs to ECUs are delivered as signed targets files and are stored on the image directory. These signed targets files are then sent to the ECU by the director. However, there may be some cases where the inputs required for a particular customization cannot be configured to follow this standard signing process. The inputs may have to vary from the standard signing process because the input is not known in advance. Or, perhaps these instructions need to be customized for each vehicle. Examples of such inputs could be a command line option that turns on a feature in certain ECUs, a configuration sent by a director repository to an ECU, or a director doing a dynamic customization for an ECU. We can collectively call all these non-standard inputs “dynamic directions.” Uptane allows ECUs to access dynamic directions in two different ways, each having particular advantages for different use cases.

### Accessing dynamic directions through signed images from the director repository

The first option for providing dynamic directions is to slightly modify the standard delivery procedure described above. A signed image would still be sent to the ECU from the director repository, but with one main difference. Though this file will be signed by the director, timestamp, and metadata roles, it would not be stored on—or validated by—the image repository. As the image repository is controlled by offline keys, it can not validate a file created dynamically by the director.

However, even though the image repository can not sign the file, some security protections are still in place. The ECU would still have rollback protection for a file sent this way as a release counter will still be included in the metadata and would be incremented for each new version. If additional validation is needed, the file could be put on multiple repositories created for this purpose. These repositories could behave similar to the director repository, but would all have separate keys to allow for additional security. The primary ECU will be aware of these extra repositories so it can check for consistency by downloading the image from all repositories, and comparing them.

### Adding dynamic directions to the custom Field of Targets Metadata

Another way to provide dynamic directions is to use the custom field of the targets metadata file. This field provides the option to include custom inputs to individual ECUs. Using the custom field is an especially good option for managing small variations in the existing image. For example, a compilation flag to enable a navigation feature might be set on some ECUs, but not on others. The custom field could contain dynamic directions, and additional subfields would help determine for which ECUs the direction is intended. In the flag example above, the director can put the ECU id and the flag into the custom field so the flag will be used during the installation process only on that particular ECU. This custom field can then be included in the targets metadata received by all ECUs. The intended ECU would be able to check for this flag and use it during an installation or update to enable the navigation system.

Using this method of providing dynamic directions offers several ways to secure the system. The targets metadata is created by the director, validated using the timestamp, and stored in the image repository. As an added protection against a compromise of the director role, the custom field could be included in the targets metadata file on the image repository as well. This option works best if there is only a small set of known customizations. However, if there are multiple customization possibilities, the better option would be to store the targets metadata without the custom field in the image repository, and keep the custom field configured separately and signed by the director.

### Picking an option (Efficiency vs Security)

In choosing whether to send dynamic variations from the director repository or through the custom field of targets metadata, one needs to consider two factors: how quickly the dynamic direction needs to be received, and how security-sensitive the receiving ECU may be. If dynamic directions are sent using the custom field of targets metadata, these directions will be downloaded by all ECUs on the car. So, if the direction has a large file size, it could significantly slow down delivery of the metadata. Sending files from the director repository that are signed only for a specific ECU could be a bit more efficient. Yet if the ECUs are connected on a single bus, there is no way to avoid this large quantity of data going to all units.

In terms of security, dynamic direction transmission through the custom field of targets metadata seems to have an advantage, as including directions in the custom field of targets metadata gives the sender the option of storing these directions on the image repository. This would offer protection against a compromised director repository. In contrast, files sent from the director to a specific ECU are only signed by the director. Therefore, should the director be compromised, images signed only by the director could be changed without the ECU knowing.

It is important to consider these tradeoffs when deciding how to send dynamic directions. If dynamic directions are for a security critical ECU, these directions should be sent using the custom field of targets metadata and stored on the image repository. If the dynamic directions are large or there are efficiency concerns, the directions should be sent as signed images from the director repository.
