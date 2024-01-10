import {createTheme} from '@mui/material'

export const colors = [
    "#e57373",
    "#ba68c8",
    "#7986cb",
    "#81c784",
    "#ffd54f",
    "#ff8a65",
];

const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#1D1F26",
        },
        primary: {
            main: "#c5e1c8"
        }
    },
    typography: {
        button: {
            textTransform: "unset",
            fontWeight: 700,
        },
        h5 :{
            fontWeight: 700,
        },
        h6 :{
            fontWeight: 700,
        }
    },
    shape:{
        borderRadius:0,
    }
})

export default theme