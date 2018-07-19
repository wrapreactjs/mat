import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

//Material-ui imports
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Place from 'material-ui-icons/Place';
import red from 'material-ui/colors/red';
import green from 'material-ui/colors/green';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { LinearProgress } from 'material-ui/Progress';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import HelpIcon from 'material-ui-icons/Help';
import ShoppingBasket from 'material-ui-icons/ShoppingBasket';
import ThumbDown from 'material-ui-icons/ThumbDown';
import ThumbUp from 'material-ui-icons/ThumbUp';

import ProjectData from './ProjectData';

//Victory imports
import HealthChart from './HealthChart';

function TabContainer(props) {
    return <div style={{ padding: 8 * 3 }}>{props.children}</div>;
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

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
    logo: {
        width: '160px',
        height: '100px',
    },
    place: {
        width: 16,
        height: 16,
        marginRight: theme.spacing.unit,
        fill: red[500],
        '&:hover':{
            fill: green[500]
        }
    },
    cardMediaAddress: {
        lineHeight: 1.5
    },
    breadcrumb:{
        textDecoration: 'none'
    },
    titleWrapper: {
        display: 'flex',
        marginBottom: 20,
    },
    buttonEditProject: {
        flexGrow: 0,
    },
    title: {
        flexGrow: 1,
    },
    dataTitle: {
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'flex-end',
        display: 'flex'
    },
    dataContent: {
        alignItems: 'center',
    },
    chipActive: {
        margin: theme.spacing.unit,
        color: theme.palette.text.secondary,
        background: theme.palette.background.active,
        minWidth: 100,
    },
    avatar: {
        margin: 2,
        width: 30,
        height: 30,
    },
    barChart: {
        height: 20,
    }

});
class Project extends React.Component {
    state = {
        value: 0,
    };
    componentDidMount() {
        document.title = "MAT - " + ProjectData[this.props.match.params.id].name;
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const userIndex = this.props.match.params.id;
        const user = ProjectData[userIndex];
        const classes = this.props.classes;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <Typography type="display1" align="left">
                    Projects - {user.name}
                </Typography>
                <Link to="/projects" className={classes.breadcrumb}>
                    <Button className={classes.button}>Projects</Button>
                </Link>
                >
                <Button disabled className={classes.button}>
                    {user.name}
                </Button>
                <Grid container spacing={8}>
                    <Grid item md={12} lg={8}>
                        <Paper className={classes.paper}>
                            <div className={classes.titleWrapper} >
                                <Typography type="headline" className={classes.title} gutterBottom>
                                    Contract with MadMat company
                                </Typography>
                                <Button raised className={classes.buttonEditProject}>
                                    Edit Project
                                </Button>
                            </div>
                            <Grid container>
                                {/* First row */}
                                <Grid item xs={3} className={classes.dataTitle}>Status:</Grid>
                                <Grid item xs={3} className={classes.dataContent}>
                                    <Chip label="Active"
                                          className={classes.chipActive}
                                    />
                                </Grid>
                                <Grid item xs={6}></Grid>

                                {/* Second row */}

                                <Grid item xs={3} className={classes.dataTitle}>Project Manager:</Grid>
                                <Grid item xs={3} className={classes.dataContent}>John Smith</Grid>

                                <Grid item xs={3} className={classes.dataTitle}>Last Updated:</Grid>
                                <Grid item xs={3} className={classes.dataContent}>14.06.2016 11:14:56</Grid>

                                {/* Third row */}

                                <Grid item xs={3} className={classes.dataTitle}>Issues:</Grid>
                                <Grid item xs={3} className={classes.dataContent}>34</Grid>

                                <Grid item xs={3} className={classes.dataTitle}>Created:</Grid>
                                <Grid item xs={3} className={classes.dataContent}>11.05.2015 11:14:56</Grid>

                                {/* Fourth row */}

                                <Grid item xs={3} className={classes.dataTitle}>Client:</Grid>
                                <Grid item xs={3} className={classes.dataContent}>34</Grid>

                                <Grid item xs={3} className={classes.dataTitle}>People:</Grid>
                                <Grid item xs={3} className={classes.dataContent}>
                                    <Grid container direction="row">
                                    {[0,1,2,3,4,5].map(
                                        (num,index) =>
                                            <Avatar
                                                src={"/mat/images/man"+num+"-big.jpeg"}
                                                className={classes.avatar}
                                                key={index}
                                            />
                                    )}
                                    </Grid>
                                </Grid>

                                {/* Fifth row */}

                                <Grid item xs={3} className={classes.dataTitle}>Completed % :</Grid>
                                <Grid item xs={9} className={classes.dataContent}>
                                    <LinearProgress className={classes.barChart} mode="determinate" value={79} />
                                </Grid>
                                <Grid item xs={3} className={classes.dataTitle}></Grid>
                                <Grid item xs={9} className={classes.dataContent}>
                                    Porject 79% completed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus risus dui, dignissim nec nibh a, euismod rutrum tortor.

                                </Grid>
                            </Grid>
                        </Paper>
                            <AppBar position="static" color="default">
                                <Tabs
                                    value={value}
                                    onChange={this.handleChange}
                                    scrollable
                                    scrollButtons="on"
                                    indicatorColor="primary"
                                    textColor="primary"
                                >
                                    <Tab label="Contract" icon={<PhoneIcon />} />
                                    <Tab label="SOW" icon={<FavoriteIcon />} />
                                    <Tab label="General Conditions" icon={<PersonPinIcon />} />
                                    <Tab label="Special Conditions" icon={<HelpIcon />} />
                                    <Tab label="Bill of Quantities" icon={<ShoppingBasket />} />
                                    <Tab label="Drawings" icon={<ThumbDown />} />
                                    <Tab label="Schedule" icon={<ThumbUp />} />
                                </Tabs>
                            </AppBar>
                            {value === 0 &&
                                <Paper className={classes.paper}>
                                    This agreement is used by the contracting officer or owner and the contractor.
                                    It's an essential component of the contract documents.
                                    It's the main document to which most other documents attach or reference.
                                </Paper>}
                            {value === 1 &&
                            <Paper className={classes.paper}>SOW</Paper>
                            }
                            {value === 2 &&
                                <Paper className={classes.paper}>General Conditions</Paper>
                            }
                            {value === 3 &&
                                <Paper className={classes.paper}>Special Conditions</Paper>
                            }
                            {value === 4 &&
                                <Paper className={classes.paper}>Bill of Quantities</Paper>
                            }
                            {value === 5 &&
                                <Paper className={classes.paper}>Drawings</Paper>
                            }
                            {value === 6 &&
                                <Paper className={classes.paper}>Schedule</Paper>
                            }
                            {value === 7 &&
                            <Paper className={classes.paper}>Item One</Paper>
                            }


                    </Grid>
                    <Grid item md={12} lg={4}>
                            <Typography type="subheading" gutterBottom>
                                Project Description
                            </Typography>

                            <img src={"/mat/images/LogoCompany.png"} className={classes.logo}  alt="" />
                            <Typography type="subheading" color="secondary" >
                                <Place className={classes.place} />Riviera State 32/106
                            </Typography>
                            <Typography type="title" gutterBottom>
                                About me
                            </Typography>
                            <Typography type="body1" color="secondary"  gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitat.
                            </Typography>
                            <Typography type="title" gutterBottom>
                                Project health
                            </Typography>
                            <HealthChart />
                    </Grid>
                </Grid>
            </div>
        );

    }
}

Project.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project);
