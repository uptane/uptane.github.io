"use strict";(self.webpackChunkuptane=self.webpackChunkuptane||[]).push([[980],{4513:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>n,toc:()=>l});var n=o(7776),a=o(4848),i=o(8453);const s={title:"Getting Started With Uptane",authors:["Jon"]},r=void 0,d={authorsImageUrls:[void 0]},l=[{value:"Why should I use Uptane?",id:"why-should-i-use-uptane",level:2},{value:"What is Uptane?",id:"what-is-uptane",level:2},{value:"What Uptane Isn&#39;t",id:"what-uptane-isnt",level:3},{value:"Ways to use Uptane Today",id:"ways-to-use-uptane-today",level:2},{value:"Servers/repositories",id:"serversrepositories",level:3},{value:"Clients",id:"clients",level:3},{value:"Next steps",id:"next-steps",level:2}];function h(e){const t={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Let me get this out of the way right at the start: Uptane can be an intimidating project to take on. Why is that? Well, first of all, Uptane is a standard, not a specific piece of software. That in itself is always difficult because it's harder to engage with an abstract set of rules and concepts than with a real piece of software. But even beyond that, Uptane is different from other standards you might read. It doesn't specify an exact wireline formats and metadata schema that must be implemented. Furthermore, Uptane kind of sits \"in the middle\" on a software update architecture diagram."}),"\n",(0,a.jsxs)(t.p,{children:["In this post, I want to do three things. First, I'm going to answer the question, \"Why should I want to use Uptane, and where?\" Second, I'm going to give a really high-level overview of what Uptane is. I'm not going to get into specifics of ",(0,a.jsx)(t.em,{children:"how"})," Uptane works, I just want to describe what it is, and what it does. And finally, I want to show the easiest way to start using a system that delivers software updates through Uptane by making use of open-source implementations of various parts of an Uptane system."]}),"\n",(0,a.jsx)(t.h2,{id:"why-should-i-use-uptane",children:"Why should I use Uptane?"}),"\n",(0,a.jsx)(t.p,{children:"Uptane isn't just for vehicles!"}),"\n",(0,a.jsx)(t.p,{children:"Uptane was designed as a system to safely and securely deliver software updates to vehicles. That means it was designed to work under some difficult constraints. To begin with, there are dozens of different microcontrollers inside a vehicle, all running software that might need to be updated, and are connected by a number of different buses. There are challenging regulatory requirements, as well. A vehicle might only be road-legal with certain approved firmwares running on safety-critical parts. So you need to make sure that vehicles can report the software they're running in a verifiable way, and you need to be able to control the complete set of software and firmware running on the vehicle."}),"\n",(0,a.jsx)(t.p,{children:'These factors make Uptane a really good choice for many other kinds of software updates to embedded devices. Medical devices, industrial automation, robotics, and other fields can also benefit from using an Uptane system. The rule of thumb you should use is this: if end users will be making choices about the firmware on the device that go beyond choosing if/when to install the latest updates, you probably want "basic" TUF. If the devices should be controlled more centrally, with the manufacturer (or some other entity) choosing when software updates should be delivered, you should use Uptane.'}),"\n",(0,a.jsx)(t.h2,{id:"what-is-uptane",children:"What is Uptane?"}),"\n",(0,a.jsxs)(t.p,{children:["Uptane is a standard, a set of rules to follow that will make your software update system resilient to a wide variety of real-world, long-term attacks. Uptane has various implementations, most of them proprietary, and many of them confidential and inside automotive companies. But to understand what it ",(0,a.jsx)(t.em,{children:"is"}),", the best thing will be to show some diagrams."]}),"\n",(0,a.jsx)(t.p,{children:'This is a software repository, and a device that connects to it and installs an update. (I\'m going to just say "device" for the purposes of this article. It might be a vehicle, or a robot, or an MRI machine.)'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:o(9125).A+"",width:"2190",height:"1330"})}),"\n",(0,a.jsx)(t.p,{children:'Let\'s say the repository is just an FTP server. It has some firmware images in it, in some kind of predictable directory structure. To make the repository more secure, you can follow the TUF standard. TUF describes how to add some signed metadata to a "normal" software repository like this, to make it possible for anyone who connects to the repository to verify a number of important properties related to timeliness, authenticity, and consistency. A TUF-compliant client can verify that:'}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The owner of the repository decided which packages to let in"}),"\n",(0,a.jsx)(t.li,{children:"The publisher of each package signed their own software and uploaded it"}),"\n",(0,a.jsx)(t.li,{children:"The versions of the packages I see here are actually the latest ones, or at least they're out of date by no more than some known amount of time"}),"\n",(0,a.jsx)(t.li,{children:"The hash of every binary/firmware image on the repository can be independently checked and verified, in an automated way"}),"\n",(0,a.jsx)(t.li,{children:"None of the keys used for signing software have been revoked"}),"\n",(0,a.jsx)(t.li,{children:"...and a number of other things; the overall threat model that TUF protects against is too large for a bullet-point list"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"This is great, and is enough for securing traditional package repositories, where the end user knows what to install--think PyPI, npm, apt, or Cargo. It also allows the publisher to remove packages from the repo, and prevent them from being installed. For example, if a version was discovered to have a serious bug, you can simply remove it from the repository to prevent people from installing it. (Compare this to signing each release package with, say, a GPG key that users store in their keyring: if you want prevent na\xefve users/clients from installing a particular version, you have to also revoke the key used to sign it, and try to make sure that the revocation is propagated. Not an easy task, which is why it's so rarely done.) Let's look at our picture now:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:o(7186).A+"",width:"2656",height:"1324"})}),"\n",(0,a.jsxs)(t.p,{children:["But we need a bit more than this. Our clients are embedded devices or vehicles: we don't want to just give them a list of every possible package that exists and let them sort out what to install. We need to actually give them instructions about what to install, and we also need to know what's currently installed on them. This is where Uptane comes in. Uptane builds on TUF, adding a second entity called the Director repository. The Director repository is responsible for, well, ",(0,a.jsx)(t.em,{children:"directing"})," the devices to install the software they're supposed to have installed, via whatever internal business logic is required. It also processes and validates the manifests that the devices send, so it's a reliable source of truth for what software is currently installed. Again, I'm not going to get into detail about how it does this; for now it's enough to know ",(0,a.jsx)(t.em,{children:"what"})," it does."]}),"\n",(0,a.jsx)(t.p,{children:"So, once you have a Director repository, an Image repository, and a device, the picture is complete. In broad strokes, the protocol for checking for an update goes like this:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:o(9800).A+"",width:"2804",height:"1374"})}),"\n",(0,a.jsx)(t.p,{children:"That's more or less it. Of course, there are many, many details. The bulk of the standard relates to the exact procedures for how the device checks the metadata and signatures. And of course, we've ignored the question of how software gets into a repository, how the signing keys are managed, and how Director decides what should be installed on the device. Uptane also deals with \"secondaries,\" meaning that one internet-connected microcontroller or embedded Linux device can download and validate firmware updates for other microcontrollers; you can read elsewhere about how secondaries work."}),"\n",(0,a.jsx)(t.h3,{id:"what-uptane-isnt",children:"What Uptane Isn't"}),"\n",(0,a.jsx)(t.p,{children:"If you've gotten to this point, you've probably realized that there is a significant amount of stuff missing from the picture. Uptane doesn't say anything about:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"an interface to manage the software in the repository"}),"\n",(0,a.jsx)(t.li,{children:"how to keep track of the information Director gets from the devices"}),"\n",(0,a.jsx)(t.li,{children:"how Director decides what software the device should have installed"}),"\n",(0,a.jsx)(t.li,{children:"how the device actually installs the update"}),"\n",(0,a.jsx)(t.li,{children:"how the device authenticates itself to the repository"}),"\n",(0,a.jsx)(t.li,{children:"transport security between the repository and the device (though Uptane is resilient to transport security compromise)"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"So there's a lot of other stuff that you need to attach Uptane concepts to before you have a complete update system. Some of those things might be relatively easy, some harder, but there are certainly a lot of them."}),"\n",(0,a.jsx)(t.p,{children:'The reason Uptane was created this way is that it was written to solve real problems with existing systems. TUF was created as a way for existing software repositories to improve their security; those repositories already had systems for developers to register their package names and upload their software, and clients that know how to install the packages. Uptane was created to be used by automakers who already have software repositories, suppliers sending them firmware, quality control processes for what constitutes a software release, aftersales and maintenance departments keeping track of what parts might need software updates, and so on. It\'s a standard that answers the question, "How can I make my existing, complex system safer?" It would also make the standard very bloated and very inflexible if we made arbitrary decisions about those auxiliary pieces; we want the Uptane Standard to remain focused on solving supply-chain security and software deployment security.'}),"\n",(0,a.jsx)(t.p,{children:"But what if you are coming at it from the opposite direction? You don't already have a big complex system to secure, and you just want to set up a software repository and deliver software updates to embedded devices, using best practices from the start? In short, now that you know what Uptane is and what Uptane isn't, how can you actually use it?"}),"\n",(0,a.jsx)(t.h2,{id:"ways-to-use-uptane-today",children:"Ways to use Uptane Today"}),"\n",(0,a.jsx)(t.p,{children:"So, for a full Uptane system, you need:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"An Image repository, with some APIs/interfaces for doing common things"}),"\n",(0,a.jsx)(t.li,{children:"A Director repository, with some way to create software updates and assign them to devices"}),"\n",(0,a.jsx)(t.li,{children:"A client on your device that can talk to your server, and install updates"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"There are actually pretty easy options for all of these things, including both free-as-in-beer and free-as-in-speech resources."}),"\n",(0,a.jsx)(t.h3,{id:"serversrepositories",children:"Servers/repositories"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/uptane/ota-community-edition/",children:"OTA Community Edition"})}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"OTA Community Edition is the open-source, community-maintained Uptane implementation. It implements an Image repository, Director repository, and a device registry to keep track of the manifests (and other information) the devices send. It has HTTP REST APIs for all of the basic necessities for Uptane, but also for the practical bits that you need, like actually assigning updates to devices, uploading software, generating keys, and so on."}),"\n",(0,a.jsxs)(t.p,{children:["The OTA Community Edition repository contains instructions for how to spin up the services on a local network; to run an adequate production instance you'll need to fill in some blanks. It doesn't currently have a well-maintained web UI, but it's still possible to use the UI that was previously developed and open-sourced by HERE Technologies, once you make a few modifications to stub out API calls to their proprietary services. (P.S.: If you're interested in contributing to Uptane, developing a community-maintained web UI for OTA Community Edition is one of the ",(0,a.jsx)(t.a,{href:"https://wiki.linuxfoundation.org/gsoc/2024-gsoc-uptane",children:"projects we're proposing"})," for ",(0,a.jsx)(t.a,{href:"https://summerofcode.withgoogle.com/",children:"Google Summer of Code 2024"}),"!)"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"http://app.uptanedemo.org",children:"app.uptanedemo.org"})}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"I've spun up an instance of OTA Community Edition to help people get their feet wet, for free. It's open to the public as a demo instance, with all of its private signing keys published publicly (so, buyer beware: if you connect a device to this instance, anyone who wanted to could install malicious software). I wipe and reset it periodically. Some documentation on how to use it is coming soon, but for now, just pop into Discord and ask if you'd like to connect a device to it."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.torizon.io",children:"Torizon Cloud"})}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Torizon Cloud is a service provided by Toradex, built around Uptane. You can make a limited-usage account for free; if you go beyond 10 devices you have to pay. Disclosure: I work for Toradex on the team that develops Torizon Cloud, so this is self-promotion. The service is primarily geared at people running Toradex's embedded Linux distro Torizon OS, but it is a perfectly normal Uptane server that you can use with any of the client options below."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Other commercial Uptane providers"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"There are other commercial providers of Uptane services, including Airbiquity's OTAMatic, HERE's OTA Connect, and CAROTA's Remote Updates. However, there don't appear to be open-source offerings of any of the parts, or demo servers that can be accessed without a commercial contract. (If anyone from those companies wants to reach out and correct me on that, I'm happy to add a link.)"}),"\n",(0,a.jsx)(t.h3,{id:"clients",children:"Clients"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Build your own using ",(0,a.jsx)(t.a,{href:"https://github.com/uptane/aktualizr/",children:"libaktualizr"})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The main way to get an Uptane client is to build one using ",(0,a.jsx)(t.a,{href:"https://github.com/uptane/aktualizr/",children:"libaktualizr"}),". The aktualizr repository does include reference clients that can talk to OTA Community Edition servers. However, to really make use of Uptane and aktualizr, you'll want it to be integrated in your embedded Linux build."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Add aktualizr to your existing embedded Linux using ",(0,a.jsx)(t.a,{href:"https://github.com/uptane/meta-updater/",children:"meta-updater"})]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Most people building embedded Linuxes these days use Yocto. You can use meta-updater to integrate aktualizr into your Yocto build. There will be some work to do if you want to use it with an unsupported board; in particular you'll need to integrate OSTree and your bootloader, to deploy the images."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Use ",(0,a.jsx)(t.a,{href:"https://www.torizon.io/",children:"Torizon OS"})," or ",(0,a.jsx)(t.a,{href:"https://github.com/commontorizon/Documentation",children:"Common Torizon"})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["This is probably the easiest way to get started. Torizon OS is a Linux distribution tailored for Toradex's embedded system-on-modules, so if you have Toradex hardware it's built right in. But even if you don't have a Toradex module, you can still use ",(0,a.jsx)(t.a,{href:"https://github.com/commontorizon/Documentation",children:"Common Torizon"}),". It's a Toradex-sponsored and community-maintained port of ",(0,a.jsx)(t.a,{href:"https://www.torizon.io/",children:"Torizon OS"})," to non-Toradex hardware; you can install it on a ",(0,a.jsx)(t.a,{href:"https://github.com/commontorizon/Documentation/blob/main/FLASH-RPI.md",children:"Raspberry Pi"})," or even an ",(0,a.jsx)(t.a,{href:"https://github.com/commontorizon/Documentation/blob/main/FLASH-X86.md",children:"x86 machine or VM"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,a.jsxs)(t.p,{children:["Hopefully this has been a good primer for getting started with the Uptane project! We're planning to release more blog posts in the near future digging a little bit deeper into aktualizr and OTA Community Edition, but if you have questions or topics you're interested in seeing on the Uptane blog, let us know. You can always ",(0,a.jsx)(t.a,{href:"https://discord.gg/uWyT6gDCqx",children:"join our Discord"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9125:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/simple-repository-7ecdfe1c3e443775c7a6c6e4bf32ecc4.png"},7186:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/tuf-repository-22882933be8aa41b9a906e4d686a87c7.png"},9800:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/uptane-repository-8277f4cde653cd74ea542505f7f12126.png"},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>r});var n=o(6540);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}},7776:e=>{e.exports=JSON.parse('{"permalink":"/blog/2024/02/26/Get-Started-With-Uptane","source":"@site/blog/2024-02-26-Get-Started-With-Uptane/index.md","title":"Getting Started With Uptane","description":"Let me get this out of the way right at the start: Uptane can be an intimidating project to take on. Why is that? Well, first of all, Uptane is a standard, not a specific piece of software. That in itself is always difficult because it\'s harder to engage with an abstract set of rules and concepts than with a real piece of software. But even beyond that, Uptane is different from other standards you might read. It doesn\'t specify an exact wireline formats and metadata schema that must be implemented. Furthermore, Uptane kind of sits \\"in the middle\\" on a software update architecture diagram.","date":"2024-02-26T00:00:00.000Z","tags":[],"readingTime":11.11,"hasTruncateMarker":false,"authors":[{"name":"Jon Oster","title":"Uptane Standards Committee Chair","url":"https://www.linkedin.com/in/jon-oster-183813187/","key":"Jon","page":null}],"frontMatter":{"title":"Getting Started With Uptane","authors":["Jon"]},"unlisted":false,"prevItem":{"title":"Join Us at the Uptane Industry Workshop \u2013 June 7, 2024","permalink":"/blog/2024/05/09/June-Workshop"},"nextItem":{"title":"Uptane Signs on for GSoC 2024: Join our Journey of Collaboration and Growth! \u2600\ufe0f\ud83d\ude80","permalink":"/blog/2024/01/23/GSoC-Annoucement"}}')}}]);