import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';


import DashboardIcon  from 'material-ui-icons/Dashboard';
import DesktopWindows  from 'material-ui-icons/DesktopWindows';
import VideoLabelIcon  from 'material-ui-icons/VideoLabel';
import SubtitlesIcon  from 'material-ui-icons/Subtitles';
import AssignmentReturned  from 'material-ui-icons/AssignmentReturned';
import TouchApp  from 'material-ui-icons/TouchApp';
import SpeakerNotes  from 'material-ui-icons/SpeakerNotes';
import ViewHeadline from 'material-ui-icons/ViewHeadline';
import ViewList from 'material-ui-icons/ViewList';
import Receipt from 'material-ui-icons/Receipt';
import Group from 'material-ui-icons/Group';
import AccountBox from 'material-ui-icons/AccountBox';
import ListIcon from 'material-ui-icons/List';
import Event from 'material-ui-icons/Event';
import Description from 'material-ui-icons/Description';
import InfoOutline from 'material-ui-icons/InfoOutline';
import HighlightOff from 'material-ui-icons/HighlightOff';
import History from 'material-ui-icons/History';
import InsertDriveFile from 'material-ui-icons/InsertDriveFile';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import Devices from 'material-ui-icons/Devices';
import FormatLineSpacing from 'material-ui-icons/FormatLineSpacing';
import FormatListNumbered from 'material-ui-icons/FormatListNumbered';


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

    handleClick = (menuSection) => {
        let openMenus = this.state.openMenus;
        openMenus[menuSection] = !openMenus[menuSection];
        this.setState({ openMenus: openMenus });
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
                        Dashboard
                    </ListItem>
                </Link>
                <ListItem button onClick={() => this.handleClick('ui')} >
                    <ListItemIcon>
                        <DesktopWindows />
                    </ListItemIcon>
                    <ListItemText inset primary="UI Kit" className={classes.MenuGroup} />
                    {this.state.openMenus.ui ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.openMenus.ui} transitionDuration="auto" unmountOnExit>
                    <Link to="/ui/basic" className={classes.link}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <VideoLabelIcon />
                            </ListItemIcon>
                            Basic Form
                        </ListItem>
                    </Link>
                    <Link to="/ui/advanced" className={classes.link}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <SubtitlesIcon />
                            </ListItemIcon>
                                Advanced Form Elements
                        </ListItem>
                    </Link>
                    <Link to="/ui/wizard" className={classes.link}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <AssignmentReturned />
                            </ListItemIcon>
                            Wizard Form
                        </ListItem>
                    </Link>
                    <Link to="/ui/buttons" className={classes.link}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <TouchApp />
                            </ListItemIcon>
                            Buttons
                        </ListItem>
                    </Link>
                    <Link to="/ui/dialogs" className={classes.link}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <SpeakerNotes />
                            </ListItemIcon>
                            Menus & Dialogs
                        </ListItem>
                    </Link>
                    <Link to="/ui/draggable-tree" className={classes.link}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <FormatListNumbered />
                            </ListItemIcon>
                            Draggable Tree
                        </ListItem>
                    </Link>
                    <Link to="/ui/sortable-tree" className={classes.link}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <FormatLineSpacing />
                            </ListItemIcon>
                            Sortable List
                        </ListItem>
                    </Link>
                </Collapse>
                <ListItem button onClick={() => this.handleClick("tables")}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Tables" className={classes.MenuGroup} />
                    {this.state.openMenus.tables ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.openMenus.tables} transitionDuration="auto" unmountOnExit>
                    <Link to="/tables/basic" className={classes.link}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <ViewHeadline />
                            </ListItemIcon>
                            Basic Table
                        </ListItem>
                    </Link>
                    <Link to="/tables/grid" className={classes.link}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <ViewList />
                            </ListItemIcon>
                                Data Grid
                        </ListItem>
                    </Link>
                </Collapse>
                <ListItem button onClick={() => this.handleClick("pages")}>
                    <ListItemIcon>
                        <Devices />
                    </ListItemIcon>
                    <ListItemText inset primary="Pages" className={classes.MenuGroup} />
                    {this.state.openMenus.pages ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.openMenus.pages} transitionDuration="auto" unmountOnExit>
                    <Link to="/landing" className={classes.link}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <Receipt />
                            </ListItemIcon>
                            Landing
                        </ListItem>
                    </Link>
                    <Link to="/contacts" className={classes.link}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            Contacts
                        </ListItem>
                    </Link>
                    <Link to="/contacts/5" className={classes.link}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <AccountBox />
                            </ListItemIcon>
                            Profile
                        </ListItem>
                    </Link>
                    <Link to="/projects" className={classes.link}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <ListIcon />
                            </ListItemIcon>
                            Projects
                        </ListItem>
                    </Link>
                    <Link to="/projects/1" className={classes.link}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <Event />
                            </ListItemIcon>
                            Project Details
                        </ListItem>
                    </Link>
                    <Link to="/article" className={classes.link}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <Description />
                            </ListItemIcon>
                            Article
                        </ListItem>
                    </Link>
                    <Link to="/404" className={classes.link}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <InfoOutline />
                            </ListItemIcon>
                            404
                        </ListItem>
                    </Link>
                    <Link to="/500" className={classes.link}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <HighlightOff />
                            </ListItemIcon>
                            500
                        </ListItem>
                    </Link>
                    <Link to="/forgot" className={classes.link}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <History />
                            </ListItemIcon>
                            Forgot Password
                        </ListItem>
                    </Link>
                    <Link to="/register" className={classes.link}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <InsertDriveFile />
                            </ListItemIcon>
                            Register
                        </ListItem>
                    </Link>
                </Collapse>
            </List>
        );
    }
}

LeftMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftMenu);
