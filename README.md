# gulp-starterkit

This is a starting point to set up gulp for basic SASS compilation and watch tasks.

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
npm i --save-dev gulp gulp-sass gulp-autoprefixer gulp-sourcemaps glob gulp-sass-glob es6-promise
bower init
bower install reset-css breakpoint-sass sass-toolkit susy compass-mixins --save
```

Now if you run `gulp` in the repo directory, it should both compile the sass and watch for any chances in the `/scss` folder.

<<<<<<< HEAD
## Common Issues

If you're running Vagrant on Windows, you may encounter errors such as `Error: EPERM, open '/srv/www/very/long/dir/path'` or `npm ERR! UNKNOWN, symlink` when trying to use the above gulp setup. This can be solved by running `npm install --no-bin-links`, which configures `npm install` so that it doesn't create any symlinks when the command is run. (https://harvsworld.com/2015/how-to-fix-npm-install-errors-on-vagrant-on-windows-because-the-paths-are-too-long/ "Source").
=======
Happy gulping!
>>>>>>> ffe5baae69c0f51c32de2474763bb3f9dc707ecc
