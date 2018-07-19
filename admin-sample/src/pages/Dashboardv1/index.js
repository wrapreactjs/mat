import React from 'react'
import PropTypes from 'prop-types';

//Material-ui imports
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Typography from 'material-ui/Typography';
//Charting lib imports
//Custom component imports
import ListNumber from '../../MatComponents/ListNumber';
import PieChart1 from './PieChart1';
import Map from './Map';
import CustomChart from './CustomChart';
import CustomBarChart from './CustomBarChart'
import MailFeed from './MailFeed';

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
        color: theme.palette.text.secondary,
        paddingTop: 10
    },
    listItemText: {
        paddingRight:'30px',
        fontSize: '10px'
    },
    listText: {
        width: '100px'
    }
});
class Dashboardv1 extends React.Component {
    componentDidMount() {
        document.title = "MAT - Dashboard";
    };
    render() {
        const classes = this.props.classes;
        const data2 = [
            {msg: "Please contact me", time: "09:00 pm"},
            {msg: "Sign a contract", time: "10:16 am"},
            {msg: "Open new shop", time: "08:22 pm"},
            {msg: "Call back to Sylvia", time: "11:06 pm"},
            {msg: "Write a letter to Sandra", time: "12:00 am"},
        ]
        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={12}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={8}>
                                <Grid item md={12} lg={3}>
                                    <Typography type="display1" align="left" gutterBottom>
                                        Welcome Mat
                                    </Typography>
                                    <Typography gutterBottom noWrap align="left">
                                        {`
                              You have 42 messsages and 6 notifications.
                            `}
                                    </Typography>
                                    <List>
                                        {data2.map((value, index) => (
                                            <ListItem key={value.msg} dense button className={classes.listItem}>
                                                <ListNumber text={index}/>
                                                <ListItemText className={classes.listText} primary={value.msg}/>
                                                <ListItemText primary={value.time}/>

                                                <ListItemSecondaryAction>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                                <Grid item md={12} lg={6}>
                                    <CustomBarChart />
                                </Grid>
                                <Grid item md={12} lg={3}>
                                    <Typography type="display1" align="left" gutterBottom>
                                        Project Alpha progress
                                    </Typography>
                                    <Typography gutterBottom noWrap align="left">
                                        {`
                              You have two project with not build failures.
                            `}
                                    </Typography>
                                    <PieChart1 title="Requests"/>
                                    <PieChart1 title="Responses"/>
                                    <p className={classes.details}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Maecenas at lacinia arcu. Duis erat odio, maximus imperdiet cursus vitae,
                                        aliquam eget nisi.
                                        In hac habitasse platea dictumst.
                                    </p>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>


                    <Grid item md={12} lg={6}>
                        <Paper className={classes.paper} style={{height:500}}>
                            <Typography type="display1" align="left" gutterBottom>
                                Your Daily Feed
                            </Typography>
                            <Typography gutterBottom noWrap align="left">
                                {`
                              You have 42 messsages.
                            `}
                            </Typography>
                            <MailFeed/>
                        </Paper>
                    </Grid>
                    <Grid item md={12} lg={6}>
                        <Paper className={classes.paper} style={{height:500}}>
                            <CustomChart/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Paper className={classes.paper}>
                            <Typography type="display1" align="left" gutterBottom>
                                Live feed
                            </Typography>
                            <Typography gutterBottom noWrap align="left">
                                You have five builds with failures.
                            </Typography>
                            <Map />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );

    }
}

Dashboardv1.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboardv1);
