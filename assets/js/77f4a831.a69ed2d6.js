"use strict";(self.webpackChunkuptane=self.webpackChunkuptane||[]).push([[5376],{2905:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"standard/changelog","title":"ChangeLog","description":"All notable changes to this project will be documented in this file.","source":"@site/versioned_docs/version-2.0.0/standard/changelog.md","sourceDirName":"standard","slug":"/standard/changelog","permalink":"/docs/2.0.0/standard/changelog","draft":false,"unlisted":false,"tags":[],"version":"2.0.0","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"ChangeLog"},"sidebar":"StandardSidebar ","previous":{"title":"Uptane Standard 2.0.0","permalink":"/docs/2.0.0/standard/uptane-standard"}}');var a=t(4848),s=t(8453);const r={sidebar_position:3,title:"ChangeLog"},o="Changelog",d={},l=[{value:"[2.0.0] - 2022-01-18",id:"200---2022-01-18",level:2},{value:"Added",id:"added",level:3},{value:"Changed",id:"changed",level:3},{value:"Removed",id:"removed",level:3}];function h(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"changelog",children:"Changelog"})}),"\n",(0,a.jsx)(n.p,{children:"All notable changes to this project will be documented in this file."}),"\n",(0,a.jsxs)(n.p,{children:["The format is based on ",(0,a.jsx)(n.a,{href:"https://keepachangelog.com/en/1.0.0/",children:"Keep a Changelog"}),",\nand this project adheres to ",(0,a.jsx)(n.a,{href:"https://semver.org/spec/v2.0.0.html",children:"Semantic Versioning"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"200---2022-01-18",children:"[2.0.0] - 2022-01-18"}),"\n",(0,a.jsx)(n.p,{children:"As the first major release since 1.0.0 was issued on July 31, 2019, the new version contains several breaking changes that could affect backwards compatibility. However, several of these changes also provide greater flexibility for the implementer. Probably the most significant change was removing references to the Uptane Time Server, to clarify that users can make their own decisions about secure sources of time, as long as it is reliable. On the whole, V.2.0.0 should make implementation on legacy systems easier rather than more complex."}),"\n",(0,a.jsx)(n.h3,{id:"added",children:"Added"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"The actual RFC 2119 definitions to the Standard, and a statement of caution about the use of imperatives in that document. The definitions to terms MUST and MUST NOT are excluded in keeping with the decision to only use the terms SHALL or SHALL NOT when referring to actions in the Standard that mandate compliance."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"A note restricting the use of imperatives to instances where they are actually required for interoperation or to limit behavior which has potential for causing harm."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"A qualifying note distinguishing between signing keys and secret keys used to decrypt images. The former are required to be unique to the ECU to avoid replay attacks, but the latter need not be unique."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"A recommendation that filenames of images SHOULD be encoded to prevent a path traversal on the client system, either by using URL encoding or by limiting the allowed character set in the filename."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"changed",children:"Changed"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Policy on when changes to the Standard become \u201cofficial\u201d by adding the following statement to the Standard repository, \u201cAs the Standard is a living document, updates are made in real time as needed. However, these changes will not be considered formally adopted until the release of the next minor or major version.\u201d"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"The wording used to refer to actions in the Standard that require compliance from a mix of SHALL and MUST to just SHALL. Previously, the two words were used interchangeably in the document. However, in other contexts, there are subtle differences in the meaning of these words. By consistently using just SHALL, it reduces any possible confusion."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"The stipulation in Section 5.4 that ECUs monitor the download speed of image metadata and image binaries to detect and respond to a slow retrieval attack from a SHOULD to a SHALL."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"The stipulation in Section 5.4.3.4 that ECUs check that the length of the image matches the length listed in the metadata from a SHOULD to a SHALL."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"The description of the relationship between Primaries and Secondaries if a vehicle has multiple Primaries. It is now described this way: \u201cIf multiple such Primaries are included within a vehicle, each Primary SHOULD have a designated set of Secondaries.\u201d"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"The stipulation in Section 5.2.3.1 that a vehicle identifier be used in a situation where Targets metadata from the Director repository include no images from a SHOULD to a SHALL. The stronger compliance word is needed to prevent replay attacks."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"removed",children:"Removed"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["All references to the Uptane Time Server. While having a secure source of time is still mandated as a requirement for compliance, we are no longer recommending the Uptane Time Server as that source. Several other time source options are discussed in the ",(0,a.jsx)(n.a,{href:"https://uptane.github.io/deployment-considerations/repositories.html",children:"\u201cSetting up Uptane Repositories\u201d section of Deployment Best Practices"}),"."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);