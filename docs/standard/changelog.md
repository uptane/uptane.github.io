---
sidebar_position: 3
title: ChangeLog
---

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2023-06-6

V.2.1.0 is a minor release containing no breaking changes. The changes it includes, which are detailed below, are largely wording clarifications. The most significant addition is referencing the Scudo option as an augmentation for software supply chain security in automobiles.

### Added

- A clearer definition of the term “conformant” as it applies to Uptane.
- A security policy that outlines how errata can be reported and how reports will be addressed.
- A file stating that the Uptane Standard and Deployment Best Practices is licensed under Apache.
- A mention of Scudo as an Uptane augmentation in the “Out of Scope” text in the Standard as a clarification of Uptane’s involvement in software supply chain security.

### Changed

- The term “Uptane-compliant” to “Uptane-conformant” to clarify that the framework is a standard to follow rather than a regulation that must be adhered to.
- Metadata distribution requirements for secondaries to allow more flexibility when there are no new downloads for a given ECU.
- Relaxed the requirement that verification of Targets metadata be considered complete if the Directory repository indicates that there are no new targets.
- Relaxed the requirement that the Director repository SHALL check the time sent in the ECU report to a SHOULD.

### Removed

- All mentions of the Reference Implementation, which has now been clearly marked as obsolete.
- The term “private key” to reduce confusion about the role of these keys.
- Removed redundant and unclear wording from the description of the Root role in Section 5.1.1.
