# Potential Attacks

The types of attacks which Uptane is designed to defend against can be organized into four categories,
presented here in order of increasing severity.

**Read updates**:  The goal here is intellectual property theft, so these attackers aim to read 
the contents of software updates. This is generally achieved with an Eavesdrop attack, 
where attackers can read unencrypted updates sent from the repository to the vehicles.

**Deny updates**: In this group of attacks, the goal is to prevent vehicles from fixing
software problems by denying access to updates using one of several attack strategies.

* **Drop-request attack**: blocks network traffic outside or inside the vehicle to prevent
an ECU from receiving any updates. 
* **Slow retrieval attack**: slows delivery time of updates to ECUs so a known
security vulnerability can be exploited before a corrective patch is received. 
* **Freeze attack**: continues to send the last known update to an ECU, even if a
newer updates exists. 
* **Partial bundle installation attack**: Allows only part of the an update to install by dropping traffic to selected ECUs. 

**Deny functionality**: This grouping ups the threat ante a bit further by causing
vehicles to fail to function in one of the following ways:
* **Rollback attack**: tricks an ECU into installing outdated software with 
known vulnerabilities.
* **Endless data attack**: causes an ECU to crash by sending it an infinite amount of data
until it runs out of storage. 
* **Mixed-bundles attack**: shuts down an ECU by causing it to install incompatible
versions of software updates that must not be installed at the same time.
Attackers can accomplish this by showing different bundles to different ECUs at the same time. 
* **Mix-and-match attack**: If attackers have compromised repository keys, they can use these
keys to release arbitrary combinations of new versions of images. 

**Control**: The last and most severe threat is if an ECU can be forced to install software 
of the attacker’s choosing, thus ceding control of that unit. This means an attacker can 
arbitrarily modify the vehicle’s performance through an arbitrary software attack, 
where attackers overwrite the software on an ECU with a malicious software programs.
