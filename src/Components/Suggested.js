import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { FaEllipsisH } from "react-icons/fa";
import EventMenu from "./EventMenu";
import moment from "moment";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from "@material-ui/core";
import { categories } from "../Constants/Consts";

const styles = theme => ({
  box: {
    width: 313,
    height: 184,
    background: "#FFFFFF",
    display: "flex",
    position: "relative",
    marginBottom: 30
  },
  image: {
    width: 109,
    height: 114,
    marginLeft: 13,
    marginTop: 23
  },
  text: {
    marginLeft: 13
  },
  headline: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#858585",
    margin: 0
  },
  place: {
    color: "#1CD1A1",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "30px",
    margin: 0
  },
  lecturer: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#858585",
    margin: 0
  },
  dots: {
    marginLeft: 160,
    cursor: "pointer"
  }
});

class Suggested extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      dotsClicked: false,
      attend: false
    };
  }

  dots = () => {
    alert("dots");
  };

  dotsClicked = () => {
    this.setState({ dotsClicked: false });
  };

  attend = conID => {
    const params = {
      userID: this.props.user.Au
    };
    this.setState({ dotsClicked: false });
    axios
      .post(`https://greencon.herokuapp.com/user/attend/${conID}`, params)
      .then(res => {
        this.setState({ attend: true });
      })
      .catch(err => {
        console.error(err);
      });
  };

  handleOpen = () => {
    this.setState({ modal: true });
  };

  handleClose = () => {
    this.setState({ modal: false });
  };

  getConventionImg = category => {
    switch (category) {
      case categories[0].name:
        return categories[0].img;
      case categories[1].name:
        return categories[1].img;
      case categories[2].name:
        return categories[2].img;
      case categories[3].name:
        return categories[3].img;
      case categories[4].name:
        return categories[4].img;
      case categories[5].name:
        return categories[5].img;
      default:
        return "No img"
    }
  };

  render() {
    const { classes, convention, user } = this.props;
    return (
      <div className={classes.box}>
        <Dialog
          open={this.state.modal}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <p
            onClick={this.handleClose}
            style={{ paddingLeft: "95%", cursor: "pointer" }}
          >
            X
          </p>
          <DialogTitle id="alert-dialog-title">
            Your attendance was added
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div>{convention.title}</div>
              <div>{convention.category}</div>
              <div>
                {moment(convention.start).format("D.M.YYYY  ")}
                {moment(convention.start).format(" h:mm:ss")} -{" "}
                {moment(convention.end).format("h:mm:ss")}
              </div>
              <div>
                {convention.price === 0 ? "FREE" : `${convention.price}$`}
              </div>
              <div>{convention.description}</div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
        <div>
          <img className={classes.image} alt="" src={this.getConventionImg(this.props.convention.category)}></img>
        </div>
        <div className={classes.text}>
          <FaEllipsisH
            className={classes.dots}
            onClick={() => this.setState({ dotsClicked: true })}
          />
          {this.state.dotsClicked === true ? (
            <EventMenu
              clicked={this.dotsClicked}
              attend={this.attend}
              handleOpen={this.handleOpen}
              user={user}
              conID={convention._id}
            />
          ) : (
            ""
          )}
          <p className={classes.headline}>{convention.title}</p>
          <p className={classes.lecturer}>
            By {convention.lecturerProfile.firstName}{" "}
            {convention.lecturerProfile.lastName}
          </p>
          <div>
            <p className={classes.place}>
              {moment(convention.start).format("D.M.YYYY  ")}
              {moment(convention.start).format(" h:mm:ss")} -{" "}
              {moment(convention.end).format("h:mm:ss")}
            </p>
            <p className={classes.place}>{convention.location}</p>
          </div>
        </div>
      </div>
    );
  }
}

Suggested.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Suggested);
