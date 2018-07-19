import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import {findDOMNode} from 'react-dom';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import Badge from 'material-ui/Badge';
import MailIcon from 'material-ui-icons/Mail';
import FolderIcon from 'material-ui-icons/Folder';
import ListIcon from 'material-ui-icons/List';
import LightbulbOutline from 'material-ui-icons/LightbulbOutline';
import Popover from 'material-ui/Popover';
import List, {ListItem, ListItemText, ListItemSecondaryAction} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import LeftMenu  from './LeftMenu';
import ContactData from '../../pages/Contacts/ContactData';
import Card, { CardActions, CardContent } from 'material-ui/Card';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        width: '100%',
        height: 430,
        marginTop: theme.spacing.unit * 3,
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        width: '100%',
        marginLeft: -drawerWidth,
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            content: {
                height: 'calc(100% - 64px)',
                marginTop: 64,
            },
        },
    },
    contentShift: {
        marginLeft: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    input: {
        margin: theme.spacing.unit,
        flex: 1,
        marginTop: 0
    },

    badge: {
        margin: `0 ${theme.spacing.unit * 2}px`,
    },
    date: {
        fontSize: '11px',
        color: '#444',
        paddingRight: '10px'
    },
    listItem:{
        borderBottom: 'solid 1px #ccc'
    },
    listItemText: {
        paddingRight:'30px',
        fontSize: '10px'
    },
    button: {
        margin: theme.spacing.unit,
    },
    brandNameWrapper: {
        alignItems: 'center',
        display:'flex',
        flexDirection:'row',
        justifyContent:"left",
        textDecoration:'none'
    },
    brandText: {
        marginRight: 30,
        fontWeight: 200,
        textDecoration: 'none',
        color: theme.palette.text.secondary
    },
    siteLogo: {
        width: 45,
    },
    profileImage: {
        width: '100%',
        height: '100%',
    },
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
    textDisplayLink: {
        textDecoration: 'none',
    },
    logoutButton: {
        width: '100%'
    }
});

class Main extends React.Component {
    state = {
        openPopA: false,
        openPopB: false,
        openPopC: false,
        redirect: false,
        user: null,
    };
    componentDidMount(){
        let user = localStorage.getItem('user');
        this.setState({user});

        let openLeft = localStorage.getItem("openLeft");
        openLeft = openLeft && openLeft === "true";
        this.setState({open: openLeft });
    }

    handleDrawerOpen = () => {
        this.setState({open: true});
        localStorage.setItem("openLeft",true);
    };

    handleDrawerClose = () => {
        this.setState({open: false});
        localStorage.setItem("openLeft",false);
    };

