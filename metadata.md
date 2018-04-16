---
layout: default
css_id: metadata
---

# Roles and Metadata

TUF uses roles to define the set of actions a party can perform. The concept of
roles allows TUF to only trust information provided by the correctly
designated party. The root role indicates which roles can sign for which projects.

The roles sign metadata, which TUF uses to create verifiable records about the state
of a repository or application at a specified time. As such, clients can use
it to make decisions on which files to update. Different metadata files provide
different information, and will be signed by different roles.

The signed metadata files always include an expiration date. This ensures
that outdated metadata will be detected and that
clients can refuse to accept metadata older than that which they've already seen.

All TUF metadata uses a subset of the JSON object format. When calculating the
digest of an object, we use the [Canonical JSON](http://wiki.laptop.org/go/Canonical_JSON) format. Implementation-level detail about the metadata can be found in the [spec](https://github.com/theupdateframework/specification/blob/master/tuf-spec.md).

There are four required top-level roles, each with their own metadata file.

Required:

* Root
* Targets
* Snapshot
* Timestamp

Optional:

There may also be any number of delegated target roles.

## Root Metadata (root.json)

Signed by: Root role.

Specifies the other top-level roles. When specifying these roles, the trusted
keys for each are listed, along with the minimum number of those keys required
to sign the role's metadata. We call this number the signature threshold.

See [example](https://raw.githubusercontent.com/theupdateframework/tuf/develop/tests/repository_data/repository/metadata/root.json) of Root metadata.

## Targets Metadata (targets.json)

Signed by: Targets role.

Target files are the actual files that clients want to download, such as
the software updates they are trying to obtain. The targets.json metadata
file lists hashes and sizes of target files.

This file can optionally define other roles to which it delegates trust,
or specify that another role is to be trusted for some or all of the target files
available from the repository. When delegated roles are specified, it is done
so in a way similar to how the Root role specifies the top-level roles: by giving
the trusted keys and signature threshold for each role. Additionally, one or more
[glob patterns](https://en.wikipedia.org/wiki/Glob_(programming)) will be specified to indicate the target file paths for which clients should trust each delegated role.

See [example](https://raw.githubusercontent.com/theupdateframework/tuf/develop/tests/repository_data/repository/metadata/targets.json) of Targets metadata.

## Delegated Targets Metadata (role1.json)

Signed by: A delegated targets role.

A metadata file provided by a Delegated Targets role will follow exactly the same
format as one provided by the top-level Targets role.

When the Targets role delegates trust to other roles, each delegated role will
provide one signed metadata file.  As is the
case with the directory structure of top-level metadata, the delegated files are
relative to the base URL of metadata available from a given repository mirror.

A delegated role file is located at:

/DELEGATED_ROLE.json

where DELEGATED_ROLE is the name of the role specified in targets.json.  If this
role further delegates trust to a role named ANOTHER_ROLE, that role's signed
metadata file would be found at:

/ANOTHER_ROLE.json

See
[example](https://raw.githubusercontent.com/theupdateframework/tuf/develop/tests/repository_data/repository/metadata/role1.json)
of delegated Targets metadata and [example](https://raw.githubusercontent.com/theupdateframework/tuf/develop/tests/repository_data/repository/metadata/role2.json) of a nested delegation.

## Snapshot Metadata (snapshot.json)

Signed by: Snapshot role.

The snapshot.json metadata file lists version numbers of all metadata files
other than timestamp.json. This file ensures that clients will see a consistent
view of all files on the repository. That is, metadata files (and thus Target
files) that existed on the repository at different times cannot be combined
and presented to clients by an attacker.

​See [example](https://raw.githubusercontent.com/theupdateframework/tuf/develop/tests/repository_data/repository/metadata/snapshot.json) of Snapshot metadata.

## Timestamp Metadata (timestamp.json)

Signed by: Timestamp role.

The timestamp.json metadata file lists the hashes and size of the snapshot.json file.
This is the first and potentially only file that needs to be downloaded when
clients search for updates. It is frequently re-signed, and
has a short expiration date, thus allowing clients to quickly detect if they are
being prevented from obtaining the most recent metadata. An online key is
generally used to automatically re-sign this file at regular intervals.

There are a few reasons why the timestamp.json and snapshot.json files are not
combined:

* The timestamp.json file is downloaded very frequently and so should be kept as
small as possible, especially considering that the snapshot.json file grows
proportionally with the number of delegated target roles.
* As the Timestamp role's key is an online key and thus at high risk, separate
keys should be used for signing the snapshot.json file so that the
Snapshot role's keys can be kept offline, and thus more secure.
* Timestamp.json may be given to mirrors.

See [example](https://raw.githubusercontent.com/theupdateframework/tuf/develop/tests/repository_data/repository/metadata/timestamp.json) of Timestamp metadata.
