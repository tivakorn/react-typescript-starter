// Libs
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

// Reducers
import rootReducers from '../reducers'

export const history = createBrowserHistory()

const historyRouterMiddleware = routerMiddleware(history)

const store = createStore(
    rootReducers(history),
    applyMiddleware(thunk, historyRouterMiddleware)
)

export default store

