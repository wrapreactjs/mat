import React from 'react'
import PropTypes from 'prop-types';

//Material-ui imports
import {withStyles} from 'material-ui/styles'
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        margin: 0,
        overflow: 'hidden'
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
    }

});
class Error404 extends React.Component {
    componentDidMount() {
        document.title = "MAT - Page Not Found";
    }

    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.root}>
                <Typography type="caption" align="center" className={classes.caption}>
                    404
                </Typography>
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


            </div>
        );

    }
}

Error404.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Error404);
