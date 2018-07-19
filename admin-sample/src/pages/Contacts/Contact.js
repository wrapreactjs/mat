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
import List, {
    ListItem,
    ListItemText,
    ListItemSecondaryAction
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import ContactData from './ContactData';

//Victory imports
import {VictoryBar, VictoryContainer, VictoryArea} from 'victory';

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
    profileImage: {
        width: '100%',
        height: '100%',
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
    }
});
class Contact extends React.Component {
    componentDidMount() {
        document.title = "MAT - " + ContactData[this.props.match.params.id].name;
    };
    render() {
        const userIndex = this.props.match.params.id;
        const user = ContactData[userIndex];
        const classes = this.props.classes;

        return (
            <div className={classes.root}>
                <Typography type="display1" align="left">
                    Profile - {user.name}
                </Typography>
                <Link to="/contacts" className={classes.breadcrumb}>
                    <Button className={classes.button}>Contacts</Button>
                </Link>
                >
                <Button disabled className={classes.button}>
                    {user.name}
                </Button>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={4}>
                        <Paper className={classes.paper}>
                            <Typography type="headline" gutterBottom>
                                Profile Details
                            </Typography>

                            <img src={"/mat/images/man"+userIndex+"-big.jpeg"} className={classes.profileImage}  alt="" />
                            <Typography type="headline">
                                {user.name}
                            </Typography>
                            <Typography type="subheading" color="secondary" >
                                <Place className={classes.place} />Riviera State 32/106
                            </Typography>
                            <Typography type="title" gutterBottom>
                                About me
                            </Typography>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitat.</p>
                            <Grid container>
                                <Grid item xs={4}>
                                    <VictoryBar width={50} height={60}
                                                style={{ data: { fill: "#c43a31" } }}
                                                data={[
                                                    { x: 1, y: 2 },
                                                    { x: 2, y: 3},
                                                    { x: 3, y: 5},
                                                ]}
                                                containerComponent={<VictoryContainer responsive={false}/>}
                                    />
                                    <Typography type="body2" gutterBottom>
                                        150 posts
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <VictoryArea width={50} height={60}
                                                style={{ data: { fill: "#3864c4" } }}
                                                containerComponent={<VictoryContainer responsive={false}/>}
                                    />
                                    <Typography type="body2" gutterBottom>
                                        37 PRS
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <VictoryBar width={50} height={60}
                                                style={{ data: { fill: "#3dc428" } }}
                                                containerComponent={<VictoryContainer responsive={false}/>}
                                    />
                                    <Typography type="body2" gutterBottom>
                                        20k LOC
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Button raised color="accent" className={classes.button}>
                                Send Message
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Paper className={classes.paper}>
                            <Typography type="headline" gutterBottom>
                                Activities
                            </Typography>
                            <List>
                                {
                                    [0,1,2,3,4,5,0,1,2,3,4].map(
                                        (num,index) =>
                                        <ListItem button className={classes.listItem} key={index}>
                                            <Avatar>
                                                <img src={"/mat/images/man"+num+"-big.jpeg"} className={classes.profileImage}  alt="" />
                                            </Avatar>
                                            <ListItemText className={classes.listItemText}
                                                          primary={user.name + " started following " + ContactData[num].name}
                                                          secondary={num + " days ago at 7:58 pm - 10.06.2014"}/>
                                            <ListItemSecondaryAction className={classes.date}>
                                                {num}{num*2}h ago
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

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
