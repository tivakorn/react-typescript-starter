//Libs
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Pages
import HomePage from './pages/HomePage'
import TestPage from './pages/TestPage'

const Routes: React.FC = () => {
    return (
        <Switch>

            <Route exact path='/' component={HomePage} />

            <Route exact path='/test' component={TestPage} />

        </Switch>
    )
}

export default Routes
