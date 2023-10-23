# Uptane
Uptane is an open-source framework that ensures the security of software updates for vehicles, particularly those receiving software over the air. 
Given the increasing complexity of modern vehicles, which often rely on numerous software components, 
ensuring that these updates are secure and tamper-proof is crucial. 
Uptane addresses potential vulnerabilities and threats that can arise during the software update process.
Read more [here](https://uptane.github.io/docs/learn-more/getting-started)

## Uptane Website
Uptane's project website is created with [Docusaurus](https://docusaurus.io/). The site is available [here](https://uptane.github.io/).

### Setup Instructions

Steps to set up Uptane locally:

1. **Fork the Repository:**  
   - Go to the [Uptane repository](https://github.com/uptane/uptane.github.io) on Github.
   - Click on the "Fork" button at the top right corner of the page. Wait for a copy of the repository to appear under your account.

2. **Clone Your Fork Locally:** 
   - On your forked repository page, click the "Code" button, and copy the repository URL (e.g., https://github.com/<your-username>/uptane.github.io.git).  
   - Open a terminal / command prompt / or Git Bash on your local machine.
   - Use the git clone command to clone the repository in your chosen directory: 
     ```
     git clone https://github.com/<your-username>/uptane.github.io.git
     ```

3. **Install Dependencies:**  
   - Navigate to the cloned repository directory with the following command:
     ```cd uptane.github.io``` 
   - If you have Yarn installed, use the following command to install the necessary dependencies (node_modules and others), run:
     ```
     yarn install
     ```
     If you do not have Yarn installed, please refer to the [Yarn documentation](https://classic.yarnpkg.com/en/docs) for installation instructions.

4. **Start the Development Server:**  
   - Once the installation is complete, you can start the development server using either Yarn or npm.
   - To start with Yarn, run:
     ```
     yarn start
     ```
   - To start with npm, run:
     ```
     npm start
     ```
   - If the installation went well, the development server will run locally, at ```http://localhost:3000```.
   - You should see your application running locally with any changes you apply.


- If you encounter any issues or have questions, feel free to ask for help.


## License
This work is [dual-licensed](https://en.wikipedia.org/wiki/Multi-licensing) and
distributed under (1) Apache License, Version 2.0 and (1) MIT License.  Please
see LICENSE and LICENSE-MIT.

## Acknowledgements
This project is managed by Prof. Justin Cappos and other members of the [Secure
Systems Lab](https://ssl.engineering.nyu.edu/) at NYU.

Uptane was initiated with support from the U.S. Department of Homeland Security grants D15PC00239 and
D15PC00302. The views and conclusions contained herein are the authors’ and should
not be interpreted as necessarily representing the official policies or endorsements,
either expressed or implied, of the U.S. Department of Homeland Security (DHS)
or the U.S. government.
