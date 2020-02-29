import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import 'typeface-poppins';
import 'typeface-karla';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const styles = theme => ({
    itemBox: {
        overflowY: 'auto',
        position: 'relative',
        width: '335px',
        height: '123px',
        left: '7px',
        top: '50px',
        margin: '5%',
        background: 'linear-gradient(248.3deg, #8DDE95 30%, #3371CC 118.0%)',
        boxShadow: '0px 4px 4px rgba(59, 230, 107, 0.25)',
        borderRadius: '24px',
    },
    category: {
        position: 'absolute',
        width: '100%',
        height: '13px',
        left: '4.78%',
        right: '64.48%',
        top: 'calc(50% - 13px/2 - 41px)',
        fontFamily: 'Karla',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '11px',
        lineHeight: '13px',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        color: '#FFFFFF',
        mixBlendMode: 'normal',
        opacity: '0.8',
    },
    title: {
        position: 'absolute',
        height: '23px',
        width: '100%',
        left: '4.78%',
        right: '9.25%',
        top: 'calc(50% - 23px/2 - 15px)',
        fontFamily: 'Karla',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '23px',
        color: '#FFFFFF',
    },
    description: {
        position: 'absolute',
        height: '51px',
        left: '4.78%',
        right: '29.25%',
        top: 'calc(50% - 51px/2 + 30px)',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '10px',
        lineHeight: '15px',
        color: '#FFFFFF',
        mixBlendMode: 'normal',
        opacity: '0.8',
    },
    forward : {
        position: 'absolute',
        left: '92.01%',
        top: '52.85%',
        bottom: '30.33%',
        color: '#FFFFFF',
    },
});

class MobileConventionItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, convention } = this.props;
        return (
            <div className={classes.itemBox}>
                <div className={classes.category}>{convention.category}</div>
                <div className={classes.title}>{convention.title}</div>
                <div><ArrowForwardIosIcon className={classes.forward}/></div>
                <div className={classes.description}>{convention.description}</div>
            </div>
        );
    }
}

MobileConventionItem.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MobileConventionItem);