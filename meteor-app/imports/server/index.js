import '/imports/api/flexbot/collections.js'
import '/imports/api/flexbot/methods.js'


var Nightmare = require('nightmare-meteor');

var nightmare = Nightmare({
  show: true,
  openDevTools: true,
  alwaysOnTop: false
})

nightmare
  .on('console', function(method, message) { console[method](message); })
  .goto('http://ven.flexmls.com')
  .type('#user', 'ven.anarodriguez')
  .type('#password', 'anaisrc53')
  .click('#login-button')
  .enterIframe('#top_frame')
  .click('a[name=my_listings]')
  .enterIframe(['#top_frame', '#view_frame'])
  .wait('#thegridbody .listing')
  .getAll('#thegridbody .listing').attribute('id')
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('ERRORRRRR: ', error);
  });
