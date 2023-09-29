---
sidebar_position: 1
title: "POUF Purpose and Guidelines"
---

- Title: POUF Purpose and Guidelines
- Version: 1.0.0
- Last-Modified: 17-06-2019
- Author: Marina Moore
- Created: 14-03-2019

# Uptane Implementation POUFs

This repository will contain links to Uptane POUFs.

## What is a POUF?

A guiding principle of the Uptane framework is to give each implementer as much design flexibility as possible, acknowledging that Uptane needs to run on existing, often customized, software and hardware systems. For this reason, the framework does not specify data binding formats. Yet, this means Uptane can not guarantee interoperability. To provide a way for two or more Uptane implementations to work together, the framework employs a mechanism to describe the protocols, operations, usage, and formats (POUF). A POUF precisely specifies the wireline format and operations that any implementation using it must obey. Hence, implementations that use the same POUF are able to interoperate. In particular, this can be important for ECU suppliers, so that they can have a detailed specification to work with.

A POUF contains all the information needed for a third party to design a compatible Uptane implementation. This includes the protocols and contents of all data transmitted on the wire as well as design choices that impact the functionality of the system. The POUF functions like a layer placed over the existing Uptane specification, so certain requirements, such as filenames, file contents, and signatures, do not need to be restated in the POUF. The only restriction placed upon the creation of any POUF is that it MUST NOT alter or violate anything defined in the Uptane Standard.

## Adding POUFs

Each POUF is effectively under the control of its author, and its contents will not be subject to the level of scrutiny or analysis the community provides to the Uptane specification. Instead, the main role of the Uptane community in the POUF process will be to provide a common repository with links to external POUFs.

