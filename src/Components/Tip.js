import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import idea from "../images/idea.png";
import "typeface-poppins";

const styles = theme => ({
  page: {
    background: "yellow",
    width: "100%"
  },
  tipTitle: {
    marginTop: 45,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#858585",
    marginLeft: '160px',
  },
  tipBox: {
    width: 312,
    background: "#FFFFFF",
    border: "2px solid #F0F0F0",
    borderRadius: "10px",
    marginLeft: '50px',
    
  },
  tipBoxText: {
    color: "#858585",
    height: "42px",
    left: "76.93%",
    right: "4.4%",
    top: "150px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "21px",
  },
  idea: {
    backgroundImage: `url('${idea}') `,
    width: "20px",
    height: "20px",
    top: "148px",
    left: "60"
  },
  tipHeadline: {
    width: "130px",
    textAlign:'center'
  }
});

class Tip extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{marginTop:-90}}>
        <div className={classes.tipTitle}>
          <div className={classes.idea}>
            <p className={classes.tipHeadline}>Tip of the day</p>
          </div>
        </div>
        <div className={classes.tipBox}>
          <div >
            <p>
              DONT FORGET TO CLOSE THE LIGHTs WHEN YOU LEAVE THE HOUSE
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Tip.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Tip);