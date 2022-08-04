import { createTheme } from "@mui/material/styles";

export const override = createTheme({
    /*palette:{
        primary: {
            light: '#157ce8',
            main: '#1f50b5',
            dark: '#f02884',
            contrastText: '#fff',
        }
    },*/

    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    //color: 'red',
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    //color: 'red',
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    //color: 'red',
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    //color: 'red',
                }
            }
        },
        MuiButton: {
            '&:hover': {
                backgroundColor: 'blue',
            },
        },
    },
})