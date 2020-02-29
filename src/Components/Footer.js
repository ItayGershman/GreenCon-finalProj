import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import 'typeface-poppins';

const styles = theme => ({
  background: {
    background: '#A9A9A9',
    border: '2px solid #F7F7F7',
    textAlign: 'center',
    height: 113,
    marginTop: '5%',
  },
  text: {
    paddingTop: '40px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 100,
    lineHeight: '21px',
    fontSize: '16px',
    color: 'white',
    textTransform: 'uppercase',
  }
});

class Footer extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <p className={classes.text}>© All rights reserved to Aviel Dagan & Itay Gershman</p>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);