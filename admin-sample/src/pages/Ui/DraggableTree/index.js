import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
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
        minHeight: 1500,
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
class Tree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            treeData: [
                {
                    title: 'Finance', children: [
                    {title: 'Alabama', children: [{title: 'Sophia'},{title: 'Jacob'},{title: 'James'}]},
                    {title: 'Ohio', children: [{title: 'Addison'},{title: 'Benjamin'},{title: 'Ethan'}]},
                    {title: 'Chicago', children: [{title: 'Hailey'},{title: 'Charlotte'},{title: 'Claire'}]},
                ]
                },
                {
                    title: 'Engineering', children: [
                    {title: 'Alabama', children: [{title: 'Sophia'},{title: 'Jacob'},{title: 'James'}]},
                    {title: 'Ohio', children: [{title: 'Addison'},{title: 'Benjamin'},{title: 'Ethan'}]},
                    {title: 'Chicago', children: [{title: 'Hailey'},{title: 'Charlotte'},{title: 'Claire'}]},
                ]
                },
                {
                    title: 'Documentation', children: [
                    {title: 'Alabama', children: [{title: 'Sophia'}, {title: 'Jacob'}, {title: 'James'}]},
                    {title: 'Ohio', children: [{title: 'Addison'}, {title: 'Benjamin'}, {title: 'Ethan'}]},
                    {title: 'Chicago', children: [{title: 'Hailey'}, {title: 'Charlotte'}, {title: 'Claire'}]},
                ]
                },
                {
                    title: 'DevOps', children: [
                    {title: 'Alabama', children: [{title: 'Sophia'},{title: 'Jacob'},{title: 'James'}]},
                    {title: 'Ohio', children: [{title: 'Addison'},{title: 'Benjamin'},{title: 'Ethan'}]},
                    {title: 'Chicago', children: [{title: 'Hailey'},{title: 'Charlotte'},{title: 'Claire'}]},
                ]
                }],
        };
    }
    componentDidMount() {
        document.title = "MAT - Draggable Tree";
    }
    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={12}>
                        <Paper className={classes.paper}>
                            <Typography type="display1" align="left" gutterBottom>
                                Sortable Tree
                            </Typography>
                            <Typography align="left" gutterBottom>More Info -
                                <a href="https://github.com/fritz-c/react-sortable-tree" className={classes.link}>
                                    https://github.com/fritz-c/react-sortable-tree
                                </a>
                            </Typography>
                            <div style={{ height: 800 }}>
                                  <SortableTree
                                      treeData={this.state.treeData}
                                      onChange={treeData => this.setState({ treeData })}
                                  />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Tree.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tree);