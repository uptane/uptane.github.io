# Uptane Design

To meet the types of threats enumerated, Uptane adapted the basic design of
[The Update Framework (TUF)](https://theupdateframework.github.io/overview.html ),
a flexible framework and specification that has proven successful in securing
software update systems on repositories.  The basic TUF design was first
introduced in a [2010 paper](https://ssl.engineering.nyu.edu/papers/samuel_tuf_ccs_2010.pdf)
by Justin Samuel, Nick Mathewson, Roger Dingledine, and Justin Cappos.
Under the direction of Cappos at NYU Tandon School of Engineering since 2011,
TUF has been adapted to protect against a number of specific security threats to
various types of software applications.

A central tenet of TUF is **compromise-resilience**, or the ability to minimize the
extent of the threat posed by any given attack. The building blocks for
this state rest on four design principles.

1. **Separation of trust**: distributing responsibility for the signing
of metadata so if one signing key is compromised, it will not affect other
users.
2. **Threshold signatures**: requiring that a fixed number of signatures
must be gathered to attest to the authenticity of a file before the update can
be downloaded.
3. **Explicit and implicit revocation of keys**: providing a mechanism for
replacing compromised keys so malevolent parties can not continue signing
metadata to authenticate malware.
4. **Keeping the most vulnerable keys offline**: mandating that certain
signing keys be kept offline, thus making them harder to steal or compromise.

These four TUF principles form the core design of Uptane, but several new
concepts were added to allow  for the auto industry’s decentralized approach to
manufacturing and maintaining ECUs. One such concept is the **addition of a
second repository**, which divides labor and responsibility for different
aspects of the verification process. The *image* repository holds an
accurate inventory of all the images currently on all ECUs on all vehicles
maintained by an OEM. It also maintains the metadata that can verify the
authenticity of these images. This repository uses offline keys to sign all
metadata, making it much harder for attackers to substitute compromised images.
The *director* repository instructs vehicles as to what updates should be
installed next, given information about what is currently installed. This
repository uses online keys to sign its metadata, allowing for easier
and faster turnarounds. By combining the two repositories,
an OEM can provide both customizability and security for the
control units on their vehicles.

Another modification to the basic TUF design has to do with the way
Uptane **verifies the  images**,  meaning the media used to supply the code
and data that control the actions of the  ECUs. In the verification
step, the ECU determines if a file is safe to download by checking
its accompanying metadata. Depending on the power of an ECU—with
power defined here in terms of memory, storage space,
and connection to the Internet—verification can be full, which
requires checking that the hashes and sizes of images in the
signed metadata match the hashes and sizes stored on the image
repository, or partial, which
requires only checking the signature on the targets metadata
file from the director repository.

Full verification provides better protection to those ECUs that
have the memory and storage capacity to conduct the procedure.
But, because even the weakest ECUs can be afforded some protection
by the less resource-intensive partial method, the security of the system
as a whole is improved.
