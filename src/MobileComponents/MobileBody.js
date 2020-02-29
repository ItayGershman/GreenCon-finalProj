import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import 'typeface-poppins';
import Graphic from '../images/Graphic.png'
import Button from '@material-ui/core/Button';
import MobileConventionItem from './MobileConventionItem';
import axios from 'axios';


const styles = theme => ({
    body: {
        position: 'absolute',
        width: '335px',
        height: '330px',
        left: '20px',
        top: '134px',
    },
    bodyMessage: {
        height: '40px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        textAlign: 'center',
        color: '#1C1C1C',
        marginTop: '70px',
        marginLeft: '50px',
    },
    elementImage: {
        position: 'absolute',
        width: '119px',
        height: '128px',
        left: '128px',
        top: '160px',
    },
    button: {
        position: 'absolute',
        left: '35px',
        top: '350px',
        width: '300px',
        height: '50px',
        background: 'linear-gradient(8.32deg, #7EF192 0%, #2DC897 94.65%)',
        borderRadius: '25px',
        color: 'white',
    },
    conventionList:{
        overflow: 'scroll',
        height: '500px',
    },
});


class MobileBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked:false,
            myConventions:[]
        }
    }

    addConvention = () => {
        this.props.click(true)
    }

    
    getMyConventions = async () =>{
        const name = this.props.user.Ad;
        try{
            const result = await axios.get(`https://greencon.herokuapp.com/creator/conventions/${name}`);
            this.setState({myConventions:result.data})
          }catch(err){
            console.log(err)
          }
    }

    render() {
        const { classes } = this.props;
        this.getMyConventions();
        if (this.state.myConventions.length === 0){
        return (
            <div className={classes.body}>
                <div className={classes.bodyMessage}>You don’t have set any convention. <br></br>
                    Create one in seconds.</div>
                <img className={classes.elementImage} src={Graphic}></img>
                <Button
                    className={classes.button}
                    onClick={this.addConvention}
                >
                    Add Convention
                </Button>
            </div>
        );
        }else{
            return(
                <div className={classes.conventionList}>
                    {this.state.myConventions.map((convention)=>{
                        return <div><MobileConventionItem convention={convention}/></div>
                    })}
                </div>
            );
        }
    }
}

MobileBody.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MobileBody);