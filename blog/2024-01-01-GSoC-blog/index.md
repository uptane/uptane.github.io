## Uptane GSoC'23 Report 🚀

## Table of Contents

1. [📝General Information](#general-information-)
2. [🧑‍🎓Student Info](#student-info-)
3. [📙 Abstract](#-abstract)
4. [📧 Communication during the development period](#email-communication-during-the-development-period)
5. [🖥️ About the project](#-about-the-project)
   - [Initialization 🚀](#initialization-)
   - [Site New Layout 📐](#site-new-layout-)
   - [Coding the Site 💻](#coding-the-site-)
   - [Content Improvements 📄](#content-improvements-)
6. [💬 Pull Request and Commit Statistics](#computer-pull-request-and-commit-statistics-)
7. [🔗 Important Links](#important-links-)
8. [🤝 Interactions with the Uptane Community](#interactions-with-the-uptane-community-)
9. [🙏 Acknowledgements](#star-acknowledgements-)
10. [✔️ What Was Covered](#what-was-covered-%EF%B8%8F)
11. [🚀 What work remains](#what-work-remains-)
12. [📚 Reference](#reference-)
13. [🛤️ My journey](#my-journey-%EF%B8%8F)
14. [😄 Overall Experience](#overall-experience-)
15. [🔄 Would like to sync?](#-would-like-to-sync-)



## General Information 📝

**Organization:** [Uptane](https://uptane.io)
**Project:** Overhauling Uptane.io: Creating a Better User Experience for the Uptane Project Website
**GSoC Project Page:** [Click here](https://summerofcode.withgoogle.com/programs/2023/projects/QDCxHcPz) 
**GSoC Mentors:** [Lois DeLong](https://github.com/jhdalek55) , [Phil Lapczynski](https://github.com/hexsecs) , & [Ira McDonald](https://github.com/iramcdonald)
**Community Mentors:** [Jon Oster](https://github.com/tkfu) , [Justin Cappos](https://github.com/JustinCappos) , [Weimerskirch, Andre](https://github.com/aweimerskirch) & [Marina Moore](https://github.com/mnm678) 
**My proposal:** [Click here](https://drive.google.com/file/d/1lTvrFoS7VzOsNRWsmoHVOnTd0ui9BZ3g/view?usp=sharing)

## Student Info 🧑‍🎓

- **Name:** Abhijay Jain
- **Email:** Abhijay007j@gmail.com
- **GitHub Profile:** [https://github.com/Abhijay007](https://github.com/Abhijay007)
- **Medium:** [https://medium.com/@abhijay007j](https://medium.com/@abhijay007j)
- **LinkedIn:** [https://www.linkedin.com/in/abhijay-jain-551b01193/](https://www.linkedin.com/in/abhijay-jain-551b01193/)

## 📙 Abstract

Uptane is an important project that provides secure software updates for connected vehicles, and it needs to offer a better experience to its users to encourage the adoption of the technology. The project's website is the primary source of information for users and developers, and it's essential that the information is easy to access and understand. The current website has a lot of information; however, it's not well-organized. It's difficult for new users to find the essential information they need. The navigation through the site is also challenging. All of these factors could discourage new users from learning more about the project. The goal of this project is to overhaul the Uptane.io website to create a better user experience through more logical organization and easier navigation.

## :email: Communication during the development period 

Before GSoC, contributors communicated with each other either through GitHub discussions or asynchronously via email. Since GSoC needed more regular discussion (more on a personal level), we decided to have bi-weekly meetings to have seamless communication and better understanding. For text conversations, we stuck to email as it is a feasible option for text-based communication. After every meeting, I used to write a follow-up email to the mentors so that we could have a backup or a routine outline of things we have discussed in those bi-weekly meetings.

![Mail Screenshot](https://github.com/Abhijay007/Uptane-GSoC-Report/assets/64387054/e64e56ff-00e7-41c0-a3cb-77906596407a)

<p align="center">One of our very first follow-up emails.</p>

## 📝 About the project 

The objective of this project is to deconstruct the current website layout and design and create a more logical arrangement of information. We aim to achieve this by:

- Improving the existing platform and overall design of the website, including typeface and color choices, to create a cleaner, more contemporary look.
- Reorganizing the content to make it easier for users to find the information they need to consider adopting or integrating the Uptane project.
- Identifying key information that may be missing and adding it to the website.
- Adding dynamic elements to the website to support more interactivity between users and the site.

(PS: Here’s [the link](https://drive.google.com/file/d/1lTvrFoS7VzOsNRWsmoHVOnTd0ui9BZ3g/view?usp=sharing) to my GSoC proposal if you’re interested!)

### Initialization 🚀

During our first meeting, we needed to make an important decision: whether to stick with the existing technology, which is Jekyll, or migrate the site to a new framework, Docusaurus. After a discussion, we decided to go with Docusaurus as it is quite easy to maintain and comparatively better than Jekyll. The mentors assigned me the task of testing the existing content of the site with Docusaurus so that we can determine if using this program would be feasible. So, I created a demo version of the site and shared it with the mentors. After review, both the mentors and other community members reviewed our decision to go with Docusaurus as our main framework to build the site. The mentors then suggested that I move forward and prepare a new design layout for the site.


### Site New Layout 📐

I initiated the design of the new site by adopting a collaborative approach to receive continuous feedback. For efficient communication and design collaboration, I opted to use Figma, a tool with which I had prior experience. Figma served its purpose effectively. Lois shared a rough design doc [linked here](https://docs.google.com/document/d/1v4-tHH6dUWi-32H2qkBufHrZTsxzjHWGVHJGO9p0i34/edit?usp=sharing) explaining what we need on the new site, following which I started gathering design inspiration and shared a preliminary rough layout on Figma. I explored various platforms such as Dribbble and Behance. After conducting research, I stumbled upon a valuable resource: the Docusaurus showcase, which contained a collection of open-source sites built with Docusaurus. Drawing inspiration from these sites, I began working on the site's layout. I created a preliminary design that can be viewed below

- Link to the Figma Design File : [Figma Design](https://www.figma.com/file/drCXCmIbIiTq9yaSgQJQtF/uptane-New?type=design&node-id=0%3A1&mode=design&t=3oGmlYrO4UafXxjz-1).

|Figma Desing Preview|
|------|
|<img src="https://github.com/Abhijay007/Uptane-GSoC-Report/assets/64387054/dd785ad9-f432-4a61-b0c8-0ba3d617a17d" />|


- Here is a video overview of the site, where I explained all the sections 


https://github.com/Abhijay007/Uptane-GSoC-Report/assets/64387054/0deb8aec-1c25-44e3-bf00-897f78c2a9f3


### Coding the Site 💻

Once we had finalized the site's design to a significant extent, I embarked on the coding phase. Initially, I set up the existing site with Docusaurus boilerplate code to establish a starting point for development. Subsequently, I started coding individual components step by step, commencing with the home page and gradually extending to other sections. Throughout the development process, we engaged in iterative discussions and improvements to existing components. Some components that were initially included were reevaluated, and their significance was reconsidered, leading to a few additions and removals. Upon completion of the final layout, we proceeded with populating the site with documentation content and refining the existing codebase.

### Content Improvements 📄

After completing the initial deployment and layout of the site, we shifted our focus to enhancing the content, which serves as the documentation for the Uptane community. In the existing site, we encountered several content-related issues. Firstly, there was an abundance of unnecessary content including a number of redundancies across the site, and secondly, some of the existing content was outdated and required substantial improvements.

In the new site, we undertook a comprehensive overhaul of the documentation structure and redefined the hierarchy. This restructuring presented us with some challenges, especially when dealing with content originally structured for the old Jekyll architecture. We needed to adapt this content to the Docusaurus-based Markdown format. Docusaurus treats Markdown files somewhat differently and provides helpful tools for managing content effectively.

Some content on the site is fetched from different repositories. Initially, we contemplated establishing a workflow to handle this content, but over time, we realized that we could optimize the process by making edits to the existing workflows and ensuring that the updated content adheres to Docusaurus standards and best practices.

For details on the specific commits related to these content improvements, please refer to [this link](https://github.com/Abhijay007/uptane-demo/commits/master).

## :computer: Pull Request and Commit Statistics 💬

Here is a list of all the pull requests I created during the GSoC coding period:

1. **Initialization for Docusaurus**:
   - Pull Request: [Link to PR](https://github.com/Abhijay007/Abhijay007.github.io/pull/1)
   - Commits: [Link to Commits](https://github.com/Abhijay007/Abhijay007.github.io/pull/1/commits)

2. **Demo Repository for Project Progress**:
   - Due to the dynamic nature of the project and its many changes, my mentor recommended creating a demo repository to track and showcase the progress. Here's the demo repository with all the commits:
   - Demo Repository: [Link to Demo Repository](https://github.com/Abhijay007/uptane-demo)
   - Commits: [Link to Commits](https://github.com/Abhijay007/uptane-demo/commits/master)

These pull requests and commits represent the milestones and progress made during the GSoC coding period.

## Important Links 🔗

- [GSoC Project Page](https://summerofcode.withgoogle.com/programs/2023/projects/QDCxHcPz)

- [GSoC Project Proposal](https://drive.google.com/file/d/1lTvrFoS7VzOsNRWsmoHVOnTd0ui9BZ3g/view?usp=sharing)

- [GitHub Organization Repo](https://github.com/uptane/uptane.github.io)

- [GitHub Personal Repo](https://github.com/Abhijay007/Abhijay007.github.io)

- [Github Project Demo Repo](https://github.com/Abhijay007/uptane-demo)

- [Commits during GSoC 2023](https://github.com/Abhijay007/uptane-demo/commits/master)  in Demo Repo

- [Commits during GSoC 2023](https://github.com/uptane/uptane.github.io/commits?author=Abhijay007) in Main Repo - UptaneDocusaurus Branch

- [Website DEMO Deployed Version](https://abhijay007.github.io/uptane-demo/)

- [Website Live Deployed Version](https://uptane.github.io/)

## Interactions with the Uptane Community 🤝

I had the privilege of presenting myself and my GSoC project to the Uptane community at an Uptane workshop on June 23rd. During this presentation, I introduced myself and provided an overview of my GSoC project. Initially, I felt a bit nervous, and there were moments of hesitation during my presentation. However, the Uptane community and my mentors were incredibly supportive, and my efforts seemed to be appreciated.

I received valuable assistance from Lois in preparing the initial presentation, and she also provided timely reviews, which greatly contributed to the success of my presentation. This experience was entirely new to me, and it was an excellent opportunity to interact with members of the Uptane community, many of whom are highly accomplished in their respective fields. Presenting my work in front of such a distinguished audience was both a valuable experience and a unique opportunity for me. I am grateful to all the GSoC mentors who granted me this chance to showcase my work to the community.

If you would like to access the presentation slides, you can find them [here](https://drive.google.com/file/d/1jYN-EElUadChukSOIngqY4T5HhmHs7eA/view?usp=sharing).

## :star: Acknowledgements 🙏

My journey through Google Summer of Code has been a remarkable experience as it represented a transition from personal projects to contributing to real-world website applications. The opportunity to learn by doing has been invaluable, and I am deeply grateful to have been part of this extraordinary program ❤️.

I extend my heartfelt gratitude to all the mentors who have been an incredible source of guidance and support throughout my GSoC journey. Your mentorship has been instrumental in my growth as a developer, and I am fortunate to have had you by my side every step of the way.

I want to express my appreciation to all the mentors, including Lois, Philip, Ira, Jon, Justin, and the dedicated members of the community. Your unwavering support and willingness to assist have been invaluable. The regular check-in meetings, understanding of contributors' needs, and effective program structuring were all testaments to your dedication. You maintained open lines of communication through emails, which facilitated the sharing of progress and concerns. I couldn't have asked for better mentors; you have truly made my GSoC journey special and enriched my experience.

To the reader who has made it this far, I want to express my gratitude. Your interest in my journey and work, whether it's a small website or a significant library design, means a great deal to me. It's the support and recognition of fellow developers like you that make our efforts all the more rewarding. Thank you for being a part of this journey with me.

## What Was Covered ✔️

During the course of the project, we successfully addressed and accomplished a wide range of tasks and objectives, including:

1. **Migration to Docusaurus**:
   - Migrated the old Jekyll-based site to Docusaurus, providing a more modern and maintainable platform for the Uptane website.

2. **Documentation Revision and Update**:
   - Revised and updated Uptane documentation across various items, ensuring accuracy and relevance.

3. **Redesigned Website Layout**:
   - Revamped the site's design and layout to make it more user-friendly, modern, and aesthetically pleasing.

4. **Enhanced Design Elements**:
   - Improved the overall design of the website by selecting appropriate typefaces and color schemes, resulting in a cleaner and more contemporary appearance.

5. **Identified Missing Information**:
   - Identified crucial pieces of information that were missing from the website and incorporated them to provide a more comprehensive resource for users.

6. **Added Dynamic Elements**:
   - Integrated dynamic elements into the website to enhance interactivity and engagement for users, ensuring a more immersive experience.

This is a short summary of what aspects of the site have been covered; you can read more about the future aspects below.

## What Work Remains 🚀

We have successfully accomplished most of the project milestones outlined in the proposal. However, there are several exciting improvements that coulf enhance the Uptane project's website even further:

1. **Site Analytics Integration**:
   - Consider incorporating analytics tools like Google Analytics or Microsoft Clarity to gain valuable insights into user behavior and site performance. This data can help in making informed decisions for site enhancements.

2. **Enhanced Search Functionality**:
   - Implement advanced search functionality using Algolia or a similar search engine. This will make it easier for users to find specific content quickly, thus improving their overall experience.

3. **New Components**:
   - Introduce new components for various sections such as blogs, contributors, community, and news. These components, initially proposed in the design phase, can provide richer and more engaging content to visitors.

4. **Code and Image Optimization**:
   - Optimize code and images to ensure faster page loading times and an improved user experience. This can involve techniques like minification, lazy loading, and image compression.

5. **Workflow for Auto-updating Content**:
   - Establish workflows for automatically updating site content to reflect new versions of the Standards and Deployment Best Practices. This ensures that the site remains up-to-date.

6. **Workflow for Generating Deployed Previews for PRs**:
   - Create a workflow that generates deployed previews for new pull requests. This feature facilitates easier testing and review of proposed changes before they are merged into the main site.

.... and more 

These enhancements are capable of contributing to a more dynamic, informative, and user-friendly Uptane project website. By implementing these improvements, we can further elevate the user experience and support the Uptane community's evolving needs.

## Reference 📚

- [Docusaurus Documentation](https://docusaurus.io/)
- [Docusaurus Showcase](https://docusaurus.io/showcase)
- [Figma](https://www.figma.com/files/recents-and-sharing?fuid=820735499407925327)
- [Uptane Site](https://uptane.github.io/)
- [React Documentation](https://reactjs.org/)

## My journey 🛤️

I have written blogs about my GSoC work - [GSoC Uptane blogs](https://abhijay007.github.io/uptane-demo/blog)

## Overall Experience 😄

To say the least, this has been a highly rewarding experience. I extend my most sincere gratitude to Google for running such a great and extremely inclusive program, Google Summer of Code has been a great opportunity for me. I learned new technical concepts every day and it has made me a stronger software developer today. I had a wonderful time interacting with the amazing folks at Uptane and especially it has been an absolute pleasure working with my mentors. They have been constantly guiding and helping me throughout this journey, undoubtedly the best mentors anyone could ever ask for!

Truly an experience I will cherish for a lifetime!

## 🔄 Would like to sync? 📞

- We are keeping all the communications open, so that everyone can sync and is free to contribute. So if you have any feature/bugs suggestions about anything please do not hesitate to open up an issue in the Uptane Projects.

- You can join Uptane's mailing list to participate in the discussions happening here : [uptane-standards@googlegroups.com](mailto:uptane-standards@googlegroups.com). Additionally, you can connect with the Uptane community on [Discord](https://discord.gg/uWyT6gDCqx), or stay updated on the latest announcements by following Uptane on [LinkedIn](https://www.linkedin.com/company/uptane/).
