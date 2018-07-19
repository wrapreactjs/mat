import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Article from '../Article'
import CloseIcon from 'material-ui-icons/Close';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Slide from 'material-ui/transitions/Slide';
import Message from '../../utils/Message';
import { lightGreen } from 'material-ui/colors';


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
function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class Dialogs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            openFull: false
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }

    handleClickOpen(key){
        this.setState({ [key]: true });
    };

    handleRequestClose(key){
        this.setState({ [key]: false });
    };
    handleSuccess(){
        this.msg.success("success message");
    }
    componentDidMount() {
        document.title = "MAT - Dialogs";
    }
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Message ref={a => this.msg = a}/>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={12}>
                        <Typography type="display1" align="left">
                            Dialog
                        </Typography>
                        <Typography align="left" gutterBottom>More Info -
                            <a href="https://material-ui-1dab0.firebaseapp.com/demos/dialogs/" className={classes.linkTo}>
                                https://material-ui-1dab0.firebaseapp.com/demos/dialogs/
                            </a>
                        </Typography>
                        <Typography type="title" align="left">Flat</Typography>
                        <Paper className={classes.paper}>
                            <Button onClick={() => this.handleClickOpen("open")}>Open alert dialog</Button>
                            <Dialog open={this.state.open} onRequestClose={() => this.handleRequestClose("open")}>
                                <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Let Google help apps determine location. This means sending anonymous location
                                        data to
                                        Google, even when no apps are running.
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={() => this.handleRequestClose("open")} color="primary">
                                        Disagree
                                    </Button>
                                    <Button onClick={() => this.handleRequestClose("open")} color="primary" autoFocus>
                                        Agree
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Paper>
                        <Typography type="title" align="left" className={classes.subtitle}>Fullscreen</Typography>
                        <Paper className={classes.paper}>
                            <Button onClick={() => this.handleClickOpen("openFull")}>Open full-screen dialog</Button>
                            <Dialog
                                fullScreen
                                open={this.state.openFull}
                                onRequestClose={() => this.handleRequestClose("openFull")}
                                transition={Transition}
                            >
                                <AppBar className={classes.appBar}>
                                    <Toolbar>
                                        <IconButton color="contrast" onClick={() => this.handleRequestClose("openFull")} aria-label="Close">
                                            <CloseIcon />
                                        </IconButton>
                                    </Toolbar>
                                </AppBar>
                                <br />
                                <br />
                                <br />
                                <br />
                                <Article  />

                            </Dialog>
                        </Paper>
                        <Typography type="title" align="left" className={classes.subtitle}>Snack bars</Typography>
                        <Paper className={classes.paper}>
                            <Button raised style={{background: lightGreen}} className={classes.button}
                                onClick={ () => this.handleSuccess()}
                            >
                                Success
                            </Button>
                            <Button raised color="primary" className={classes.button}
                                onClick={ () => this.msg.info("info message")}
                            >
                                Info
                            </Button>
                            <Button raised color="accent" className={classes.button}
                                    onClick={ () => this.msg.error("error message")}
                            >
                                Error
                            </Button>
                            <Button raised color="contrast" className={classes.button}
                                    onClick={ () => this.msg.warning("warning message")}
                            >
                                Warning
                            </Button>

                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Dialogs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dialogs);