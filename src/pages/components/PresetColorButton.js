import React from 'react';
import { withStyles, makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';


const ColorButton = withStyles((theme) => ({
    root: {
        // color: theme.palette.getContrastText(purple[500]),
        // backgroundColor: purple[500],
        // '&:hover': {
        //     backgroundColor: purple[700],
        // },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

const themeColor = createTheme({
    root: {
        backgroundColor: {
            default: "#ff02ca"
        },
        text: {
            primary: "#ffffff"
        }
    }
});

export default function PresetColorButton(props) {
    const classes = useStyles();
    return (
        <ThemeProvider theme={themeColor}>
            <ColorButton variant="contained" color="primary" className={classes.margin} onClick={props.onClick}>
                {props.buttonText}
            </ColorButton>
        </ThemeProvider>

    );
}
