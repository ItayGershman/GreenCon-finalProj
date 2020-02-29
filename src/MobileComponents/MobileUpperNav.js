import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import 'typeface-poppins';

const styles = theme => ({
    nav: {
        position: 'absolute',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '14px',
        color: '#606060',
    },
    schedule: {
        position: 'relative',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        left: '20px',
        fontSize: '12px',
        lineHeight: '14px',
        color: '#606060',
    },
    conventions: {
        position: 'relative',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        left: '170px',
        bottom: '15px',
        lineHeight: '14px',
        color: '#31D19E',
    },
    recycle: {
        position: 'relative',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        left: '350px',
        bottom: '30px',
        fontSize: '12px',
        lineHeight: '14px',
        color: '#606060',
    },
});

class MobileUpperNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.nav}>
                <div className={classes.schedule}>Schedule</div>
                <div className={classes.conventions}>Conventions</div>
                <div className={classes.recycle}>Recycle</div>
            </div>

        );
    }
}

MobileUpperNav.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MobileUpperNav);