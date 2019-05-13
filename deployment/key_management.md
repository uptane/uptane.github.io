---
layout: default
css_id: key_management
---

# Key management

(Intro text here)

## Repository keys
On the director repository, the OEM maintains the keys to the root, timestamp, snapshot, and targets roles.

Other delegated targets roles, such as developers for a tier-1 supplier, or tier-2 and tier-3 suppliers, are expected to maintain their own keys.

There are two options for signing the timestamp and snapshot metadata , each with the opposite trade-off from the other. In the first option, the OEM uses online keys to sign timestamp and snapshot metadata. The upside is that automated processes can automatically renew the timestamp and snapshot metadata to indicate that there are new targets metadata and / or images available. The downside is that attackers who have compromised a supplier’s key, and has access to the image repository (perhaps through a web portal), can cause the image repository to instantly publish malicious images. If they additionally compromise the director repository, then they can execute arbitrary software attacks, because the director repository can be used to select these malicious images on the image repository for installation. Another, less severe downside is that attackers can also execute mix-and-match attacks.

In the second option, the OEM uses offline keys to sign timestamp and snapshot metadata. The upside is that in the aforementioned scenario, attackers cannot immediately cause the image repository to publish malicious images. The downside deals with expiration of timestamp and snapshot.  If the timestamp and snapshot metadata expire relatively quickly, then it is more cumbersome to use offline keys to renew their signatures. However, if a longer expiration time is used, then a man-in-the-middle attackers has more time with which to execute freeze attacks, hence defeating the purpose of the timestamp role.
The keys to all other roles on the image repository SHOULD be kept offline. This is because these metadata are expected to be updated relatively infrequently, and so that a repository compromise does not immediately affect full verification ECUs. It does not matter where an offline key is stored (e.g., in a Hardware Security Module, YubiKey, or a USB stick in a safe deposit box), as long as the key is not accessible from the repository. Each key SHOULD be kept separately from others, so that a compromise of one does not affect them all.


### Online vs. offline keys
Repository administrators SHOULD use offline keys to sign the root metadata on the director repository, so attackers cannot tamper with this file after a repository compromise. If a tier-1 suppliers signs its own images, then the supplier maintains its offline keys. Otherwise, the OEM would sign on behalf of the supplier, and thus maintain its keys.

On the image repository, the timestamp, snapshot, and targets metadata SHOULD be signed using online keys, so that an automated process can instantly generate fresh metadata. On the image repository,
there are two options for signing the timestamp and snapshot metadata, each with the opposite trade-off from the other. In the first option, the OEM uses online keys meaning automated processes can automatically renew the timestamp and snapshot metadata to indicate that there are new targets metadata and / or images available. However, attackers who have compromised a supplier’s key would now have access to the image repository and can instantly publish malicious images. If they additionally compromise the director repository, then they can execute arbitrary software attacks by selecting these malicious images on the image repository for installation. Such an attack could also facilitate mix-and-match attacks.

In the second option, the OEM uses offline keys to sign timestamp and snapshot metadata, which reduces the risk of attackers immediately publishing malicious images. The downside deals with expiration of timestamp and snapshot.  If the timestamp and snapshot metadata expire relatively quickly, then it is more cumbersome to use offline keys to renew their signatures. However, if a longer expiration time is used, then man-in-the-middle attackers has more time with which to execute freeze attacks, hence defeating the purpose of the timestamp role.

The keys to all other roles on the image repository SHOULD be kept offline. This is because these metadata are expected to be updated relatively infrequently, and so that a repository compromise does not immediately affect full verification ECUs. It does not matter where an offline key is stored (e.g., in a Hardware Security Module, YubiKey, or a USB stick in a safe deposit box), as long as the key is not accessible from the repository. Each key SHOULD be kept separately from others, so that a compromise of one does not affect them all.


### Key thresholds

Since the root role on the director repository has the highest impact when its keys are compromised, it SHOULD use a sufficiently large threshold number of keys, so that a single key compromise is insufficient to sign its metadata file. Each key MAY belong to a repository administrator. For example, if there are 8 administrators, then at least 5 keys SHOULD be required to sign the root metadata file, so that a quorum is required to trust the metadata.

The timestamp, snapshot, and targets roles MAY each use a single key, because using more keys does not add to security, since these keys are online, and attackers who compromise the repository can always use these online keys.

#### Metadata expiration times
#### TODO: Insert Table 1 (expiration dates-director) and Table 2 (expiration dates-image)

Since the root role keys on the director repository are not expected to be revoked and replaced too often, its metadata file MAY expire after a relatively long time, such as one year.

The timestamp, snapshot, and targets metadata files SHOULD expire relatively quickly, such as in a day, because they are used to indicate whether updated images are available.

