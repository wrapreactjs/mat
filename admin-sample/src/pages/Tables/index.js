import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TableBasic from './TableBasic'
import TableGrid from './TableGrid'

const Tables = () => (
    <Switch>
        <Route exact path='/tables/basic' component={TableBasic}/>
        <Route path='/tables/grid' component={TableGrid}/>
    </Switch>
);

export default Tables