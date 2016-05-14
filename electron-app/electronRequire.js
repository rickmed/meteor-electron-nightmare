//  meteor runtime will overwrite electron's global require function
//  this moves it to be accessible again

const req = window.require
window.electron = { require: req }

// window.alert = function (msg) {
//   console.log('always agree:', msg);
// };
