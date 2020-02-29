import React, { Component } from "react";
import { client_id } from "../Constants/Consts";
import GoogleLoginButton from "react-google-login-button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import logo from '../images/logo.png';

const styles = theme => ({
  page: {
    display: "flex",
    position: 'absolute',
    top: '12%',
    left: '10%',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    background: '#FFFFFF',
    boxShadow: '0px 4px 14px rgba(23, 25, 50, 0.5)',
    borderRadius: '10px',
    width: '80%',
    height: '70%',
  },
  header: {
    width: '205px',
    height: '144px',
    position: 'absolute',
    backgroundImage: `url('${logo}') `,
    background: "no-repeat",
    border: "transparent",
    textAlign: 'center',
    left: '20%',
  },
  welcome: {
    fontSize: '20px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#858585',
    textAlign: 'center',
    position: 'absolute',
    top: '35%',
    left: '12%',
  },
  button: {
    left: '33%',
    position: 'absolute',
    top: '65%',
  },
});

class MobileLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.page}>
        <div className={classes.header}></div>
        <div className={classes.welcome}>Hello <span>👋🏼</span> <br></br> And welcome to GreenCon. <br></br>Please Sign In </div>
        {this.state.isLoggedIn === false ? (
          <div className={classes.button}>
            <GoogleLoginButton
              googleClientId={client_id}
              onLoginSuccess={googleUser => {
                this.setState({ user: googleUser.getBasicProfile() });
                this.setState({ isLoggedIn: true });
              }}
              onLoginFailure={() => console.log("Login failed")}
              width={140}
              height={40}
              longTitle={false}
              theme="dark"
            />
          </div>
        ) : (
            <div>
              {this.props.logged(true)}
              {this.props.user(this.state.user)}
              {this.setState({ isLoggedIn: false })}
            </div>
          )}
      </div>
    );
  }
}

MobileLogin.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MobileLogin);