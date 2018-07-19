import React, { Component } from 'react'
import Container from './Container'
import PropTypes from 'prop-types';


//Material-ui imports
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

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
    link: {
        color: theme.palette.text.secondary
    },
});

class SortableSimple extends Component {
    componentDidMount() {
        document.title = "MAT - Sortable List";
    }
	render() {
        const classes = this.props.classes;
		return (
		<div className={classes.root}>
			<Grid container spacing={8}>
				<Grid item xs={12} md={12}>
					<Paper className={classes.paper}>
						<Typography type="display1" align="left" gutterBottom>
							Drag and Drop Sortable List
						</Typography>
						<Typography align="left" gutterBottom>More Info -
							<a href="https://github.com/react-dnd/react-dnd/" className={classes.link}>
								https://github.com/react-dnd/react-dnd/
							</a>
						</Typography>
						<Container />
					</Paper>
				</Grid>
			</Grid>
		</div>
		)
	}
}

SortableSimple.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SortableSimple);
