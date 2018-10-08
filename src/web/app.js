import React from 'react'
import ReactDOM from 'react-dom'
import {
  Provider
} from 'react-redux'
import store from './store'
import PokemonPage from './components/pokemon-page'
import './app.styl'

const ReduxApp = React.createElement(
  Provider,
  {
    store
  },
  React.createElement(PokemonPage)
)

ReactDOM.render(
  ReduxApp,
  document.querySelector('main')
)
