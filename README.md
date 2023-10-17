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




## Jekyll website

Uptane's project website is created with [Jekyll](https://jekyllrb.com) and extends
the [GitHub pages slate theme](https://github.com/pages-themes/slate).

The site is available [here](https://uptane.github.io/).

## Maintenance and re-use

### Basic commands
GitHub pages are served directly from the repository. No pre-building necessary.
For development deployment, we recommend the following commands (requires
`jekyll` to be installed and available on your path):

```shell
# Automatic verbose re-build whenever sources change
jekyll build --watch --verbose

# Development server available on http://127.0.0.1:4000
jekyll serve
```

#### Changing the header
Set the variables `title`, `description` and `logo_url`  in
[`_config.yml`](_config.yml) to customize the header. These variables are used
in [`_layouts/default.html`](_layouts/default.html) to populate the header.

#### Changing the menu
The menu is populated from the YAML file in
[`_data/navbar.yml`](_data/navbar.yml). It should be enough to just customize
this file. The menu has two levels. On the first level you can specify a `text`
and either a `url` or a `sub` (not both). If `url` is specified the menu item
will link to that url. If `sub` items are specified, hovering over a menu item
will open a dropdown menu, showing the sub items.
Sub items also have a `text` and a `url` that can be used analogously.
Additionally, subitems have a boolean `external` variable that, if set to
`true`, adds a little external link icon next to the link text.

The menu is styled in [`_sass/navbar.scss`](_sass/navbar.scss) and its markup
can be found in [`_includes/navbar.html`](_includes/navbar.html), which is
included in the default layout.

#### Changing the footer
Just customize [`_includes/footer.html`](_includes/footer.html).

#### General styles and layouts
Base styles are inherited from
[`_sass/jekyll-theme-slate.scss`](_sass/jekyll-theme-slate.scss) and
[`_sass/rouge-github.scss`](_sass/rouge-github.scss). You should not modify
those styles, but rather override them in your own `_sass/*.scss` or
in [`_sass/main.scss`](_sass/main.scss), where currently all custom styles
are defined. All styles are included in
[`assets/css/style.scss`](assets/css/style.scss), which gets compiled to css on
`jekyll build`. The resulting `assets/css/style.css` is included in the default
layout.


### Customizing and adding content
Adding content is as simple as creating `*.html`, or `*.md` files and filling
them with content.
Additionally, you should specify at least two properties in each file's [YAML
front matter section](https://jekyllrb.com/docs/frontmatter/), to tell jekyll
that you want to embed your content in the default layout and to give the
container in which your content will be placed a unique CSS id. This is what
front matter looks like:
```yaml
---
layout: default
css_id: my-funky-page
---
```

When running `jekyll build` each file in the project directory gets processed,
e.g. embedded in the the specified layout, and, in the case of markdown,
converted to `HTML`. The result is copied to the build directory, i.e. `_site`,
preserving relative paths, but changing the file extension to `.html`.
You can read more about [creating pages in the jekyll
docs](https://jekyllrb.com/docs/pages/).

### Adding assets
Add assets, e.g. images or JavaScript, to [`assets`](assets).

#### Replace favicon.ico
[`favicon.ico`](favicon.ico) should be served from the root of the project.
Just replace the current one with the `favicon.ico` of your project.



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
