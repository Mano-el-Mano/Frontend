import React from 'react'
import { Provider } from 'react-redux'
import AppContainer from './components/AppContainer'
import store from './redux/store'

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

export default App
