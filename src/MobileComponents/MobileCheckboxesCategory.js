import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "@material-ui/core";
import logo from "../images/logo.png";
import "typeface-poppins";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    position: "absolute",
    top: "8%",
    left: "11%",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    "& .MuiFormGroup-root": {
      marginLeft: "15%"
    },
    "& .MuiFormControlLabel-root": {
      marginLeft: "40px",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px"
    },
    "& .MuiFormLabel-root": {
      marginBottom: "20px",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      marginRight: "-80px",
      fontSize: "20px",
      display: "contents"
    },
    "& .MuiTypography-body1": {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal"
    },
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#2DC897"
    },
    background: "#FFFFFF",
    boxShadow: "0px 4px 14px rgba(23, 25, 50, 0.5)",
    borderRadius: "10px",
    width: "80%",
    height: "80%"
  },
  formControl: {
    top: "50px",
    textAlign: "center"
  },
  button: {
    background: "linear-gradient(8.32deg, #7EF192 0%, #2DC897 94.65%)",
    marginLeft: "38%",
    marginTop: "9%"
  },
  header: {
    width: 205,
    height: 144,
    position: "relative",
    backgroundImage: `url('${logo}') `,
    background: "no-repeat",
    border: "transparent",
    textAlign: "center",
    left: "20%"
  },
  boxTitle: {
    left: "10%"
  }
}));

const categoriesChecked = [];

export default function MobileCheckboxesCategory(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    airPollution: false,
    radiation: false,
    globalWarming: false,
    solidWaste: false,
    waterPollution: false,
    noiseHazards: false
  });

  const handleChange = name => event => {
    categoriesChecked.push(name);
    setState({ ...state, [name]: event.target.checked });
  };

  const handleSubmit = () => {
    props.categoriesChecked(categoriesChecked);
    props.checkBoxed(true);
  };

  const {
    airPollution,
    radiation,
    liquidWaste,
    solidWaste,
    waterPollution,
    noiseHazards
  } = state;

  const error =
    [
      airPollution,
      radiation,
      liquidWaste,
      solidWaste,
      waterPollution,
      noiseHazards
    ].filter(v => v).length !== 2;
  const disabled =
    [
      airPollution,
      radiation,
      liquidWaste,
      solidWaste,
      waterPollution,
      noiseHazards
    ].filter(v => v).length !== 2;

  return (
    <div className={classes.root}>
      <div className={classes.checkBoxStyle}>
        <div className={classes.header}></div>
        <FormControl
          required
          error={error}
          component="fieldset"
          className={classes.formControl}
        >
          <FormLabel component="legend" className={classes.boxTitle}>
            Please choose categories you relate to
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={airPollution}
                  onChange={handleChange("airPollution")}
                  value="airPollution"
                />
              }
              label="Air Pollution"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={liquidWaste}
                  onChange={handleChange("liquidWaste")}
                  value="liquidWaste"
                />
              }
              label="Liquid Waste"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={radiation}
                  onChange={handleChange("radiation")}
                  value="radiation"
                />
              }
              label="Radiation Damages"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={solidWaste}
                  onChange={handleChange("solidWaste")}
                  value="solidWaste"
                />
              }
              label="Solid Waste"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={waterPollution}
                  onChange={handleChange("waterPollution")}
                  value="waterPollution"
                />
              }
              label="Water Pollution"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={noiseHazards}
                  onChange={handleChange("noiseHazards")}
                  value="noiseHazards"
                />
              }
              label="Noise Hazards"
            />
          </FormGroup>
          <Button
            disabled={disabled}
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </FormControl>
      </div>
    </div>
  );
}
