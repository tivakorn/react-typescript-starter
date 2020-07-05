// Libs
import { combineReducers } from 'redux'
import { History } from 'history'
import { RouterState, connectRouter } from 'connected-react-router'

export interface State {
    router: RouterState
}

const rootReducers = (history: History) => combineReducers({
    router: connectRouter(history)
})

export default rootReducers