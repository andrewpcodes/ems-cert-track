import { createTheme } from "@mui/material/styles";

export const override = createTheme({
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