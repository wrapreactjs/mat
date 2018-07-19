/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import green from 'material-ui/colors/green';
import Place from 'material-ui-icons/Place';
import Grid from 'material-ui/Grid';
import ContactData from './ContactData';

function renderCard(classes,userIndex){
        const user = ContactData[userIndex];


        return (
            <Card className={classes.card}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Link to={"/contacts/"+userIndex}  className={classes.linkStyle}>
                        <Avatar
                            alt={user.name}
                            src={"/mat/images/man"+userIndex+"-big.jpeg"}
                            className={classNames(classes.avatar, classes.bigAvatar)}
                        />
                        </Link>
                    </CardContent>
                    <div className={classes.controls} >
                        <Typography type="subheading" color="secondary" align="center">
                            {user.job}
                        </Typography>
                    </div>
                </div>
                <CardMedia className={classes.cardMedia}>
                    <Link to={"/contacts/"+userIndex}  className={classes.linkStyle}>
                        <Typography type="headline">
                            {user.name}
                        </Typography>
                    </Link>
                    <Typography type="subheading" color="secondary" >
                        <Place className={classes.place} />Riviera State 32/106
                    </Typography>

                    <p className={classes.cardMediaAddress}>
                        Twitter, Inc.<br />
                        795 Folsom Ave, Suite 600<br />
                        San Francisco, CA 94107<br />
                        P: (123) 456-7890
                    </p>
                </CardMedia>
            </Card>
        )
}
const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 10,
    },
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
        height: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    cardMedia: {
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 20,
        color: theme.palette.text.secondary
    },
    cardMediaTitle: {
        fontSize: 15,
        color: "444"
    },
    cardMediaLocation: {
        color: theme.palette.text.secondary
    },
    cardMediaAddress: {
        lineHeight: 1.5
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 150,
        height: 150,
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
    linkStyle:{
        textDecoration: 'none'
    }
});

class ContactList extends React.Component {
    componentDidMount() {
        document.title = "MAT - Contacts";
    };
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <Typography type="display1" align="left" >
                            Contacts
                        </Typography>
                        <Typography align="left" gutterBottom>You have 42 contacts</Typography>
                    </Grid>

                        {
                            [0,1,2,3,4,5,1,2,3,4].map((num) =>
                                <Grid item  md={12} lg={6} xl={4}>
                                    {renderCard(classes,num)}
                                </Grid>

                            )
                        }

                </Grid>
            </div>
        );
    }
}

ContactList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactList);