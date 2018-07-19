import React from 'react'
import PropTypes from 'prop-types';

//Material-ui imports
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { Alert } from 'reactstrap';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 10,
    },
    paper: {
        padding: 16,
        textAlign: 'left',
        color: theme.palette.text.secondary,
    }
});
class Home extends React.Component {
    componentDidMount() {
        document.title = "MAT - Home";
    };
    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={12}>
                        <Paper className={classes.paper}>
                            <Alert color="success">
                                <p>You can use the bootstrap components inside here.</p>
                                <a href="http://reactstrap.github.io/components/alerts/">http://reactstrap.github.io/components/alerts/</a>

                            </Alert>
                            <div>
                                <Button color="primary">primary</Button>{' '}
                                <Button color="secondary">secondary</Button>{' '}
                                <Button color="success">success</Button>{' '}
                                <Button color="info">info</Button>{' '}
                                <Button color="warning">warning</Button>{' '}
                                <Button color="danger">danger</Button>{' '}
                                <Button color="link">link</Button>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );

    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
