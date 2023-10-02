---
title: "PURE Purpose and Guidelines"
---

- PURE: 1
- Title: PURE Purpose and Guidelines
- Version: 1
- Last-Modified: 19-July-2021
- Author: Marina Moore
- Status: Draft
- Content-Type: text/markdown
- Created: 09-July-2021

## What is a PURE?

PURE stands for Proposed Uptane Revision and Enhancement and offers a formal method for members of the community to propose the addition or modification of the Uptane specification. Both the method and the document format is largely modeled on the TUF Augmentation Proposal (TAP) used by The Update Framework (TUF). A PURE is a design document that describes a new feature for Uptane or for its processes or environment. Every PURE should provide both a concise technical specification of the feature and a rationale for the feature's inclusion.

We intend PUREs to be the primary mechanisms for proposing major new features, for collecting community input on emerging issues in cybersecurity, and for documenting the design decisions that have gone into the Uptane Standard. It is not a vehicle for making minor corrections or small modifications in the Standard. Such small changes should be addressed by opening a pull request on either the Standard or the Deployment Best Practices repository. The PURE author is responsible for building consensus within the community and documenting dissenting opinions.

Because the PUREs are maintained as text files in a versioned repository, their revision history is the historical record of the feature proposal.

## PURE Status

The status of a PURE indicates its progress through the development process. The different status classifications are defined below.

- A **Draft** PURE is one that has been proposed and is actively being worked on.
- An **Accepted** PURE is deemed ready to be integrated into the Uptane Standard.
- **Deferred** PUREs are potentially good ideas that are not being actively developed at this moment, or where progress is not being made.
- A **Rejected** PURE is one which the Uptane Steering Committee has decided is not ultimately a good idea.
- **Withdrawn** PUREs are submissions removed from consideration because their champions, or lead authors, have decided they are no longer worth pursuing.
- **Final** PUREs are complete and will no longer change. This means the proposed changes have been merged into the Uptane Standard.
- A **Superseded** PURE is one which has been rendered obsolete by a newer PURE.

## PURE Workflow

## Consensus Builder

Ultimate authority for changes to the Uptane Standard, including changes proposed through this PURE process, fall to the Standard's Steering Committee.

## Start with an Idea

