import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FormBasic from './FormBasic'
import FormAdvanced from './FormAdvanced'
import FormWizard from './FormWizard'
import Buttons from './Buttons'
import Dialogs from './Dialogs'
import Draggable from './DraggableTree'
import Sortable from './Sortable'

const Ui = () => (
    <Switch>
        <Route exact path='/ui/basic' component={FormBasic}/>
        <Route path='/ui/advanced' component={FormAdvanced}/>
        <Route path='/ui/wizard' component={FormWizard}/>
        <Route path='/ui/buttons' component={Buttons}/>
        <Route path='/ui/dialogs' component={Dialogs}/>
        <Route path='/ui/draggable-tree' component={Draggable}/>
        <Route path='/ui/sortable-tree' component={Sortable}/>
    </Switch>
)


export default Ui
