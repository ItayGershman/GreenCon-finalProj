import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { FaChalkboardTeacher, FaRegCalendarCheck, FaRecycle, FaChartBar } from "react-icons/fa";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        bottom: '0px',
        marginBottom: '30px',
        marginTop: '50px',
        '&.MuiBottomNavigation-root': {
            display: 'block',
            marginLeft: '6px',
        },
        '& .MuiBottomNavigationAction-root.Mui-selected': {
            color: '#31D19E',
        },
    },

    conventions: {
        width: '29px',
        height: '29px',
    },
    schedule: {
        width: '29px',
        height: '29px',
    },
    button: {
        position: 'relative',
        right: '10px',
        bottom: '40px',
        width: '30px',
        height: '60px',
        background: 'linear-gradient(8.32deg, #7EF192 0%, #2DC897 94.65%)',
        borderRadius: '150px',
        color: 'white',
    },
    recycle: {
        width: '29px',
        height: '29px',
    },
    statistics: {
        width: '29px',
        height: '29px',
    },
});

export default function SimpleBottomNavigation(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const addConvention = () => {
        props.click(true)
    }

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Conventions" icon={<FaChalkboardTeacher className={classes.conventions} />} />
            <BottomNavigationAction label="Schedule" icon={<FaRegCalendarCheck className={classes.schedule} />} />
            <Button
                className={classes.button}
            >
                <AddIcon onClick={addConvention}
                />
            </Button>
            <BottomNavigationAction label="Recycle" icon={<FaRecycle className={classes.recycle} />} />
            <BottomNavigationAction label="Statistics" icon={<FaChartBar className={classes.statistics} />} />
        </BottomNavigation>
    );
}