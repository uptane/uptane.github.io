# Jekyll website

Uptane's project website is created with [Jekyll](https://jekyllrb.com) and extends
the [GitHub pages slate theme](https://github.com/pages-themes/slate).

The site is available [here](https://uptane.github.io/).

## Maintenance and re-use

# Contributing to Uptane

If you would like to contribute content, read the following documentation for helpful information and guidelines.

We appreciate and recognize all contributors.

# Fork the Repository

Fork this repository by clicking on the fork button on the top of this page. This will create a copy of this repository in your account.

# Make Necessary Changes

To make changes, clone the forked repository to your machine.

## Clone the repository

Go to your GitHub account, open the forked repository, click **Code**, and then **copy to clipboard**.

Open a terminal and run the following git command:

```bash
git clone "url you just copied"
```

where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project).

## Create a branch

Change to the repository directory on your computer:

```bash
cd uptane.github.io
```

Now create a branch using the `git checkout` command:

```bash
git checkout -b <name-your-new-branch-name-after-your-issue>
```

For example:

```bash
git checkout -b issue-329
```

## Make necessary changes

Now, you can suggest contributions, make necessary changes to existing files, or add new files.

# Test in local and push changes to GitHub

Before you push changes to GitHub, build this GitHub pages site locally to preview and test the changes.

## Prerequisites

This GitHub Pages site is built with Jekyll. Before you can use Jekyll to test a site, you must [install Jekyll](https://jekyllrb.com/docs/installation/).

## Test your changes locally

Change to the repository directory on your computer and execute the following command to run the Jekyll site locally.

1. To install and update all dependencies.

   ```bash
   gem install "jekyll-mentions"     
   ```

   **Note**: Run the above command one time before using the tools each day.

2. Start the local web server, do not build the site first

   ```bash
   jekyll serve
   ```

   To preview the site in your web browser navigate to [http://localhost:4000](http://localhost:4000).


## Commit changes

After you have a successful testing in local with your changes, you are ready to commit those changes.

If you go to the project directory and execute the command `git status`, you'll see your changes.

Add those changes to the branch you just created using the `git add` command:

```bash
git add <file>
```

All commits should be signed off (`-s` flag on `git commit`). To use the `-s` option, make sure you configure your git name (user.name) and email address (user.email).

Now commit those changes using the git commit command:

```bash
git commit -s -m "Add README.md"
```

## Push changes to GitHub

Push your changes using the command `git push`:

```bash
git push origin <add-your-branch-name>
```

replacing `<add-your-branch-name>` with the name of the branch you created earlier.

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
