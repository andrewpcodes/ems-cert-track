import { createTheme } from "@mui/material";

export const themeOverride = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          //fontSize: '2rem',
        },
      },
    },
  },
});
