---
layout: default
css_id: security
---

# Security

We can think of a software update system as "secure" if:
* it knows about the latest available updates in a timely manner
* any files it downloads are the correct files, and,
* no harm results from checking or downloading files.

Making this happen requires workable preventive strategies against a number of potential attacks.

## Attacks and Weaknesses

The following are some of the known attacks on software update systems,
including the weaknesses that make these attacks possible. To design
a secure software update framework, these attacks need to be understood and
strategies to defend against them must be specified.
Some of these issues are, or can be, related, depending on the design and
implementation of the given software update system.

* **Arbitrary software installation**. An attacker can provide arbitrary files in
response to download requests and install anything he wants
on the client system, yet none will be detected as illegitimate.

* **Rollback attacks**. An attacker presents files to a software update system
that are older than those the client has already seen. With no way
to tell it is an obsolete version that may contain vulnerabilities, the user
installs the software. Later on, the vulnerabilities can be exploited by
attackers.

* **Fast-forward attacks**.  An attacker arbitrarily increases the version
numbers of project metadata files in the snapshot
metadata well beyond the current value, thus tricking a software update system
into thinking that any subsequent updates are trying
to rollback the package to a previous, out-of-date version.
In some situations, such as those where there is a maximum possible
version number, the perpetrator could use a number so high that the system
would never be able to match it with the one in the
snapshot metadata, and thus new updates could never be downloaded.

* **Indefinite freeze attacks**. An attacker continues to present files to
a software update system files that the client has already seen. As a result, 
the client is kept unaware of new files.

* **Endless data attacks**. An attacker responds to a file download request
 with an endless stream of data, causing harm to clients (e.g. a disk partition
filling up or memory exhaustion).

* **Slow retrieval attacks**. An attacker responds to clients with a very
slow stream of data that essentially results in the client never completing
the update process.

* **Extraneous dependencies attacks**. An attacker indicates to clients that,
 in order to install the software they want, they also need to install
 unrelated software. This extra software may be from a trusted source,
 but could still have known vulnerabilities that are exploitable by the attacker.

* **Mix-and-match attacks**. An attacker presents clients with a view of a
repository that includes files that did not exist there together at the same time.
This can result in outdated versions of
dependencies being installed, and other complications.

* **Wrong software installation**. An attacker provides a client with a
 trusted file that is just not the one the client wanted.

* **Malicious mirrors preventing updates**. An attacker controls one
repository mirror and is able to use it to prevent clients from obtaining updates from other,
non-malicious mirrors.

* **Vulnerability to key compromises**. An attacker who can compromise the one key
in a single key system, or less than a given threshold of keys, can compromise
clients. These attacks can occur whether the client relies on a single online
key (if only being protected by SSL) or a single offline key (if protected by
most software update systems that use keysigning).

## Security Design Principles

To ensure systems are secure against all of the above attacks, the design and
implementation of TUF relies on a few basic concepts.
For details of how TUF conveys the information discussed below, see the
[Metadata documentation](/metadata.html).

### Trust

Trusting downloaded files really means assuming the files were provided by
party without malicious designs. Two frequently overlooked aspects of trust
in a secure software update system are:

* Trust should not be granted forever. Trust should expire if it is not renewed.
* Trust should not be granted equally to all parties. This type of compartmentalized
trust means a party is only to be trusted for the files that the root role stipulates it is
to provide.

### Mitigating Key Risk (Compromise-Resilience)

Cryptographic signatures are a necessary component in securing a software update
system. The safety of the keys used to create these signatures directly affects the
security of the clients the system protects. Rather than naively assume
that private keys are always safe from compromise, a secure software update
system must anticipate how to keep clients as safe as possible when a compromise
of those keys occurs. This is the basic principle of compromise resilience.

Keeping clients safe despite a key compromise involves:

* Fast and secure key replacement and revocation.
* Minimal trust placed in keys that are at high risk. Keys that are kept online
 or used in an automated fashion should not pose an immediate risk to clients
if compromised.
* Multiple key usage and a threshold/quorum of signatures.

### Integrity

Ensuring integrity in TUF not only refers to single files, but also to repository
as a whole. It's fairly obvious that clients must verify that
individual downloaded files are correct. It's not as obvious, but still very
important for clients to be certain that their entire view of a
repository is correct. For example, if a trusted party is providing two files,
a software update system should see the latest versions of both files,
not just one, and not versions of the two files that were never provided together.

### Freshness

Since software updates often fix security bugs, it is important for software
update systems to obtain the latest versions available of these files. An attacker
may want to trick a client into installing outdated versions of software or
even just convince a client that no updates are available.

Ensuring freshness means:

* Never accepting files older than those that have been seen previously.
* Recognizing when there may be a problem obtaining updates.

Note that it won't always be possible for a client to successfully update if an
attacker is responding to their requests. However, a client should be able
to recognize that updates may exist that they haven't been able to obtain.

## Implementation Safety

In addition to a secure design, TUF also works to be secure against
implementation vulnerabilities, including those common to software update
systems. In some cases this is assisted by the inclusion of additional
information in metadata. For example, knowing the expected size of a
target file that is to be downloaded allows TUF to limit the amount of
data it will download when retrieving the file. As a result, TUF is
secure against endless data attacks (discussed above).
