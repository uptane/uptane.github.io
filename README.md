<div align="center">
  <h1 align="center">
    <img src="https://github.com/uptane/uptane.github.io/blob/main/static/img/uptane-logo.svg" width="500" />
  </h1>
  <p align="center">
    Built with <img src="https://img.shields.io/badge/docusaurus-231F20.svg?style=flat-square&logo=docusaurus&logoColor=Green" alt="docusaurus" />
    <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=flat-square&logo=GitHub-Actions&logoColor=white" alt="GitHub Actions" />
  </p>
  <p align="center">
    <a href="https://github.com/uptane/uptane.github.io/actions/workflows/pages/pages-build-deployment/badge.svg">
      <img src="https://github.com/uptane/uptane.github.io/actions/workflows/pages/pages-build-deployment/badge.svg" alt="Pages Build Deployment" />
    </a>
    <a href="https://github.com/uptane/uptane.github.io/actions/workflows/deploy.yml/badge.svg">
      <img src="https://github.com/uptane/uptane.github.io/actions/workflows/deploy.yml/badge.svg" alt="Deploy to GitHub Pages" />
    </a>
    <a href="https://github.com/uptane/uptane.github.io/actions?query=workflow%3ACheck%20Broken%20Links">
      <img src="https://github.com/uptane/uptane.github.io/workflows/Check%20Broken%20Links/badge.svg" alt="Check Broken Links" />
    </a>
    <a href="https://github.com/uptane/uptane.github.io">
      <img src="https://img.shields.io/badge/License-Apache%202.0%20%2F%20MIT-blue.svg" alt="GitHub License" />
    </a>
  </p>
  <p align="center">
    <img src="https://img.shields.io/github/last-commit/uptane/uptane.github.io?style=flat-square&color=5D6D7E" alt="git-last-commit" />
    <img src="https://img.shields.io/github/commit-activity/m/uptane/uptane.github.io?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
    <a href="https://github.com/uptane/uptane.github.io">
      <img src="https://img.shields.io/github/languages/top/uptane/uptane.github.io?style=flat-square&color=5D6D7E&logo=HTML5" alt="GitHub top language" />
    </a>
  </p>
  <p align="center">
    This is the repo for the <a href="https://github.com/uptane/uptane.github.io">Uptane repository</a>, an open-source framework that ensures the security of software updates for vehicles, particularly those receiving software over the air.
  </p>
</div>

---

## 📖 Table of Contents

- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [🚀 Getting Started](#-getting-started)
  - [🔧 Installation](#-installation)
  - [🤖 Running uptane.github.io](#-running-uptane.github.io)
  - [🧪 Tests](#-tests)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

Uptane is an open-source framework that ensures the security of software updates for vehicles, particularly those receiving software over the air.
Given the increasing complexity of modern vehicles, which often rely on numerous software components, ensuring that these updates are secure and tamper-proof is crucial.
Uptane addresses potential vulnerabilities and threats that can arise during the software update process. Read more [here](https://uptane.github.io/learn-more/getting-started)

---

## 🚀 Getting Started

### 🔧 Installation

1. Fork the Repository:  
   - Go to the [Uptane repository](https://github.com/uptane/uptane.github.io) on Github.
   - Click on the "Fork" button at the top right corner of the page. Wait for a copy of the repository to appear under your account.

2. Clone the uptane.github.io repository:

```sh
git clone https://github.com/uptane/uptane.github.io
```

3. Change to the project directory:

```sh
cd uptane.github.io
```

4. Install the dependencies:

```sh
► yarn install
```

If you do not have Yarn installed, please refer to the [Yarn documentation](https://classic.yarnpkg.com/en/docs) for installation instructions.

### 🤖 Running uptane.github.io

- Once the installation is complete, you can start the development server using either Yarn or npm.
  - To start with Yarn, run:

     ```yarn start```

  - To start with npm, run:

     ```npm start```

  - If the installation went well, the development server will run locally, at ```http://localhost:3000```.
  - You should see your application running locally with any changes you apply.

### 🧪 Tests

```sh
► INSERT-TEXT
```

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/uptane/uptane.github.io/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/uptane/uptane.github.io/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/uptane/uptane.github.io/issues)**: Submit bugs found or log feature requests for UPTANE.

#### *Contributing Guidelines*

<details closed>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.

   ```sh
   git clone <your-forked-repo-url>
   ```

3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.

   ```sh
   git checkout -b new-feature-x
   ```

4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear and concise message describing your updates.

   ```sh
   git commit -m 'Implemented new feature x.'
   ```

6. **Push to GitHub**: Push the changes to your forked repository.

   ```sh
   git push origin new-feature-x
   ```

7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This work is [dual-licensed](https://en.wikipedia.org/wiki/Multi-licensing) and
distributed under (1) Apache License, Version 2.0 and (1) MIT License.  Please
take a look at LICENSE and LICENSE-MIT.

---

## 👏 Acknowledgments

This project is managed by Prof. Justin Cappos and other members of the [Secure Systems Lab](https://ssl.engineering.nyu.edu/) at NYU.

Uptane was initiated with support from the U.S. Department of Homeland Security grants D15PC00239 and D15PC00302. The views and conclusions contained herein are the authors’ and should not be interpreted as necessarily representing the official policies or endorsements, either expressed or implied, of the U.S. Department of Homeland Security (DHS) or the U.S. government.

---
