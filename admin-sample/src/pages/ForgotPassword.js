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

class ForgotPassword extends React.Component {

    /**
     * Class constructor.
     */
    constructor(props) {
        super(props);

        // set the initial component state
        this.state = {
            errors: {},
            user: {
                email: ''
            },
            startValidate: false
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    checkForErrors() {
        let hasErrors = false;
        const email = this.state.user.email;

        let errors = this.state.errors;

        if (!email) {
            errors.email = "Please enter email";
            hasErrors = true;
        } else {
            errors.email = "";
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
        this.msg.info("Please check " + email + "");


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
        document.title = "MAT - Forgot Password";
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
                        <Paper className={classes.paper}>

                            <form onSubmit={this.processForm}>
                                <div>
                                    <Link to="/" className={classes.logoWrapperLink}>
                                        <img src="/mat/images/logo.png" alt="mat-logo"/>
                                    </Link>
                                    <Typography type="display2" className="register-header" align="center">
                                        Forgot password
                                    </Typography>
                                    <Typography type="caption" gutterBottom>
                                        Enter your email address and your password will be reset and emailed to you.
                                    </Typography>
                                </div>

                                <TextField
                                    error={ errors.email && startValidate}
                                    id="email"
                                    label="Email"
                                    type="text"
                                    autoComplete="email"
                                    margin="normal"
                                    name="email"
                                    style={{width: "100%"}}
                                    onChange={this.changeUser}
                                />


                                <Button type="submit" raised color="primary" className="login-form-submit">
                                    Send Password Reset Link
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

ForgotPassword.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ForgotPassword);
