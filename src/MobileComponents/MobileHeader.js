import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import 'typeface-poppins';
import Avatar from "../images/avatar.jpg";
import {
    FaPlus
} from "react-icons/fa";

const styles = theme => ({
    myConventios: {
        position: 'absolute',
        height: '20px',
        left: '31.64%',
        right: '31.94%',
        top: '55px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#1C1C1C',
    },
    avatar: {
        verticalAlign: 'middle',
        width: 50,
        height: 50,
        borderRadius: '50%',
        marginTop: 30,
        marginLeft: 22,
        cursor: 'pointer'
    },
    icons: {
        position: 'relative',
        width: '16px',
        height: '16px',
        left: '380px',
        bottom: '25px',
    },
});

class MobileHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.page}>
                <img src={Avatar} alt="Avatar" className={classes.avatar} onClick={this.imagePress}></img>
                <p className={classes.name} onClick={this.imagePress}></p>
                <div className={classes.myConventios}>My Conventions</div>
                <FaPlus className={classes.icons} />
            </div>
        );
    }
}

MobileHeader.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MobileHeader);
