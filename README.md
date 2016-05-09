# gulp-starterkit

This is a starting point to set up gulp for SCSS and JS compilation and watch tasks. It comes with jQuery 2.2.3 as an example of modularizing your JS files as well as BrowserSync support in an effort to create a more efficient development process.

## Installation

Run these commands to set up everything you need for this repository to work:

```bash
sudo apt-get install nodejs npm
sudo npm cache clean -f
sudo npm i -g n
sudo n stable
sudo ln -sf /usr/local/n/versions/node/<VERSION>/bin/node /usr/bin/node 
sudo npm i -g gulp-cli bower
```

Run these commands wherever you cloned the repo to get the following packages:

```bash
npm init
npm i --save-dev gulp glob es6-promise gulp-sass gulp-sass-glob gulp-autoprefixer browser-sync
bower init
bower install reset-css breakpoint-sass sass-toolkit susy compass-mixins --save
```

Make sure you open `gulpfile.js` and configure all of the necessary parameters specific to your project. Once completed, if you run `gulp` in the repo directory, it should compile your SCSS files, watch for any changes, and reload your browsers automatically.

## Common Issues

If you're running Vagrant, Laravel Homestead, PuPHPet, etc. you may encounter errors such as `Error: EPERM, open '/srv/www/very/long/dir/path'` or `npm ERR! UNKNOWN, symlink` when trying to use the above gulp setup. This may perhaps be due to the variance of filesystem directory structures that haven't been accounted for by every npm module.

This can be solved by running `npm install --no-bin-links`, which tells `npm install` to not create any symlinks when the command is run. [Source](https://harvsworld.com/2015/how-to-fix-npm-install-errors-on-vagrant-on-windows-because-the-paths-are-too-long/).
