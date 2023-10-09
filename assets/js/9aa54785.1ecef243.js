"use strict";(self.webpackChunkuptane=self.webpackChunkuptane||[]).push([[5485],{629:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"2.0.0","label":"2.0.0","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-2.0.0","isLast":false,"docsSidebars":{"LearnMoreSidebar":[{"type":"link","label":"Getting Started","href":"/docs/2.0.0/learn-more/getting-started","docId":"learn-more/getting-started"},{"type":"link","label":"Threat Model","href":"/docs/2.0.0/learn-more/threat","docId":"learn-more/threat"},{"type":"link","label":"Uptane Design","href":"/docs/2.0.0/learn-more/design","docId":"learn-more/design"},{"type":"link","label":"Audio-Visuals","href":"/docs/2.0.0/learn-more/audio","docId":"learn-more/audio"},{"type":"link","label":"Contributing","href":"/docs/2.0.0/learn-more/participate","docId":"learn-more/participate"},{"type":"link","label":"Publications","href":"/docs/2.0.0/learn-more/publications","docId":"learn-more/publications"},{"type":"link","label":"Security Audits","href":"/docs/2.0.0/learn-more/audits","docId":"learn-more/audits"},{"type":"link","label":"Press","href":"/docs/2.0.0/learn-more/press","docId":"learn-more/press"},{"type":"link","label":"Adoptions","href":"/docs/2.0.0/learn-more/adoptions","docId":"learn-more/adoptions"},{"type":"link","label":"History","href":"/docs/2.0.0/learn-more/history","docId":"learn-more/history"},{"type":"link","label":"About Us","href":"/docs/2.0.0/learn-more/about","docId":"learn-more/about"}],"EnhancementsSidebar":[{"type":"category","label":"pouf","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"POUF Purpose and Guidelines","href":"/docs/2.0.0/enhancements/pouf/pouf-main","docId":"enhancements/pouf/pouf-main"},{"type":"link","label":"Uptane Reference Implementation POUF","href":"/docs/2.0.0/enhancements/pouf/pouf1","docId":"enhancements/pouf/pouf1"}]},{"type":"category","label":"pures","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"PURE Purpose and Guidelines","href":"/docs/2.0.0/enhancements/pures/pure1","docId":"enhancements/pures/pure1"},{"type":"link","label":"Offline Updates","href":"/docs/2.0.0/enhancements/pures/pure2","docId":"enhancements/pures/pure2"},{"type":"link","label":"Scudo: Addressing Software Supply Chain Security in Uptane","href":"/docs/2.0.0/enhancements/pures/pure3","docId":"enhancements/pures/pure3"}]}],"StandardSidebar ":[{"type":"link","label":"Uptane Standard 2.0.0","href":"/docs/2.0.0/standard/uptane-standard","docId":"standard/uptane-standard"},{"type":"link","label":"ChangeLog","href":"/docs/2.0.0/standard/changelog","docId":"standard/changelog"},{"type":"link","label":"Download","href":"pathname:///papers/uptane-standard.2.0.0.pdf"}],"DeploymentConsiderationSidebar":[{"type":"link","label":"Best Practices 2.0.0","href":"/docs/2.0.0/deployment/best-practices","docId":"deployment/best-practices"},{"type":"link","label":"Download","href":"pathname:///papers/V2.0.0_uptane_deploy.pdf"}]},"docs":{"deployment/best-practices":{"id":"deployment/best-practices","title":"Best Practices 2.0.0","description":"Uptane Deployment Best Practices v.2.0.0","sidebar":"DeploymentConsiderationSidebar"},"enhancements/pouf/pouf-main":{"id":"enhancements/pouf/pouf-main","title":"POUF Purpose and Guidelines","description":"- Title: POUF Purpose and Guidelines","sidebar":"EnhancementsSidebar"},"enhancements/pouf/pouf1":{"id":"enhancements/pouf/pouf1","title":"Uptane Reference Implementation POUF","description":"- POUF: 1","sidebar":"EnhancementsSidebar"},"enhancements/pures/pure1":{"id":"enhancements/pures/pure1","title":"PURE Purpose and Guidelines","description":"- PURE: 1","sidebar":"EnhancementsSidebar"},"enhancements/pures/pure2":{"id":"enhancements/pures/pure2","title":"Offline Updates","description":"- PURE: 2","sidebar":"EnhancementsSidebar"},"enhancements/pures/pure3":{"id":"enhancements/pures/pure3","title":"Scudo: Addressing Software Supply Chain Security in Uptane","description":"- PURE: 3","sidebar":"EnhancementsSidebar"},"learn-more/about":{"id":"learn-more/about","title":"About Us","description":"Uptane is an open software update strategy that was initially conceived and developed in partnership with OEMs and suppliers within the automotive industry. Today, the Standard continues to evolve based on the direct input of current users and new adopters, from automakers to newer implementers in fields like robotics, industrial controls, and more.","sidebar":"LearnMoreSidebar"},"learn-more/adoptions":{"id":"learn-more/adoptions","title":"Adoptions","description":"--------------------------------------------------------------------------------","sidebar":"LearnMoreSidebar"},"learn-more/audio":{"id":"learn-more/audio","title":"Audio-Visuals","description":"The basic principles of Uptane, and the framework\'s development over time, are addressed in some detail in a series of Powerpoint presentations originally put together for Uptane industry workshops and conferences. Links to these slides appear below, including two slide decks from its most recent programs targeted to international audiences. These include a virtual program held in October 2022, and an in-person program held in December 2022\\\\.","sidebar":"LearnMoreSidebar"},"learn-more/audits":{"id":"learn-more/audits","title":"Security Audits","description":"Both Uptane and TUF, the secure framework on which it was based, have undergone a number of security audits. Given the proprietary nature of the automotive industry, some links to these reports are not publicly listed. To request the full text of an omitted audit, please reach out to us.","sidebar":"LearnMoreSidebar"},"learn-more/design":{"id":"learn-more/design","title":"Uptane Design","description":"Uptane utilizes multiple servers, known as repositories, to provide security through the validation of images before downloading. This diagram illustrates how the checks and balances of this system works. The connected components on the right hand side of the diagram are on the vehicle, while the components on the left hand-side represent the repositories. The Image repository can be thought of as an unchanging source of information about images. It is the keeper of every image currently deployed by the OEM, along with the metadata files that prove their authenticity. The Director repository knows what software should be distributed to each ECU, given the current state of the repository. Many ECUs do not have clocks, and so may use an external source to provide a secure source of time.","sidebar":"LearnMoreSidebar"},"learn-more/getting-started":{"id":"learn-more/getting-started","title":"Getting Started","description":"Welcome to the \\"Getting Started\\" guide for Uptane, the standard framework designed to secure software updates for vehicles. Whether you\'re a developer, security professional, or just a curious individual, this guide will provide you with a foundational understanding of Uptane and how it\'s revolutionizing automotive software security.","sidebar":"LearnMoreSidebar"},"learn-more/history":{"id":"learn-more/history","title":"History","description":"2010: A predecessor technology of Uptane, The Update Framework (TUF), which","sidebar":"LearnMoreSidebar"},"learn-more/participate":{"id":"learn-more/participate","title":"Contributing","description":"We welcome questions, feedback, and suggestions on any aspect of this project. Feel free to email feedback to .","sidebar":"LearnMoreSidebar"},"learn-more/press":{"id":"learn-more/press","title":"Press","description":"- Now Your Car is a Cybersecurity Risk, Too-May 21, 2021","sidebar":"LearnMoreSidebar"},"learn-more/publications":{"id":"learn-more/publications","title":"Publications","description":"- Survivable Key Compromise in Software Update Systems: Presented at the 17th ACM Conference on Computer and Communications Security (CCS\'10) in Chicago, Illinois, in 2010\\\\. This paper introduced the TUF design concept on which Uptane is based.","sidebar":"LearnMoreSidebar"},"learn-more/threat":{"id":"learn-more/threat","title":"Threat Model","description":"Electronic control units, or ECUs first appeared in mass-produced cars sometime in the early 1970s. Over the intervening decades, the number of these units has multiplied rapidly. A USA Today article from 2016 estimated that the average family vehicle may have up to 10 million lines of code (LOC). For high-end luxury sedans, the number comes closer to 100 million LOC, or \\"about 14 times more than even a Boeing 787 Dreamliner jet.\\"","sidebar":"LearnMoreSidebar"},"standard/changelog":{"id":"standard/changelog","title":"ChangeLog","description":"All notable changes to this project will be documented in this file.","sidebar":"StandardSidebar "},"standard/uptane-standard":{"id":"standard/uptane-standard","title":"Uptane Standard 2.0.0","description":"uptane-standard-design","sidebar":"StandardSidebar "}}}')}}]);