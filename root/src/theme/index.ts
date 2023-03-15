import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import typography from './typography'

// Create a theme instance.
const theme = createTheme({
    typography,
    palette: {
        primary: {
            main: '#007FFF',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    components: {
        // MuiCssBaseline: {
        //     styleOverrides: `
        //     @font-face {
        //         font-family:'Black Hans Sans';
        //         font-style: normal;
        //         font-display: swap;
        //         font-weight: 500;
        //     }
        //     `
        // }
    },
})

export default theme
