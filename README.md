## Meteor app that builds the client part and loaded with electron's file:// protocol.


* Meteor backend.
* Front-end: react + mobx.
* React hot module reloading and babel development support with gadicc:ecmascript-hot package (see render.jsx inside client folder)
* Uses [nightmare-meteor](https://github.com/rickmed/nightmare-meteor)  for web automation scripts (loaded from the meteor client as a remote module of the electron app). This way you can call meteor methods directly.
  * The other option would be to load nightmare-meteor in the main process and call meteor methods with webContents.executeJavaScript.
  * Attaching the nightmare instance to the global window object of the client in conjuction with HMReloading you can continue a script where you left it in the same instance (see client/components/input.jsx)
* Async/await using meteors 1.3 ecmascript package (see input.jsx)
* Meteor toys for mongo and sessions debugging.

* npm install on the root and on the meteor-app folder.
* npm run start-dev to run nodemon on the local electron process and meteor with HMR (loading the meteor client in localhost:3000 with electron's loadURl)
* It runs a automation script locally with electron's (nightmare) main process using nightmare-meteor.
* Meteor builds client front end and demostrate using nightmare on the client (passed using remote module) to call directly meteor methods plus other features (see input.jsx)

##How to build meteor client part to load with electron's file://

See client-build-client folder.

##Meteor packages

```
meteor-base             # Packages every Meteor app needs to have
mongo                   # The database Meteor supports right now
tracker                 # Meteor's client-side reactive programming library

standard-minifier-css   # CSS minifier run for production mode
standard-minifier-js    # JS minifier run for production mode

static-html

autopublish             # Publish all data to the clients (for prototyping)
insecure                # Allow all DB writes from clients (for prototyping)

gadicc:ecmascript-hot@1.3.2-refactor.9   # plus babelrc and HMR support

meteortoys:allthings     # mongo, session debugging -REMOVE FOR PRODUCTION
```

* See package.json and meteor-app/settings.json for production/development environments.

## App functionality decisions

* Is not necessary to add all listings data into db. Could load it into GUI when app is opened. Does it now for practice.

## TODOs

*
