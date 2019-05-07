---
layout: default
css_id: repositories
---

# Setting up Uptane repositories

### TODO This section should be reviewed carefully, particularly anything dealing wtih the timeserver. I know what was stipulated for providing time has been changed, but I do not have the technical expertise to determine what should be deleted on this topic.

This page outlines recommended procedures for the one-time operations that an OEM and its suppliers MUST perform when they set up Uptane for the first time. In particular, they SHOULD correctly configure the director and image repositories, as well as the time server, so that the impact of a repository / server compromise is limited to as few ECUs as possible.

## What suppliers should do

### TODO Insert Figure 1 (repo_1_supplier_sign.jpg). Insert link from third sentence to the what suppliers should do subsection on the Normal Operations page.

Either the OEM or a tier-1 supplier SHOULD sign for images for any ECUs produced by that supplier, so unsigned images are never installed. This provides security against arbitrary software attacks. An OEM would decide whether or not a tier-1 supplier SHOULD sign its own images. Otherwise, the OEM will sign images on behalf of the supplier, and the supplier MUST only deliver update images to the OEM as outlined on the Normal Operations page. If the  the supplier signs its own images, it MUST first set up roles and metadata using the following steps:

1. Generate a number of offline keys used to sign its metadata. In order to provide compromise-resilience, these keys MUST NOT be accessible from the image repository. The supplier MUST take great care to secure these keys, so that a key compromise affects only some, but not all, of its ECUs. The supplier MUST use the threshold number of keys chosen by the OEM.
2. Optionally, delegate images to members of its organization (such as its developers), or to tier-2 suppliers (who MAY further delegate to tier-3 suppliers). Delegatees SHOULD recursively follow these same steps.
3. Set an expiration timestamp on its metadata using a duration prescribed by the OEM.
4. Register its public keys with the OEM using some out-of-band mechanism (e.g., telephone calls, or certified mail).
5. Sign its metadata using the digital signature scheme chosen by the OEM.
6. Send all metadata, including delegations, and associated images to the OEM

A tier-1 supplier and its delegatees MAY use the [Uptane repository and supplier tools](https://github.com/uptane/uptane) to produce these signed metadata.

## What the OEM should do

#### TODO Do we need the timeserver material? I did not move the subsection about the time server over because I was unsure whether we were still using this feature. I can easily add the text and diagram if it is needed.

The OEM MUST set up and configure the director and image repositories. To host these backend services, the OEM MAY use its own private infrastructure, or cloud computing.

### Director Repository
In order to provide on-demand customization of vehicles, the OEM MUST also build the director repository, following the guidance in the Uptane Standard. In addition, an OEM must keep in mind the following factors. Unlike the image repository, the director repository: (1) is managed by automated processes, (2) uses online keys to sign targets metadata, (3) does not delegate images, (4) generally provides different metadata to different primaries, (5) MAY encrypt images per ECU, and (6) produces new metadata on every request by primaries.

#### Steps to initialize the repository

1. Set up the storage mechanism. The details will depend on the what mechanism is chosen.
2. Set up the transport protocol. The details depend on the choice of protocol (see B.2.4.3). For example, this may entail setting up an HTTP server with SSL/TLS enabled.






## Deploying/developing your own
#### TODO I could not determine what text in the original document might belong here or the two subsections below. Does new text need to be drafted?

### Director

### Image
