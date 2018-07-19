import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon } from 'material-ui/List';
import DashboardIcon  from 'material-ui-icons/Dashboard';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        background: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
    link: {
        color: theme.palette.text.primary,
        textDecoration: 'none'
    },
    MenuGroup: {
        paddingLeft: 0,
        marginLeft: 0,
    }
});

class LeftMenu extends React.Component {
    state = {
        openMenus: [
            {ui:true},
            {tables:false},
            {pages:false}
        ]
    };
    render() {
        const classes = this.props.classes;
        return (
            <List className={classes.root} subheader={<ListSubheader>Mat Main Menu</ListSubheader>}>
                <Link to="/home" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        Home
                    </ListItem>
                </Link>
            </List>
        );
    }
}

LeftMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftMenu);
