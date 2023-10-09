"use strict";(self.webpackChunkuptane=self.webpackChunkuptane||[]).push([[6866],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var h=n.createContext({}),c=function(e){var t=n.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(h.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,h=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,m=p["".concat(h,".").concat(u)]||p[u]||d[u]||i;return a?n.createElement(m,o(o({ref:t},l),{},{components:a})):n.createElement(m,o({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var h in t)hasOwnProperty.call(t,h)&&(s[h]=t[h]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7536:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:3},o="Uptane Design",s={unversionedId:"learn-more/design",id:"version-1.1.0/learn-more/design",title:"Uptane Design",description:"Uptane utilizes multiple servers, known as repositories, to provide security through the validation of images before downloading. This diagram illustrates how the checks and balances of this system works. The connected components on the right hand side of the diagram are on the vehicle, while the components on the left hand-side represent the repositories. The Image repository can be thought of as an unchanging source of information about images. It is the keeper of every image currently deployed by the OEM, along with the metadata files that prove their authenticity. The Director repository knows what software should be distributed to each ECU, given the current state of the repository. Many ECUs do not have clocks, and so may use an external source to provide a secure source of time.",source:"@site/versioned_docs/version-1.1.0/learn-more/design.md",sourceDirName:"learn-more",slug:"/learn-more/design",permalink:"/docs/1.1.0/learn-more/design",draft:!1,tags:[],version:"1.1.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"LearnMoreSidebar",previous:{title:"Threat Model",permalink:"/docs/1.1.0/learn-more/threat"},next:{title:"Audio-Visuals",permalink:"/docs/1.1.0/learn-more/audio"}},h={},c=[{value:"The Evolution of Uptane",id:"the-evolution-of-uptane",level:2}],l={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uptane-design"},"Uptane Design"),(0,r.kt)("p",null,"Uptane utilizes multiple servers, known as repositories, to provide security through the validation of images before downloading. This diagram illustrates how the checks and balances of this system works. The connected components on the right hand side of the diagram are on the vehicle, while the components on the left hand-side represent the repositories. The Image repository can be thought of as an unchanging source of information about images. It is the keeper of every image currently deployed by the OEM, along with the metadata files that prove their authenticity. The Director repository knows what software should be distributed to each ECU, given the current state of the repository. Many ECUs do not have clocks, and so may use an external source to provide a secure source of time."),(0,r.kt)("p",null,"In the first step in the update process, the ECU sends its vehicle version manifest to the Director repository. The manifest contains signed information about existing images. Using this input, the Director chooses which images should be installed next. The metadata and images are then moved to the ECU, which will run a verification process. The diagram shows a Primary ECU connected to a number of Secondary ECUs. ECUs are generally classified in terms of access to storage space, memory, a power supply, and a direct internet connection. The form of verification that will be run --Full or Partial-- is also based on the resources of the ECU, as well as how security critical it may be. If the verification indicates no issues, the images can be downloaded to the ECU, and the vehicle version manifest will be updated."),(0,r.kt)("h2",{id:"the-evolution-of-uptane"},"The Evolution of Uptane"),(0,r.kt)("p",null,"To meet the types of threats enumerated, Uptane started with the basic design of ",(0,r.kt)("a",{parentName:"p",href:"https://theupdateframework.github.io/overview.html"},"The Update Framework (TUF)"),", a flexible framework and specification that has proven successful in securing software update systems on repositories. The basic TUF design was first introduced in a ",(0,r.kt)("a",{parentName:"p",href:"https://ssl.engineering.nyu.edu/papers/samuel_tuf_ccs_2010.pdf"},"2010 paper")," by Justin Samuel, Nick Mathewson, Roger Dingledine, and Justin Cappos. Under the direction of Cappos at NYU Tandon School of Engineering since 2011, TUF has been ",(0,r.kt)("a",{parentName:"p",href:"https://theupdateframework.github.io/papers/prevention-rollback-attacks-atc2017.pdf?raw=true"},"adapted")," to ",(0,r.kt)("a",{parentName:"p",href:"https://theupdateframework.github.io/papers/protect-community-repositories-nsdi2016.pdf?raw=true"},"protect against threats")," to various types of ",(0,r.kt)("a",{parentName:"p",href:"https://uptane.github.io/papers/kuppusamy_escar_16.pdf"},"software applications"),"."),(0,r.kt)("p",null,"A central tenet of TUF is ",(0,r.kt)("strong",{parentName:"p"},"compromise-resilience"),", or the ability to minimize the extent of the threat posed by any given attack. The building blocks for this state rest on four design principles."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Separation of trust"),": distributing responsibility for the signing of metadata so if one signing key is compromised, it will not affect other users."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Threshold signatures"),": requiring that a fixed number of signatures must be gathered to attest to the authenticity of a file before the update can be downloaded."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Explicit and implicit revocation of keys"),": providing a mechanism for replacing compromised keys so malevolent parties can not continue signing metadata to authenticate malware."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Keeping the most vulnerable keys offline"),": mandating that certain signing keys be kept offline, thus making them harder to steal or compromise.")),(0,r.kt)("p",null,"But very early on in its development, researchers realized that they could not just apply TUF directly to ECUs. One problem in securing ECUs on vehicles is that their capabilities are inconsistent. This issue is exacerbated by a number of other issues that distinguish ECUs from computers or other smart devices."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"They are not single clients."),(0,r.kt)("li",{parentName:"ul"},"They are not particularly smart."),(0,r.kt)("li",{parentName:"ul"},"The individual components do not trust each other.")),(0,r.kt)("p",null,"With these issues in mind, as well as other concerns expressed by industry representatives, Uptane modified the basic TUF design in a few ways. The first is the ",(0,r.kt)("strong",{parentName:"p"},"addition of a second repository"),", which divides labor and responsibility for different aspects of the verification process. As mentioned in the brief description above, the ",(0,r.kt)("em",{parentName:"p"},"image")," repository holds an accurate inventory of all the images currently on all ECUs on all vehicles maintained by an OEM, and the corresponding metadata. This repository uses offline keys to sign all metadata, making it much harder for attackers to substitute compromised images. The ",(0,r.kt)("em",{parentName:"p"},"director")," repository, which instructs vehicles as to what updates should be installed next, uses online keys to sign its metadata, allowing for easier and faster turnarounds. By combining the two repositories, an OEM can provide both customizability and security for the control units on their vehicles."),(0,r.kt)("p",null,"Another modification made to the basic TUF design has to do with the way Uptane ",(0,r.kt)("strong",{parentName:"p"},"verifies the images"),", meaning the media used to supply the code and data that control the actions of the ECUs. In the verification step, the ECU determines if a file is safe to download by checking its accompanying metadata. As mentioned above, an ECU can use two different verification strategies, depending on its power. Verification can be ",(0,r.kt)("em",{parentName:"p"},"full,")," which requires checking that the hashes and sizes of images in the signed metadata match the hashes and sizes stored on the image repository, or ",(0,r.kt)("em",{parentName:"p"},"partial,")," which requires only the signature on the targets metadata file from the director repository to be checked."),(0,r.kt)("p",null,"Full verification provides better protection to those ECUs that have the memory and storage capacity to conduct the procedure. But, because even the weakest ECUs can be afforded some protection by the less resource-intensive partial method, the security of the system as a whole is improved."))}d.isMDXComponent=!0}}]);