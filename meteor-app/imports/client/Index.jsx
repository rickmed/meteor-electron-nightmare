import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

const prod = Meteor.settings.public.production

if (prod === 'yes') {
  const { Meteor } = require('meteor/meteor')

  Meteor.startup( () => {
    ReactDOM.render(<App/>, document.getElementById('react-root'))
  })
}

else {
  require('react-hot-loader/patch')
  const { AppContainer } = require('react-hot-loader')

  const renderApp = (AppComponent) => {
    ReactDOM.render(
      <AppContainer>
      <AppComponent/>
      </AppContainer>,
      document.getElementById('react-root')
    )
  }

  renderApp(App)

  if (module.hot) {
    module.hot.accept('./App.jsx', () => {
      const NextAppRoot = require('./App.jsx').default
      renderApp(NextAppRoot)
    })
  }

  console.log('Hot updates loaded')
}
