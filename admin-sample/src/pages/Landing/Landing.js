import React  from 'react';
import { Link } from 'react-router-dom';
import ReactDOM  from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Card, { CardContent } from 'material-ui/Card';
import Map from '../Dashboardv1/Map';
import Carousel from 'nuka-carousel';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Grow from 'material-ui/transitions/Grow';
import { Manager, Target, Popper } from 'react-popper';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';


const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        width: '100%',
        overflowX: 'hidden'
    },
    brandNameWrapper: {
        alignItems: 'center',
        display:'flex',
        flexDirection:'row',
        justifyContent:"left",
        textDecoration:'none'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    brandText: {
        marginRight: 30,
        fontWeight: 200,
        textDecoration: 'none',
        color: theme.palette.text.secondary
    },
    slide1: {
        backgroundImage: "url(/mat/images/slide1.jpeg)",
        width: "100%",
        height: 600
    },slide2: {
        backgroundImage: "url(/mat/images/slide2.jpeg)",
        width: "100%",
        height: 600
    },
    slide3: {
        backgroundImage: "url(/mat/images/slide3.jpeg)",
        width: "100%",
        height: 600
    },
    slide4: {
        backgroundImage: "url(/mat/images/slide4.jpeg)",
        width: "100%",
        height: 470,
        marginTop: 50,
    },
    slide5: {
        backgroundImage: "url(/mat/images/slide5.jpeg)",
        width: "100%",
        height: 530,
        marginTop: 50,
    },
    infoContainer:{
        flexFlow: "column",
        textAlign: "center",
        paddingTop: 100,
    },
    infoContent: {
        lineHeight: 1.5,
        width:800,
    },
    landingLogo: {
        width:40,
    },
    fixedWithContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"center",
        width:'100%'

    },
    fixedWidthContent: {
        alignItems: 'center',
        width:1024,
        display:'flex',
        flexDirection:'row',
        justifyContent:"left"
    },
    landingImage: {
        marginTop: 40,
        width: 100,
    },
    darkHead: {
        color: '#444',
        fontWeight: 200,
        textAlign: 'center'
    },
    darkContent: {
        color: '#888',
        lineHeight: 2,
        textAlign: 'center'
    },
    subItemContainer: {
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 10
    },
    avatar: {
        width:100,
        height: 100
    },
    footer: {
        height: 50,
        color: theme.palette.text.secondary,
        paddingTop: 40
    },
    cardImage: {
        width: '100%'
    },
    textField: {
        width: '100%',
    },


});
class Landing extends React.Component{
    constructor(props){
        super(props);
        this.location = 0;
        this.state = {
            activeLink : 'features',
            description: '',
            open: false,
        }
    }
    componentDidMount(){
        let offset = 400;
        this.locations = [
            {item: 'top', locationY: 0 },
            {item: 'features', locationY: ReactDOM.findDOMNode(this.refs["features"]).offsetTop + offset},
            {item: 'where', locationY: ReactDOM.findDOMNode(this.refs["where"]).offsetTop + offset},
            {item: 'location', locationY: ReactDOM.findDOMNode(this.refs["location"]).offsetTop + offset},
            {item: 'people',  locationY: ReactDOM.findDOMNode(this.refs["people"]).offsetTop + offset},
            {item: 'contact', locationY: ReactDOM.findDOMNode(this.refs["contact"]).offsetTop + offset},
        ];
        const locations = this.locations;
        document.getElementById('root').firstChild.addEventListener("scroll",() => {
            let location = document.getElementById('root').firstChild.scrollTop;
            if( location < locations[2].locationY ){
                if( this.state.activeLink !== "features"){
                    this.setState({activeLink: "features"});
                }
            } else if( location >= locations[2].locationY  && location < locations[3].locationY ){
                if( this.state.activeLink !== "where"){
                    this.setState({activeLink: "where"});
                }
            } else if( location >= locations[3].locationY && location < locations[4].locationY ){
                if( this.state.activeLink !== "location"){
                    this.setState({activeLink: "location"});
                }
            } else if( location >=  locations[4].locationY && location <  locations[5].locationY ){
                if( this.state.activeLink !== "people"){
                    this.setState({activeLink: "people"});
                }
            }else if( location >  locations[5].locationY ){
                if( this.state.activeLink !== "contact"){
                    this.setState({activeLink: "contact"});
                }
            }

        });

        document.title = "MAT - React Material Design Admin Template";
    }
    goto(item){
        let location = 0;
        const locations = this.locations;
        if (item === "where"){
            location =  locations[2].locationY+1;
        } else if (item === "location"){
            location =  locations[3].locationY+1;
        }else if (item === "people"){
            location =  locations[4].locationY+1;
        }else if (item === "contact"){
            location =  locations[5].locationY+1;
        }
        document.getElementById('root').firstChild.scrollTop = location;
        this.setState({activeLink: item});
    }
    colorLink(item){
        if(item === this.state.activeLink ){
            return "accent";
        } else{
            return "primary";
        }
    }
    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };
    handleClick = () => {
        this.setState({ open: true });
    };

    handleRequestClose (item){
        this.setState({ open: false });
        if( item !== "" ){
            this.goto(item);
        }
    };
    render(){
        const { classes } = this.props;
        const { open } = this.state;
        return(
            <div className={classes.root} ref="top">
                <AppBar position="fixed">
                    <Toolbar className={classes.fixedWithContainer}>
                        <div className={classes.fixedWidthContent}>
                            <Link to="/" className={classes.brandNameWrapper}>
                            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                                <img src="/mat/images/logo.svg" className={classes.landingLogo} alt="" />
                            </IconButton>
                            <Typography type="title" color="inherit" className={classes.brandText} >
                                MAT ADMIN TEMPLATE
                            </Typography>
                            </Link>
                            <Manager className="landingMenu">
                                <Target>
                                    <IconButton
                                        className={classes.menuButton}
                                        color="contrast"
                                        aria-label="Menu"
                                        aria-owns={this.state.open ? 'menu-list' : null}
                                        aria-haspopup="true"
                                        onClick={this.handleClick}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Target>
                                <Popper placement="bottom-start" eventsEnabled={open}>
                                    <ClickAwayListener onClickAway={() => this.handleRequestClose("")}>
                                        <Grow in={open} id="menu-list" style={{ transformOrigin: '0 0 0' }}>
                                            <Paper>
                                                <MenuList role="menu">
                                                    <MenuItem onClick={() => this.handleRequestClose("features")}>FEATURES</MenuItem>
                                                    <MenuItem onClick={() => this.handleRequestClose("where")}>WHERE WE ARE</MenuItem>
                                                    <MenuItem onClick={() => this.handleRequestClose("location")}>LOCATION</MenuItem>
                                                    <MenuItem onClick={() => this.handleRequestClose("people")}>PEOPLE</MenuItem>
                                                    <MenuItem onClick={() => this.handleRequestClose("contact")}>CONTACT</MenuItem>
                                                </MenuList>
                                            </Paper>
                                        </Grow>
                                    </ClickAwayListener>
                                </Popper>
                            </Manager>
                            <div className="landingButtons">
                            <Button raised
                                    color={this.colorLink("features")}
                                    onClick={() => this.goto('features')}>
                                FEATURES
                            </Button>
                            <Button raised
                                    className="landingButtons"
                                    color={this.colorLink("where")}
                                    onClick={() => this.goto('where')}>
                                WHERE WE ARE
                            </Button>
                            <Button raised
                                    className="landingButtons"
                                    color={this.colorLink("location")}
                                    onClick={() => this.goto('location')}>
                                LOCATION
                            </Button>
                            <Button raised
                                    className="landingButtons"
                                    color={this.colorLink("people")}
                                    onClick={() => this.goto('people')}>
                                PEOPLE
                            </Button>
                            <Button raised
                                    className="landingButtons"
                                    color={this.colorLink("contact")}
                                    onClick={() => this.goto('contact')}>
                                CONTACT
                            </Button>
                            </div>
                        </div>

                    </Toolbar>
                </AppBar>
                <div style={{width: '100%', margin: 'auto', overflowX:'hidden'}}>
                    <Carousel autoplay={true}>
                        <div className={classes.slide1}>
                            <Grid container spacing={8} className={classes.infoContainer}
                                  justify="center" alignItems="center">
                                <Typography type="display4" gutterBottom>
                                    Lorem ipsum dolor sit amet
                                </Typography>
                                <Typography type="body1" gutterBottom className={classes.infoContent}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu blandit magna,
                                    vel mattis eros. Integer malesuada hendrerit posuere. In vitae mauris elementum,
                                    vestibulum nunc non, gravida risus. Ut pulvinar ullamcorper aliquet. Praesent eros
                                    lectus, rhoncus ac feugiat in, aliquam vitae nulla. Aliquam eleifend eleifend elit,
                                    et laoreet sem cursus vel. Maecenas vel volutpat lectus.
                                </Typography>
                                <Button raised color="primary" className={classes.button}>
                                    MORE
                                </Button>
                            </Grid>
                        </div>
                        <div className={classes.slide2}>
                            <Grid container spacing={8} className={classes.infoContainer}
                                  justify="center" alignItems="center">
                                <Typography type="display4" gutterBottom>
                                    Integer malesuada hendrerit
                                </Typography>
                                <Typography type="body1" gutterBottom className={classes.infoContent}>
                                    Quisque accumsan malesuada erat vel ultricies. Donec nec consectetur eros.
                                    Aliquam posuere facilisis quam ac ultrices. Donec sed faucibus enim,
                                    ac scelerisque magna. Vestibulum mi lorem, viverra venenatis elit nec,
                                    ullamcorper aliquet metus. Sed id dolor purus. Sed risus nunc, suscipit vitae nisi a,
                                    viverra molestie lectus. Proin nec placerat ex, placerat ornare sapien. Morbi interdum.
                                </Typography>
                                <Button raised color="primary" className={classes.button}>
                                    MORE
                                </Button>
                            </Grid>
                        </div>
                        <div className={classes.slide3}>
                            <Grid container spacing={8} className={classes.infoContainer}
                                  justify="center" alignItems="center">
                                <Typography type="display4" gutterBottom>
                                    Lorem ipsum dolor sit amet
                                </Typography>
                                <Typography type="body1" gutterBottom className={classes.infoContent}>
                                    turpis non posuere gravida, nisl turpis rhoncus ex, vitae rutrum metus ligula quis ex.
                                    Nam sodales, augue nec rutrum cursus, arcu risus maximus tellus, at semper justo nulla
                                    a elit. Cras pulvinar massa feugiat nisi vehicula pretium. Aliquam porta volutpat ante
                                    id efficitur. Vestibulum augue leo, venenatis eget lobortis ut, vulputate eget enim.
                                    Nam justo urna, volutpat sit amet dui congue, blandit malesuada metus. Etiam magna erat,
                                    hendrerit quis dui malesuada, scelerisque auctor lorem.
                                </Typography>
                                <Button raised color="primary" className={classes.button}>
                                    MORE
                                </Button>
                            </Grid>
                        </div>
                    </Carousel>
                </div>
                <div className={classes.fixedWithContainer} ref="features">
                    <div className={classes.fixedWidthContent}>
                        <Grid container spacing={40}>
                            <Grid item xs={4} className={classes.subItemContainer}>
                                <img src="/mat/images/landingWorldwide.svg" className={classes.landingImage}  alt="" />
                                <Typography type="display1" color="primary" className={classes.darkHead}>Maecenas bibendum</Typography>
                                <Typography component="p" color="primary" className={classes.darkContent}>
                                    Maecenas bibendum elit sit amet nunc ullamcorper, non pulvinar ante convallis.
                                    In hac habitasse platea dictumst. Vivamus ultrices tincidunt neque,
                                </Typography>
                                <Button raised className={classes.button}>
                                    MORE
                                </Button>
                            </Grid>
                            <Grid item xs={4} className={classes.subItemContainer}>
                                <img src="/mat/images/landingChurch.svg" className={classes.landingImage}  alt="" />
                                <Typography type="display1" color="primary" className={classes.darkHead}>In hac habitasse</Typography>
                                <Typography component="p" color="primary" className={classes.darkContent}>
                                    Maecenas bibendum elit sit amet nunc ullamcorper, non pulvinar ante convallis.
                                    In hac habitasse platea dictumst. Vivamus ultrices tincidunt neque,
                                </Typography>
                                <Button raised className={classes.button}>
                                    MORE
                                </Button>
                            </Grid>
                            <Grid item xs={4} className={classes.subItemContainer}>
                                <img src="/mat/images/landingGps.svg" className={classes.landingImage}  alt="" />
                                <Typography type="display1" color="primary" className={classes.darkHead}>Vivamus ultrices</Typography>
                                <Typography component="p" color="primary" className={classes.darkContent}>
                                    Maecenas bibendum elit sit amet nunc ullamcorper, non pulvinar ante convallis.
                                    In hac habitasse platea dictumst. Vivamus ultrices tincidunt neque,
                                </Typography>
                                <Button raised className={classes.button}>
                                    MORE
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className={classes.slide4} ref="where">
                    <Grid container spacing={8} className={classes.infoContainer}
                          justify="center" alignItems="center">
                        <Typography type="display1" gutterBottom >
                            Lorem ipsum dolor sit amet
                        </Typography>
                        <Avatar alt="Remy Sharp" src="/mat/images/man5-big.jpeg" className={classes.avatar} />
                        <Typography type="body1" gutterBottom className={classes.infoContent}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu blandit magna,
                            vel mattis eros. Integer malesuada hendrerit posuere. In vitae mauris elementum,
                            vestibulum nunc non, gravida risus. Ut pulvinar ullamcorper aliquet. Praesent eros
                            lectus, rhoncus ac feugiat in, aliquam vitae nulla. Aliquam eleifend eleifend elit,
                            et laoreet sem cursus vel. Maecenas vel volutpat lectus.
                        </Typography>
                        <Button raised color="primary" className={classes.button}>
                            MORE
                        </Button>
                    </Grid>
                </div>
                <Map ref="location" />
                <div className={classes.fixedWithContainer} ref="people">
                    <div className={classes.fixedWidthContent}>
                        <Grid container spacing={40}>
                            <Grid item lg={4} className={classes.subItemContainer}>
                                <Card className={classes.card}>
                                    <img src="/mat/images/man5-big.jpeg" className={classes.cardImage}  alt=""  />

                                    <CardContent>
                                        <Typography type="headline" component="h2">
                                            Ut eget semper
                                        </Typography>
                                        <Typography component="p">
                                            Ut eget semper ex, vel elementum justo. Vivamus nec est sit amet nulla egestas
                                            dapibus. Vestibulum posuere massa nibh, sed malesuada urna luctus quis.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item lg={4} className={classes.subItemContainer}>
                                <Card className={classes.card}>
                                    <img src="/mat/images/man4-big.jpeg" className={classes.cardImage}  alt="" />

                                    <CardContent>
                                        <Typography type="headline" component="h2">
                                            Ut eget semper
                                        </Typography>
                                        <Typography component="p">
                                            Ut eget semper ex, vel elementum justo. Vivamus nec est sit amet nulla egestas
                                            dapibus. Vestibulum posuere massa nibh, sed malesuada urna luctus quis.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item lg={4} className={classes.subItemContainer}>
                                <Card className={classes.card}>
                                    <img src="/mat/images/man3-big.jpeg" className={classes.cardImage}  alt="" />

                                    <CardContent>
                                        <Typography type="headline" component="h2">
                                            Ut eget semper
                                        </Typography>
                                        <Typography component="p">
                                            Ut eget semper ex, vel elementum justo. Vivamus nec est sit amet nulla egestas
                                            dapibus. Vestibulum posuere massa nibh, sed malesuada urna luctus quis.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className={classes.slide5} ref="contact">
                    <Grid container spacing={8} className={classes.infoContainer}
                          justify="center" alignItems="center">
                        <Paper style={{backgroundColor:'rgba(19, 27, 22, 0.65)',padding: 50,textAlign:'center'}}>
                        <Typography type="display1" gutterBottom >
                            Contact Us
                        </Typography>
                        <Typography type="body1" gutterBottom className={classes.infoContent}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu blandit magna,
                            vel mattis eros. Integer malesuada hendrerit posuere. In vitae mauris elementum,
                            vestibulum nunc non, gravida risus. Ut pulvinar ullamcorper aliquet. Praesent eros
                            lectus, rhoncus ac feugiat in, aliquam vitae nulla. Aliquam eleifend eleifend elit,
                            et laoreet sem cursus vel. Maecenas vel volutpat lectus.
                        </Typography>
                                <TextField
                                    multiline
                                    rowsMax="4"
                                    id="message"
                                    label="Message"
                                    className={classes.textField}
                                    value={this.state.message}
                                    margin="normal"
                                    onChange={this.handleChange('message')}
                                />
                        <Button raised color="primary" className={classes.button}>
                            SEND MESSAGE
                        </Button>
                        </Paper>
                    </Grid>
                </div>
                <Paper className={classes.footer}>
                    <div className={classes.fixedWithContainer}>
                        <div className={classes.fixedWidthContent}>
                            @Your Company
                        </div>
                    </div>
                </Paper>
                <span ref="bottom"></span>
            </div>
        )
    }
}


Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);