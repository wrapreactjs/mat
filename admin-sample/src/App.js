import React, {Component} from 'react'

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import Dashboardv1 from  './pages/Dashboardv1'
import Contacts from './pages/Contacts'
import Login from './pages/Login'
import Main from './layouts/Main'
import Ui from './pages/Ui'
import Projects from './pages/Projects'
import Tables from './pages/Tables'
import Article from './pages/Article'
import Error404 from './pages/Error404'
import Error500 from './pages/Error500'
import ForgotPassword from './pages/ForgotPassword'
import Register from './pages/Register'
import Landing from './pages/Landing/Landing'
import './App.css'
import MaterialDesignCustomTheme from './themes/MaterialDesignCustomTheme'
const themes = [];
let darkTheme = createMuiTheme({
    palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
});
let lightTheme = createMuiTheme({
    palette: {
        type: 'light', // Switching the dark mode on is a single property value change.
    },
});
darkTheme.palette.background.active = 'rgba(27, 94, 32, 1)';
darkTheme.palette.background.appBar = 'rgba(63, 81, 181, 1)';
lightTheme.palette.background.active = 'rgba(165, 214, 167, 1)';
lightTheme.palette.background.appBar = 'rgba(33, 150, 243, 1)';
lightTheme.palette.background.contentFrame = 'rgba(227, 242, 253, 1)';
themes.push(darkTheme);
themes.push(lightTheme);
themes.push(createMuiTheme(MaterialDesignCustomTheme));
console.log = console.warn = console.error = () => {}; //Remove this when you are doing your development

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
        console.log(Auth.getUser());
        if (Auth.getUser()) {
            return (
                <Main setTheme={this.props.setTheme}>
                    <Switch>
                        <Route exact path={"/"} component={Dashboardv1}/>
                        <Route exact path={"/home"} component={Dashboardv1}/>
                        <Route path={"/ui"} component={Ui}/>
                        <Route path={"/contacts"} component={Contacts} />
                        <Route path={"/projects"} component={Projects} />
                        <Route path={"/tables"} component={Tables} />
                        <Route path={"/article"} component={Article} />
                        <Route component={Error404} />
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
    componentWillMount() {
        let storedThemeIndex = localStorage.getItem("themeIndex");
        if (storedThemeIndex) {
            this.setState({themeIndex: parseInt(storedThemeIndex)})
        }
    }

    setTheme() {
        this.setState({theme: themes[this.state.themeIndex % 3]});
        this.state.themeIndex++;
        localStorage.setItem("themeIndex", this.state.themeIndex);
    }
    render() {
        return (
            <MuiThemeProvider theme={themes[this.state.themeIndex % 3]}>
                <Router basename="/mat">
                    <Switch>
                        <Route path={"/login"} component={Login}/>
                        <Route path={"/500"} component={Error500} />
                        <Route path={"/forgot"} component={ForgotPassword} />
                        <Route path={"/register"} component={Register} />
                        <Route path={"/landing"} component={Landing} />
                        <Route render={() => <Protected setTheme={() => this.setTheme()}/>}/>
                    </Switch>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
