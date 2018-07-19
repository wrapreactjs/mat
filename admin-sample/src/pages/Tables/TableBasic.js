// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import data from './TableData';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    paper: {
        padding: 16,
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
});

function TableBasic(props) {
    const { classes } = props;
    document.title = "MAT - Table Basic";
    return (
        <div className={classes.root}>
            <Typography type="display1" align="left" gutterBottom>
                Data Grid
            </Typography>
            <Typography align="left" gutterBottom>More Info -
                You have 25 rows
            </Typography>
            <Paper className={classes.paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell numeric>Calories</TableCell>
                            <TableCell numeric>Fat (g)</TableCell>
                            <TableCell numeric>Carbs (g)</TableCell>
                            <TableCell numeric>Protein (g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((n,index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{n.name}</TableCell>
                                    <TableCell numeric>{n.balance}</TableCell>
                                    <TableCell numeric>{n.age}</TableCell>
                                    <TableCell numeric>{n.eyeColor}</TableCell>
                                    <TableCell numeric>{n.gender}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}

TableBasic.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableBasic);