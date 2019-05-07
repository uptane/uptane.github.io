---
layout: default
css_id: normal_operation
---

# Normal operating procedures
In this section, we discuss how to perform regular maintenance operations, such as updating metadata and images, or preparing an ECU to run Uptane. Since these operations are performed on a regular basis, it is important to ensure they be performed  in a systematic manner so that software updates are delivered securely to ECUs.

## What can an Uptane-compliant system look like?

### TODO There is no discernible text describing such a system in the original document. New text needs to be drafted for this section

### User interfaces and aftersales work flows

#### TODO There is no text describing this testing in the original document. New text needs to be drafted for this section

### Receiving updates from tier-1 suppliers

#### TODO There is text on this topic below under Updating metadata and images. Should that be moved to here?

## Acceptance testing

### TODO There is no text describing this testing in the original document. New text needs to be drafted for this section

## Updating metadata and images

Updating metadata and images is an ongoing operation and as such, it is important to ensure such updates are performed in a systematic manner. An OEM SHOULD perform the following steps whenever a new update is delivered. First, the OEM verifies the authenticity and integrity of new images delivered by its suppliers. Second, the OEM tests whether the images work as intended, before releasing them to end-user vehicles.

### What suppliers should do

#### TODO link a reference to the Security page in the last sentence of the third paragraph to the first subsection on that page.

In order to prevent updates from being tampered with by man-in-the-middle attackers, images MUST be delivered from the tier-1 supplier to the OEM in a manner that provides an extremely high degree of confidence in the timeliness and authenticity of the files provided. This may entail any manner of technical, physical, and / or personnel controls.

An OEM and its suppliers MAY use any transport mechanism in order to deliver these files.
For example, an OEM MAY maintain a private web portal where metadata and / or images from suppliers can be uploaded. This private server MAY be managed by either the OEM or the tier-1 supplier, and SHOULD require authentication, so that only certain users are allowed to read and / or write certain files. Alternatively, the OEM and its suppliers MAY use email, or courier mail.

If the supplier signs its own images, then it delivers all of its metadata, including delegations, and associated images. Otherwise, if the OEM signs images on behalf of the supplier, then the supplier needs to update ONLY images, and the OEM is responsible for producing signed metadata. Regardless of whether it is the OEM or suppliers that produce signed metadata, the release counters associated with images SHOULD be incremented, so that attackers who compromise the director repository are not able to rollback to obsolete images (see the opening section of the Security page for more on this attack.)

Regardless of the transport mechanism used to deliver images, the most important thing is for the OEM to somehow ensure that the images are authentic, and have not been tampered with by man-in-the-middle attackers. The OEM SHOULD verify these images using some out-of-band mechanism, so that the authenticity and integrity of these images can be double-checked.

For example, to obtain a higher degree of assurance, and for additional validation, the OEM MAY also require the supplier's update team to send a PGP / GPG signed email to the OEM's security team listing the cryptographic hashes of the new files.

Alternatively, the OEM MAY require that updates be transmitted via DVD delivered by bonded and insured couriers. To validate the provided files, the OEM and a known contact at the supplier MAY have a video call where the cryptographic hashes of the metadata and / or images are provided by the supplier, and confirmed by the OEM.

An OEM SHOULD perform this verification even if a trusted transport mechanism is used, because the OEM cannot be sure whether the transport mechanism has been compromised. If the suppliers have signed metadata, then the OEM SHOULD verify metadata and images by checking version numbers, expiration timestamps, delegations, signatures, and hashes, so that it can be sure that the metadata matches the images.

### What the OEM should do

#### TODO Add link from last sentence of third paragraph to symmetric vs. asymmetric ECU section on the ECU page

After a tier-1 supplier has delivered new images to the OEM, and the OEM has somehow verified the authenticity and integrity of these images, the OEM SHOULD test new metadata and images before releasing them, in order to ensure that the images work as intended end user vehicles. To do so, It SHOULD use the following steps.

First, the OEM SHOULD add these metadata and images to the image repository. It SHOULD also add information about these images to the inventory database, including any dependencies and conflicts between images for different ECUs. Both of these steps are done, to  make  the new metadata and images available to vehicles.

Optionally, if images are encrypted on demand per ECU, then the OEM SHOULD ensure that the director repository somehow has access to the original, unencrypted images, so that automated processes running the director repository are able to encrypt them in the first place. It does not matter how the original, unencrypted images are stored on the director repository. For example, they MAY be stored unencrypted, or they MAY be encrypted using a master key that is known by the automated processes. See the Preparing an ECU for Uptane page for more details.

Second, the OEM SHOULD test the updated metadata and images on reserved vehicles, before releasing them to all vehicles in circulation, so that it can verify whether these images work as intended. To do so, it MAY instruct the director repository to first install the updated images on these reserved vehicles.

Finally, the OEM SHOULD update the inventory database, so that the director repository is able to instruct appropriate ECUs on all affected vehicles on how to install these updated images.

## Backup and garbage collection for the image repository

#### TODO Add link from last sentence in this section to the Delta update strategies subsection of the Customizations section.

The OEM SHOULD regularly perform backup and garbage collection of the metadata and images on the image repository. This is done so that the OEM is able to safely recover from a repository compromise, and ensure that the repository has enough storage space. To do so, an OEM MAY use either the following steps, or its own corporate backup and garbage collection policy.

First, an automated process SHOULD store every file on the image repository, as well as its cryptographic hash on a separate, offline system. This automated process SHOULD also store a copy of the inventory database from the director repository on this offline system. This allows administrators to detect and recover from a repository compromise.

Second, the automated process SHOULD remove expired metadata from the image repository, in order to reclaim storage space. If the OEM is interested in supporting delta updates for vehicles that have not updated for a long time, then the automated process SHOULD NOT remove images associated with expired metadata, because these images MAY be needed in order to compute delta images (see Delta Update Strategies on the Customizing Uptane page).
