import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import Tip from "./Tip";
import CalendarElement from "./Calendar";
import Categories from "./Categories";
import Carousel from "./Carousel";

const styles = theme => ({
  text: {
    marginLeft: 80,
    marginTop: 30,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#858585"
  },
  textBread: {
    marginLeft: 80,
    marginTop: 30,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: "12px",
    lineHeight: "24px",
    color: "#858585"
  },
  elements: {
    display: "flex"
  },
  tipsElement: {
    textAlign: "center",
    marginLeft: '150px',
    marginTop: 45,
    color:'black'
  }
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.category = "";
  }

  randCategory = () => {
    const min = 0;
    const max = this.props.categoriesChecked.length;
    this.category = Math.floor(Math.random() * (max - min) + min);
  };

  render() {
    const {
      classes,
      appCategories,
      appConventions,
      user,
      categoriesChecked
    } = this.props;
    this.randCategory();
    this.randCategory(); //The first call always brought me the same number for some reason.
    return (
      <div style={{ display: "flex", height: "100%" }}>
        <div>
          <div className={classes.textBread}>
            <p>{this.props.page}</p>
          </div>
          <div className={classes.text}>
            <p>{this.props.secondTitle}</p>
          </div>
          
          <Carousel
            appConventions={appConventions}
            user={user}
            category={categoriesChecked[this.category]}
            widthBox={675}
            countImage={2}
          />
          <Categories appCategories={appCategories} />
        </div>
        <div className={classes.tipsElement}>
          <Tip />
          <CalendarElement />
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);