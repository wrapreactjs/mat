import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import AddIcon from 'material-ui-icons/Add';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import AddShoppingCartIcon from 'material-ui-icons/AddShoppingCart';
import Delete from 'material-ui-icons/Delete';
import Done from 'material-ui-icons/Done';
import FileUpload from 'material-ui-icons/FileUpload';
import KeyboardVoice from 'material-ui-icons/KeyboardVoice';
import Save from 'material-ui-icons/Save';
import Send from 'material-ui-icons/Send';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    paper: {
        padding: 16,
        marginTop: 10,
        textAlign: 'left',
        color: theme.palette.text.secondary,
        alignItems: 'center'
    },
    subtitle: {
        marginTop: 10,
    },
    linkTo: {
        color: theme.palette.text.secondary,
    }
});


document.title = "MAT - Buttons";

function Buttons(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Grid container spacing={8}>
                <Grid item xs={12} md={12}>
                    <Typography type="display1" align="left">
                        Dialogs
                    </Typography>
                    <Typography align="left" gutterBottom>More Info -
                        <a href="https://material-ui-1dab0.firebaseapp.com/demos/dialogs/" className={classes.linkTo}>
                            https://material-ui-1dab0.firebaseapp.com/demos/dialogs/
                        </a>
                    </Typography>
                    <Typography type="title" align="left">Flat</Typography>
                    <Paper className={classes.paper}>
                        <Button className={classes.button}>Default</Button>
                        <Button color="primary" className={classes.button}>
                            Primary
                        </Button>
                        <Button color="accent" className={classes.button}>
                            Accent
                        </Button>
                        <Button color="contrast" className={classes.button}>
                            Contrast
                        </Button>
                        <Button disabled className={classes.button}>
                            Disabled
                        </Button>
                        <Button href="#flat-buttons" className={classes.button}>
                            Link
                        </Button>
                        <Button dense className={classes.button}>
                            Dense
                        </Button>
                    </Paper>
                    <Typography type="title" align="left" className={classes.subtitle}>Raised</Typography>
                    <Paper className={classes.paper}>
                        <Button raised className={classes.button}>
                            Default
                        </Button>
                        <Button raised color="primary" className={classes.button}>
                            Primary
                        </Button>
                        <Button raised color="accent" className={classes.button}>
                            Accent
                        </Button>
                        <Button raised color="contrast" className={classes.button}>
                            Contrast
                        </Button>
                        <Button raised color="accent" disabled className={classes.button}>
                            Disabled
                        </Button>
                    </Paper>
                    <Typography type="title" align="left" className={classes.subtitle}>Floating</Typography>
                    <Paper className={classes.paper}>
                        <Button fab color="primary" aria-label="add" className={classes.button}>
                            <AddIcon />
                        </Button>
                        <Button fab color="accent" aria-label="edit" className={classes.button}>
                            <ModeEditIcon />
                        </Button>
                    </Paper>
                    <Typography type="title" align="left" className={classes.subtitle}>Icons</Typography>
                    <Paper className={classes.paper}>
                        <IconButton className={classes.button} aria-label="Delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton className={classes.button} aria-label="Delete" disabled color="primary">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton color="contrast" className={classes.button} aria-label="Add to shopping cart">
                            <AddShoppingCartIcon />
                        </IconButton>
                        <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
                            <AddShoppingCartIcon />
                        </IconButton>
                    </Paper>
                    <Typography type="title" align="left" className={classes.subtitle}>Labels and Icons</Typography>
                    <Paper className={classes.paper}>
                        <Button className={classes.button} raised color="accent">
                            Delete
                            <Delete className={props.classes.rightIcon} />
                        </Button>
                        <Button className={classes.button} raised color="primary">
                            Send
                            <Send className={props.classes.rightIcon} />
                        </Button>
                        <Button className={classes.button} raised color="default">
                            Upload
                            <FileUpload className={props.classes.rightIcon} />
                        </Button>
                        <Button className={classes.button} raised color="contrast">
                            Done
                            <Done className={props.classes.leftIcon} />
                        </Button>
                        <Button className={classes.button} raised disabled color="accent">
                            Talk
                            <KeyboardVoice className={props.classes.leftIcon} />
                        </Button>
                        <Button className={classes.button} raised dense>
                            Save
                            <Save className={props.classes.leftIcon} />
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

Buttons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Buttons);