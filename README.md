# gulp-starterkit

This is a starting point to set up gulp for basic SASS compilation and watch tasks.

## Installation

Run these commands to set up everything you need for this repository to work:

```bash
sudo apt-get install nodejs
sudo apt-get install npm
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
sudo ln -sf /usr/local/n/versions/node/<VERSION>/bin/node /usr/bin/node 
sudo npm install --global gulp-cli
sudo npm install --global bower
```

Run these commands wherever you cloned the repo to get the following packages:

```bash
npm init
npm install --save-dev gulp gulp-sass gulp-autoprefixer gulp-sourcemaps glob es6-promise
bower init
bower install breakpoint-sass sass-toolkit susy compass-mixins --save
```

Now if you run `gulp` in the repo directory, it should both compile the sass and watch for any chances in the `/scss` folder.

Happy gulping!