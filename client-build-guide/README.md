See index.html how to structure the file to be loaded with electron's file://

builtWithMBC.js (inside index.html) is the file built with meteor-build-client package (must install globally)

When builtWithMBC.js is built do:

##Autoupdate problem

When building the client part of meteor and loading from file:// the meteor server pushes and reloads window when new code is available but if file is loaded via file:// it will load initial code and the process repeats indefinitely.

Is impossible to overwrite (meteor's build tool ignores it for being a duplicated Publish) or stop (it runs on meteor.startup) the subscription on the server.

Solution: just remove the autoupdate package manually from the client build like this:

search "meteor_autoupdate_clientVersions" on the minimized build file to find the minimized autoupdate package part and replace it with the autoupdateSub.js file contents in this directory.
