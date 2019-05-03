---
layout: default
css_id: key_management
---

# Key management

(Intro text here)

## Repository keys


### Online vs. offline keys
Repository administrators SHOULD use offline keys to sign the root metadata, so that attackers cannot tamper with this file after a repository compromise.

The timestamp, snapshot, and targets metadata SHOULD be signed using online keys, so that an automated process can instantly generate fresh metadata.

### Key thresholds

Since the root role has the highest impact when its keys are compromised, it SHOULD use a sufficiently large threshold number of keys, so that a single key compromise is insufficient to sign its metadata file. Each key MAY belong to a repository administrator. For example, if there are 8 administrators, then at least 5 keys SHOULD be required to sign the root metadata file, so that a quorum is required to trust the metadata.

The timestamp, snapshot, and targets roles MAY each use a single key, because using more keys does not add to security, since these keys are online, and attackers who compromise the repository can always use these online keys.

## What to do in case of key compromise
An OEM and its suppliers SHOULD be prepared to handle a key compromise. If the OEM and its suppliers use the recommended number and type of keys, then this should be a rare event. When it happens, however, OEM and suppliers could use the following recovery procedures.


### Director repository

Since the Director repository MUST keep at least some software signing keys online, a compromise of this repository can lead to some security threats, such as mix-and-match attacks. Thus, the OEM SHOULD take great care to protect this repository, and reduce its attack surface as much as possible. For example, this MAY be done, in part, by using a firewall. However, if the repository has been compromised, then the following procedure SHOULD be performed in order to recover ECUs from the compromise.

First, the OEM SHOULD use the Root role to revoke and replace the keys to the Timestamp, Snapshot, and Targets roles, because only the Root role can replace these keys. Following the type and placement of keys prescribed for the Director repository, we assume that attackers have compromised the online keys to the Timestamp, Snapshot, and Targets roles, but not the offline keys to the Root role.

Second, the OEM SHOULD manually recall all vehicles in order to replace these keys. This MAY be done by requiring vehicle owners to visit the nearest dealership. A manual recall SHOULD be done even though it could replace these keys for full verification ECUs over-the-air by publishing new metadata. This is because: (1) the OEM SHOULD perform a safety inspection of the vehicles, in case of security attacks, and (2) partial verification secondaries are not designed to handle key revocation and replacement over-the-air. In order to update keys for partial verification secondaries, the OEM should overwrite their copies of the root metadata file, perhaps using new images. After having inspected the vehicle, the OEM SHOULD replace and update metadata and images on all ECUs, so that: (1) these images are known to be safe, and (2) partial verification secondaries have replaced keys for the director repository.

### Image repository

Following the type and placement of keys prescribed for the image repository, a key compromise of this repository should be an unlikely event. However, should one occur, it
is a much more serious affair. A compromise of the image repository would allow attackers  to tamper with images without being detected, and thus execute arbitrary software attacks. ). There are two cases for handling a key compromise, depending on whether the key is managed by tier-1 suppliers or its delegatees, or the OEM.

#### Supplier-managed keys

In the first case, where a tier-1 supplier or one of its delegatees has faced a key compromise, the supplier, and its affected delegatees (if any), SHOULD revoke and replace keys. They SHOULD update metadata, including delegations and images, and send them to the OEM.

The OEM SHOULD then manually recall only affected vehicles that run software maintained by this supplier in order to replace metadata and images. This MAY be done by requiring vehicle owners to visit the nearest dealership. A manual recall SHOULD be done, because without trusted hardware (such as TPM), it is difficult to ensure that compromised ECUs can be remotely and securely updated. After having inspected the vehicle, the OEM SHOULD replace and update metadata and images on all ECUs, so that these images are known to be safe.

#### OEM-managed keys

The second case, where it is the OEM facing a key compromise, is potentially far more serious than the first one. An attacker is such a position may be able to execute attacks on all vehicles, depending on exactly which keys have been compromised. If the keys are for the Timestamp and Snapshot roles, or the Targets role, or the Root role, then the OEM SHOULD use the following recovery procedure.

First, the OEM SHOULD use the Root role to revoke and replace keys for all affected roles. Second, it SHOULD restore all metadata and images on the Image repository to a known good state using an offline backup. Third, the OEM SHOULD manually recall all vehicles in order to replace metadata and images. A manual recall SHOULD be done, because without trusted hardware (such as TPM), it is difficult to ensure that compromised ECUs can be remotely and securely updated.

### ECU keys

If ECU keys are compromised, then the OEM SHOULD manually recall vehicles to replace these keys. This is the safest course of action because,  after a key compromise, an OEM cannot be sure whether it is remotely replacing keys controlled by attackers or the intended ECUs.

An OEM MAY use the Director repository and its inventory database to infer whether ECU keys have been compromised. Since the inventory database is used to record vehicle version manifests, which list what ECUs on a vehicle have installed over time, the OEM MAY use this information to detect abnormal patterns of installation that may have been caused by an ECU key compromise. Note, however, that this method is not perfect, because if attackers control ECU keys, then they can also use these keys to send fraudulent ECU version manifests.
