import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProjectList from './ProjectList'
import Project from './Project'

const Projects = () => (
    <Switch>
        <Route exact path='/projects' component={ProjectList}/>
        <Route path='/projects/:id' component={Project}/>
    </Switch>
);

export default Projects