---
layout: default
css_id: participate
---

# Participate

We welcome questions, feedback, and suggestions on any aspect of this project.
Feel free to email feedback to [jcappos@nyu.edu](mailto:jcappos@nyu.edu).

Anyone in the automotive industry, open source community, or security community
is welcome to join the
[Uptane forum](https://groups.google.com/forum/#!forum/uptane-forum).
This is a fairly low volume mailing list (a few messages a week) and is used
to disseminate large news items, or to plan in person Uptane workshops.

### Standards Development
Though initiated under the auspices of the IEEE/ISTO Federation, which released V.1.0 of the Standards on July 31, 2019, future Uptane standardization initiatives will be under the direction of the Joint Development Foundation Projects, LLC, Uptane Series, a project of the Linux Foundation. A separate
[mailing list](https://groups.google.com/forum/#!forum/uptane-standards) is maintained specifically for this purpose.
This mailing list is higher volume (often multiple messages a day) and is
mainly meant to coordinate the standardization effort. To be added to this list, send an email to [lad278@nyu.edu](mailto:lad278@nyu.edu).

### JDF Project Uptane Membership Status
We welcome all interested parties to join either mailing list. However, if you wish to contribute to the text of any Uptane Standard document, you will need to join the project. Both individuals and companies can join as contributors. If multiple employees from the same company wish to participate, then one company registration would cover them all. If your
organization wishes to join the Uptane Alliance, please contact jcappos@nyu.edu
for more information on how to do so.

### Code Contributions
To make contributions to the reference
implementation or the demonstration code, please submit a GitHub
pull request to this repository using
[these development instructions](https://github.com/secure-systems-lab/lab-guidelines/blob/master/dev-workflow.md).
If submitting any new software feature or change, please include unit tests.

All submitted pull requests undergo review and automated testing, including, but
not limited to:
* Unit and build testing via Travis CI
* Review by one or more maintainers

### Code Issues, Bugs, Feature Requests

If you wish to report a bug or a security issue, or introduce a new feature to
either the reference implementation or demonstration code, please [open an issue](https://github.com/secure-systems-lab/lab-guidelines/issues/new)
on this.

While our main concern is the security of the specification, we are
also interested in hearing about security problems in our Reference
Implementation. It may be unlikely that cars will use the reference code directly.
However, reporting any problems users identify in the code can help prevent their
duplications in production implementations. Please report such issues
using our GitHub [issue tracker](https://github.com/uptane/uptane/issues).

### Security Audits

We welcome security audits of the Uptane design, or vulnerability reports of
the design or the code in this repository. Please contact lab director
[Justin Cappos](mailto:jcappos@nyu.edu) or maintainer [Sebastien Awwad](mailto: sebastien.awwad@nyu.edu).
Uptane design and implementation is defined in the [Uptane Standards document](https://uptane.github.io/uptane-standard/uptane-standard.html). A set of deployment guidelines is being prepared and will be added to this web site upon completion. These deployment guidelines should be viewed as complementary to the official Uptane standard.

Should the information be highly sensitive, auditors / reporters may employ
PGP encryption in an email to Justin Cappos using the public key whose PGP
fingerprint is: E9C0 59EC 0D32 64FA B35F  94AD 465B F9F6 F8EB 475A.

Audits of TUF alone (which Uptane employs) should be submitted
[per these instructions](https://github.com/theupdateframework/tuf/blob/develop/docs/GOVERNANCE.md#tuf-governance) to the TUF project team.
