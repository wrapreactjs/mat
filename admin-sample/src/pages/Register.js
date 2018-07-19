import React  from 'react';
import {Link, Redirect, Switch } from 'react-router-dom';

import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Message from '../utils/Message'


const styles = theme => ({
    root: {
        margin: 0,
        overflow: 'hidden'
    },
    paper: {
        padding: 16,
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    link: {
        color: theme.palette.text.secondary
    },
    logoWrapperLink: {
        display: 'flex',
        justifyContent: 'center'
    }
 });

class Register extends React.Component {

    /**
     * Class constructor.
     */
    constructor(props) {
        super(props);

        // set the initial component state
        this.state = {
            errors: {},
            user: {
                username: '',
                email: '',
                password: '',
                policyCheck: '',
            },
            startValidate: false
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    checkForErrors() {
        let hasErrors = false;
        const username = this.state.user.username;
        const email = this.state.user.email;
        const password = this.state.user.password;

        let errors = this.state.errors;

        if (!username) {
            errors.username = "Please enter username";
            hasErrors = true;
        } else {
            errors.username = false;
        }

        if (!email) {
            errors.email = "Please enter email";
            hasErrors = true;
        } else {
            errors.email = false;
        }

        if (!password) {
            errors.password = "Please enter Password";
            hasErrors = true;
        } else {
            errors.password = false;
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
        this.msg.info("Creating user with " + email + "");
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
        console.info(user);
        this.setState({
            user
        });
        this.checkForErrors();

    }
    componentDidMount() {
        document.title = "MAT - Register"
    }
    /**
     * Render the component.
     */
    render() {
        const classes = this.props.classes;
        const errors= this.state.errors;
        const startValidate= this.state.startValidate;
        return (
            !this.state.isLoggedIn ?
            <div>
                <Message ref={a => this.msg = a}/>
                <div className="login-flex-container">

                    <div className="login-main-content">
                        <Paper className={classes.paper}>
                            <form onSubmit={this.processForm} className="login-form">
                                <div>
                                    <Grid container justify="center" direction="column">
                                        <Link to={'/'} className={classes.logoWrapperLink}>
                                            <img  src="/mat/images/logo.svg" alt="mat-logo" className="register-logo"  />
                                        </Link>
                                        <Typography type="display2" className="register-header" align="center">
                                            Create New Account
                                        </Typography>
                                        <Typography type="caption" gutterBottom>
                                            Enter your email address and your password will be reset and emailed to you.
                                        </Typography>
                                        <TextField
                                            error={ errors.username && startValidate}
                                            id="username"
                                            label="Name"
                                            type="text"
                                            name="username"
                                            onChange={this.changeUser}
                                            className="text-field"
                                        />
                                        <TextField
                                            error={ errors.email && startValidate}
                                            id="email"
                                            label="Email"
                                            type="text"
                                            name="email"
                                            onChange={this.changeUser}
                                            className="text-field"
                                        />
                                        <TextField
                                            error={ errors.password && startValidate}
                                            id="password"
                                            label="Password"
                                            type="text"
                                            name="password"
                                            onChange={this.changeUser}
                                            className="text-field"
                                        />
                                    </Grid>

                                </div>




                                <Button type="submit" raised color="primary" className="login-form-submit">
                                    Register
                                </Button>
                                <br />
                                <br />
                                <Typography type="caption"  gutterBottom>
                                    <Link to={'/forgot'} className={classes.link}>Forgot password?</Link>
                                </Typography>
                                <Typography type="caption" gutterBottom>
                                    <Link to={'/login'} className={classes.link}>Login</Link>
                                </Typography>
                            </form>
                        </Paper>
                    </div>
                    <div className="login-footer">
                        Mat | © 2017
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

Register.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);