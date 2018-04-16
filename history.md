---
layout: default
css_id: history_timeline
---

### History and Core Principles

The basic technology behind TUF was developed at the University of Washington
in 2009 by Justin Samuel and Justin Cappos, and presented
in a [paper](https://theupdateframework.github.io/papers/survivable-key-compromise-ccs2010.pdf?raw=true) 
Samuel and Cappos coauthored with Nick Mathewson and Roger
Dingledine, researchers from [The Tor Project,
Inc](https://www.torproject.org/).  Since 2011, TUF has been based at [New York
University Tandon School of Engineering](http://engineering.nyu.edu/), where
Cappos is a tenured associate professor of computer science and engineering.
There he works with a team of Ph.D. students, including Trishank Karthik Kuppusamy,
who graduated in 2017, and developers,
including Vladimir Diaz and Sebastien Awwad, to supervise the development of
TUF and its adoption and integration by open source non-profits and tech companies.

Though TUF technologies have been customized to meet end-user specifications,
four core principles continue to be central to its design.

* The first is separation of responsibilities for signing metadata, which means
one compromised key does not automatically compromise all repository users.

* The second specifies a fixed number of signatures agreeing to the authenticity
of what is presented in the metadata that accompanies an update before the
server will download it.

* A third principle works to help a repository to recover quickly from a
compromise by providing an automatic way to revoke signing keys. By doing so,
hackers can not sign metadata to authenticate malware.

* Lastly, TUF keeps the most vulnerable signing keys offline, which greatly
reduces the risk that they can be stolen or compromised.

In 2016, the TUF research group set up a process whereby the community could
have input on technical issues. Named the TUF Augmentation Proposal, or TAP,
this series of documents also provide information to the TUF community, or
describe new feature for TUF or its processes or environment. Through the use
of TAPs, as well as input from those who adopted the technology, the evolution
of TUF technology can continue as security needs change.
