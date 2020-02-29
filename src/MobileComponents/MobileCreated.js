import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import 'typeface-poppins';
import { Button } from "@material-ui/core";
import PointsConvention from '../images/PointsConvention.png'

const styles = theme => ({
    root: {
        height: '100%',
    },
    title: {
        position: 'absolute',
        left: '85px',
        top: '69px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '22px',
        lineHeight: '24px',
        textAlign: 'center',
        color: 'black',
    },
    details: {
        position: 'absolute',
        width: '61px',
        height: '24px',
        left: '170px',
        top: '111px',
        background: 'linear-gradient(8.32deg, #7EF192 0%, #2DC897 94.65%)',
        borderRadius: '100px',
    },
    detailsText: {
        position: 'absolute',
        width: '34px',
        height: '15px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '10px',
        lineHeight: '15px',
        color: 'white',
        marginTop: '4px',
        marginLeft: '6px',
    },
    conventionInfo: {
        position: 'absolute',
        width: '176px',
        height: '9px',
        left: '90px',
        top: '144px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '10px',
        lineHeight: '15px',
        color: '#858585',
    },
    conventionTitle: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '10px',
        lineHeight: '15px',
        color: '#858585',
    },
    pointsEarned: {
        position: 'absolute',
        width: '277px',
        height: '174.41px',
        left: '65px',
        top: '298px',
        backgroundImage: `url('${PointsConvention}') `,
        background: "no-repeat",
        border: "transparent",
    },
    doneButton: {
        top: '600px',
        position: 'absolute',
        left: '55px',
        width: '300px',
        height: '50px',
        background: 'linear-gradient(8.32deg, #7EF192 0%, #2DC897 94.65%)',
        borderRadius: '25px',
        color: 'white',
    },
});


class MobileBody extends Component {
    constructor(props) {
        super(props);
    }

    myConventionsList = () =>{
        this.props.click(false);
        this.props.doReRender(false);
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.title}>
                    Convention Created!
                </div>
                <div className={classes.details}> <p className={classes.detailsText}>Details</p></div>
                <div className={classes.conventionInfo}>
                    <p className={classes.conventionTitle}> {this.props.newConvention.title}</p>
                    <p> {this.props.newConvention.category}</p>
                    <p> {this.props.newConvention.dbDate}</p>
                    <p> {this.props.newConvention.location}</p>
                    <p> {this.props.newConvention.price}</p>
                    <p> {this.props.newConvention.description}</p>
                </div>
                <div className={classes.pointsEarned}></div>
                <div>
                    <Button
                        className={classes.doneButton}
                        type="submit"
                        onClick= {this.myConventionsList}
                    >
                        DONE
                    </Button>
                </div>
            </div>
        );
    }
}

MobileBody.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MobileBody);