For the Image repository, the Uptane Standards require all metadata files to have expiration times in order to prevent or limit freeze attacks. If ECUs know the time, then attackers can not indefinitely replay outdated metadata, and hence, images. In general, the expiration date for a metadata file depends on how often it is updated. The more often that it is updated, then the faster it SHOULD expire, so that attackers cannot execute freeze attacks. Even if it is not updated frequently, it SHOULD expire after a bounded period of time, so that stolen or lost keys can be revoked and replaced. Table 2 lists an example of expiration times for metadata files on the image repository.
Since the root role keys are expected to be revoked and replaced relatively rarely, its metadata file MAY expire after a relatively long time, such as one year.

## What to do in case of key compromise
An OEM and its suppliers SHOULD be prepared to handle a key compromise. If the recommended number and type of keys are used, this should be a rare event. Nevertheless, when it happens OEMs and suppliers could use the following recovery procedures.


### Director repository

Since the Director repository MUST keep at least some software signing keys online, a compromise of this repository can lead to some security threats, such as mix-and-match attacks. Thus, the OEM SHOULD take great care to protect this repository, and reduce its attack surface as much as possible. For example, this MAY be done, in part, by using a firewall. However, if the repository has been compromised, then the following procedure SHOULD be performed in order to recover ECUs from the compromise.

First, the OEM SHOULD use the Root role to revoke and replace the keys to the Timestamp, Snapshot, and Targets roles, because only the Root role can replace these keys. Following the type and placement of keys prescribed for the Director repository, we assume that attackers have compromised the online keys to the Timestamp, Snapshot, and Targets roles, but not the offline keys to the Root role.

Second, the OEM SHOULD manually recall all vehicles in order to replace these keys. This MAY be done by requiring vehicle owners to visit the nearest dealership. Even though it could replace these keys on full verification ECU by using over-the-air broadcasts, a manual recall SHOULD be done because:
1. the OEM SHOULD perform a safety inspection of the vehicles, in case of security attacks,and
2. partial verification secondaries are not designed to handle key revocation and replacement over-the-air. In order to update keys for partial verification secondaries, the OEM should overwrite their copies of the root metadata file, perhaps using new images.

After having inspected the vehicle, the OEM SHOULD replace and update metadata and images on all ECUs, so the images are known to be safe, and so partial verification secondaries have replaced keys for the director repository.

### Image repository

Following the type and placement of keys prescribed for the image repository, a key compromise of this repository should be an unlikely event. However, should one occur, it is a much more serious affair. A compromise of the image repository would allow attackers to tamper with images without being detected, and thus execute arbitrary software attacks. There are two cases for handling a key compromise, depending on whether the key is managed by tier-1 suppliers or its delegatees, or the OEM.

#### Supplier-managed keys

In the first case, where a tier-1 supplier or one of its delegatees has faced a key compromise, the supplier, and its affected delegatees (if any), SHOULD revoke and replace keys. They SHOULD update metadata, including delegations and images, and send them to the OEM.

The OEM SHOULD then manually recall only affected vehicles that run software maintained by this supplier in order to replace metadata and images. This MAY be done by requiring vehicle owners to visit the nearest dealership. A manual recall SHOULD be done, because without trusted hardware (such as TPM), it is difficult to ensure that compromised ECUs can be remotely and securely updated. After having inspected the vehicle, the OEM SHOULD replace and update metadata and images on all ECUs, so that these images are known to be safe.

#### OEM-managed keys

The second case, where it is the OEM facing a key compromise, is potentially far more serious than the first one. An attacker is such a position may be able to execute attacks on all vehicles, depending on exactly which keys have been compromised. If the keys are for the Timestamp and Snapshot roles, or the Targets role, or the Root role, then the OEM SHOULD use the following recovery procedure.

First, the OEM SHOULD use the Root role to revoke and replace keys for all affected roles. Second, it SHOULD restore all metadata and images on the Image repository to a known good state using an offline backup. Third, the OEM SHOULD manually recall all vehicles in order to replace metadata and images. A manual recall SHOULD be done, because without trusted hardware (such as TPM), it is difficult to ensure that compromised ECUs can be remotely and securely updated.

### ECU keys

If ECU keys are compromised, then the OEM SHOULD manually recall vehicles to replace these keys. This is the safest course of action because,  after a key compromise, an OEM cannot be sure whether it is remotely replacing keys controlled by attackers or the intended ECUs.

An OEM MAY use the Director repository and its inventory database to infer whether ECU keys have been compromised. Since the inventory database is used to record vehicle version manifests, which list what ECUs on a vehicle have installed over time, the OEM MAY use this information to detect abnormal patterns of installation that may have been caused by an ECU key compromise. Note, however, that this method is not perfect, because if attackers control ECU keys, then they can also use these keys to send fraudulent ECU version manifests.
