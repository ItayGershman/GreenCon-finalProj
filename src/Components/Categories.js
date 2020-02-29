import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import Category from './Category';

const styles = theme => ({
  categories: {
    width: '679px',
    height: '529px',
    marginTop:'31px',
    marginLeft:'64px',
    background: "#FFFFFF",
    border: "2px solid #F0F0F0",
    borderRadius: "10px",
    display:'flex',
    flexWrap: 'wrap',
  },
  title:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#858585',
    marginLeft:78,
    marginTop:31
    
  }
});

class Categories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
        <div>
            <p className={classes.title}><b>Categories</b></p>
            <div className={classes.categories}>
              {this.props.appCategories.map(category =>{
                return (
                <Category key={category.name} name={category.name} img={category.img}/>
              )})}
            </div>
        </div>
    );
  }
}

Categories.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Categories);
