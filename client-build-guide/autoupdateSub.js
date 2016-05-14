(function(){
Autoupdate = {};

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package.autoupdate = {}, {
  Autoupdate: Autoupdate
});

})();
