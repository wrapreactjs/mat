import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';
import Button from 'material-ui/Button';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import {FormControl} from 'material-ui/Form';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 10,
    },
    paper: {
        padding: 16,
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },formControl: {
        margin: theme.spacing.unit,
        minWidth: '100%',
    },
    formControlHalf: {
        margin: theme.spacing.unit,
        minWidth: '45%',
    },
});

class FormWizard extends React.Component {
    state = {
        activeStep: 0,
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep + 1,
        });
    };

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1,
        });
    };
    componentDidMount() {
        document.title = "MAT - Form Wizard";
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={12}>
                        <Paper className={classes.paper}>
                            <Typography type="display1" align="left" gutterBottom>
                                Basic Form
                            </Typography>
                            <Typography>Step {this.state.activeStep + 1} of 3</Typography>
                            {this.state.activeStep === 0 &&
                                <Grid container spacing={8}>
                                    <Grid item xs={12} md={6}>
                                        <FormControl className={classes.formControl}>
                                            <TextField
                                                id="name"
                                                label="Name"
                                                className={classes.textField}
                                                value={this.state.name}
                                                onChange={this.handleChange('name')}
                                                margin="normal"
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControl className={classes.formControl}>
                                            <TextField
                                                id="name"
                                                label="Email"
                                                className={classes.textField}
                                                value={this.state.email}
                                                onChange={this.handleChange('email')}
                                                margin="normal"
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControl className={classes.formControl}>
                                            <TextField
                                                id="phone"
                                                label="Phone"
                                                className={classes.textField}
                                                value={this.state.phone}
                                                onChange={this.handleChange('phone')}
                                                margin="normal"
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControl className={classes.formControl}>
                                            <TextField
                                                id="company"
                                                label="Company Name"
                                                className={classes.textField}
                                                value={this.state.company}
                                                onChange={this.handleChange('company')}
                                                margin="normal"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            }
                            {this.state.activeStep === 1 &&
                                <Grid container spacing={8}>
                                    <Grid item xs={12} md={12}>
                                        <FormControl className={classes.formControl}>
                                            <TextField
                                                id="subject"
                                                label="Subject"
                                                className={classes.textField}
                                                value={this.state.subject}
                                                onChange={this.handleChange('subject')}
                                                margin="normal"
                                            />
                                        </FormControl>
                                    </Grid>
                                    < Grid item xs={12} md={12}>
                                        <FormControl className={classes.formControl}>
                                        <TextField
                                        id="description"
                                        label="Description"
                                        className={classes.textField}
                                        value={this.state.description}
                                        onChange={this.handleChange('description')}
                                        margin="normal"
                                        multiline
                                        />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            }
                            {this.state.activeStep === 2 &&
                                <Grid container spacing={8}>
                                    <Grid item xs={12} md={6}>
                                        <FormControl className={classes.formControl}>
                                            <TextField
                                                id="secret"
                                                label="Secret Question"
                                                className={classes.textField}
                                                value={this.state.secret}
                                                onChange={this.handleChange('secret')}
                                                margin="normal"
                                            />
                                        </FormControl>
                                    </Grid>
                                    < Grid item xs={12} md={6}>
                                        <FormControl className={classes.formControl}>
                                            <TextField
                                                id="answer"
                                                label="Answer"
                                                className={classes.textField}
                                                value={this.state.answer}
                                                onChange={this.handleChange('answer')}
                                                margin="normal"
                                                multiline
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <Button raised color="primary" className={classes.button} type="submit">
                                            Finish
                                        </Button>
                                        <Button raised className={classes.button}>
                                            Cancel
                                        </Button>
                                    </Grid>
                                </Grid>
                            }
                            <MobileStepper
                                type="dots"
                                steps={3}
                                position="static"
                                activeStep={this.state.activeStep}
                                className={classes.root}
                                nextButton={
                                    <Button dense onClick={this.handleNext} disabled={this.state.activeStep === 2}>
                                        Next
                                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                    </Button>
                                }
                                backButton={
                                    <Button dense onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                        Back
                                    </Button>
                                }
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

FormWizard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FormWizard);