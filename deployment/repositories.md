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

#### TODO Do we need the timeserver material? I did not move the subsection about the time server over because I was unsure whether we were still using this feature. I can easily add the text and diagram if it is needed.

## What the OEM should do

The OEM sets up and configures the director and image repositories. To host these backend services, the OEM MAY use its own private infrastructure, or cloud computing.

### Director Repository
In order to provide on-demand customization of vehicles, the OEM MUST also build the director repository, following the guidance in the Uptane Standard. In addition, an OEM must keep in mind the following factors. Unlike the image repository, the director repository: (1) is managed by automated processes, (2) uses online keys to sign targets metadata, (3) does not delegate images, (4) generally provides different metadata to different primaries, (5) MAY encrypt images per ECU, and (6) produces new metadata on every request by primaries.

#### Steps to initialize the repository

#### TODO: Insert section links in the list below to the relevant sections in the Normal Operations list

In order to initialize the repository, an OEM SHOULD perform the following steps:

1. Set up the storage mechanism, following the directions for the choice of protocol. For example, the OEM might need to set up a ZFS filesystem.
2. Set up the transport protocol, following the details of the chosen systems. For example, the OEM may need to set up an HTTP server with SSL/TLS enabled.
3. Set up the private and public APIs to interact over the chosen transport protocol.
4. Set up the timestamp, snapshot, root, and targets roles.
5. Copy all unencrypted images from the image repository.
6. Initialize the inventory database with the information necessary for the director repository to perform dependency resolution, or encrypt images per ECU. This information includes: (1) metadata about all available images for all ECUs on all vehicles, (2) dependencies and conflicts between images, and (3) ECU keys.
7. Set up and run the automated process that communicates with primaries.

The automated process MAY use the repository tools from our [Reference Implementation] (https://github.com/uptane/uptane) to generate new metadata.

#### Roles

#### TODO: Insert Figure 2 (repo_2_rolesondrector_repo.jpg)

Unlike the image repository, the director repository does not delegate images. Therefore, the director repository SHOULD contain only the root, timestamp, snapshot, and targets roles, as illustrated in Figure 2. In the rest of this section, we will discuss how metadata for each of these roles are produced.

#### Key types and thresholds
#### TODO: Insert link to the Key Management page
See Key Management

#### Metadata expiration times
#### TODO: Insert Table 1 (expiration dates)

Since the root role keys are not expected to be revoked and replaced too often, its metadata file MAY expire after a relatively long time, such as one year.
The timestamp, snapshot, and targets metadata files SHOULD expire relatively quickly, such as in a day, because they are used to indicate whether updated images are available.

#### The Inventory database
See Key Management

#### Private API to update images and the inventory database

An OEM SHOULD define a private API for the director repository, so that it is able to: (1) upload images, and (2) update the inventory database. This API is private in the sense that only the OEM should be able to perform these actions. The OEM MAY define this API as it wishes.

This API SHOULD require authentication, so that each user is allowed to access only certain information. The OEM is free to use any authentication method, as long as it is suitably strong, such as [client certificates](https://blogs.msdn.microsoft.com/kaushal/2012/02/17/client-certificates-vs-server-certificates/), or [two-factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication), such as a username coupled with a password, or an API key encrypted over TLS,.

In order to allow automated processes on the director repository to perform their respective functions, without also allowing attackers who compromise the repository to tamper with the inventory database, it is strongly RECOMMENDED that these processes SHOULD be able to read any record in the database, and write new records, but never update or delete existing records.

#### Public API to send updates
#### TODO: Insert Figure 4 (repo_4_primarytodirector.jpg)
An OEM SHOULD define a public API to the director repository, so that it is able to send updates to vehicles. This API can be designed to the wishes of the OEM, and can use either a push or pull model to send updates updates to primaries. The difference between the models is mostly about whether a running vehicle can be told to immediately download an update (via a push), or can wait until a pull occurs.

Either way, the OEM can control how often updates are pushed to or pulled by vehicles. In the push model, the OEM can send am update to a vehicle whenever it likes, as long as the vehicle is online. In the pull model, the OEM can configure the frequency at which primaries pull updates. In most realistic cases, there will be little practical difference between the two models.

It is true that if a pull-based OEM configures pulls to only occur once a month, then vehicle updates might be delayed by up to a month, but this would be a counterproductive action. Similarly, a push-based OEM might fail to re-attempt to contact off-line vehicles, but again, this would be a counterproductive action.

Either way, there is no significant difference in resistance to denial-of-service (DoS) attacks or flash crowds. In the push model, a vehicle can control how often updates are pushed to it, so that vehicles can withstand DoS attacks even if the repository has been compromised. In the pull model, the repository can similarly stipulate when vehicles SHOULD download updates, and how often, so that the repository, too, can withstand DoS attacks.

Regardless of what model is used to send updates, as illustrated in Figure 4 the API SHOULD allow a primary to:
* send a vehicle version manifest (step 1)
* receive a link to a timestamp metadata file in return (step 4)
* download associated files (step 5).

The API MAY require authentication, depending on the OEM’s requirements.

#### Sending an update
Sending an update from the director repository to a primary requires the following five steps, as shown in Figure 4.

1. The primary sends its latest vehicle version manifest to the director repository via an automated process.
2. Second, the automated process performs a dependency resolution. It reads about this vehicle from the inventory database such associated information as ECU identifiers and keys. It checks that the signatures on the manifest are correct, and adds the manifest to the inventory database. Then, using the given manifest, it computes which images SHOULD be installed next by these ECUs. It SHOULD record the results of this computation on the inventory database so there is a record of what was chosen for installation. If there is an error at any part of this step, due to incorrect signatures, or anything unusual about the set of updates installed on the vehicle being unusual, then the director repository SHOULD also record it, so the OEM can be alerted to a potential risk. Repository administrators MAY then take manual steps to correct the problem, such as instructing the vehicle owner to visit the nearest dealership.
3. Using the results of the dependency resolution, the automated process signs fresh timestamp, snapshot, and targets metadata about the images that SHOULD be installed next by these ECUs. Optionally, if the OEM requires it, it MAY encrypt images per ECU, and write them to its storage mechanism. If there are no images to be installed or updated, then the targets metadata SHOULD contain an empty set of targets.
4. Fourth, the automated process returns to the primary a link to the timestamp metadata file.
5. Fifth, the primary downloads metadata and images using the link to this timestamp metadata file.

Since the automated process is continually producing new metadata files (and, possibly, encrypted images), these files SHOULD be deleted as soon as primaries have consumed them, so that storage space can be reclaimed. This MAY be done by simply tracking whether primaries have successfully downloaded these files within a reasonable amount of time.


## Deploying/developing your own
#### TODO I could not determine what text in the original document might belong here or the two subsections below. Does new text need to be drafted?

### Director

### Image
