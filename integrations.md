---
layout: default
css_id: integrations
---

### Integrations

#### Go programming language

*Docker Content Trust*
* [Docker Content Trust: Image Signing and Verification using The Update Framework (TUF)](https://blog.docker.com/2015/08/content-trust-docker-1-8/)

*Notary*

* [Notary aims to make the internet more secure by making it easy for people to publish and verify content](https://github.com/docker/notary)

* [Notarized Git Tags](https://github.com/docker/global-hack-day-3/tree/master/docker-bdx)

*Flynn.io*

* [Flynn integrates TUF to securely distribute its components](https://flynn.io/docs/development#the-update-framework-%28tuf%29)

* [go-tuf](https://github.com/flynn/go-tuf)

*CoreOS App Container Specification*

* [Evaluation of TUF in App Container specification](https://groups.google.com/forum/#!searchin/theupdateframework/app$20container/theupdateframework/kqUMGIWSTyI/yQeR78PzIukJ)

#### Rust programming language

* [Advanced Telematic Systems is working on a Rust implementation of TUF to secure over-the-air software updates in automobiles](https://crates.io/crates/tuf)

#### Python programming language

*Securing Python package management*

* [PEP 458: Securing the Link from PyPI to the End User](https://github.com/theupdateframework/pep-on-pypi-with-tuf)
* [PEP 480: Surviving a Compromise of PyPI](https://github.com/theupdateframework/pep-maximum-security-model)
* [PyCon 2013 lightning talk](https://www.youtube.com/watch?v=2sx1lS6cT3g) [(Slides)](https://docs.google.com/presentation/d/1FMptD5sMH41BTgS3-PN0-7j5Zqvs_zZZ3ntsD_4u-7w/edit?usp=sharing)
* [PyCon US 2011 talk](https://pyvideo.org/video/412/pycon-2011--tuf--secure-software-updates-in-pytho)
* [Test pip with TUF](https://github.com/theupdateframework/pip/wiki/pip-over-TUF)
* [Automation for creating, updating and destroying a TUF-secured PyPI mirror](https://github.com/theupdateframework/pypi.updateframework.com)
* [Source code of pip with TUF](https://github.com/trishankatdatadog/pip/compare/master...trishankatdatadog:trishank_kuppusamy/9.0.1-tuf)

*LEAP Encryption Access Project*

* [LEAP integrates TUF with Bitmask](https://leap.se/en/2014/darkest-night)

**dtuf**

* [Docker registry bindings](https://github.com/davedoesdev/dtuf) for The Update Framework in Python. Uses [dxf](https://github.com/davedoesdev/dxf) to store TUF metadata and target files in a Docker registry.


### Ruby programming language

*Securing Ruby package management*

* [Developers from Square have demonstrated an initial implementation of TUF for RubyGems](https://groups.google.com/forum/#%21topic/rubygems-tuf/vCxUSX51bbo)
* [Atlassian Dev Den Tech Talk Series: Securing Rubygems with TUF](https://www.youtube.com/watch?v=J0GkcToeDiM)
* [Securing RubyGems with TUF, Part 1](https://corner.squareup.com/2013/12/securing-rubygems-with-tuf-part-1.html)
* [Securing RubyGems with TUF, Part 2](https://corner.squareup.com/2013/12/securing-rubygems-with-tuf-part-2.html)
* [Securing RubyGems with TUF, Part 3](https://corner.squareup.com/2013/12/securing-rubygems-with-tuf-part-3.html)


#### Haskell programming language

*Hackage, Haskell's Central Package Archive*

* [Improving Hackage security](https://www.well-typed.com/blog/2015/04/improving-hackage-security/)

#### OCaml programming language

*Signing the OPAM Repository: TUF Meets Git*

* [Conex release announcement](https://hannes.nqsb.io/Posts/Conex)
* [Implementation of conex](https://github.com/hannesm/conex)
* [Initial proposal to secure the distribution of OCaml packages](https://opam.ocaml.org/blog/Signing-the-opam-repository/)

