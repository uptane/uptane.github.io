---
sidebar_position: 5
title: Contributing
---

# Contributing

We welcome questions, feedback, and suggestions on any aspect of this project. Feel free to email feedback to jcappos@nyu.edu.

Anyone in the automotive industry, open source community, or security community can keep abreast of current and pending developments within the project by joining the [Uptane Forum](https://groups.google.com/forum/#!forum/uptane-forum). This mailing list is used primarily to promote workshops, to announce pending releases of the Standard and other publications, or to gain consensus around issues critical to the future development of the project.

## Membership

Interested parties can be part of the project by attending our biweekly Standards meetings (Tuesdays from 10:00 to 11:00 a.m. Eastern time), sharing comments on the project mailing lists, or opening issues on one of the project’s GitHub repositories. We have also opened a [Discord channel](https://discord.gg/DcKtGWV7C6) where questions and discussions can be raised. Though Uptane is hosted by the [Joint Development Foundation](https://jointdevelopment.org/), neither an individual nor corporate membership in this organization is required to be active in the Uptane community.

If, however, your organization does wish to formalize its relationship with the Joint Development Foundation, please contact jcappos@nyu.edu for more information on how to do so. There is no charge to join the JDF.

## Standards Development

The continued maintenance and ongoing development of the Uptane Standard is the responsibility of a team of volunteers who work under the direction of the Uptane Steering Committee. As mentioned above, the group meets on a biweekly basis, and also maintains a [mailing list](https://groups.google.com/forum/#!forum/uptane-standards) to
both solicit input on issues specific to the Standard and/or Deployment Best Practices documents, and promote educational and outreach programs supported by the community.

## Code Contributions

To make contributions to this or any other Uptane repository on GitHub, please submit a pull request to this repository using [these development instructions](https://github.com/uptane/uptane.github.io/blob/main/README.md). If submitting any new software feature or change, please include or update appropriate unit tests.

All submitted pull requests undergo review and automated testing, including, but not limited to:

- Unit and build testing via Travis CI
- Review by one or more maintainers

## Code Issues, Bugs, Feature Requests

If you wish to report a bug or a security issue, or introduce a new feature to the specification, please [open an issue](https://github.com/uptane/uptane-standard/issues/new) on this.

## Security Audits

We welcome security audits of the Uptane design and vulnerability reports of the design or any code in the [Uptane GitHub namespace](https://github.com/uptane). Please contact lab director [Justin Cappos](mailto:jcappos@nyu.edu). Uptane design and implementation is defined in the [Uptane Standards document](https://uptane.github.io/uptane-standard/uptane-standard.html) and supplemented by the [Deployment Best Practices document](https://uptane.github.io/deployment-considerations/index.html).

Should the information be highly sensitive, auditors / reporters may employ PGP encryption in an email to Justin Cappos using the public key whose PGP fingerprint is: E9C0 59EC 0D32 64FA B35F 94AD 465B F9F6 F8EB 475A.

Audits of TUF alone (which Uptane employs) should be submitted [per these instructions](https://github.com/theupdateframework/tuf/blob/develop/docs/GOVERNANCE.md#tuf-governance) to the TUF project team.