    handleClickButton = (key) => {
        this.setState({
            [key]: true,
            anchorEl: findDOMNode(this.button),
        });
    };
    handleRequestClose = (key) => {
        this.setState({
            [key]: false,
        });
    };
    logout(){
        localStorage.removeItem("user");
        this.setState({redirect:true});
    }
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)} color="default">
                        <Toolbar disableGutters={!this.state.open}>
                            <IconButton
                                color="contrast"
                                aria-label="open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, this.state.open && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Input
                                placeholder="Placeholder"
                                className={classes.input}
                                inputProps={{
                                    'aria-label': 'Description',
                                }}
                            />
                            <IconButton
                                ref={node => {
                                    this.button = node;
                                }}
                                className={classes.button} aria-label="Add an alarm" onClick={() => this.handleClickButton("openPopA")}>
                                <Badge className={classes.badge} badgeContent={4} color="accent">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <Popover
                                open={this.state.openPopA}
                                anchorEl={this.state.anchorEl}
                                onRequestClose={() => this.handleRequestClose("openPopA")}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <List>
                                    <ListItem button className={classes.listItem}>
                                        <Avatar>
                                            <FolderIcon />
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
                                            <FolderIcon />
                                        </Avatar>
                                        <ListItemText primary="Nam odio sem" secondary="Jan 7, 2016"/>
                                    </ListItem>
                                    <ListItem button className={classes.listItem}>
                                        <Avatar>
                                            <FolderIcon />
                                        </Avatar>
                                        <ListItemText primary="Nullam efficitur neque" secondary="Jan 8, 2016"/>
                                    </ListItem>
                                    <ListItem button className={classes.listItem}>
                                        <Avatar>
                                            <FolderIcon />
                                        </Avatar>
                                        <ListItemText primary="Consectetur adipiscing elit" secondary="Jan 9, 2016"/>
                                    </ListItem>
                                </List>
                            </Popover>
                            {/* Second button */}
                            <IconButton
                                ref={node => {
                                    this.button = node;
                                }}
                                className={classes.button} aria-label="Add an alarm" onClick={() => this.handleClickButton("openPopB")}>
                                <Badge className={classes.badge} badgeContent={10} color="accent">
                                    <ListIcon />
                                </Badge>
                            </IconButton>
                            <Popover
                                open={this.state.openPopB}
                                anchorEl={this.state.anchorEl}
                                onRequestClose={() => this.handleRequestClose("openPopB")}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <List>
                                    {
                                        [0,1,2,3,4].map(
                                            (num) =>
                                                <ListItem button className={classes.listItem} key={num}>
                                                    <Avatar>
                                                        <img  alt="" src={"/mat/images/man"+num+"-big.jpeg"} className={classes.profileImage} />
                                                    </Avatar>
                                                    <ListItemText className={classes.listItemText}
                                                                  primary={ContactData[num].name + " started following " + ContactData[num].name}
                                                                  secondary={num + " days ago at 7:58 pm - 10.06.2014"}/>
                                                    <ListItemSecondaryAction className={classes.date}>
                                                        {num}{num*2}h ago
                                                    </ListItemSecondaryAction>
                                                </ListItem>
                                        )
                                    }

                                </List>
                            </Popover>
                            <IconButton className={classes.button} aria-label="Change theme" onClick={() => this.props.setTheme()}>
                                <LightbulbOutline />
                            </IconButton>
                            {/* Logout button */}
                            <Button color="contrast"
                                    ref={node => {
                                        this.button = node;
                                    }}
                                    onClick={() => this.handleClickButton("openPopC")}
                            >mat</Button>
                            <Popover
                                open={this.state.openPopC}
                                anchorEl={this.state.anchorEl}
                                onRequestClose={() => this.handleRequestClose("openPopC")}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <Card className={classes.card}>
                                    <CardContent>
                                        <ListItem button className={classes.listItem}>
                                            <Avatar>
                                                <img src={"/mat/images/man5-big.jpeg"} className={classes.profileImage}  alt="" />
                                            </Avatar>
                                            <ListItemText secondary="Lorem ipsum dolor sit amet" primary={this.state.user}/>
                                        </ListItem>
                                        <Link to={"/contacts/5"} className={classes.textDisplayLink}>
                                            <ListItem button className={classes.listItem}>

                                                    <ListItemText
                                                        className={classes.textDisplay}
                                                        primary="Profile"
                                                        secondary="Go here"/>

                                            </ListItem>
                                        </Link>

                                    </CardContent>
                                    <CardActions>
                                        {this.state.redirect && <Redirect to={{pathname: '/login'}}/>}
                                        <Button color="contrast" onClick={() => this.logout()}
                                                className={classes.logoutButton}
                                        >Logout</Button>
                                    </CardActions>
                                </Card>
                            </Popover>

                        </Toolbar>
                    </AppBar>
                    <Drawer
                        type="persistent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        open={this.state.open}
                    >
                        <div className={classes.drawerInner}>
                            <div className={classes.drawerHeader}>
                                <Link to="/" className={classes.brandNameWrapper}>
                                    <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                                        <img src="/mat/images/logo.svg" className={classes.siteLogo}  alt="" />
                                    </IconButton>
                                    <Typography type="title" color="inherit" className={classes.brandText} >
                                        ADMIN
                                    </Typography>
                                </Link>
                                <IconButton onClick={this.handleDrawerClose}>
                                    <ChevronLeftIcon />
                                </IconButton>
                            </div>
                            <Divider />
                            <LeftMenu />
                        </div>
                    </Drawer>
                    <main className={classNames(classes.content, this.state.open && classes.contentShift)}>
                        {this.props.children}
                    </main>
                </div>
            </div>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
