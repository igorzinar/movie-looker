import React from 'react'
import ReactDOM from 'react-dom'

// Redux 
import  { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { BrowserRouter } from 'react-router-dom'
import App from './App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))



ReactDOM.render(
  <React.StrictMode>
     <Provider store={store} >
       <BrowserRouter>
           <App />
        </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
