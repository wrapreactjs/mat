import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
const colors = ["#7986CB","#64B5F6","#9575CD","#E57373","#F06292","#BA68C8"];
const styles = theme => ({
  Number: {
    width:"20px",
    height:"20px",
    color: "#fff",
    fontSize: "11px",
    lineHeight: "20px",
      textAlign: 'center',
  },
});


function ListNumber(props) {
    const classes = props.classes;
    return (<div
      className={classes.Number}
      style={{background: colors[Math.floor((Math.random() * 5) )]}}
      >{props.text}</div>)
}

ListNumber.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListNumber);
