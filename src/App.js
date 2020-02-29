import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import axios from "axios";
import MobileHeader from "./MobileComponents/MobileHeader";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CheckboxesCategory from "./Components/CheckboxesCategory";
import { categories } from "./Constants/Consts";
import moment from "moment";
import MobileUpperNav from "./MobileComponents/MobileUpperNav";
import SimpleBottomNavigation from "./MobileComponents/MobileBottomNav";
import MobileBody from "./MobileComponents/MobileBody";
import MobileForm from "./MobileComponents/MobileForm";
import MobileCreated from './MobileComponents/MobileCreated';
import 'typeface-poppins';
import MobileCheckboxesCategory from './MobileComponents/MobileCheckboxesCategory';
import MobileLogin from './MobileComponents/MobileLogin';

const useStyles = makeStyles({
  page: {
    background: "#FFF9FE",
    height: "100%"
  },
  main: {
    display: "flex"
  }
});
localStorage.setItem("categories", JSON.stringify(categories));
const App = props => {
  const classes = useStyles();
  const [acategories, setCategories] = useState([]);
  const [conventions, setConventions] = useState([]);
  const [didFetch, setDidFetch] = useState(false);
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState({});
  const [checkBoxed, setCheckBoxed] = useState(false);
  const [categoriesChecked, setCategoriesChecked] = useState([]);
  const [gotIsClicked, setGotIsClicked] = useState(false);
  const [newConvention, setNewConvention] = useState([]);
  const [doRerender, setDoRender] = useState(false);
  const [searchedCons, setSearchCons] = useState([]);
  const matches = useMediaQuery("(min-width:415px)");

  const fetchData = async () => {
    try {
      const results = await axios.get(
        `https://greencon.herokuapp.com/admin/getAllConventions`
      );
      setConventions(results.data);
      setDidFetch(true);
    } catch (err) {
      console.log(err);
    }
  };

  const convertCategoryName = str => {
    let strConverted = str.replace(/([A-Z])/g, " $1");
    return (
      strConverted.charAt(0).toUpperCase() + strConverted.slice(1).toLowerCase()
    );
  };

  const handleSearched = (convention) => {
    setSearchCons([...searchedCons, convention])
  }

  const onAddConvention = async (
    title,
    category,
    date,
    location,
    price,
    description
  ) => {
    category = convertCategoryName(category);
    let dbDate = new Date(date.value);
    dbDate = moment(date.value)
      .utc()
      .format();
    const params = {
      title: title,
      category: category,
      start: dbDate,
      end: dbDate,
      location: location,
      price: price,
      description: description,
      lecturerProfile: {
        firstName: user.JW,
        lastName: user.JU,
        company: "El-Al",
        headline: "Flight Manager",
        email: user.Au,
      }
    };
    try {
      const result = await axios.post(`https://greencon.herokuapp.com/creator/convention`, params);
      setNewConvention(result.data);
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    const getCategories = JSON.parse(localStorage.getItem(categories));
    setCategories(categories);
    fetchData();
  }, []);

  const isClicked = flag => {
    setGotIsClicked(flag);
  };


  useEffect(() => {
    if (newConvention.length === 0) {
    } else {
      setDoRender(true)
    }
  }, [newConvention])

  useEffect(() => { }, [gotIsClicked]);

  if (logged === false) {
    if (matches === true) {
      return (
        <Login
          logged={setLogged}
          user={setUser} />
      );
    } else {
      return (
        <MobileLogin
          logged={setLogged}
          user={setUser} />
      );
    }
  }
  if (checkBoxed === false) {
    if (matches === true) {
      return (
        <CheckboxesCategory
          checkBoxed={setCheckBoxed}
          categoriesChecked={setCategoriesChecked}
        />
      );
    } else {
      return (
        <MobileCheckboxesCategory
          checkBoxed={setCheckBoxed}
          categoriesChecked={setCategoriesChecked}
        />);
    }
  }
  if (gotIsClicked) {
    if (doRerender) {
      return <MobileCreated newConvention={newConvention} click={isClicked} doReRender={setDoRender} />
    }
    else return <MobileForm click={isClicked} onAddConvention={onAddConvention} />;
  } else if (matches === true && didFetch) {
    return (
      <div className={classes.page}>
        <Header
          user={user}
          appConventions={conventions}
          searched={handleSearched}
        />
        <div className={classes.main}>
          <Nav
            appCategories={acategories}
            appConventions={conventions}
            user={user}
            categoriesChecked={categoriesChecked}
            searchedCons={searchedCons}
          />
        </div>
        <Footer style={{ flexWrap: "nowrap" }} />
      </div>
    );
  } else if (didFetch) {
    return (
      <div className={classes.mobile}>
        <MobileHeader />
        <MobileUpperNav />
        <MobileBody click={isClicked} user={user} />
        <SimpleBottomNavigation click={isClicked} />
      </div>
    );
  } else return null;
};
export default App;