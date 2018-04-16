---
layout: default
css_id: overview
---

## Overview ##
A quick look at what TUF does and how it works.

### Purpose, or Why Get TUF? ###

There are literally thousands of different software update systems in common
use today. (In fact the computer of an average Windows user probably contains about [two
dozen](http://secunia.com/gfx/pdf/Secunia_RSA_Software_Portfolio_Security_Exposure.pdf)
different software updaters!)

What these very different systems have in common is that they all identify,
locate, and download updates for software that can add new functionalities or
address old vulnerabilities. Software is rarely ever static, and some repositories
receive updates on software or project metadata [every few minutes](https://ssl.engineering.nyu.edu/papers/kuppusamy_nsdi_16.pdf). This
growing flow of updates has also created a need for better
ways to protect the systems that manage them. Though a number of strategies have
been introduced and used over the last decade or so to enhance the
authenticity of update files—and by extension, the security of update systems—most have drawbacks
that have left repositories vulnerable to a number of attacks.

TUF was launched almost a decade ago as a way to build system resilience against
key compromises and other attacks that can spread malware or compromise a repository.
The primary goals behind its design are:

* to provide a framework (a set of libraries, file formats, and utilities)
that can be used to secure new and existing software update systems.

* to provide the means to minimize the impact of key compromises.

* to be flexible enough to meet the needs of a wide variety of software update systems.

* to be easy to integrate with existing software update systems.

### Software Updates 101 ###
A software update system is an application (or part of an
application) running on a client system that identifies, obtains, and
installs software.

There are three major classes of software update systems:

* **Application updaters** internal updaters that allow an application to update
   itself. For example, Firefox updates itself through its own application
   updater.

* **Library package managers** offered by many
   programming languages for installing additional libraries. Examples include
   Python's pip/easy_install + PyPI, Perl's CPAN,
   Ruby's RubyGems, and PHP's Composer.

* **System package managers** used by operating systems to update and
   install software on a client system. Examples include Debian's APT,
   Red Hat's YUM and openSUSE's YaST.

While these systems may vary in how they work, most follow a similar update
procedure. Obtaining and installing an update simply means:

* Knowing when an update exists.
* Downloading the update.
* Applying the changes introduced by the update.

TUF is designed to perform the first two steps of this procedure,
while guarding against the majority of attacks that can occur during or
after the update.
These include threats that other software security strategies may not take into
account, such as when:

* An attacker keeps giving you the same file, so you never realize
  there is an update.

* An attacker gives you an older, insecure version of a file that you
  already have and tricks you into thinking it's
  newer. You download it and blindly use it.

* An attacker gives you a newer version of a file you have but it's still not
  the *newest* one. It's newer to you, but it may be insecure and
  exploitable by the attacker.

* An attacker compromises the key used to sign these files. Now you
  download a file that is properly signed, but is still malicious.

The [Security](/security.md) section offers a full list of the
attacks and updater weaknesses that TUF is designed to defend against.

### How does TUF secure updates? ###

In a sense, TUF enhances security by adding verifiable records about the state
of a repository or application. By adding metadata containing
information about which signing keys are trusted, the cryptographic hashes of
files, signatures on the metadata,
metadata version numbers, and the date after which the metadata should be
considered expired, it creates a record that can be checked to verify the
authenticity of update files.

Your software update system never has to deal with
this additional metadata or understand what's going on underneath. TUF
identifies the  updates, downloads them, and checks them
against the metadata that it also downloads from the repository. If the
downloaded target files are trustworthy, TUF hands them over to your software
update system. See [metadata](/metadata.html) for more information and examples.