The format of POUFs and this document are inspired by TAPs (<https://github.com/theupdateframework/taps/blob/master/tap1.md>).

### POUF Contents

A POUF should include the following sections:

#### Preamble

RFC 822 style headers containing metadata about the POUF, including the POUF number, a short descriptive title (limited to a maximum of 44 characters), optionally the names and contact info for each author, etc. The header should include:

- POUF: POUF number
- Title: Title of the POUF
- Version: POUF Version (Note: It is recommended that the major POUF version matches the major version of the Uptane Standard, but any versioning scheme is permitted.)
- Last-Modified: in dd-mmm-yyyy format
- Author: optional list of authors' real names and email addresses
- Status: Draft / Accepted / Obsolete
- Uptane Version: The Uptane version(s) this POUF implements (for example 1.0.0 or 2.0.3-2.0.6)
- Created: date created on, in dd-mmm-yyyy format

#### Abstract

The abstract provides a short overview of what the POUF contains. This SHOULD include the overarching design philosophy. If the POUF has been updated, the abstract SHOULD explain what is changed in the new version.

#### Protocols

The protocols section will describe the communications over the network. This will include the protocols used to transmit data. If relevant, the version of the protocol and any customizations SHOULD be explained so that any implementer will have a bitwise-identical use of the protocol. In addition, all messages that will be transmitted MUST be explained using a Message Handler Table. This table will include all messages that will be transmitted by the implementation. Each entry SHALL include at least the sender, receiver, data (including signatures), and the expected response.

#### Operations

The operations section contains a description of any design elements that differ from the Uptane Standard. This section will not include the format of data, but will include all other elements of the POUF. Any MAYs and SHOULDs from the Uptane Standard SHALL be described here. In particular, any optional features (MAYs) or recommendations (SHOULDs) from the specification SHALL be mentioned with justification for why the feature was or was not used. In addition, any feature added to the specification that is needed for compatibility MUST be explained.

#### Usage

The usage section will contain a description of how the operators of the Uptane implementation manage keys and responsibilities of the system. This will include a description of how online and offline keys are managed and rotated, how the supply chain is managed, and how images are generated. In addition, it MUST include a Data Table that describes all data stored on each Uptane entity. This includes which keys are stored on each entity as well as any other required data. At a minimum, data stored on Primary ECUs, Secondary ECUs, the director repository, and the image repository MUST be described in the Data Table.

#### Formats

Data formats contain details about the encoding and format of Uptane data as it is stored. The encoding MUST describe how data is formatted when it is stored on repositories and ECUs. Data that is not transmitted does not need to be included in a POUF. Descriptions of formats SHALL include the order of fields to allow for bitwise identical implementations. Every bit of transmitted data MUST be accounted for in the POUF. This section MAY include common formatting used by all metadata files to avoid redundancy. At a minimum, this section will include the format for the following data, including all fields required by the Uptane specification:

- Root
- Snapshot
- Targets
- Delegated targets
- Timestamp
- Vehicle version manifest

Each file that is transmitted should be described. In addition to the required files, the following MAY be included:

- Time server communication
- Repository mapping metadata

#### Copyright

Each POUF MAY either be explicitly labeled as placed in the public domain or licensed under the [Open Publication License](https://opencontent.org/openpub/).

### Workflow

A POUF may be authored by any Uptane implementer and is the responsibility of that implementer. The Uptane community does not vet POUFs, so conformance with the requirements in this document are left up to the POUF implementer.

The Uptane community does not endorse POUFs, but does store links to external POUFs so that they can be found by the community. Links to POUFs will be stored on the [Uptane POUF repository](https://github.com/uptane/POUFs). This allows a POUF to be publicly found and implemented. To get a POUF onto the Uptane POUF repository, a link to the POUF will be submitted using the Github pull request process. If an implementer wishes to post a POUF anonymously, they MAY ask an Uptane maintainer to post a POUF link on their behalf.

#### Posting a POUF

A POUF SHALL be posted to the Uptane repository by submitting a pull request. The pull request SHALL contain a link to a POUF written in the format specified in [POUF Contents](#pouf-contents). This link will be added to POUF-links file. A POUF SHALL contain a complete description of the data transmitted, SHALL not duplicate an existing POUF, and MUST be technically sound.

Once a link to a POUF is included on the Uptane POUF repository, it will be assigned a POUF number. The POUF number will be unique, but will remain the same for any subsequent changes to the POUF. The POUF number will be listed in the POUF and in the POUF-links file.

A posted POUF SHOULD be implemented. This implementation MAY be open or closed source. If the implementation is closed source, the author SHOULD attest that the POUF can be implemented in the abstract.

The link posted on the Uptane POUF repository MAY be a direct link to the POUF document or MAY be a link to a repository or directory that contains the POUF. If the link posted points to a directory or repository, old versions of the POUF MAY be maintained by the POUF author. If the author instead links directly to a POUF pdf, this link will have to be updated on the Uptane POUF repository to contain the updated POUF.

#### Updating a POUF

If a change is made to an accepted POUF, the POUF version SHALL be updated. The old version of the POUF MAY continue to be stored and used. Maintaining old POUF versions is the responsibility of the POUF author. If any update to a POUF eliminates the need for an old POUF version, the old POUF SHOULD be marked as Obsolete.

An updated POUF might fix a bug or add a feature that is not included in the Uptane Standard. The abstract of the updated POUF SHOULD explain why the POUF is being updated and which sections have changed. This will allow any implementer who used the previous version of the POUF to update their implementation to the new POUF.

Every time the Uptane Standard has a major change (as indicated by the first number in the version), a POUF MUST be updated to support the new standard version. A major change to the Uptane Standard is not backwards compatible, so the POUF MUST be updated to include any new or updated features. Once the changes are added to the POUF, the POUF version and Uptane Version in the preamble MUST be updated as well. The old version of the POUF may be maintained for implementations that have not updated to the new version of the Uptane Standard.

If a minor change is made to the Uptane Standard, the POUF SHOULD be updated if the change affects any aspect of the POUF contents. The decision about whether a minor change will cause the POUF to update is left up to the POUF maintainer. If a change is not made but the POUF still complies with the most recent Uptane Standard, the Uptane Version in the Preamble SHOULD be updated.

## Using POUFs

When an Uptane implementation uses a POUF, it should list the POUF number (or numbers) in its documentation. If the implementation is updated to a new POUF version, the POUF number should also be updated in the documentation.
