mplayerjs
=========

# Setup
Install nodejs `brew install node` in OS X 

## Web Client in /clients/web
Javascript library to run in a browser

Install dependencies `npm install`
Compile the library `grunt`

## Web Server in /
Server to deploy in Heroku

Install dependencies `npm install`
Deploy into heroku `git add remote heroku git@heroku.com:mplayerjs.git` `git push heroku master`

## Native Client in /clients/native
Nodejs client to run in a computer with a big monitor

`npm install`
`node mplayer.js`
