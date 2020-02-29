import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { List, ListItem } from "@material-ui/core";
import {
  FaHome,
  FaRegCalendarCheck,
  FaRecycle,
  FaChalkboardTeacher,
  FaChartBar
} from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Conventions from "./Conventions";
import CalendarP from "./CalendarPage2";
import CalendarElement from "./Calendar";
import CreateIcon from "@material-ui/icons/Create";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const styles = theme => ({
  list: {
    background: "#FFFFFF",
    maxHeight: "100%",
    width: 290,
    border: "2px solid #F0F0F0",
    margin: 0,
    paddingTop: 59
  },
  fields: {
    paddingTop: 0,
    marginBottom: 40
  },
  icons: {
    marginRight: 20,
    marginLeft: 54,
    color: "#00AB66"
  },
  exitIcon: {
    marginRight: 20,
    marginLeft: 54,
    color: "#858585"
  },
  space: {
    position: "relative",
    height: "100px"
  },
  notify: {
    background: "linear-gradient(179.64deg, #74FF82 -13.56%, #1949F5 158.3%)",
    color: "transparent",
    borderRadius: "50%"
  },
  links: {
    textDecoration: "none",
    flex: "1 1 auto",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "18px",
    color: "#858585"
  }
});
class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes,
      appCategories,
      appConventions,
      user,
      categoriesChecked,
      searchedCons
    } = this.props;
    return (
      <Router style={{ display: "flex" }}>
        <List className={classes.list} component="nav">
          <ListItem button className={classes.fields}>
            <FaHome className={classes.icons} />

            <Link to="/" className={classes.links}>
              Home
            </Link>
          </ListItem>
          <ListItem button className={classes.fields}>
            <FaChalkboardTeacher className={classes.icons} />
            <Link to="/Conventions" className={classes.links}>
              Conventions
            </Link>
          </ListItem>
          <ListItem button className={classes.fields}>
            <FaRegCalendarCheck className={classes.icons} />
            <Link to="/Schedule" className={classes.links}>
              Schedule
            </Link>
          </ListItem>
          <ListItem button className={classes.fields}>
            <CreateIcon className={classes.icons} />
            <Link to="/CreateConvention" className={classes.links}>
              Create Convention
            </Link>
          </ListItem>
          <ListItem button className={classes.fields}>
            <FaRecycle className={classes.icons} />
            <Link to="/RecycleFacilities" className={classes.links}>
              Recycle Facilities
            </Link>
          </ListItem>
          <ListItem button className={classes.fields}>
            <FaChartBar className={classes.icons} />
            <Link to="/Statistic" className={classes.links}>
              Statistic
            </Link>
          </ListItem>
          <ListItem button className={classes.fields}>
            <SettingsIcon className={classes.icons} />
            <Link to="/Settings" className={classes.links}>
              Settings
            </Link>
          </ListItem>
          <div className={classes.space}></div>
          <ListItem button className={classes.fields}>
            <ExitToAppIcon className={classes.exitIcon} />
            <Link to="/LogOut" className={classes.links}>
              Log out
            </Link>
          </ListItem>
        </List>
        <Switch>
          <Route exact path="/">
            <Homepage
              appCategories={appCategories}
              appConventions={appConventions}
              user={user}
              categoriesChecked={categoriesChecked}
            />
          </Route>
          <Route path="/Conventions">
            <ConventionsPage
              appConventions={appConventions}
              user={user}
              searchedCons={searchedCons}
            />
          </Route>
          <Route path="/Schedule">
            <Schedule user={user} />
          </Route>
          <Route exact path="/CreateConvention">
            <CreateConvention />
          </Route>
          <Route exact path="/RecycleFacilities">
            <RecycleFacilities />
          </Route>
          <Route exact path="/Statistic">
            <Statistic />
          </Route>
          <Route exact path="/Settings">
            <Settings />
          </Route>
          <Route exact path="/LogOut">
            <LogOut />
          </Route>
        </Switch>
      </Router>
      //   </div>
    );
  }
}

function Homepage(props) {
  return (
    <div style={{ justifyContent: "flex-end" }}>
      <Home
        appCategories={props.appCategories}
        appConventions={props.appConventions}
        user={props.user}
        categoriesChecked={props.categoriesChecked}
        page={"Home page"}
        secondTitle={"Suggested for you"}
        style={{ display: "flex" }}
      />
    </div>
  );
}

function ConventionsPage(props) {
  return (
    <div>
      <Conventions
        appConventions={props.appConventions}
        searchedCons={props.searchedCons}
        user={props.user}
        page={"Conventions"}
        secondTitle={"Last search"}
        thirdTitle={"Most popular"}
        fourthTitle={"Based on conventions you attended"}
        style={{ display: "flex" }}
      />
    </div>
  );
}

function Schedule(props) {
  return (
    <div
      style={{
        display: "flex",
        width: "1085px",
        background: "white",
        margin: 45
      }}
    >
      <CalendarP user={props.user} />
      <CalendarElement />
    </div>
  );
}

function CreateConvention() {
  return (
    <div>
      <h2>Create Convention</h2>
    </div>
  );
}
function RecycleFacilities() {
  return (
    <div>
      <h2>Recycle Facilities</h2>
    </div>
  );
}
function Statistic() {
  return (
    <div>
      <h2>Statistic</h2>
    </div>
  );
}
function Settings() {
  return (
    <div>
      <h2>Settings</h2>
    </div>
  );
}
function LogOut() {
  return (
    <div>
      <h2>Log Out</h2>
    </div>
  );
}
Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Nav);
