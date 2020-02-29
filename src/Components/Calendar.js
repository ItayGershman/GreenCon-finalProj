import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import Calendar from "react-calendar-material";

const styles = theme => ({
  box: {
    width: 420,
    height: 626,
    marginTop: 20,
    background: "#FFFFFF",
    borderRadius: "10px",
    '& .day-headers': {
      background: 'linear-gradient(179.52deg, #74FF82 -13.56%, #1949F5 158.3%)',
      "-webkit-background-clip": 'text',
      "-webkit-text-fill-color": 'transparent',
      color: 'green',
    },
    '& .flex-2':{
      background: 'linear-gradient(179.52deg, #74FF82 -13.56%, #1949F5 158.3%)',
      color: 'white',
    },
    '& .selected':{
      color: 'white',
      zIndex:1
    }
  },
  calendarStyle: {

  }
});

class CalendarElement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.box}>
        <Calendar className={classes.calendarStyle}
          accentColor={"rgb(0, 193, 166)"}
          orientation={"flex-col"}
          showHeader={true}
          onDatePicked={d => {
            return (<div style={{color:'white'}}>d</div>)
          }}
        />
      </div>
    );
  }
}

CalendarElement.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CalendarElement);
