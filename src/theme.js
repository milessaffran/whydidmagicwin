import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Colors we plan to use in this project
// Taken from usteamcolors.com

const magicColors = {
  blue: "#0077c0",
  black: "#000000",
  silver: "#c4ced4",
};

const theme = createTheme({
  typography: {
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
    mainHead: {
      color: magicColors.blue,
      fontWeight: 700,
      fontSize: "40px",
    },
  },
  palette: {
    primary: {
      main: magicColors.blue,
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
