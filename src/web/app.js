const React = require('react')
const ReactDOM = require('react-dom')
const {
  Provider
} = require('react-redux')
const store = require('./store')
const PockemonPage = require('./components/pokemon-page')
require('./app.styl')

const ReduxApp = React.createElement(
  Provider,
  {
    store
  },
  React.createElement(PockemonPage)
)

ReactDOM.render(
  ReduxApp,
  document.querySelector('main')
)