The PURE process begins with a new idea for Uptane. It is highly recommended that each PURE contain only a single key proposal or new idea. Small enhancements or patches often do not require a PURE and can be injected into the Uptane Standard with a patch submission to the [Standards repository](https://github.com/uptane/uptane-standard).

The more focused the PURE, the more successful it tends to be. The Steering Committee reserves the right to reject PUREs if they appear too unfocused or too broad. If in doubt, split your PURE into several well-focused ones.

Each PURE MUST have a champion -- someone who writes the PURE using the style and format described below, shepherds the discussions in the appropriate forums, and attempts to build community consensus around the idea. The PURE champion (a.k.a. Author) SHOULD first attempt to ascertain whether the idea is feasible and beneficial to the Standard. Posting to the Uptane [issue tracker](https://github.com/uptane/uptane-standard/issues) or the [Uptane mailing list](https://groups.google.com/g/uptane-standards) are good ways to go about this.

## Submitting a PURE

Once the champion has asked the Uptane community whether an idea has any chance of acceptance, a draft PURE SHALL be presented as a [pull request](https://github.com/uptane/pures/pulls) to the PUREs repository. The draft MUST be written in the style described below, or it will immediately fail review.

Once a submission is approved for inclusion in the PURE repository, the repository maintainers will assign it a number, mark its status as "Draft", and merge the initial draft. The maintainers will not unreasonably deny Draft status to a PURE. Reasons for denying a PURE at this stage include a fundamentally unsound technology base, duplication of effort, weak or insufficient motivation, backwards compatibility issues, or a submission that is simply not in keeping with the Uptane philosophy. Members of the Uptane community may be consulted during the approval phase, with the Steering Committee as the final arbiter of the draft's viability as a PURE.

As updates are necessary, the PURE author can submit new versions by opening additional [pull requests](https://github.com/uptane/pures/pulls) against the repository.

It is generally recommended that at least a prototype implementation be co-developed with the PURE, as ideas that sound good in principle sometimes turn out to be impractical when subjected to the test of implementation. However, a prototype is not required by the PURE process.

PURE authors are responsible for collecting community feedback on a PURE before submitting it for review. All comments should be gathered on a [GitHub issue](https://github.com/uptane/pures/issues) specific to the PURE. It is recommended that feedback be solicited via the [Uptane mailing list](https://groups.google.com/g/uptane-standards) and in the Uptane community meeting.

## PURE Review & Resolution

Once feedback has been gathered, a change of the PURE to "Accepted" status MUST be requested via the PUREs [issue tracker](https://github.com/uptane/pures/issues) or a [pull request](https://github.com/uptane/pures/pulls). PUREs are reviewed by the maintainers, who may accept or reject a PURE or send it back to the author(s) for revision.

In order to move a PURE from "Accepted" to "Final" status, the changes to the Uptane Standard MUST be completed and merged.

A PURE can also be "Rejected," if it becomes evident to the PURE editors that the proposed change was not a good idea. In this case, the "Rejected" status serves as a record of this decision. The "Withdrawn" status serves a similar function. In this case, it is the author who has decided that the PURE is actually a bad idea, or has accepted that a competing proposal is a better alternative.

When a PURE is Accepted, Rejected, or Withdrawn, the PURE should be updated accordingly.

PUREs can also be "Superseded" by a different PURE, rendering the original obsolete.

## PURE Maintenance

In general, PUREs are no longer modified after they have reached the "Final" state. Once a PURE has been completed, the Uptane Standard becomes the formal documentation of the expected behavior.

## What belongs in a successful PURE?

Each PURE SHOULD have the following parts:

1. _Preamble_ -- [RFC 822](https://tools.ietf.org/html/rfc822) style headers containing meta-data about the PURE, including the PURE number, a short descriptive title (limited to a maximum of 44 characters), the names, and optionally the contact info for each author, etc.

2. _Abstract_ -- a short (~200 word) description of the technical issue being addressed.

3. _Motivation_ -- Any proposal seeking to change Uptane requires a strong and compelling motivation. It should clearly explain why the existing standard is inadequate to address the problem that the PURE solves. It should further describe what motivated the design of the PURE and what particular design decisions were made. It should describe any alternative designs that were considered and how the feature is supported in other frameworks. PURE submissions without sufficient motivation may be rejected outright.

4. _Specification_ -- The technical specification should describe the syntax and semantics of any new feature. The specification should be detailed enough to allow competing, interoperable implementations for existing Uptane implementors.

5. _Security Analysis_ -- The PURE should show, as simply as possible, why the proposal would not detract from existing security guarantees. (In other words, the proposal should either maintain or add to existing security.) This need not entail a mathematical proof. For example, it may suffice to provide a case-by-case analysis of key compromise over all foreseeable roles. To take another example, if a change is made to a delegation, it must preserve existing delegation semantics (unless the PURE makes a good argument for breaking those semantics).

6. _Backwards Compatibility_ -- All PUREs that introduce backwards incompatibilities must include a section describing these incompatibilities, their severity, and how the author proposes to deal with them. PURE submissions without a sufficient backwards compatibility treatise may be rejected outright.

7. _Copyright_ -- Each PURE must either be explicitly labeled as placed in the public domain (see this PURE as an example) or licensed under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

## PURE Formats and Templates

PUREs are UTF-8 encoded text files using the [Markdown](https://daringfireball.net/projects/markdown/) format. Markdown allows for rich markup that is still quite easy to read, but also results in good-looking and functional HTML.

In-line with the Standard, the keywords "MUST," "MUST NOT," "REQUIRED," "SHALL," "SHALL NOT," "SHOULD," "SHOULD NOT," "RECOMMENDED," "MAY," and "OPTIONAL" in a PURE are to be interpreted as described in [RFC 2119](https://tools.ietf.org/html/rfc2119).

## PURE Header Preamble

Each PURE MUST begin with an RFC 822 style header preamble. The headers MUST appear in the following order. Headers marked with "+" are OPTIONAL and are described below. All other headers are required.

- PURE: <PURE number/>
- Title: <PURE title/>
- Version: <version string/>
- Last-Modified: <date string/>
- Author: <list of authors' real names and optionally, email addresses/>
- Status: <Draft | Accepted | Deferred | Rejected | Withdrawn | Final | Superseded/>
- +Content-Type: <text/markdown>
- +Requires: <pure numbers/>
- Created: <date created on, in dd-mmm-yyyy format/>
- +Uptane-Version: <version number/>
- +Replaces: <PURE number/>
- +Superseded-By: <PURE number/>

The Author header lists the names, and optionally the email addresses of all the authors/owners of the PURE. The format of the Author header value SHOULD be "Random J. User <address@dom.ain>".

The format of a PURE is specified with a Content-Type header. The acceptable values are "text/markdown" for Markdown PUREs. Markdown ("text/markdown") is the default if no Content-Type header is present.

The Created header records the date that the PURE was assigned a number and SHOULD be in dd-mmm-yyyy format, e.g. 14-Aug-2001.

PUREs will typically have an Uptane-Version header which indicates the version of Uptane that the feature will be released with. PUREs that refer to processes or recommendations do not require a Uptane-Version header.

PUREs MAY have a Requires header, indicating the PURE numbers on which this PURE depends.

PUREs MAY also have a Superseded-By header indicating that it has been rendered obsolete by a later document; the value is the number of the PURE that replaces the current document. The newer PURE must have a Replaces header containing the number of the PURE that it rendered obsolete.

## Auxiliary Files

PUREs MAY include auxiliary files such as diagrams or reference implementations. These files MUST be named `pure-XXXX-Y.ext`, where "XXXX" is the PURE number, "Y" is a serial number (starting at 1), and "ext" is replaced by the actual file extension (e.g. "png").

## Reporting PURE Bugs, or Submitting PURE Updates

The procedure for reporting a bug, or submitting a PURE update depends on several factors, such as the maturity of the PURE, the preferences of the PURE author, and the nature of the comments. For Draft or Accepted PUREs, feedback should be via the PUREs [issue tracker](https://github.com/uptane/pures/issues) or as a pull request against the PURE in question.
Once a PURE has been marked Final, bugs or corrections SHOULD be submitted to the Uptane [issue tracker](https://github.com/uptane/uptane-standard/issues) so that changes do not get lost.

## Transferring PURE Ownership

It occasionally becomes necessary to transfer ownership of PUREs to a new champion. In general, it is preferable to retain the original author as a co-author of the transferred PURE, but that is really up to the individual. A good reason to transfer ownership is because the original author no longer has the time or interest in updating it or following through with the PURE process, or is unreachable (or not responding to email). A bad reason to transfer ownership is because the author doesn't agree with the direction of the PURE. One aim of the PURE process is to try to build consensus around a PURE, but if that's not possible, an author can always submit a competing PURE.

If you are interested in assuming ownership of a PURE, send a message stating that request to both the original author and the [Uptane mailing list](https://groups.google.com/g/uptane-standards). If the original author does not respond to the email in a timely manner, the Uptane team will make a unilateral decision, though such decisions may be reversible.

## Copyright

This document has been placed in the public domain.

## Acknowledgements

This PURE was heavily borrowed from [TAP 1](https://github.com/theupdateframework/taps/blob/master/tap1.md).
