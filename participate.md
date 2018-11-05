# Participate

We welcome questions, feedback, and suggestions on any aspect of this project.
Feel free to email feedback to [uptane@googlegroups.com](uptane@googlegroups.com).
One may also propose design changes or inquire about deployment
challenges by emailing [the mailing list](uptane@googlegroups.com).

Anyone in the automotive industry, open source community, or security community
is welcome to join the
[Uptane forum](https://groups.google.com/forum/#!forum/uptane-forum).
This is a fairly low volume mailing list (a few messages a week) and is used
to disseminate large news items, or to plan in person Uptane workshops.


### Standards Development
The Uptane standardization initiative is under the direction of the Uptane
Alliance and is carried out on a
[mailing list specifically for this purpose](https://groups.google.com/forum/#!forum/uptane-standards).
This mailing list is higher volume (often multiple messages a day) and is
mainly meant to coordinate the standardization effort.


### Uptane Alliance Membership Status
We welcome all interested parties to join either mailing list, independent of  
your organization's status in the IEEE/ISTO Uptane Alliance.  (However, if your
organization does wish to join the Uptane Alliance, simply fill out
[this form](assets/UptaneAllianceMembershipAgreement.pdf) and check the
Contributor Membership box. There is no fee.)


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
Implementation. While cars are unlikely to use the reference code directly,
reporting any problems users identify in the code can help prevent their
duplications in production implementations. Please report such issues
using our GitHub [issue tracker](https://github.com/uptane/uptane/issues).


### Security Audits

We welcome security audits of the Uptane design, or vulnerability reports of
the design or the code in this repository. Please contact lab director Justin
Cappos or maintainer Sebastien Awwad at the emails listed on the "People" page.
Uptane is defined in
[the three documents listed here](README.md#design-documentation).

Should the information be highly sensitive, auditors / reporters may employ
PGP encryption in an email to Justin Cappos using the public key whose PGP
fingerprint is also listed on the "People" page.

Audits of TUF alone (which Uptane employs) should instead be submitted
[per these instructions](https://github.com/theupdateframework/tuf/blob/develop/docs/GOVERNANCE.md#tuf-governance) to the TUF project team.
