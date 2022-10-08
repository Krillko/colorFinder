# colorFinder
<img src="public/android-chrome-192x192.png"  width="96px" height="96px" style="float:left; margin-right: 8px">

Simple tool for matching hex colors to a reference color file.
Check if the new color is very similar to existing colors.  
Add a reference file of any kind that contains hex colores, example `tailwind.config.js`, `_variables.scss` or any css file, then test it against your new color.  

<br style="clear: both;">

## Setup
### Use nvm (recommended)
Use nvm to make sure we use the correct node version
Install [NVM](https://nvm.sh) on your computer first.

### Install
```sh
$ nvm use
$ npm install
```

### Run dev server
```sh
$ nvm use
$ npm run dev
```

## Build
```sh
$ npm run build
```
Files are build to `/public_html` instead of default to match my hosting. This can be set in `vite.config.js`
Usually, the build files should be git-ignored, but because I suck at  devops, and the server refuses to build, I build the files locally instead of on production server.