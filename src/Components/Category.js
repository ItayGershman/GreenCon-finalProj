import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import 'typeface-poppins';


const styles = theme => ({
  element: {
    height: 200,
    width: 170,
    background:'#FFFFFF',
    marginLeft:50,
    marginTop:30
  },
  elementText: {
    background: 'linear-gradient(179.52deg, #74FF82 -13.56%, #1949F5 158.3%)',
    "-webkit-background-clip": 'text',
   "-webkit-text-fill-color": 'transparent',
    left: '415px',
    top: '496.08px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
  },
  elementImage: {
    width: 150,
    height: 150,
    marginTop:25
  }
});

class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes,name } = this.props;
    return (
        <div className={classes.element}>
            <div >
              <p className={classes.elementText}>{name}</p>
                <img style={{width:'170px'}}className={classes.elementImage } src={this.props.img}></img>
            </div>
            
        </div>
    );
  }
}

Category.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Category);
