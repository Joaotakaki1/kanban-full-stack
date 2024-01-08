import {createTheme} from '@mui/material'
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
        }
    },
    shape:{
        borderRadius:0,
    }
})

export default theme