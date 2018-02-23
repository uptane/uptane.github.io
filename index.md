![Banner](https://raw.githubusercontent.com/theupdateframework/tuf/develop/docs/images/banner_website.JPG)

# A Framework for Securing Software Update Systems

The Update Framework (TUF) helps developers to secure new or existing
software update systems, which are often found to be vulnerable to many
known attacks. TUF addresses this widespread problem by providing a
comprehensive, flexible security framework that developers can integrate
with any software update system. The framework can be easily integrated (or
implemented in the native programming languages of these update systems)
due to its concise, self-contained architecture and specification.
Developers have so far implemented the framework in the
[Go](https://github.com/flynn/go-tuf),
[Haskell](https://www.well-typed.com/blog/2015/07/hackage-security-alpha/),
[Python](https://github.com/theupdateframework/tuf),
[Ruby](https://corner.squareup.com/2013/12/securing-rubygems-with-tuf-part-1.html),
and [Rust](https://github.com/heartsucker/rust-tuf) programming languages.

TUF is hosted by the [Cloud Native Computing Foundation](https://www.cncf.io/) (CNCF)
and follows the [CNCF Code of Conduct](https://github.com/cncf/foundation/blob/master/code-of-conduct.md).

## What is a software update system?

Generally, a software update system is an application (or part of an
application) running on a client system that obtains and installs software.
This can include updates to software that is already installed or even
completely new software.

Three major classes of software update systems are:

* **Application updaters** which are used by applications use to update themselves. For example, Firefox updates itself through its own application updater.
* **Library package managers** such as those offered by many programming languages for installing additional libraries. These are systems such as Python's pip/easy_install + PyPI, Perl's CPAN, Ruby's Gems, and PHP's PEAR.
* **System package managers** used by operating systems to update and install all of the software on a client system. Debian's APT, Red Hat's YUM, and openSUSE's YaST are examples of these.

## Our approach

There are literally thousands of different software update systems in
common use today. (In fact the average Windows user has about two dozen
different software updaters on their machine!)

We built a
[specification](https://github.com/theupdateframework/specification/blob/master/tuf-spec.md)
and [library](https://github.com/theupdateframework/tuf) that can be
universally (and in most cases transparently) used to secure software
update systems.

## News

**October 24, 2017**

>
The Cloud Native Computing Foundation announces at Open Source Summit
Europe that it was adding TUF as its 14th hosted project. Notary, Docker's
implementation of TUF, was also added at that time.
https://www.cncf.io/announcement/2017/10/24/cncf-host-two-security-projects-notary-tuf-specification/

**September 8, 2017**

>
Cloudfare releases PAL, a container identity bootstrapping tool.  It is open
source and uses Notary, Docker’s implementation of TUF.  PAL "confirms that
a specific container hash maps to specific metadata like a container’s name
and label."
https://blog.cloudflare.com/pal-a-container-identity-bootstrapping-tool/

**July 5, 2017**

>
TUF will be featured in DebConf17, an "annual conference for Debian contributors and
users interested in improving Debian."  The conference will take place in Montreal,
Canada, August 6 - 12, 2017.
https://debconf17.debconf.org/talks/153/

**July 3, 2017**

>
Dr. Trishank Karthik Kuppusamy defended his dissertation on TUF and
[Uptane](https://uptane.github.io).  Congratulations!  Work on these
projects will continue as Sebastien, Vlad, Justin, and others move forward!

**May 10, 2017**

>
Justin Cappos gave a [talk](https://ssl.engineering.nyu.edu/blog/2017-04-24-DockerCon) on TUF, [Uptane](https://uptane.github.io), and [in-toto](https://in-toto.io/) at DockerCon 2017.

**October 10, 2016**

>
Lily Guo and Riyaz Faizullabhoy from Docker gave a [talk](https://linuxconcontainerconeurope2016.sched.org/event/7oI1/software-update-security-when-the-going-gets-tough-get-tuf-going-riyaz-faizullabhoy-lily-guo-docker?iframe=no&w=i:100;&sidebar=yes&bg=no) on TUF and Notary at LinuxCon+ContainerCon Europe 2016.  Slides of their talk are available [here](http://schd.ws/hosted_files/linuxconcontainerconeurope2016/50/When%20the%20going%20gets%20tough%2C%20get%20TUF%20going%21%20Linuxcon%20EU.pdf).

**September 22, 2016**

>
TUF now welcomes proposals to extend the specification! For more information, please see [TUF Augmentation Proposals (TAPs)](https://github.com/theupdateframework/taps).

**August 24, 2016**

>
Riyaz Faizullabhoy from Docker gave a [talk](https://lcccna2016.sched.org/event/7JWU/when-the-going-gets-tough-get-tuf-going-riyaz-faizullabhoy-docker) on TUF and Notary at LinuxCon North America.  Slides of his talk are available here:
https://events.linuxfoundation.org/events/linuxcon-north-america/program/slides

**February 22, 2016**

>
David Lawrence and Ying Li from Docker are scheduled to present at PyCon 2016.  The title
of their presentation is: [When the going gets tough, get TUF going](https://us.pycon.org/2016/schedule/presentation/2187/)

**February 19, 2016**

>
The Update Framework now has a logo to call its own.  Thanks is given to Maria Jose Barrera (https://twitter.com/joseemari) for creating the logo, and to Santiago Torres for making it happen.

**February 18, 2016**

> The camera-ready version of "Diplomat: Using Delegations to Protect Community Repositories" was recently submitted to [NSDI 2016](https://www.usenix.org/conference/nsdi16).  The paper is freely available here on our website.

**August 12, 2015**

> In TUF adoption news... the Docker team announced Docker Content Trust, which integrates TUF via [Notary](https://github.com/docker/notary).  Docker Content Trust will be available starting with Docker 1.8, and supports image signing and verification.  For more information on the Docker + TUF integration, please visit:
https://blog.docker.com/2015/08/content-trust-docker-1-8/

## How do I learn more?

For more information, look at the following:

* [The Update Framework Specification](https://github.com/theupdateframework/specification/blob/master/tuf-spec.md)
* [Source code](https://github.com/theupdateframework/tuf)
* [TUF Augmentation Proposals (TAPS)](https://github.com/theupdateframework/taps)
* [Mailing list](https://groups.google.com/forum/?fromgroups#%21forum/theupdateframework)

Papers:

* [Mercury: Bandwidth-Effective Prevention of Rollback Attacks Against Community Repositories](https://github.com/theupdateframework/tuf/tree/develop/docs/papers/prevention-rollback-attacks-atc2017.pdf?raw=true)
* [Diplomat: Using Delegations to Protect Community Repositories](https://isis.poly.edu/~jcappos/papers/kuppusamy_nsdi_16.pdf)
* [Survivable Key Compromise in Software Update Systems](https://isis.poly.edu/~jcappos/papers/samuel_tuf_ccs_2010.pdf)
* [A Look in the Mirror: Attacks on Package Managers](https://isis.poly.edu/~jcappos/papers/cappos_mirror_ccs_08.pdf)
* [Package Management Security](https://isis.poly.edu/~jcappos/papers/cappos_pmsec_tr08-02.pdf)

## Security Issues

Security issues can be reported by emailing justincappos@gmail.com.

At a minimum, the report must contain the following:

* Description of the vulnerability.
* Steps to reproduce the issue.

Optionally, reports that are emailed can be encrypted with PGP.  You should use
PGP key fingerprint E9C0 59EC 0D32 64FA B35F  94AD 465B F9F6 F8EB 475.

## Integrations

**Rust**

* [Advanced Telematic Systems is working on a Rust implementation of TUF to secure over-the-air software updates in automobiles](https://crates.io/crates/tuf)

**Docker Content Trust**
* [Docker Content Trust: Image Signing and Verification using The Update Framework (TUF)](https://blog.docker.com/2015/08/content-trust-docker-1-8/)

**Flynn**

* [Flynn integrates TUF to securely distribute its components](https://flynn.io/docs/development#the-update-framework-%28tuf%29)

**LEAP Encryption Access Project**

* [LEAP integrates TUF with Bitmask](https://leap.se/en/2014/darkest-night)

**Notary**

* [Notary aims to make the internet more secure by making it easy for people to publish and verify content](https://github.com/docker/notary)

* [Notarized Git Tags](https://github.com/docker/global-hack-day-3/tree/master/docker-bdx)

* [Kolide's updater](https://github.com/kolide/updater) securely handles automated software updates with Notary.  NCC Group
performs a [security assessment of the library](https://www.nccgroup.trust/globalassets/our-research/us/public-reports/2017/ncc-group-kolide-the-update-framework-security-assessment.pdf).

**dtuf**

* [Docker registry bindings](https://github.com/davedoesdev/dtuf) for The Update Framework in Python. Uses [dxf](https://github.com/davedoesdev/dxf) to store TUF metadata and target files in a Docker registry.

**Securing Python package management**

* [PEP 458: Securing the Link from PyPI to the End User](https://github.com/theupdateframework/pep-on-pypi-with-tuf)
* [PEP 480: Surviving a Compromise of PyPI](https://github.com/theupdateframework/pep-maximum-security-model)
* [PyCon 2013 lightning talk](https://www.youtube.com/watch?v=2sx1lS6cT3g) [(Slides)](https://docs.google.com/presentation/d/1FMptD5sMH41BTgS3-PN0-7j5Zqvs_zZZ3ntsD_4u-7w/edit?usp=sharing)
* [PyCon US 2011 talk](https://pyvideo.org/video/412/pycon-2011--tuf--secure-software-updates-in-pytho)
* [Test pip with TUF](https://github.com/theupdateframework/pip/wiki/pip-over-TUF)
* [Automation for creating, updating and destroying a TUF-secured PyPI mirror](https://github.com/theupdateframework/pypi.updateframework.com)
* [Source code of pip with TUF](https://github.com/theupdateframework/pip/tree/tuf-master)
    * [Little is required to integrate pip with TUF](https://github.com/theupdateframework/pip/compare/pypa:master...tuf-master)

**Securing Ruby package management**

* [Developers from Square have demonstrated an initial implementation of TUF for RubyGems](https://groups.google.com/forum/#%21topic/rubygems-tuf/vCxUSX51bbo)
* [Atlassian Dev Den Tech Talk Series: Securing Rubygems with TUF](https://www.youtube.com/watch?v=J0GkcToeDiM)
* [Securing RubyGems with TUF, Part 1](https://corner.squareup.com/2013/12/securing-rubygems-with-tuf-part-1.html)
* [Securing RubyGems with TUF, Part 2](https://corner.squareup.com/2013/12/securing-rubygems-with-tuf-part-2.html)
* [Securing RubyGems with TUF, Part 3](https://corner.squareup.com/2013/12/securing-rubygems-with-tuf-part-3.html)

**CoreOS App Container Specification**

* [Evaluation of TUF in App Container specification](https://groups.google.com/forum/#!searchin/theupdateframework/app$20container/theupdateframework/kqUMGIWSTyI/yQeR78PzIukJ)

**Hackage, Haskell's Central Package Archive**

* [Improving Hackage security](https://www.well-typed.com/blog/2015/04/improving-hackage-security/)

**Signing the OPAM Repository: TUF Meets Git**

* [Conex release announcement](https://hannes.nqsb.io/Posts/Conex)
* [Implementation of conex](https://github.com/hannesm/conex)
* [Initial proposal to secure the distribution of OCaml packages](https://opam.ocaml.org/blog/Signing-the-opam-repository/)

**Other implementations**

* [Go](https://github.com/flynn/go-tuf)

## Press

* [The Cloud Native Computing Foundation adds two security projects to its open
source stable](https://techcrunch.com/2017/10/24/the-cloud-native-computing-foundation-adds-two-security-projects-to-its-open-source-stable/)
* [CNCF Adds 2 Projects to better secure containers](https://containerjournal.com/2017/10/24/cncf-adds-projects-better-secure-containers/)
* [Cloud Native Computing Foundation Adopts 2 Security Projects](http://www.enterprisecloudnews.com/author.asp?section_id=571&doc_id=737560)
* [CNCF Brings Security to the Cloud Native Stack with Notary, TUF adoption](https://thenewstack.io/cncf-brings-security-cloud-native-stack-notary-tuf-adoption/)
* [Justin Cappos delivers a talk about TUF at DockerCon 17](http://www.eweek.com/security/how-the-update-framework-improves-security-of-software-updates)
* [Python's Podcast._init_ runs a segment called
 "Securing your Software Updates with Justin Cappos-Episode 99"](https://www.podcastinit.com/episode-99-the-update-framework-with-justin-cappos/)
* [Justin Cappos presented TUF (and ongoing work in securing software updates in automobiles and the software supply chain) at Docker's Distributed Systems Summit 2016 ](https://www.youtube.com/watch?v=Aryr0O6H_2U&list=PLkA60AVN3hh8oPas3cq2VA9xB7WazcIgs&index=9)
* [Secure Software Distribution in an Adversarial World - Duo Tech Talk](https://www.youtube.com/watch?v=OW8NPkSq-3k)
* [Docker: With Content Trust, You Can Run Containers on Untrusted Networks](https://thenewstack.io/docker-content-trust-can-run-containers-untrusted-networks/)
* [Notary demoed at the DockerCon 2015 keynote](https://www.ustream.tv/recorded/64499822#t=1h54m0s)
* [LWN.net: Docker image "verification"](https://lwn.net/Articles/628343/)
* [Poster at PyCon 2015](https://us.pycon.org/2015/schedule/presentation/438/)
* [LWN.net: Protecting Python package downloads](https://lwn.net/Articles/629426/)
* [The Linux Magazine: TUF Love](https://www.linux-magazine.com/Issues/2014/160/Security-Lessons-TUF)
* [Docker Image Insecurity](https://titanous.com/posts/docker-insecurity)
* [Hacker News: Incremental Plans to Improve Python Packaging](https://news.ycombinator.com/item?id=8780369)
* [Promotional materials on TUF (The Update Framework) w/ Justin Cappos and Trishank Kuppusamy](https://vimeo.com/88774074)
* [Slashdot: Package Managers As Achilles Heel](https://it.slashdot.org/story/08/07/10/227220/package-managers-as-achilles-heel)

## Acknowledgements

This material is based upon work supported by the National Science
Foundation under Grant No. CNS-1345049 and CNS-0959138.  Any opinions,
findings, and conclusions or recommendations expressed in this material are
those of the author(s) and do not necessarily reflect the views of the
National Science Foundation.
