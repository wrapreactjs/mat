import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ContactList from './ContactList'
import Contact from './Contact'

const Contacts = () => (
            <Switch>
                <Route exact path='/contacts' component={ContactList}/>
                <Route path='/contacts/:id' component={Contact}/>
            </Switch>
);

export default Contacts