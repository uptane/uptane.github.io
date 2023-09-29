---
sidebar_position: 3
title: ChangeLog
---

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2022-01-18

As the first major release since 1.0.0 was issued on July 31, 2019, the new version contains several breaking changes that could affect backwards compatibility. However, several of these changes also provide greater flexibility for the implementer. Probably the most significant change was removing references to the Uptane Time Server, to clarify that users can make their own decisions about secure sources of time, as long as it is reliable. On the whole, V.2.0.0 should make implementation on legacy systems easier rather than more complex.

### Added

- The actual RFC 2119 definitions to the Standard, and a statement of caution about the use of imperatives in that document. The definitions to terms MUST and MUST NOT are excluded in keeping with the decision to only use the terms SHALL or SHALL NOT when referring to actions in the Standard that mandate compliance.

- A note restricting the use of imperatives to instances where they are actually required for interoperation or to limit behavior which has potential for causing harm.

- A qualifying note distinguishing between signing keys and secret keys used to decrypt images. The former are required to be unique to the ECU to avoid replay attacks, but the latter need not be unique.

- A recommendation that filenames of images SHOULD be encoded to prevent a path traversal on the client system, either by using URL encoding or by limiting the allowed character set in the filename.

### Changed

- Policy on when changes to the Standard become “official” by adding the following statement to the Standard repository, “As the Standard is a living document, updates are made in real time as needed. However, these changes will not be considered formally adopted until the release of the next minor or major version.”

- The wording used to refer to actions in the Standard that require compliance from a mix of SHALL and MUST to just SHALL. Previously, the two words were used interchangeably in the document. However, in other contexts, there are subtle differences in the meaning of these words. By consistently using just SHALL, it reduces any possible confusion.

- The stipulation in Section 5.4 that ECUs monitor the download speed of image metadata and image binaries to detect and respond to a slow retrieval attack from a SHOULD to a SHALL.

- The stipulation in Section 5.4.3.4 that ECUs check that the length of the image matches the length listed in the metadata from a SHOULD to a SHALL.

- The description of the relationship between Primaries and Secondaries if a vehicle has multiple Primaries. It is now described this way: “If multiple such Primaries are included within a vehicle, each Primary SHOULD have a designated set of Secondaries.”

- The stipulation in Section 5.2.3.1 that a vehicle identifier be used in a situation where Targets metadata from the Director repository include no images from a SHOULD to a SHALL. The stronger compliance word is needed to prevent replay attacks.

### Removed

- All references to the Uptane Time Server. While having a secure source of time is still mandated as a requirement for compliance, we are no longer recommending the Uptane Time Server as that source. Several other time source options are discussed in the [“Setting up Uptane Repositories” section of Deployment Best Practices](https://uptane.github.io/deployment-considerations/repositories.html).
