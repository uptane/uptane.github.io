---
title : "Scudo: Addressing Software Supply Chain Security in Uptane"
---


- PURE: 3
- Title: Scudo: Addressing Software Supply Chain Security in Uptane
- Version: 1
- Last-Modified: 2023-02-28
- Authors: Marina Moore <marinamoore@nyu.edu>, Aditya Sirish <aditya.sirish@nyu.edu>, Lois Anne Delong <lad278@nyu.edu>
- Status: Accepted
- Content-Type: <text/markdown>
- Created: 2022-03-30

## Abstract

Software supply chain attacks are on the rise. A 2022 Sonatype report found a
742% increase in the last three years. As a result, companies across all
industry sectors have turned their attention to software supply chain security.
The need to find solutions quickly is further fueled by rapidly increasing
regulations and standards, including President Biden’s U.S.Executive Order 14028.

In this PURE, we propose Scudo, a framework that combines the compromise
resilience and secure delivery protection of Uptane and the end-to-end software
supply chain security guarantees offered by in-toto. It describes how in-toto
metadata can be integrated into an automotive software supply chain that already
uses Uptane. It further establishes verification responsibilities for ECUs based
on the resources they possess and presents a stop-gap option for automobiles
with no sufficiently capable ECUs.

## Motivation

Software supply chain attacks are on the rise with the
[2022 State of the Software Supply Chain report](https://www.sonatype.com/state-of-the-software-supply-chain/introduction),
noting a 742% increase over the course of the last three years. But, it was the
[2020 Sunburst attack](https://www.cynet.com/attack-techniques-hands-on/sunburst-backdoor-c2-communication-protocol/)
that really made both government and corporate CISOs take action. Affecting more
than 100 companies and nine government agencies, the cause of the attack was
Sunburst malware that had been uploaded via a routine update from Orion software
produced by SolarWinds. The attack taught both public and private concerns some
hard lessons, such as:

- The very thing designed to protect the security of software-patches and
  updates that fix routine vulnerabilities-can also be used to deliver malware
  that can damage or corrupt.
- As software products contain third-party components, program developers are
  not in complete control of the contents of their products.
- Malware can linger undetected for extended periods of time, allowing it to
  infect every system that touches it. The Sunburst malicious code was part of
  an update released by SolarWinds in the spring of 2020, yet it was not
  reported until December of that year.

Automotive software supply chains are particularly tempting targets for
attackers. This is because automotive software runs on a large number of
vehicles and updating all of them to recover quickly from an attack is a
slow and difficult proposition. As such, a successful software supply chain
attack means that thousands (or more) of vehicles are impacted. Any attack that
targets a large number of vehicles on roads can do immeasurable damage. Further,
while Uptane can securely deliver updates to vehicles to recover from the
attack, ensuring every vehicle on the road receives the update immediately is
very difficult given the circumstances of use of these vehicles. Therefore,
strategies that can secure automotive software supply chains are vital to
_avoid_ such attacks altogether.

Governments around the world have recognized this fact. Regulations are
forthcoming from the United Nations and other governing bodies, and standards
have been published that specify how software running on automobiles must be
secured. President Biden of the United States of America issued an Executive
Order describing the need to improve the nation's cybersecurity. This EO, in
particular, pushes for solutions like Software Bills of Materials (SBOMs) that
list the components of software artifacts. This information is vital in ensuring
developers are aware of the components in their supply chain so that they can
fix vulnerabilities as and when they are discovered. For example, an SBOM would
help developers react quickly to situations like 2021's log4j incident by
informing them of the software products that require patches or updates.

Unfortunately, SBOMs do not provide end-to-end software supply chain security.
They do not guarantee the integrity of either the operations performed as part
of the software supply chain, or the artifacts they consume and produce. An SBOM
also cannot help with verifying that each operation was performed by authorized
actors, or indeed that all required operations were in fact performed. So, the
use of SBOMs will not prevent attacks like that against SolarWinds, which used a
compromised build server. A more comprehensive framework is necessary and is
described in this document.

## Reasoning

in-toto is a comprehensive framework that secures each step in the software
supply chain. With in-toto, software supply chain owners can enforce policies
pertaining to the flow of artifacts through the supply chain, and provide proof
that authorized people or bots made changes to artifacts at any given step.
Thus, in-toto can be used to secure software from the very first step all the
way through the development pipeline. Furthermore, the framework plays well with
other systems and tools that attempt to secure specific aspects of the software
supply chain. in-toto is integrated into build tools and systems like Jenkins
and Tekton, and is compatible with complementary software supply chain security
efforts such as SLSA, Grafeas, Sigstore, and SBOMs.

## Specification

Note: The reader is expected to be familiar with the
[in-toto Specification](https://github.com/in-toto/docs/blob/master/in-toto-spec.md).

We describe how in-toto can be used to achieve software supply chain security
alongside the Uptane deployment. In such a model, in-toto can be backed by
the Uptane root of trust, and use Uptane's delegation structure to distribute
all of in-toto's metadata. Essentially, in-toto metadata is used to attest to
the steps performed in the software supply chain itself, while Uptane is used
to securely distribute that metadata alongside the ECU images. This combination
of in-toto for software supply chain guarantees and Uptane for secure
distribution of ECU images and in-toto metadata is called Scudo.

### Modifications to the Repositories and Vehicle Interactions

To implement Scudo, Uptane's Image repository will need to be updated to enable
it to store in-toto metadata alongside the images. While the Director repository
can also be used, the Image repository is recommended as its contents are
typically signed for using offline keys.

When an image is submitted to the Image repository, it MUST be accompanied by
its in-toto metadata. The in-toto layout and link metadata for every image are
noted in the opaque "custom" field of the image's entry in Targets metadata.
This way, there is no ambiguity about the in-toto metadata to be used when an
image is fetched and verified. Further, as it MAY not be practical for the top
level Targets role to issue new metadata for every update, Uptane's delegations
model can be used to make this entire process more scalable. Instead, delegated
roles can be used to sign for the image itself and its in-toto link metadata.
However, in-toto layouts and the key artifacts used to verify them SHOULD be
signed for by roles that use _offline_ keys. An example of such a role
in typical deployments is the top level Targets role.

As the Image repository handles in-toto metadata for the images, the Director
repository has no additional responsibilities than those specified in the Uptane
standard. Once the Director repository decides which images are required and
signs Targets metadata for them, the vehicle MUST fetch the images and all the
corresponding metadata using the interfaces provided by both the repositories.
From the Director repository, the automobile receives Uptane metadata only. From
the Image repository, the automobile receives Uptane metadata, the image itself,
and its corresponding in-toto metadata.

### Full Verification ECUs

The Primary ECU receives images and metadata from the repositories, and sends
them on to the other ECUs that it updates. Each Full Verification ECU is
extended to perform independent in-toto verification that will be secure even
if the Primary ECU is compromised. Some Full Verification ECUs, for example the
Primary, are also expected to perform in-toto verification on behalf of Partial
Verification ECUs that are resource constrained.

For every target image the client needs to install, the corresponding in-toto
layout, links, and keys are identified via the custom field of the existing
Uptane metadata. These files are available as targets on the Image repository.
Therefore, for each installable target, the updater will need to download and
verify the Uptane metadata that signs for the in-toto metadata, either the
Targets role or a delegated role. If verification passes, the actual in-toto
metadata files—layout, links, and public keys—MUST be downloaded and their
hashes MUST be compared with the Uptane metadata. With these two checks,
Uptane’s secure delivery properties are extended to the in-toto files. These
files can then be used with confidence by the client to perform in-toto
verification.

### Resource Constrained ECUs

There are a number of different types of resource constraints that accompany the
addition of in-toto metadata. Some automobiles MAY have no ECUs capable of
providing even a basic level of software supply chain security due to bandwidth
or memory constraints. Therefore, this PURE presents a "stop-gap" option. In
this configuration, the repository verifies the software supply chain of the
image and signs an in-toto _summary link_ with the keys used to sign either the
top level Targets or delegated signer role. This way, the key used to sign the
summary link metadata is securely bootstrapped and can be rotated in case of a
compromise.

For each target image, the _custom_ field points to the summary link rather than
all the in-toto metadata. The client MUST download and verify the Targets
metadata for the summary link and, if this passes, download and verify the hash
and signature on the summary link. Once the authenticity of the summary link is
established, the client MUST verify that the hashes in the products field of the
summary link match those of the image.

The summary link does offer some evidence that the repository performed in-toto
verification on behalf of the automobile, but it is **not** a sufficiently
strong replacement for actual verification on the vehicle. A key issue with the
stop-gap option is that it turns the Image repository into a single point of
failure and therefore can only be trusted as long as the repository remains
secure. As such, this model MUST only be adopted as a stop-gap option until the
update system can be transitioned to the full model in which in-toto
verification happens on individual vehicles.

Another resource that MAY be constrained is the amount of in-vehicle bandwidth
available to transfer data between the different ECUs. The addition of in-toto
metadata greatly increases the amount of information communicated between the
Primary ECU and the other ECUs. In such vehicles, the Primary ECU MUST receive
the pertinent in-toto metadata in addition to the ECU image, perform in-toto
verification, and then forward the image and (optionally) the relevant Uptane
metadata. If the vehicle is configured such that the Uptane metadata is
forwarded to the target ECU, then the ECU can perform just the Uptane
verification workflow, either the full or partial variant depending on the
resources it possesses. However, as the Primary ECU MUST use the Uptane metadata
to verify the in-toto metadata it received for the image, it might be sufficient
to have it perform both Uptane and in-toto verification on behalf of the target
ECU. All non-primary ECUs can then perform just the partial verification
workflow. This is an implementation detail left to adopters to decide.

| Type of ECU                     | Uptane Responsibility                                                                                | in-toto Responsibility   |
| ------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------ |
| Primary ECU                     | Full Uptane verification for its images, for all in-toto metadata, and (optionally) other ECU images | All in-toto verification |
| Secondary Full Verification ECU | (Optional) Full / partial Uptane verification for its images                                         | No in-toto verification  |
| Resource Constrained ECU        | (Optional) Partial Uptane verification for its images                                                | No in-toto verification  |

**Table:** Comparison of responsibilities expected of different ECUs deployed
with limited in-vehicle bandwidth. The in-toto verification process used can be
either the full workflow or the stop-gap option, as this choice does not affect
individual ECUs, but only the setup as a whole.

Finally, even if the additional in-vehicle bandwidth overhead is not a concern,
a subset of ECUs MAY lack the resources to perform all of Scudo's verification
workflows. Note that in the stop-gap option, _all_ ECUs lacked the necessary
resources. Uptane already accounts for such secondary ECUs by providing a
separate Partial Verification workflow. Scudo assumes that these Partial
Verification ECUs are also incapable of performing in-toto verification.
In addition, there MAY be Uptane Full Verification ECUs that also lack the
resources to perform the added in-toto verification.

For these ECUs, Scudo specifies that other capable ECUs, perhaps the Primary
ECU, MUST perform in-toto verification on behalf of the resource constrained
ECUs. In this model, while every ECU MAY NOT be verifying the software supply
chain of the images it is expected to install, verification is still happening
on the individual automobile. Essentially, there is no difference in the update
workflow of resource constrained ECUs but they are more robust because of by the
supply chain verification happening on the automobile.

| Type of ECU                     | Uptane Responsibility                                       | in-toto Responsibility                                                            |
| ------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Primary ECU (Full Verification) | Full Uptane verification for its images and all secondaries | in-toto verification of its images as well as images of resource constrained ECUs |
| Secondary Full Verification ECU | Full Uptane verification for its images                     | in-toto verification for its images                                               |
| Resource Constrained ECU        | Partial Uptane verification for its images                  | No in-toto verification                                                           |

**Table:** Comparison of responsibilities expected of different ECUs where
in-vehicle communication bandwidth is not constrained. As before, the in-toto
verification process used can be either the full workflow or the stop-gap
option, as this choice does not affect individual ECUs, but only the setup as a
whole.

Note that the stop-gap option can be employed in conjunction with the solutions
for the other constraints. A vehicle MAY simultaneously have no ECUs capable of
full in-toto verification _and_ limited bandwidth for in-vehicle communication.
Similarly, a vehicle MAY have no ECUs capable of full in-toto verification _and_
some of these ECUs MAY be incapable of any in-toto verification at all.

## Security Analysis

Scudo is an extension for Uptane that adds in-toto's software supply chain
security properties. Therefore, its threat model is a combination of the threat
models of Uptane for the delivery of the software artifacts, and in-toto for the
development of the image as it passes through the software supply chain.

## Prototype

in-toto has previously been deployed with Uptane's parent project, The Update
Framework (TUF), as described here in Datadog's pipelines. This deployment has
been documented as two in-toto Enhancements (ITEs), [ITE-2] and [ITE-3]. Datadog
has also published a
[blog post](https://www.datadoghq.com/blog/engineering/secure-publication-of-datadog-agent-integrations-with-tuf-and-in-toto/)
describing their setup and released
[open source tooling](https://github.com/DataDog/integrations-core/tree/master/datadog_checks_downloader)
that combines in-toto's and TUF's verification workflows.

## Backwards Compatibility

Backwards compatibility is a key factor when introducing in-toto to an existing
Uptane deployment. Merely adding in-toto metadata to Uptane Targets metadata
does not change Uptane's verification workflow. Older Uptane clients can
continue to performing just Uptane's verification workflow for the images and
safely ignore references to in-toto metadata.

In addition, adopters MUST be careful with how they switch their devices over
from performing only Uptane verification to also including in-toto verification
for their ECU images. This is because there MAY be older images without in-toto
metadata that are still the latest for their respective ECUs. In these cases,
the workflow MUST NOT expect in-toto metadata. Similarly, the workflow MUST NOT
be fooled into skipping in-toto verification for newer images that actually have
in-toto metadata.

Finally, as always, in-toto and Uptane implementations SHOULD NOT make
backward-incompatible changes to how signatures are generated. This will ensure
that previous package managers are able to continue to install new packages.
Note that Uptane can otherwise be used to safely rotate the keys for the entire
system, including those using different key types, key sizes, signature schemes,
and cryptographic hashes. Any backwards incompatible changes that are
unavoidable SHOULD be handled with a clear plan.

## Copyright

This document has been placed in the public domain.

## Acknowledgements

This PURE was inspired by two in-toto Enhancements, ITE-2 and ITE-3, that
describe how TUF, Uptane's parent project, and in-toto can be combined.

## References

- [in-toto Specification](https://github.com/in-toto/docs/blob/master/in-toto-spec.md)
- [Uptane v2.0.0 Standard](https://uptane.github.io/papers/uptane-standard.2.0.0.html)
- [Scudo Whitepaper](https://uptane.github.io/papers/scudo-whitepaper.pdf)
- [ITE-2](https://github.com/in-toto/ITE/blob/master/ITE/2/README.adoc)
- [ITE-3](https://github.com/in-toto/ITE/blob/master/ITE/3/README.adoc)
- [Sonatype's 2022 State of the Software Supply Chain report](https://www.sonatype.com/state-of-the-software-supply-chain/introduction)
- [2020 Sunburst attack](https://www.cynet.com/attack-techniques-hands-on/sunburst-backdoor-c2-communication-protocol/)
- [Secure Publication of Datadog Agent Integrations with TUF and in-toto](https://www.datadoghq.com/blog/engineering/secure-publication-of-datadog-agent-integrations-with-tuf-and-in-toto/)
- [Datadog's Verification of TUF and in-toto metadata](https://github.com/DataDog/integrations-core/tree/master/datadog_checks_downloader)
