import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'

import './index.css'
import {store} from './app/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrapping the entire App in the Provider to use Redux and Redux Tooolkit 
  <Provider store={store}>
    <App />
  </Provider>,
)
