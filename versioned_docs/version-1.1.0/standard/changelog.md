---
sidebar_position: 3
title: ChangeLog
---

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2021-01-08

The changes made to the Uptane Standard since its initial release on July 31, 2019, have principally addressed issues of style, clarity, and the resolution of inconsistencies. As a result, the majority of text edits and additions seek to correct wording in the original text that could potentially be misleading.

### Added

- A style guide to impose consistency in spelling, capitalization of roles and repository names, and use of punctuation.

- A policy for how to link to the Standard or any specific portion of it. Any links to the Standard from other documents should point to the latest released version, and should link by section name, not number, as the numbers tend to change more than the names.

- A document archive policy to add a stable copy of each version of the Standard to the repository, starting with the initial IEEE/ISTO V.1.0.0 document.

- A new entry to the list of what is "Out of scope" for the Standard: "Compromise of the packaged software, such as malware embedded in a trusted package."

- The option to use a counter (instead of a nonce) in the ECU Version Report, and the purpose of the nonce in the step-by-step instructions for preparing this report.

- A clarification that metadata is required at manufacturing time, and a rationale for why preinstalled metadata is needed. This step enables an ECU to authenticate that a remote repository is legitimate when it first downloads metadata in the field, which can serve as a defense against rollback attacks.

- A clarification that there is no need to download all metadata from the Image repo if the Director indicates there are no new updates to install.

- A clarification about the manner in which we identify images by their hash. It specifies that if the Primary has received multiple hashes for a given image binary via the Targets role, then it SHALL verify every hash for this image. This step is to be performed even if the image is identified by a single hash as part of its filename.

- A clarification that full verification MUST be performed by Primary ECUs and MAY be performed by Secondary ECUs.

- A missing reference to the Standard pointing to the Time Server description in _Uptane Deployment Best Practices._

### Changed

- The name of our deployment considerations document. It is now _Uptane Deployment Best Practices_ to better reflect naming conventions within the community.

- The way steps are referenced in the ECU process for verifying the latest downloaded metadata.

- Several numbering references in the full verification process, and "Step 0" in the procedure for checking Root metadata.

- Moved a Targets metadata check for unrecognized ECU IDs to a more logical place in the series of checks.

- Resolved an inconsistency in how checking hashes of images is discussed.

- Aligned naming of example hashes with [NIST policy](https://csrc.nist.gov/projects/hash-functions/nist-policy-on-hash-functions) on hash functions. This change was also made to demonstrate that Uptane is not tied to any particular set of algorithms.

- Specified that the ECU SHOULD check that the length of the image matches the length listed in the metadata in the procedure for checking hashes.

- Modified wording to make verifying a time message optional if the ECU does not have the capacity to do so.

- Replaced phrases that were incorrect, or could be mistaken for another object or function. These included the phrases _target metadata,_ _image metadata,_ _ECU version manifest,_ and _Uptane Standards_ (plural, instead of singular).

- Corrected additional capitalization and punctuation usages for consistency, including imposing the consistent use of the Oxford comma in a series of items within a sentence, and placing a comma after e.g. and i.e.

- Corrected other stylistic/formatting issues that interfered with clarity, such as extraneous commas and use of whitespace.

- Replaced phrases that were incorrect, or could be mistaken for another object or function. These included the phrases _target metadata,_ _image metadata,_ _ECU version manifest,_ and _Uptane Standards_ (plural, instead of singular).

- Switched a MAY to a SHOULD in the statement “Full verification MUST be performed by Primary ECUs and SHOULD be performed by Secondary ECUs,” to be consistent with references elsewhere in the Standard.

- Credited the document’s authorship to the Uptane Community, and changed the organization name from the Uptane Alliance to Joint Development Foundation Projects, LLC, Uptane Series.

### Removed

- Removed words from the opening definition section that are not used in the Standard.

- Removed references to TAP 5 in three places in the Standard. TAP 5 has been more or less replaced by TAP 13, but the latter has not yet been approved.
