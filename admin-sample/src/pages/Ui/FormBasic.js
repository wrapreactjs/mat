import React from 'react'
import PropTypes from 'prop-types';

//Material-ui imports
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import {FormControl} from 'material-ui/Form';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

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
    listItem: {
        borderBottom: "solid 1px #ccc"
    },
    details: {
        fontSize: 16,
        color: '#ccc',
        paddingTop: 10
    },
    listItemText: {
        paddingRight: '30px',
        fontSize: '10px'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: '100%',
    },
    formControlHalf: {
        margin: theme.spacing.unit,
        minWidth: '45%',
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    button: {
        margin: theme.spacing.unit,
    }
});
class FormBasic extends React.Component {
    state = {
        age: '',
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        description: ''
    };
    submitForm(event) {
        event.preventDefault();
    }
    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };
    componentDidMount() {
        document.title = "MAT - Form Basic";
    }
    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={12}>
                        <Paper className={classes.paper}>
                            <Typography type="display1" align="left" gutterBottom>
                                Basic Form
                            </Typography>
                            <Typography align="left">You have 42 messsages and 6 notifications.</Typography>
                            <form className={classes.container} autoComplete="off" onSubmit={(event) => this.submitForm(event)}>
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
                                    <Grid item xs={12} md={12}>
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
                                    <Grid item xs={12} md={12}>
                                            <Button raised color="primary" className={classes.button} type="submit">
                                                Submit
                                            </Button>
                                            <Button raised className={classes.button}>
                                                Cancel
                                            </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );

    }
}

FormBasic.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormBasic);
