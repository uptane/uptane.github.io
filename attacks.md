
# Why Updates are Vulnerable

Software updates are routinely performed on computing units for a [number of reasons,](https://www.scientificamerican.com/article/why-installing-software-updates-makes-us-wannacry/)
including the addition of new functionality, and upgrades to improve productivity.
But, the primary reason for updating software is to address existing flaws
in the code itself. Increasingly, these updates are done using
[“software-over-the-air”](http://blog.ihs.com/remote-software-update%3A-future-growth-business)
or SOTA  strategies, in which revised versions of programs are sent directly
to computing units through broadcasts over the Internet. The strategy is growing
in popularity because it is a much quicker and more cost-effective delivery
mechanism than traditional methods, such as distributing flash drives or
requiring customers to bring in their vehicles for servicing. Even established
OEMs are recognizing the potential of this strategy, with both [Ford and GM](https://www.consumerreports.org/automotive-technology/automakers-embrace-over-the-air-updates-can-we-trust-digital-car-repair/) recently announcing they would allow access to
SOTA updates in some models by 2020.

However, connecting ECUs to the Internet make them
[vulnerable](https://www.theverge.com/2018/2/13/17007332/fiat-chrysler-uconnect-update-reboot-problem-broken)
to a wide range of attacks, some of which introduce malware masquerading as
legitimate updates. The potential consequences of such attacks could be costly
indeed, not only in terms of recalls or lost sales, but also potentially, in
loss of life.

### Potential Attacks

The types of attacks which Uptane is designed to defend against can be organized
into four categories, presented here in order of increasing severity.

**Read updates**:  The goal here is intellectual property theft, so these
attackers aim to read the contents of software updates. This is generally
achieved with an Eavesdrop attack, where attackers can read unencrypted updates
sent from the repository to the vehicles.

**Deny updates**: In this group of attacks, the goal is to prevent vehicles
from fixing software problems by using one of several attack strategies to
deny access to updates.

* **Drop-request attack**: blocks network traffic outside or inside the
vehicle to prevent an ECU from receiving any updates.
* **Slow retrieval attack**: slows delivery time of updates to ECUs so a known
security vulnerability can be exploited before a corrective patch is received.
* **Freeze attack**: continues to send the last known update to an ECU, even if a
newer update exists.
* **Partial bundle installation attack**: Allows only part of an update
 to install by dropping traffic to selected ECUs.

**Deny functionality**: This grouping ups the threat ante a bit further by causing
vehicles to fail to function in one of the following ways:
* **Rollback attack**: tricks an ECU into installing outdated software with
known vulnerabilities.
* **Endless data attack**: causes an ECU to crash by sending it an infinite
amount of data until it runs out of storage.
* **Mixed-bundles attack**: shuts down an ECU by causing it to install incompatible
versions of software updates that must not be installed at the same time.
Attackers can accomplish this by showing different bundles to different ECUs at
the same time.
* **Mix-and-match attack**: If attackers have compromised repository keys,
they can use these keys to release arbitrary combinations of new versions of images.

**Control**: The last and most severe threat is if an ECU can be forced to
install software of the attacker’s choosing, thus ceding control of that unit.
This means an attacker can arbitrarily modify the vehicle’s performance through
an arbitrary software attack, in which the software on an ECU is overwritten with
a malicious software program.
