import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Material-ui imports
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { LinearProgress } from 'material-ui/Progress';
import Chip from 'material-ui/Chip';
import List, {
    ListItem,
    ListItemText,
    ListItemSecondaryAction
} from 'material-ui/List';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Refresh from 'material-ui-icons/Refresh';
import projectDate from './ProjectData';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 10,
    },
    paper: {
        paddingTop: 16,
        paddingRight: 16,
        paddingBottom: 56,
        paddingLeft: 16,
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    chip: {
        margin: theme.spacing.unit,
        color: theme.palette.text.secondary,
        minWidth: 100,
    },
    chipActive: {
        margin: theme.spacing.unit,
        color: theme.palette.text.secondary,
        background: theme.palette.background.active,
        minWidth: 100,
    },
    progress:{
        maxWidth: 150,
        flex: 1,
        padding: 16
    },
    textDisplay: {
        maxWidth: 250,
    },
    textDisplayLink: {
        textDecoration: 'none',
    },
    icon: {
        margin: 0
    },
    projectSearch: {
        display: 'flex',
        alignItems: 'center'
    },
    buttonLeft: {
        height: 30,
        marginRight: 20,
    },
    buttonRight: {
        height: 30,
        marginLeft: 20,
    }
});
class ProjectList extends React.Component {
    componentDidMount() {
        document.title = "MAT - Projects";
    };
    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.root}>
                <Typography type="display1" align="left">
                    Projects
                </Typography>
                <Typography align="left" gutterBottom>You have 42 projects</Typography>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <div className={classes.projectSearch}>
                                <Button raised className={classes.buttonLeft}>
                                    <Refresh className={classes.icon} /> Refresh
                                </Button>

                                <TextField
                                    id="full-width"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    placeholder="Search"
                                    helperText="Filter projects by name"
                                    fullWidth
                                    margin="normal"
                                />
                                <Button raised color="primary" className={classes.buttonRight}>
                                    Go
                                </Button>
                            </div>

                            <List>
                                {
                                    projectDate.map(
                                        (project,index) =>
                                            <ListItem button className={classes.listItem} key={index}>
                                                <Chip label={project.active ? "Active": "inactive"}
                                                      className={project.active ? classes.chipActive: classes.chip}
                                                />
                                                <Link to={"/projects/"+index} className={classes.textDisplayLink}>
                                                    <ListItemText
                                                        className={classes.textDisplay}
                                                        primary={ project.name}
                                                        secondary={Math.floor(Math.random()*12) +" days ago at 7:58 pm - "+project.created}/>
                                                </Link>
                                                <div className={classes.progress}>
                                                    <LinearProgress value={project.completed} mode="buffer"   />
                                                </div>
                                                <ListItemSecondaryAction className={classes.date}>
                                                    {Math.floor(Math.random()*12)}h ago
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                    )
                                }

                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

ProjectList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectList);
