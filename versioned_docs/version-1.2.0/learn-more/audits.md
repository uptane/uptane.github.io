---
sidebar_position: 7
---

# Security Audits

Both Uptane and TUF, the secure framework on which it was based, have undergone a number of security audits. Given the proprietary nature of the automotive industry, some links to these reports are not publicly listed. To request the full text of an omitted audit, please [reach out to us](https://uptane.github.io/participate.html).

- **Cure53:** A 2016-2017 audit of an Advanced Telematic Systems/HERE Inc. implementation of Uptane. No security issues were found related to the design. However, based upon their recommendation, [a minor clarification](https://github.com/theupdateframework/taps/blob/master/tap9.md) was made in the upstream TUF specification.

- **NCC Group:** A late 2017 assessment of Kolide's TUF implementation. [The study](https://www.nccgroup.com/globalassets/our-research/us/public-reports/2017/ncc-group-kolide-the-update-framework-security-assessment.pdf) found 0 critical risk issues, 0 high risk issues, 0 medium risk issues, 1 low risk issue, and 1 informational issue. The two issues identified were minor, relating to the particular implementation's default configuration and the way it stored backups.

- **SWRI** Performed in 2018, this review by the Southwest Research Institute found no design issues that impacted the Uptane specification or adopter code.
