import React from 'react'
import PropTypes from 'prop-types';
//Material-ui imports
import Avatar from 'material-ui/Avatar';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import {withStyles} from 'material-ui/styles'

const styles = theme => ({

    listItem: {
        borderBottom: "solid 1px #ccc"
    },
    listItemText: {
        paddingRight:'30px',
        fontSize: '10px'
    }
});
class MailFeed extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <List>
                <ListItem button className={classes.listItem}>
                    <Avatar>
                        <img src="/mat/images/man1.jpg"  alt="" />
                    </Avatar>
                    <ListItemText className={classes.listItemText}
                                  primary="Mike Loreipsum started following Monica Smith."
                                  secondary="3 days ago at 7:58 pm - 10.06.2014"/>
                    <ListItemSecondaryAction className={classes.date}>
                        46h ago
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <Avatar>
                        <img src="/mat/images/man2.jpg"  alt="" />
                    </Avatar>
                    <ListItemText className={classes.listItemText}
                                  primary="Mike Loreipsum started following Monica Smith."
                                  secondary="3 days ago at 7:58 pm - 10.06.2014"/>
                    <ListItemSecondaryAction className={classes.date}>
                        46h ago
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <Avatar>
                        <img src="/mat/images/girl1.jpg"  alt="" />
                    </Avatar>
                    <ListItemText className={classes.listItemText}
                                  primary="Mike Loreipsum started following Monica Smith."
                                  secondary="3 days ago at 7:58 pm - 10.06.2014"/>
                    <ListItemSecondaryAction className={classes.date}>
                        46h ago
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <Avatar>
                        <img src="/mat/images/girl2.jpg"  alt="" />
                    </Avatar>
                    <ListItemText className={classes.listItemText}
                                  primary="Mike Loreipsum started following Monica Smith."
                                  secondary="3 days ago at 7:58 pm - 10.06.2014"/>
                    <ListItemSecondaryAction className={classes.date}>
                        46h ago
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <Avatar>
                        <img src="/mat/images/girl3.jpg"  alt="" />
                    </Avatar>
                    <ListItemText className={classes.listItemText}
                                  primary="Mike Loreipsum started following Monica Smith."
                                  secondary="3 days ago at 7:58 pm - 10.06.2014"/>
                    <ListItemSecondaryAction className={classes.date}>
                        46h ago
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <Avatar>
                        <img src="/mat/images/man1.jpg"  alt="" />
                    </Avatar>
                    <ListItemText className={classes.listItemText}
                                  primary="Mike Loreipsum started following Monica Smith."
                                  secondary="3 days ago at 7:58 pm - 10.06.2014"/>
                    <ListItemSecondaryAction className={classes.date}>
                        46h ago
                    </ListItemSecondaryAction>
                </ListItem>

            </List>
        )
    }
}
MailFeed.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MailFeed);


