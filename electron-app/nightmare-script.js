
var Nightmare = require('nightmare-meteor');

/**
 * @param {string} excel file path
 * @param  {object} with "id" {string}: sessionId for attaching to a session
 */
function script () {

  var nightmare = Nightmare({
    show: true,
    openDevTools: true,
    alwaysOnTop: false
  })

  nightmare
    .goto('http://yahoo.com')
    .type('form[action*="/search"] [name=p]', 'github nightmare')
    .click('form[action*="/search"] [type=submit]')
    .wait('#main')
    .getAll('div').attribute('id')
    .end()
    .then(function (result) {
      console.log(result)
    })
    .catch(function (error) {
      console.error('ERRORrRRRR: ', error);
    });
}

module.exports = { script }
