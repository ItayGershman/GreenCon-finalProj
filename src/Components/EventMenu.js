import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  box: {
    width: "88px",
    height: "55px",
    marginLeft: "164px",
    cursor: "pointer",
    zIndex: 1,
    position: "absolute"
  },
  attend: {
    position: "relative",
    width: "88px",
    height: "27px",
    background: "linear-gradient(179.44deg, #74FF82 -13.56%, #1949F5 158.3%)",
    cursor: "pointer"
  },
  hide: {
    position: "relative",
    width: "88px",
    height: "27px",
    background: "#FFFFFF",
    border: "1px solid #EFEFEF"
  },
  textAttend: {
    position: "relative",
    width: "37px",
    height: "15px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "10px",
    lineHeight: "15px",
    textAlign: "center",
    color: "#FFFFFF"
  },
  textHide: {
    position: "relative",
    width: "37px",
    height: "15px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "10px",
    lineHeight: "15px",
    textAlign: "center",
    color: "#858585"
  }
});

class EventMenu extends Component {
  constructor(props) {
    super(props);
  }

  attend = () => {
    this.props.attend(this.props.conID);
    this.props.handleOpen();
  };

  render() {
    const { classes, clicked } = this.props;
    return (
      <div className={classes.box}>
        <div className={classes.attend}>
          <div className={classes.textAttend}>
            <p onClick={this.attend}>ATTEND</p>
          </div>
        </div>
        <div className={classes.hide}>
          <div className={classes.textHide}>
            <p onClick={clicked}>HIDE</p>
          </div>
        </div>
      </div>
    );
  }
}

EventMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventMenu);
