import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function ComboBox(props) {
  let textFieldValue = ''

  const handleChange = (value) =>{
    if(value !== null){
      props.searched(value);
    }
  }

  return (
    <Autocomplete
      id="combo-box-demo"
      options={props.appConventions}
      getOptionLabel={option => `${option.title} - ${option.category}`}
      style={{
        width: 422,
        height: 40,
        marginLeft: 422,
        marginTop: 21,
        borderRadius: 80,
        borderColor:
          "linear-gradient(179.64deg,#74FF82 -13.56%, #1949F5 158.3%)"
      }}
      onChange={(e,value) => handleChange(value)}
      renderInput={params => (
        <TextField {...params} label="Convention" variant="outlined"/>
      )}
    />
  );
}



