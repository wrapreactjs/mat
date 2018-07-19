import React  from 'react';
import {Link, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles'

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Message from '../utils/Message'

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 10,
    },
    paper: {
        padding: 16,
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    link: {
        color: theme.palette.text.secondary
    },
});
class LoginPage extends React.Component {

    /**
     * Class constructor.
     */
    constructor(props) {
        super(props);

        // set the initial component state
        this.state = {
            errors: {},
            user: {
                email: '',
                password: ''
            },
            startValidate: false,
            isLoggedIn: false
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
        //this.msg
    }

    checkForErrors() {
        let hasErrors = false;
        const email = this.state.user.email;
        const password = this.state.user.password;

        let errors = this.state.errors;

        if (!email) {
            errors.email = "Please enter email";
            hasErrors = true;
        } else {
            errors.email = "";
        }
        if (!password) {
            errors.password = "Please enter password";
            hasErrors = true;
        } else {
            errors.password = "";
        }
        this.setState({errors: errors});

        return hasErrors;
    }

    /**
     * Process the form.
     *
     * @param {object} event - the JavaScript event object
     */
    processForm(event) {
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();
        this.setState({startValidate:true});

        if (this.checkForErrors()) return;
        // create a string for an HTTP body message
        const email = this.state.user.email;

        const password = this.state.user.password;

        if ((email === "mat" && password === "mat" ) || (email === "" && password === "")) {
            this.setState({isLogin: true});
            localStorage.setItem('user', email);
            this.setState({isLoggedIn: true});
        } else {
            this.msg.error("Wrong email and password. Default email=mat, password=mat");
        }
    }

    /**
     * Change the user object.
     *
     * @param {object} event - the JavaScript event object
     */
    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({
            user
        });
        this.checkForErrors();

    }
    componentDidMount() {
        document.title = "MAT - Login";
    }
    /**
     * Render the component.
     */
    render() {
        const errors= this.state.errors;
        const startValidate= this.state.startValidate;
        const classes = this.props.classes;
        return (
            !this.state.isLoggedIn ?
                <div>
                    <Message ref={a => this.msg = a}/>
                    <div className="login-flex-container">

                        <div className="login-main-content">
                            <Paper className="login-paper">

                                <form onSubmit={this.processForm} className="login-form">
                                    <div>
                                        <img className="brand" src="/mat/images/logo.png" alt="mat-logo"/>
                                        <Typography type="subheading" gutterBottom>
                                            Mat Demo Login
                                        </Typography>
                                        <Typography type="caption" gutterBottom>
                                            Default username=<strong>mat</strong> and <strong>password=mat</strong>
                                        </Typography>
                                    </div>

                                    <TextField
                                        error={ startValidate && errors.email !== '' }
                                        id="email"
                                        label={errors.email === '' ? "Email" : errors.email }
                                        type="text"
                                        autoComplete="email"
                                        margin="normal"
                                        name="email"
                                        style={{width: "100%"}}
                                        onChange={this.changeUser}
                                    />
                                    <TextField
                                        error={ startValidate && errors.password !== '' }
                                        id="password"
                                        label={errors.password === '' ? "Password" : errors.password }
                                        autoComplete="current-password"
                                        margin="normal"
                                        style={{width: "100%"}}
                                        type="password"
                                        name="password"
                                        onChange={this.changeUser}
                                    />

                                    <Button type="submit" raised color="primary" className="login-form-submit">
                                        Login
                                    </Button>
                                    <br />
                                    <br />
                                    <Typography type="subheading" gutterBottom>
                                        Don't have an account?
                                    </Typography>
                                    <Typography type="caption" gutterBottom>
                                        <Link to={'/register'} className={classes.link}>Create one</Link>
                                    </Typography>
                                    <Typography type="caption" gutterBottom>
                                        <Link to={'/forgot'}  className={classes.link}>Forgot Password</Link>
                                    </Typography>

                                </form>

                            </Paper>
                        </div>
                        <div className="login-footer">
                            Mat | Â© 2017
                        </div>
                    </div>
                </div>
                :
                <Switch>
                    <Redirect to="/"/>
                </Switch>


        );
    }

}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPage);