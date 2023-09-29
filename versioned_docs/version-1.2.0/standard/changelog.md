---
sidebar_position: 3
title: ChangeLog
---

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2021-07-16

As this is the second minor release issued in 2021, the short list of changes made to the Uptane Standard between January 8 and July 2 of this year were primarily wordsmithing corrections to improve clarity.

### Added

- A "SHOULD" requirement to the Standard that recommends including vehicle identifiers to targets metadata in order to avoid replay attacks. The sentence "Targets metadata from the Director repository SHOULD include a vehicle identifier if there are no images included in the targets metadata" was added to Section 5.2.3.1.

- The word "unique" wherever the Standard mentions key thresholds. This is to clarify that multiple signatures from the same key do not count as a threshold.

### Changed

- The location of the "Terminology" section. All definitions have been moved to the Glossary section of the Deployment Best Practices document.

### Removed

- The use of the phrase "secondary storage," because this usage was very unclear. Instead, the Standard now refers to secondaries with "limited storage to receive an image."
