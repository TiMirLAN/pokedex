const React = require('react')
const ReactDOM = require('react-dom')
const {
  Provider
} = require('react-redux')
const store = require('./store')
const PockemonList = require('./containers/pokemon-list')

const ReduxApp = React.createElement(
  Provider,
  {
    store
  },
  React.createElement(PockemonList)
)

ReactDOM.render(
  ReduxApp,
  document.querySelector('main')
)
