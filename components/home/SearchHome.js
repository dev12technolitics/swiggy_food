import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import { MdKeyboardVoice } from "react-icons/md";

import { BiSearchAlt } from "react-icons/bi";
const styles = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginLeft: 8,
    flex: 1,
    color:"#fffffffc"
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
    
  },
};

function CustomizedInputBase(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={1}>
      <InputBase className={classes.input} placeholder="Search for restaurant, item or more" />

      <IconButton
        className={classes.iconButton}
        aria-label="Directions"
      >
        <MdKeyboardVoice className="pl-[3px]" color="#fffffffc"/>
        <Divider className={classes.divider} />
        <BiSearchAlt color="#fffffffc" />
      </IconButton>
    </Paper>
  );
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputBase);
