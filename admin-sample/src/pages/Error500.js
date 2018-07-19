import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

//Material-ui imports
import {withStyles} from 'material-ui/styles'
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    root: {
        overflowX: 'hidden'
    },
    caption: {
        fontSize: 200,
        color: theme.palette.text.secondary,
        width:'100%',
    },
    errorText: {
        marginTop: 50,
        marginLeft: 50,
        marginRight: 50,
        lineHeight: 1.5,
    },
    paper: {
        padding: 16,
        textAlign: 'left',
        color: theme.palette.text.secondary,
        height: '100%'
    },
    link: {
        color: theme.palette.text.secondary
    },
    logoWrapperLink: {
        display: 'flex',
        justifyContent: 'center'
    }

});
class Error500 extends React.Component {
    componentDidMount() {
        document.title = "MAT - Internal Server Error";
    }

    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <Typography type="caption" align="center" className={classes.caption}>
                                500
                            </Typography>
                            <Grid container justify="center">
                                <Link to="/">
                                    <Button raised color="primary">
                                        Back to Mat Home Page
                                    </Button>
                                </Link>
                            </Grid>
                            <Typography type="body1" align="left" className={classes.errorText} color="secondary">
                                            Nunc lacinia lorem blandit, viverra tellus in, convallis metus. Nulla nunc purus,
                                            bibendum consequat diam a, laoreet mattis neque. Sed non eros metus. Vestibulum nisi
                                            ligula, eleifend in tincidunt vitae, pharetra nec magna. Pellentesque lectus neque,
                                            facilisis ac ligula a, tempus venenatis est. Ut neque metus, gravida eget volutpat eget,
                                            convallis non ante. Vestibulum sit amet turpis quis sem mollis suscipit. Sed id ex nunc.
                            </Typography>
                            <Grid container justify="center">
                                <TextField
                                    id="search"
                                    label="Search Page"
                                    type="search"
                                    className={classes.textField}
                                    margin="normal"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );

    }
}

Error500.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Error500);
