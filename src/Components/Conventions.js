import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import Tip from "./Tip";
import Carousel from "./Carousel";
import axios from "axios";

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
  elements: {
    display: "flex"
  },
  tipsElement: {
    textAlign: "center"
  },
  textBread: {
    marginLeft: 80,
    marginTop: 30,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: "12px",
    lineHeight: "24px",
    color: "#858585"
  }
});

class Conventions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basedCon: []
    };
    this.category = 0;
    this.basedConventions();
  }

  mostPopular = () => {
    return this.props.appConventions.sort((a, b) => {
      return b.attendance.length - a.attendance.length;
    });
  };

  lastSearched = () =>{
    return this.props.searchedCons;
  }

  randCategory = () => {
    const min = 0;
    const max = this.state.basedCon.length;
    this.category = Math.floor(Math.random() * (max - min) + min);
  };

  basedConventions = async () => {
    const email = this.props.user.Au;
    try {
      const results = await axios.get(
        `http://greencon.herokuapp.com/user/conventions/${email}`
      );
      const result = Array.from(
        results.data.reduce(
          (map, item) => (map.get(item.category).count++, map),
          new Map(
            results.data.map(con => [
              con.category,
              Object.assign({}, con, { count: 0 })
            ])
          )
        ),
        ([k, con]) => con
      )
        .sort((a, b) => b.count - a.count)
        .map(con => con.category)
        .slice(0, 3); //Top 3 categories user attended
      this.setState({ basedCon: result });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div style={{ display: "flex", height: "100%" }}>
        <div>
          <div className={classes.textBread}>
            <p>{this.props.page}</p>
          </div>
          <div className={classes.text}>
            <p>{this.props.secondTitle}</p>
          </div>
          <div style={{ display: "flex", width: "100%" }}>
            <div style={{ marginTop: 30 }}>
              <div style={{ display: "flex" }}>
                <Carousel
                  category=""
                  appConventions={this.lastSearched()}
                  user={this.props.user}
                  widthBox={675}
                  countImage={2}
                  style={{ display: "flex" }}
                />
                <Tip />
              </div>
              <div className={classes.text}>
                <p style={{ marginBottom: "30px" }}>{this.props.thirdTitle}</p>
              </div>
              <div>
                <Carousel
                  category=""
                  appConventions={this.mostPopular()}
                  user={this.props.user}
                  widthBox={1039}
                  countImage={3}
                />
              </div>
              <div className={classes.text}>
                <p style={{ marginBottom: "30px" }}>{this.props.fourthTitle}</p>
              </div>
              <div>
                {this.randCategory()}
                {this.randCategory()}
                <Carousel
                  category={this.props.appConventions[this.category].category}
                  appConventions={this.props.appConventions}
                  user={this.props.user}
                  widthBox={1039}
                  countImage={3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Conventions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Conventions);
