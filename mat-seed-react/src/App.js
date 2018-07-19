import React, {Component} from 'react'

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import Home from  './pages/Home'
import Main from './layouts/Main'
import './App.css'
let darkTheme = createMuiTheme({
    palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
});
console.log = console.warn = console.error = () => {};//Remove this when you are doing your development
class Auth extends React.Component {
    static getUser() {
        return localStorage.getItem("user");
    }
}
/**
 * Render protected application paths
 */
class Protected extends Component {


    render() {
        if (Auth.getUser()) {
            return (
                <Main setTheme={this.props.setTheme}>
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route exact path={"/home"} component={Home}/>
                    </Switch>
                </Main>
            );
        } else {
            return (
                <Redirect to={{pathname: '/login'}}/>
            );
        }

    }
}

/**
 * Define base routes for the application
 */
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            themeIndex: 0
        };
        localStorage.setItem('user', "mat"); // Remove this. This is only for demo purpose.
    }

    render() {
        return (
            <MuiThemeProvider theme={darkTheme}>
                <Router basename="/mat">
                    <Switch>
                        <Route component={Protected} />
                    </Switch>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
