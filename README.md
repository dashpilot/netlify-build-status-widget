![Stable 1.0.5](https://img.shields.io/badge/stable-1.0.5-33a2d8)
![Dependancies up to date](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen)
![vanilla javascript](https://img.shields.io/badge/vanilla-js-brightgreen)


# Netlify Build Status Widget (with live status display)

Widget that shows the current status of your Netlify builds. Ideal for use with Netlify CMS

# The problem this widget solves

If you use Netlify CMS, there currently is no way to see the status of your build. You press save, visit your site, and the changes aren't visible (yet), and there's no way to know when the build is finished. This can be especially confusing for users who are used to Wordpress and other 'monolithic' CMS systems. I ran into this issue myself, and saw that [others](https://github.com/netlify/netlify-cms/issues/2324) were also looking for a solution.

This package displays a widget on your site (if you're logged in to Netlify CMS), displaying the current build status of your site. So you press save in Netlify CMS, visit your site, and get live updates of the build status! The script contains the widget code as well as a Netlify function that checks the build status.

# Example

[https://netlify-build-status-widget.netlify.com](https://netlify-build-status-widget.netlify.com/)

# Preview

![Preview](https://raw.githubusercontent.com/dashpilot/netlify-build-status-widget/master/assets/preview.jpg)

# How to use?

## Option 1: Standalone (without Netlify CMS / Netlify Identity)

This is the simplest option: deploy this project to Netlify, and create the following environment variables in Netlify (Settings > Build & Deploy > Environment):

`NETLIFY_TOKEN` (create a token via User Settings > Applications > Personal Access Tokens)

`NETLIFY_SITE_ID` (Settings > General > Site Details > API ID).

## Option 2: Integration with Netlify CMS and Netlify Identity

### Step 1: add script

Just add the widget CCS and JS to the head of your index.html:

```javascript
<link href="assets/netlify-build-status-widget.min.css" rel="stylesheet">
<script src="assets/netlify-build-status-widget.min.js"></script>
```

### Step 2: init the script

Assuming you already set up the [Netlify Identity redirect](https://www.netlifycms.org/docs/add-to-your-site/#add-the-netlify-identity-widget) in your index.html, simply modify it to look like this:

```javascript
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      } else {
        checkBuildStatus();
      }
    });
  }
</script>
```

### Step 3: add and configure the Netlify function

Run: `npm i netlify --save` in your project's folder (this installs the Netlify API NPM package)

Drop the status.js file in your Netlify functions directory, and create the following environment variables in Netlify (Settings > Build & Deploy > Environment):

`NETLIFY_TOKEN` (create a token via User Settings > Applications > Personal Access Tokens)

`NETLIFY_SITE_ID` (Settings > General > Site Details > API ID).

Visit your site and you should see the Netlify Build Status widget, showing you the current build status!

# Todo

-   make a button so you can easily refresh the page

I welcome any feedback on the implementation, since it's been a while since I've released anything :-)

## Press the :star: button
Don't forget to press the :star: button to let me know I should continue improving this project.
