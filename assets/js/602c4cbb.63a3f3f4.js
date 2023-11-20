"use strict";(self.webpackChunkuptane=self.webpackChunkuptane||[]).push([[2240],{4284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var i=n(5893),a=n(1151);const s={sidebar_position:2,title:"Uptane Reference Implementation POUF"},r=void 0,o={id:"pouf/pouf1",title:"Uptane Reference Implementation POUF",description:"- POUF: 1",source:"@site/enhancements/pouf/pouf1.md",sourceDirName:"pouf",slug:"/pouf/pouf1",permalink:"/enhancements/pouf/pouf1",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Uptane Reference Implementation POUF"},sidebar:"EnhancementsSidebar",previous:{title:"POUF Purpose and Guidelines",permalink:"/enhancements/pouf/pouf-main"},next:{title:"PURE Purpose and Guidelines",permalink:"/enhancements/pures/pure1"}},d={},h=[{value:"Abstract",id:"abstract",level:2},{value:"Protocols",id:"protocols",level:2},{value:"Message Handler Table",id:"message-handler-table",level:2},{value:"Operations",id:"operations",level:2},{value:"Metadata",id:"metadata",level:2},{value:"Usage",id:"usage",level:2},{value:"Server Setup",id:"server-setup",level:2},{value:"Data Table",id:"data-table",level:2},{value:"Formats",id:"formats",level:2},{value:"File formats",id:"file-formats",level:2},{value:"Common Definitions",id:"common-definitions",level:3},{value:"Metadata Format",id:"metadata-format",level:3},{value:"Root",id:"root",level:3},{value:"Snapshot",id:"snapshot",level:3},{value:"Targets",id:"targets",level:3},{value:"Delegated targets",id:"delegated-targets",level:3},{value:"Timestamp",id:"timestamp",level:3},{value:"Map File",id:"map-file",level:3},{value:"ECU Metadata and Vehicle Version Manifest",id:"ecu-metadata-and-vehicle-version-manifest",level:3},{value:"Time Server",id:"time-server",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"POUF: 1"}),"\n",(0,i.jsx)(t.li,{children:"Title: Uptane Reference Implementation POUF"}),"\n",(0,i.jsx)(t.li,{children:"Version: 1"}),"\n",(0,i.jsx)(t.li,{children:"Last-Modified: 17-07-2019"}),"\n",(0,i.jsx)(t.li,{children:"Author: Marina Moore"}),"\n",(0,i.jsx)(t.li,{children:"Status: Draft"}),"\n",(0,i.jsx)(t.li,{children:"Uptane Version Implemented: 1.0.0"}),"\n",(0,i.jsx)(t.li,{children:"Created: 14-03-2019"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"abstract",children:"Abstract"}),"\n",(0,i.jsx)(t.p,{children:"This document describes the Protocols, Operations, Usage, and Formats (POUF) for the Uptane reference implementation written in Python by NYU. POUFs are designed to allow interoperable Uptane implementations. Any implementer who wishes to interoperate with the reference implementation should implement the features and data structures described in this document."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note that this implementation is not meant to be used in practice"}),". It is a guide for implementers to understand how the system should function."]}),"\n",(0,i.jsx)(t.p,{children:"The reference implementation includes all required and most optional features as a reference for others looking to implement Uptane."}),"\n",(0,i.jsx)(t.h2,{id:"protocols",children:"Protocols"}),"\n",(0,i.jsxs)(t.p,{children:["This POUF uses ASN.1/DER encoding for transmitting files. The details of the file formats are described in ",(0,i.jsx)(t.a,{href:"#formats",children:"Formats"})," in ASN.1 notation. Note that improper decoding of ASN.1 may lead to arbitrary code execution or Denial-of-Service attacks. Any implementers of this POUF should be aware of these attacks and use a decoder which has been subject to appropriate security analysis."]}),"\n",(0,i.jsxs)(t.p,{children:["The Primary ECU communicates with the Director repository, Image repository, and time server using HTTP POST requests over ",(0,i.jsx)(t.a,{href:"http://xmlrpc.scripting.com/spec.html",children:"XML-RPC"}),". In this communication, the Primary ECU acts as an XML-RPC client and the Director repository, Image repository, and time server act as XML-RPC servers. Secondary ECUs communicate with a Primary ECU using HTTP POST requests over XML-RPC. The Primary acts as the XML-RPC server and the Secondary as an XML-RPC client. The requests supported by all XML-RPC servers in this POUF are described in the Message Handler Table."]}),"\n",(0,i.jsxs)(t.p,{children:["All XML-RPC traffic supported in this POUF is transmitted over TCP/IP and does not support CAN or other network types. For more information about internal vehicle communication, see the ",(0,i.jsx)(t.a,{href:"https://uptane.github.io/deployment-considerations/index.html",children:"Deployment Best Practices"})," document."]}),"\n",(0,i.jsx)(t.h2,{id:"message-handler-table",children:"Message Handler Table"}),"\n",(0,i.jsxs)(t.p,{children:["The following message handlers must be implemented. These message handlers are used during the update process described in the Uptane Standard. The format of messages in the Data and Response columns are described in ",(0,i.jsx)(t.a,{href:"#formats",children:"Formats"}),". The messages are sent using XML-RPC with the function names in the Request column and data from the Data column."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Request"}),(0,i.jsx)(t.th,{children:"Sender"}),(0,i.jsx)(t.th,{children:"Receiver"}),(0,i.jsx)(t.th,{children:"Data"}),(0,i.jsx)(t.th,{children:"Response"}),(0,i.jsx)(t.th,{children:"Specification Reference"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"submit_vehicle_manifest"}),(0,i.jsx)(t.td,{children:"Primary ECU"}),(0,i.jsx)(t.td,{children:"Director Repository"}),(0,i.jsx)(t.td,{children:"VehicleVersionManifest"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://uptane.github.io/docs/standard/uptane-standard#532-director-repository",children:"https://uptane.github.io/docs/standard/uptane-standard#532-director-repository"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"register_ecu_serial"}),(0,i.jsx)(t.td,{children:"Primary ECU"}),(0,i.jsx)(t.td,{children:"Director Repository"}),(0,i.jsx)(t.td,{children:"ecu_serial Identifier, ecu_public_key PublicKey, vin Identifier, is_primary BOOLEAN"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"get_signed_time"}),(0,i.jsx)(t.td,{children:"Primary ECU"}),(0,i.jsx)(t.td,{children:"Timeserver"}),(0,i.jsx)(t.td,{children:"SequenceOfTokens"}),(0,i.jsx)(t.td,{children:"CurrentTime"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"submit_ecu_manifest"}),(0,i.jsx)(t.td,{children:"Secondary ECU"}),(0,i.jsx)(t.td,{children:"Primary ECU"}),(0,i.jsx)(t.td,{children:"vin Identifier, ecu_serial Identifier, nonce, ECUVersionManifestSigned"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://uptane.github.io/docs/standard/uptane-standard#5436-create-and-send-version-report",children:"https://uptane.github.io/docs/standard/uptane-standard#5436-create-and-send-version-report"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"register_new_secondary"}),(0,i.jsx)(t.td,{children:"Secondary ECU"}),(0,i.jsx)(t.td,{children:"Primary ECU"}),(0,i.jsx)(t.td,{children:"ecu_serial Identifier"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"get_time_attestation_for_ecu"}),(0,i.jsx)(t.td,{children:"Secondary ECU"}),(0,i.jsx)(t.td,{children:"Primary ECU"}),(0,i.jsx)(t.td,{children:"ecu_serial Identifier"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://uptane.github.io/docs/standard/uptane-standard#5425-send-latest-time-to-secondaries",children:"https://uptane.github.io/docs/standard/uptane-standard#5425-send-latest-time-to-secondaries"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"get_image"}),(0,i.jsx)(t.td,{children:"Secondary ECU"}),(0,i.jsx)(t.td,{children:"Primary ECU"}),(0,i.jsx)(t.td,{children:"ecu_serial Identifier"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://uptane.github.io/docs/standard/uptane-standard#5427-send-images-to-secondaries",children:"https://uptane.github.io/docs/standard/uptane-standard#5427-send-images-to-secondaries"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"get_metadata"}),(0,i.jsx)(t.td,{children:"Secondary ECU"}),(0,i.jsx)(t.td,{children:"Primary ECU"}),(0,i.jsx)(t.td,{children:"ecu_serial Identifier, is_partial_verification BOOLEAN"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://uptane.github.io/docs/standard/uptane-standard#5426-send-metadata-to-secondaries",children:"https://uptane.github.io/docs/standard/uptane-standard#5426-send-metadata-to-secondaries"})})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"In addition to the above message handlers, the Director repository hosts the RootMetadata, TargetsMetadata, SnapshotMetadata, and TimestampMetadata using XML-RPC. The filenames for these files will be"}),"\n",(0,i.jsx)("role",{children:".der where role is the associated role (Root, Targets, Snapshot, or Timestamp) in lowercase. The url of the hosted directory will be loaded onto ECUs at the time of manufacture."}),"\n",(0,i.jsx)(t.p,{children:"The Image repository hosts the RootMetadata, TargetsMetadata, SnapshotMetadata, TimestampMetadata, and images. The filenames for the metadata files are"}),"\n",(0,i.jsxs)("role",{children:[".der where role is the associated role (Root, Targets, Snapshot, or Timestamp) in lowercase. The filenames for the images are specified in the custom field of Targets metadata on the Image repository as described in the ",(0,i.jsx)("a",{href:"https://uptane.github.io/docs/standard/uptane-standard#5231-metadata-about-images",children:"Uptane Standard"}),". The url of the hosted directory will be loaded onto Primary ECUs and full verification Secondary ECUs at the time of manufacture."]}),"\n",(0,i.jsx)(t.h2,{id:"operations",children:"Operations"}),"\n",(0,i.jsx)(t.p,{children:"Of course, as the system implements Uptane, the reference implementation follows the requirements of the Uptane Standard. In addition to the required features, the reference implementation follows most of the SHOULDs of the standard in order to demonstrate how Uptane is expected to operate. The implementation details and rationale behind any SHOULDs and MAYs that are implemented are described in this section."}),"\n",(0,i.jsx)(t.p,{children:"The Primary ECU in this POUF is also the ECU that communicates with the Director repository, Image repository, and time server. This simplifies the reference implementation by condensing all the requirements for external communication and initial validation into a single ECU."}),"\n",(0,i.jsxs)(t.p,{children:["To access a reliable current time as needed for the ",(0,i.jsx)(t.a,{href:"https://uptane.github.io/docs/standard/uptane-standard#54-in-vehicle-implementation-requirements",children:"In Vehicle Implementation Requirements"}),", ECUs in this POUF use a time server that produces a time attestation for each update cycle. The Primary ECU sends the time server nonce tokens from each ECU, then the time server returns a time attestation that contains a signed the current time with all the tokens, as described in the ",(0,i.jsx)(t.a,{href:"https://uptane.github.io/deployment-considerations/index.html",children:"Deployment Best Practices"})," document. The ASN.1 details of the time server are listed in ",(0,i.jsx)(t.a,{href:"#formats",children:"Formats"}),". The time server is used by the reference implementation as a self contained way to ensure secure access to the current time."]}),"\n",(0,i.jsxs)(t.p,{children:["Additionally, this POUF supports custom delegated Targets roles and terminating delegations, features described as optional in the ",(0,i.jsx)(t.a,{href:"https://uptane.github.io/docs/standard/uptane-standard#5121-delegations",children:"Standard"}),". As explained in the Standard, terminating delegations are not used by default. To use custom roles, the Targets role on the Image repository sets up a delegation. Delegations used in this POUF must support multi-role delegations, as explained in ",(0,i.jsx)(t.a,{href:"https://github.com/theupdateframework/taps/blob/d0818e580c322815a473520f2e8cc5f5eb8df499/tap3.md",children:"TAP 3"}),". In addition, delegation filenames are listed using an enumerated list that supports shell-style ",(0,i.jsx)(t.a,{href:"https://uptane.github.io/docs/standard/uptane-standard#5232-metadata-about-delegations",children:"wildcards"}),'. In the name of a directory or file the wildcard character \'%\' may be used to represent multiple characters and \'?\' may be used to represent a single character. For example, "foo/%.txt" could represent "foo/bar.txt" but not "foo/bar.md". In addition "foo/file-?.txt" could represent \'foo/file-a.txt" but not "foo/file-bar.txt". Wildcards will not be used only for standard alpha-numeric characters. Delegations are supported in the reference implementation to demonstrate how they can be used to establish a chain of trust for specific images.']}),"\n",(0,i.jsxs)(t.p,{children:["Public key identifiers use the hash of the key value, encryption algorithm, and verification scheme for a condensed identifier. The format of these identifiers is further described in ",(0,i.jsx)(t.a,{href:"#formats",children:"Formats"}),". This POUF supports RSA and ED25519 hashes for public keys. The hashing algorithm must be specified in the signature method."]}),"\n",(0,i.jsxs)(t.p,{children:["This POUF supports asymmetric keys and uses the ",(0,i.jsx)(t.a,{href:"https://uptane.github.io/uptane-standard/uptane-standard.html#build-time-prerequisite-requirements-for-ecus",children:"same keys for encrypting and signing"}),". Using the same keys allows for a simplified reference implementation and less key management. In particular, each ECU has a private key and registers the associated public key with the Director repository. The ECU will use the private key to sign the vehicle version manifest and the Director repository may use the public key to encrypt images per ECU. In addition, each metadata role has either online or offline private keys that are used on the Director and Image repositories. The public keys associated with these roles are used by the ECUs during validation."]}),"\n",(0,i.jsx)(t.p,{children:"The Image repository and Director repository have public interfaces for communication with ECUs. To make the public interface, the Image and Directory repositories each store metadata in a filesystem that is hosted to form the public interface. These interfaces do not require authentication to read."}),"\n",(0,i.jsxs)(t.p,{children:["The Director repository identifies a vehicle using the vehicle version manifest sent by the Primary ECU to initiate an update. The Director checks the vehicle version manifest as described in the standard, but does not make any additional checks. If ECUs are added to the vehicle, they must be registered with the Director using the register_ecu_serial function described in the ",(0,i.jsx)(t.a,{href:"#message-handler-table",children:"Message Handler Table"}),". If other changes are made to ECUs in a vehicle without notifying the Director, we reserve the right to change how the Director reacts to these ECUs. Using the information in the vehicle version manifest, the Director determines what images need to be installed."]}),"\n",(0,i.jsxs)(t.p,{children:["This POUF does not support sending vehicle version manifests as ",(0,i.jsx)(t.a,{href:"https://uptane.github.io/docs/standard/uptane-standard#5421-construct-and-send-vehicle-version-manifest",children:"diffs"})," to simplify the Director implementation. Sending the full manifest requires some additional bandwidth, but allows the Director to more efficiently parse the manifest."]}),"\n",(0,i.jsx)(t.h2,{id:"metadata",children:"Metadata"}),"\n",(0,i.jsxs)(t.p,{children:["This POUF supports some metadata features that are optional in the Uptane Standard, but are required for an implementation of this POUF. These features are included in the metadata definitions in ",(0,i.jsx)(t.a,{href:"#formats",children:"Formats"}),". The details of these features are:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The metadata version will increment on an update to the metadata."}),"\n",(0,i.jsxs)(t.li,{children:["Root metadata must support ",(0,i.jsx)(t.a,{href:"https://uptane.github.io/docs/standard/uptane-standard#522-root-metadata",children:"mappings of roles to lists of URLs as described in TAP 5"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Repository mapping metadata will be included using a map file. The format of this file is described in ",(0,i.jsx)(t.a,{href:"#formats",children:"Formats"}),". In the mapping metadata, files are expressed using an enumerated list that supports wildcards."]}),"\n",(0,i.jsxs)(t.li,{children:["If images are encrypted per ECU, metadata about encrypted images may be included in the custom field of Targets metadata as described in the ",(0,i.jsx)(t.a,{href:"https://uptane.github.io/docs/standard/uptane-standard#52311-custom-metadata-about-images",children:"Standard"}),". The Image repository does not know which ECU will receive the image, so cannot provide an image encrypted per ECU. Therefore, both the Image and Director repositories will contain metadata about the unencrypted image in Targets metadata and metadata about encrypted images will be but in the custom field of Targets metadata from the Director."]}),"\n",(0,i.jsxs)(t.li,{children:["The custom field of Targets metadata on the Director repository must support an ",(0,i.jsx)(t.a,{href:"https://uptane.github.io/docs/standard/uptane-standard#52311-custom-metadata-about-images",children:"encrypted target field for encrypting images per ECU"}),". In addition, the custom field will contain a release counter and hardware id from both the Director and Image repositories. This POUF does not support the Director adding a download URL to the custom field of Targets metadata."]}),"\n",(0,i.jsxs)(t.li,{children:["The custom field of Targets metadata on the Director and Image repositories are not compared. This means that the must match functionality described in the ",(0,i.jsx)(t.a,{href:"https://uptane.github.io/docs/standard/uptane-standard#52311-custom-metadata-about-images",children:"Standard"})," is not supported. This is not included for backwards compatibility reasons. A client may choose to compare some fields of Targets metadata, but these checks are not required by this POUF. If all other fields match, the custom metadata from the Director is used."]}),"\n",(0,i.jsxs)(t.li,{children:["Snapshot metadata in this POUF does not include the Root filename or version. These fields are included in implementations that do not use ",(0,i.jsx)(t.a,{href:"https://github.com/theupdateframework/taps/blob/01726d203c9b9c029d26f6612069ce3180500d9a/tap5.md#downloading-metadata-and-target-files",children:"TAP 5"}),". Because this POUF implements TAP 5, the Root filename and version do not need to be included in Snapshot metadata."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.p,{children:"Key management and image generation are not handled by this POUF. The POUF uses online keys for all roles to demonstrate Uptane functionality. This practice is not recommended for Uptane implementers."}),"\n",(0,i.jsx)(t.h2,{id:"server-setup",children:"Server Setup"}),"\n",(0,i.jsx)(t.p,{children:"The Uptane Reference Implementation does the following setup before any updates can be installed:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The Director repository is initialized with the private keys for all roles with online keys. These keys are stored on the Director so they can be used to automatically sign valid metadata. Any offline keys, for example the Root key, should not be stored on the repository."}),"\n",(0,i.jsx)(t.li,{children:"An inventory database is initialized on the Director repository. This database contains fields for vehicle manifests, ECU manifests, a mapping that associates vehicles to ECUs, and the ECU public keys. This database is used and updated during the update process."}),"\n",(0,i.jsx)(t.li,{children:"ECUs register with the Director repository. Each ECU on a vehicle must register by sending its ECU id and ECU public key to the Director repository. This information from registration is stored in the inventory database."}),"\n",(0,i.jsx)(t.li,{children:"The timeserver is initialized with a timeserver private key."}),"\n",(0,i.jsxs)(t.li,{children:["Each ECU needs to be preloaded with the urls and directory locations of the Director repository and Image repository. In addition, each ECU needs to be loaded with the Image and Director public keys at the time of manufacture. For details about what keys are needed on each ECU, see the ",(0,i.jsx)(t.a,{href:"#data-table",children:"Data Table"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"data-table",children:"Data Table"}),"\n",(0,i.jsx)(t.p,{children:"Each device involved in the update process is expected to have access to certain data. The required devices are expected to have at least the following data:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Location"}),(0,i.jsx)(t.th,{children:"Data"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Primary ECU"}),(0,i.jsxs)(t.td,{children:["ECU private key ",(0,i.jsx)(t.em,{children:"Timeserver public key"})," Currently installed version ",(0,i.jsx)(t.em,{children:"Secondary's Vehicle Version Manifests"})," The most recent Root, Timestamp, Targets, and Snapshot metadata (for a new installation, just the known Root metadata) from both the Image and Director repositories ",(0,i.jsx)(t.em,{children:"Image repository public key for each metadata role and the associated threshold. These values are available in the current metadata files."})," Director repository public key for each metadata role and the associated thresholds. These values are available in the current metadata files."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Full verification Secondary ECU"}),(0,i.jsxs)(t.td,{children:["ECU private key ",(0,i.jsx)(t.em,{children:"Timeserver public key"})," Currently installed version * The most recent Root, Timestamp, Targets, and Snapshot metadata (for a new installation, just the known Root metadata) from both the Image and Director repositories"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Partial verification Secondary ECU"}),(0,i.jsxs)(t.td,{children:["ECU private key ",(0,i.jsx)(t.em,{children:"Timeserver public key"})," Currently installed version * Director's Targets metadata public key"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Director Repository"}),(0,i.jsxs)(t.td,{children:["ECU public keys ",(0,i.jsx)(t.em,{children:"Metadata about images"})," Inventory database ",(0,i.jsx)(t.em,{children:"Online metadata private Director metadata keys"})," Metadata signed by offline Director metadata keys"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Image Repository"}),(0,i.jsxs)(t.td,{children:["ECU public keys ",(0,i.jsx)(t.em,{children:"Metadata about images"})," Images ",(0,i.jsx)(t.em,{children:"Online metadata private image metadata keys"})," Metadata signed by offline image metadata keys"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Timeserver"}),(0,i.jsx)(t.td,{children:"Timeserver private key * Current time"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"formats",children:"Formats"}),"\n",(0,i.jsx)(t.h2,{id:"file-formats",children:"File formats"}),"\n",(0,i.jsxs)(t.p,{children:["Files will be transmitted as described in the Uptane standard and in the ",(0,i.jsx)(t.a,{href:"#message-handler-table",children:"Message Handler Table"})," using the definitions in this section. These definitions describe what data should be transmitted in each of these messages and how the data will be laid out. The fields of each file should be in the exact order specified here to allow clients and servers to interoperate. Files are encoded in ASN.1/DER and sent over XML-RPC as described in ",(0,i.jsx)(t.a,{href:"#protocols",children:"Protocols"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"At the top of this section are some definitions used throughout the files and for the metadata. After these are descriptions of the metadata and other files."}),"\n",(0,i.jsx)(t.h3,{id:"common-definitions",children:"Common Definitions"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'RoleType        ::= ENUMERATED {root, targets, snapshot, timestamp}\n\n-- String types.\nFilename        ::= VisibleString (SIZE(1..32))\n-- No known path separator allowed in a strict filename.\nStrictFilename  ::= VisibleString (SIZE(1..32))\n                                  (PATTERN "[^/\\\\]+")\nOctetString     ::= OCTET STRING  (SIZE(1..1024))\nPaths           ::= SEQUENCE (SIZE(1..8)) OF Path\nPath            ::= VisibleString (SIZE(1..32))\n                                  (PATTERN "[\\w\\*\\\\/]+")\nURLs            ::= SEQUENCE OF URL\nURL             ::= VisibleString (SIZE(1..1024))\n-- A generic identifier for vehicles, Primaries, Secondaries.\nIdentifier      ::= VisibleString (SIZE(1..32))\n\nNatural         ::= INTEGER (0..MAX)\nPositive        ::= INTEGER (1..MAX)\nLength          ::= Natural\nThreshold       ::= Positive\nVersion         ::= Natural\n-- The date and time in UTC encoded as a UNIX timestamp.\nUTCDateTime     ::= Positive\n\n-- Adjust length of SEQUENCE OF to your needs.\nHashes          ::= SEQUENCE (SIZE(1..8)) OF Hash\nHash            ::= SEQUENCE {\n  function      HashFunction,\n  digest        OctetString\n}\nHashFunction ::= ENUMERATED {sha224, sha256, sha384, sha512, sha512-224,\n                             sha512-256, ...}\n\n-- Adjust length of SEQUENCE OF to your needs.\nKeyids          ::= SEQUENCE (SIZE(1..8)) OF Keyid\n-- Usually, a hash of a public key.\nKeyid           ::= OctetString\n\n-- Adjust length of SEQUENCE OF to your needs.\nSignatures      ::= SEQUENCE (SIZE(1..8)) OF Signature\nSignature       ::= SEQUENCE {\n  keyid         Keyid,\n  method        SignatureMethod,\n  -- For efficient checking, sign the hash of the message instead of the\n  -- message itself.\n  hash          Hash,\n  -- The signature itself.\n  value         OctetString\n}\nSignatureMethod ::= ENUMERATED {rsassa-pss, ed25519, ...}\n\n-- Adjust length of SEQUENCE OF to your needs.\nPublicKeys      ::= SEQUENCE (SIZE(1..8)) OF PublicKey\nPublicKey       ::= SEQUENCE {\n  publicKeyid     Keyid,\n  publicKeyType   PublicKeyType,\n  publicKeyValue  OctetString\n}\nPublicKeyType   ::= ENUMERATED {rsa, ed25519, ...}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"metadata-format",children:"Metadata Format"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Metadata      ::= SEQUENCE {\n    signed              Signed,\n    numberOfSignatures  Length,\n    signatures          Signatures\n  }\n  Signed        ::= SEQUENCE {\n    type        RoleType,\n    expires     UTCDateTime,\n    version     Positive,\n    body        SignedBody\n  }\n  SignedBody    ::= CHOICE {\n    rootMetadata      RootMetadata,\n    targetsMetadata   TargetsMetadata,\n    snapshotMetadata  SnapshotMetadata,\n    timestampMetadata TimestampMetadata\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"root",children:"Root"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"RootMetadata ::= SEQUENCE {\n    numberOfKeys  Length,\n    keys          PublicKeys,\n    numberOfRoles Length,\n    roles         TopLevelRoles,\n    ...\n  }\n  -- Adjust length of SEQUENCE OF to your needs.\n  TopLevelRoles ::= SEQUENCE (SIZE(4)) OF TopLevelRole\n  TopLevelRole  ::= SEQUENCE {\n    role            RoleType,\n    -- TAP 5: The URLs pointing to the metadata file for this role.\n    numberOfURLs    Length OPTIONAL,\n    urls            URLs OPTIONAL,\n    numberOfKeyids  Length,\n    keyids          Keyids,\n    threshold       Threshold,\n    ...\n}\n      -- Adjust length of SEQUENCE OF to your needs.\n"})}),"\n",(0,i.jsx)(t.h3,{id:"snapshot",children:"Snapshot"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"SnapshotMetadata ::= SEQUENCE {\n    numberOfSnapshotMetadataFiles Length,\n    snapshotMetadataFiles         SnapshotMetadataFiles\n  }\n  SnapshotMetadataFiles ::= SEQUENCE (SIZE(1..128)) OF SnapshotMetadataFile\n  SnapshotMetadataFile ::= SEQUENCE {\n    filename  StrictFilename,\n    version   Version,\n    ...\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"targets",children:"Targets"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'TargetsMetadata ::= SEQUENCE {\n    -- Allowed to have no targets at all.\n    numberOfTargets Natural,\n    -- Metadata about unencrypted images on a repository.\n    targets         Targets,\n    -- Delegations are optional.\n    delegations     TargetsDelegations OPTIONAL,\n    ...\n  }\n\n  -- Adjust length of SEQUENCE OF to your needs.\n  Targets           ::= SEQUENCE (SIZE(1..128)) OF TargetAndCustom\n  TargetAndCustom   ::= SEQUENCE {\n    -- The filename, length, and hashes of unencrypted images on a repository.\n    target  Target,\n    -- This attribute is used to specify additional information, such as which\n    -- images should be installed by which ECUs, and metadata about encrypted\n    -- images.\n    custom  Custom OPTIONAL\n  }\n  Target ::= SEQUENCE {\n    filename        Filename,\n    length          Length,\n    numberOfHashes  Length,\n    hashes          Hashes\n  }\n  Custom ::= SEQUENCE {\n    -- NOTE: The following attributes are specified by both the Image and\n    -- Director repositories.\n    -- The release counter is used to prevent rollback attacks on images when\n    -- only the Director repository is compromised.\n    -- Every ECU should check that the release counter of its latest image is\n    -- greater than or equal to the release counter of its previous image.\n    releaseCounter        Natural OPTIONAL,\n    -- The hardware identifier is used to prevent the Director repository,\n    -- when it is compromised, from choosing images for an ECU that were not\n    -- meant for it.\n    -- Every ECU should check that the hardware ID of its latest image matches\n    -- its hardware ID.\n    -- An OEM MAY define other types of information to further restrict the\n    -- choices that can be made by a compromised Director repository.\n    hardwareIdentifier    Identifier OPTIONAL,\n    -- NOTE: The following attributes are specified only by the Director\n    -- repository.\n    -- The ECU identifier specifies information, e.g., serial numbers, that the\n    -- Director uses to point ECUs as to which images they should install.\n    -- Every ECU should check that the ECU ID of its latest image matches its\n    -- own ECU ID.\n    ecuIdentifier         Identifier OPTIONAL,\n    -- This attribute MAY be used by the Director to encrypt images per ECU.\n    encryptedTarget       Target OPTIONAL,\n    -- This attribute MAY be used if ECU keys are asymmetric, and a per-image\n    -- symmetric encryption key is desired for faster decryption of images.\n    -- In that case, the Director would use the asymmetric ECU key to encrypt\n    -- this symmetric key.\n    encryptedSymmetricKey EncryptedSymmetricKey OPTIONAL,\n    ...\n  }\n  EncryptedSymmetricKey ::= SEQUENCE {\n    -- This is the symmetric key type.\n    encryptedSymmetricKeyType   EncryptedSymmetricKeyType,\n    -- This is the symmetric key encrypted using the asymmetric ECU key.\n    encryptedSymmetricKeyValue  OctetString\n  }\n  EncryptedSymmetricKeyType ::= ENUMERATED {aes128, aes192, aes256, ...}\n\n  -- https://github.com/theupdateframework/taps/blob/master/tap3.md\n  TargetsDelegations  ::= SEQUENCE {\n    -- The public keys of all delegatees.\n    numberOfKeys        Length,\n    keys                PublicKeys,\n    -- The role name, filename, public keys, and threshold of a delegatee.\n    numberOfDelegations Length,\n    -- A list of paths to roles, listed in order of priority.\n    delegations         PrioritizedPathsToRoles\n  }\n\n  -- Adjust length of SEQUENCE OF to your needs.\n  PrioritizedPathsToRoles ::= SEQUENCE (SIZE(1..8)) OF PathsToRoles\n  PathsToRoles ::= SEQUENCE {\n    -- A list of image/target paths entrusted to these roles.\n    numberOfPaths   Length,\n    paths           Paths,\n    -- A list of roles required to sign the same metadata about the matching\n    -- targets/images.\n    numberOfRoles   Length,\n    roles           MultiRoles,\n    -- Whether or not this delegation is terminating.\n    terminating     BOOLEAN DEFAULT FALSE\n  }\n\n  -- Adjust length of SEQUENCE OF to your needs.\n  MultiRoles ::= SEQUENCE (SIZE(1..8)) OF MultiRole\n  MultiRole ::= SEQUENCE {\n    -- The rolename (e.g., "supplierA-dev").\n    -- No known path separator allowed in a rolename.\n    rolename        StrictFilename,\n    -- The public keys used by this role.\n    numberOfKeyids  Length,\n    keyids          Keyids,\n    -- The threshold number of these keys.\n    threshold       Threshold\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"delegated-targets",children:"Delegated targets"}),"\n",(0,i.jsx)(t.p,{children:"Delegated targets use the same ASN.1 definitions as targets."}),"\n",(0,i.jsx)(t.h3,{id:"timestamp",children:"Timestamp"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"TimestampMetadata ::= SEQUENCE {\n    filename        Filename,\n    version         Version,\n    length          Length,\n    numberOfHashes  Length,\n    hashes          Hashes,\n    ...\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"map-file",children:"Map File"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"-- https://github.com/theupdateframework/taps/blob/master/tap4.md\n  MapFile ::= SEQUENCE {\n    -- A list of repositories.\n    numberOfRepositories  Length,\n    repositories          Repositories,\n    --A list of mapping of images to repositories.\n    numberOfMappings      Length,\n    mappings              Mappings\n  }\n\n  -- Adjust length of SEQUENCE OF to your needs.\n  Repositories    ::= SEQUENCE (SIZE(2)) OF Repository\n  Repository      ::= SEQUENCE {\n    -- A shorthand name for the repository, which also specifies the name of the\n    -- directory on the client which contains previous and latest metadata.\n    name              RepositoryName,\n    -- A list of servers where metadata and targets may be downloaded from.\n    numberOfServers   Length,\n    servers           URLs,\n    ...\n  }\n  -- Adjust length of SEQUENCE OF to your needs.\n  RepositoryNames ::= SEQUENCE (SIZE(2)) OF RepositoryName\n  RepositoryName  ::= StrictFilename\n\n  -- Adjust length of SEQUENCE OF to your needs.\n  Mappings ::= SEQUENCE (SIZE(1)) OF Mapping\n  Mapping  ::= SEQUENCE {\n    -- The list of targets delegated to the following repositories.\n    numberOfPaths         Length,\n    paths                 Paths,\n    -- The repositories which MUST all sign the preceding targets.\n    numberOfRepositories  Length,\n    repositories          RepositoryNames,\n    -- Whether or not this delegation is terminating.\n    terminating           BOOLEAN DEFAULT FALSE,\n    ...\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"ecu-metadata-and-vehicle-version-manifest",children:"ECU Metadata and Vehicle Version Manifest"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"-- What a Primary sends the Director repository.\n  VehicleVersionManifest ::= SEQUENCE {\n    -- The signed portion of the manifest.\n    signed    VehicleVersionManifestSigned,\n    -- The signature on the hash of the signed portion.\n    numberOfSignatures  Length,\n    signatures          Signatures\n  }\n  VehicleVersionManifestSigned ::= SEQUENCE {\n    -- A unique identifier for the vehicle.\n    vehicleIdentifier           Identifier,\n    -- A unique identifier for the Primary sending this manifest.\n    primaryIdentifier           Identifier,\n    numberOfECUVersionManifests Length,\n    -- An ECU version manifest per Secondary.\n    ecuVersionManifests         ECUVersionManifests,\n    -- A message about a detected security attack, if any.\n    securityAttack  VisibleString (SIZE(1..1024)) OPTIONAL,\n    ...\n  }\n  -- Adjust length of SEQUENCE OF to your needs.\n  ECUVersionManifests ::= SEQUENCE (SIZE(1..256)) OF ECUVersionManifest\n\n  -- What a Secondary sends its Primary after installation.\n  VersionReport ::= SEQUENCE {\n    -- Token for the time server.\n    tokenForTimeServer Token,\n    -- The ECU version manifest for the Director.\n    ecuVersionManifest ECUVersionManifest,\n    ...\n  }\n  ECUVersionManifest ::= SEQUENCE {\n    -- The signed portion of the manifest.\n    signed      ECUVersionManifestSigned,\n    -- The signature on the hash of the signed portion.\n    numberOfSignatures  Length,\n    signatures          Signatures\n  }\n  ECUVersionManifestSigned ::= SEQUENCE {\n    -- A unique identifier for the ECU.\n    ecuIdentifier   Identifier,\n    -- The previous time seen on the time server.\n    previousTime    UTCDateTime,\n    -- The latest known time seen on the time server.\n    currentTime     UTCDateTime,\n    -- A message about a detected security attack, if any.\n    securityAttack  VisibleString (SIZE(1..1024)) OPTIONAL,\n    -- Metadata about the installed image.\n    installedImage  Target,\n    ...\n  }\n"})}),"\n",(0,i.jsx)(t.h3,{id:"time-server",children:"Time Server"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"-- What a Primary sends the time server: a token from each of its Secondaries.\n  SequenceOfTokens ::= SEQUENCE {\n    numberOfTokens  Length,\n    tokens          Tokens\n  }\n  -- Adjust length of SEQUENCE OF to your needs.\n  Tokens  ::= SEQUENCE (SIZE(1..1024)) OF Token\n  Token   ::= INTEGER\n\n  -- What the time server sends in response.\n  CurrentTime   ::= SEQUENCE {\n    signed              TokensAndTimestamp,\n    numberOfSignatures  Length,\n    signatures          Signatures\n  }\n  TokensAndTimestamp ::= SEQUENCE {\n    numberOfTokens  Length,\n    tokens          Tokens,\n    timestamp       UTCDateTime,\n    ...\n}\n"})})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var i=n(7294);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);