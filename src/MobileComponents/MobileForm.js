import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import 'typeface-poppins';
import TextField from '@material-ui/core/TextField';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import { Range, getTrackBackground } from 'react-range';
import TextareaAutosize from 'react-textarea-autosize';
import ImageUploader from 'react-images-upload';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const styles = theme => ({
    headerForm: {
        weight: '375px',
        height: '150px',
        background: 'linear-gradient(180.66deg, #74FF82 -11.75%, #1949F5 95.05%)',
        top: '230px',
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '175px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        color: 'white',
    },
    formBox: {
        position: 'absolute',
        width: '414px',
        height: '100%',
        top: '120px',
        background: '#FFFFFF',
        boxShadow: '0px 4px 14px rgba(23, 25, 50, 0.5)',
        borderRadius: '10px',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '80px',
        '& .MobileForm-date-83': {
            position: 'relative',
        },
    },
    title: {
        position: 'absolute',
        width: '327px',
        height: '48px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        borderColor: '#8A8A8A',
        borderStyle: 'solid',
        borderWidth: 'thin',
        color: '#8A8A8A',
        margin: '300px',
        bottom: '350px',
        marginLeft: 'auto',
    },
    selectCategory: {
        background: 'white',
        position: 'absolute',
        width: '327px',
        height: '48px',
        bottom: '590px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        borderColor: '#8A8A8A',
        color: '#8A8A8A',
    },
    textField: {
        background: 'white',
        position: 'absolute',
        width: '327px',
        height: '48px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        top: '165px',
        color: '#8A8A8A',
        '& .MuiInputBase-input': {
            fontFamily: 'Poppins',
        },
    },
    location: {
        background: 'white',
        position: 'absolute',
        width: '327px',
        height: '48px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        marginTop: '150px',
        '& .location-search-input': {
            fontFamily: 'Poppins',
            width: '327px',
            height: '48px',
            top: '115px',
            borderColor: '#8A8A8A',
            borderStyle: 'solid',
            borderWidth: 'thin',
        },
    },
    locationInput: {
        color: 'white',
    },
    range: {
        width: '327px',
        height: '50px',
        marginTop: '160px',
    },
    priceTitle: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
    },
    details: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        borderColor: '#8A8A8A',
        width: '327px',
        height: '80px',
        marginTop: '70px',
    },
    button: {
        position: 'absolute',
        left: '55px',
        bottom: '150px',
        width: '300px',
        height: '50px',
        background: 'linear-gradient(8.32deg, #7EF192 0%, #2DC897 94.65%)',
        borderRadius: '25px',
        color: 'white',
    },
    backButton: {
        color: 'white',
        right: '95px',
        bottom: '100px',
        marginLeft: '100px',
        marginTop: '15px',
    },
});

const STEP = 1;
const MIN = 0;
const MAX = 100;

class MobileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            address: '',
            values: [50],
        };
        this.onDrop = this.onDrop.bind(this);
        this.addConventionMobile = this.addConventionMobile.bind(this);
        this.setStartDate = this.setStartDate.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    handleChange = address => {
        this.setState({address});
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };

    setStartDate = date => {
        this.setState({
            startDate: date,
        });
    };

    addConventionMobile(event) {
        event.preventDefault();
        this.props.onAddConvention(
            this.titleValue.value,
            this.selectCategoryValue.value,
            this.startDateInput,
            this.state.address,
            this.state.values[0],
            this.selectDescValue.value
        );
        this.titleValue.value = "";
        this.selectCategoryValue.value = "";
        this.startDateInput.value = "";
        this.state.address = "";
        this.state.values[0] = "";
        this.selectDescValue.value = "";
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.headerForm}>
                    Create Convention</div>
                <IconButton
                    className={classes.backButton}
                    aria-label="back">
                    <KeyboardBackspaceIcon />
                </IconButton>
                <div className={classes.formBox}>
                    <form
                        onSubmit={this.addConventionMobile}
                        className={classes.root}
                        noValidate
                        autoComplete="off"
                    >
                        <input
                            required
                            className={classes.title}
                            variant="outlined"
                            placeholder=" Enter the title of the convention"
                            ref={titleValue => (this.titleValue = titleValue)}
                        />
                        <select
                            required
                            className={classes.selectCategory}
                            variant="outlined"
                            placeholder="Select Category"
                            ref={selectCategoryValue => (this.selectCategoryValue = selectCategoryValue)}
                        >
                            <option value='' disabled selected>Select Categoty</option>
                            <option value="airPollution">Air Pollution</option>
                            <option value="radiationDamage">Radiation Damages</option>
                            <option value="liquidWaste">Liquid Waste</option>
                            <option value="waterPollution">Water Pollution</option>
                            <option value="solidWaste">Solid Waste</option>
                            <option value="noiseHazards">Noise Hazards</option>
                        </select>
                        <input
                            required
                            id="datetime-local"
                            label="Select Date & Time"
                            type="datetime-local"
                            defaultValue="2020-02-25T16:30"
                            className={classes.textField}
                            onChange={this.setStartDate}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            ref={startDate =>this.startDateInput = startDate}
                        />
                        <div className={classes.location}>
                            <PlacesAutocomplete
                                value={this.state.address}
                                onChange={this.handleChange}
                                onSelect={this.handleSelect}
                            >
                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                    <div>
                                        <input className={classes.locationInput}
                                            {...getInputProps({
                                                placeholder: ' Search Places ...',
                                                className: 'location-search-input',
                                            })}
                                        />
                                        <div className="autocomplete-dropdown-container">
                                            {loading && <div>Loading...</div>}
                                            {suggestions.map(suggestion => {
                                                const className = suggestion.active
                                                    ? 'suggestion-item--active'
                                                    : 'suggestion-item';
                                                const style = suggestion.active
                                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                return (
                                                    <div
                                                        {...getSuggestionItemProps(suggestion, {
                                                            className,
                                                            style,
                                                        })}
                                                    >
                                                        <span>{suggestion.description}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </PlacesAutocomplete>
                        </div>
                        <div
                            className={classes.range}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                flexWrap: "wrap",
                                marginTop: '215px',
                            }}
                        >
                            <p className={classes.priceTitle}> Price $</p>
                            <Range
                                values={this.state.values}
                                step={STEP}
                                min={MIN}
                                max={MAX}
                                onChange={values => this.setState({ values })}
                                renderTrack={({ props, children }) => (
                                    <div
                                        onMouseDown={props.onMouseDown}
                                        onTouchStart={props.onTouchStart}
                                        style={{
                                            ...props.style,
                                            height: "36px",
                                            display: "flex",
                                            width: "100%"
                                        }}
                                    >
                                        <div
                                            ref={props.ref}
                                            style={{
                                                height: "5px",
                                                width: "327px",
                                                borderRadius: "4px",
                                                background: getTrackBackground({
                                                    values: this.state.values,
                                                    colors: ["#548BF4", "#ccc"],
                                                    min: MIN,
                                                    max: MAX
                                                }),
                                                alignSelf: "center"
                                            }}
                                        >
                                            {children}
                                        </div>
                                    </div>
                                )}
                                renderThumb={({ props, isDragged }) => (
                                    <div
                                        {...props}
                                        style={{
                                            ...props.style,
                                            height: "42px",
                                            width: "42px",
                                            borderRadius: "4px",
                                            backgroundColor: "#FFF",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            boxShadow: "0px 2px 6px #AAA"
                                        }}
                                    >
                                        <div
                                            style={{
                                                height: "16px",
                                                width: "5px",
                                                backgroundColor: isDragged ? "#548BF4" : "#CCC"
                                            }}
                                        />
                                    </div>
                                )}
                            />
                            <output style={{
                                marginTop: "10px",
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                            }} id="output">
                                {this.state.values[0]}
                            </output>
                        </div>
                        <div>
                            <textarea
                                required
                                className={classes.details}
                                minRows={3}
                                maxRows={6}
                                placeholder="About the convention in a few words..."
                                ref={selectDescValue => (this.selectDescValue = selectDescValue)}

                            />
                        </div>                 
                    </form>
                       <Button
                            type="submit"
                            className={classes.button}
                            onClick={this.addConventionMobile}
                        >Add Convention
                </Button>
                </div>
            </div>
        );
    }
}

MobileForm.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MobileForm);