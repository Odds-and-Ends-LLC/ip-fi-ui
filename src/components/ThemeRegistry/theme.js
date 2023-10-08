import { Unbounded, Work_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";

// colors
const white = "#FDFDFE";
const blue = "#010119";
const green = "#5BCC6D";
const purple = "#B689FF";

const workSans = Work_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "auto",
});

const unbounded = Unbounded({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "auto",
});

const theme = createTheme({
  palette: {
    text: {
      primary: white,
      secondary: green,
      blue: blue,
    },
    primary: {
      main: purple,
      contrastText: blue
    },
    secondary: {
      main: green,
      contrastText: blue
    },
    blue: {
      main: blue,
      contrastText: white,
    },
    background: {
      default: blue,
      paper: green,
      lightPurple: "rgba(182, 137, 255, 0.1)",
      lightGreen: "rgba(10, 248, 255, 0.1)",
      gradient: "linear-gradient(270deg, #50B35F 0%, #B689FF 100%)",
    },
  },
  typography: {
    fontFamily: workSans.style.fontFamily,
    h1: {
      fontFamily: unbounded.style.fontFamily,
      textTransform: "uppercase",
      fontSize: "80px",
      fontWeight: 400,
      lineHeight: "80px",
      letterSpacing: "-0.04em",
    },
    h2: {
      fontFamily: unbounded.style.fontFamily,
      textTransform: "uppercase",
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "32px",
      letterSpacing: "0em",
    },
    h3: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0em",
    },
    "h3-bold": {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "24px",
      letterSpacing: "0em",
    },
    h4: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0.04em",
    },
    "h4-bold": {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "24px",
      letterSpacing: "0.04em",
    },
    "h4-unbounded": {
      fontFamily: unbounded.style.fontFamily,
      textTransform: "uppercase",
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "20px",
      letterSpacing: "0.04em",
    },
    h5: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0em",
    },
    button: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "24px",
      letterSpacing: "0.04em",
    }
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      desktop: 1440,
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        position: "relative",
      },
      styleOverrides: {
        root: {
          backgroundColor: blue,
          boxShadow: "none",
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          height: "72px",
          padding: "16px 64px",
          [theme.breakpoints.down("tablet")]: {
            padding: "16px 24px",
          }
        }),
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableFocusRipple: true,
        fullWidth: false,
      },
      styleOverrides: {
        root: {
          height: "40px",
          padding: "8px 16px",
          borderRadius: 0,
          width: "fit-content"
        },
        gradient: ({ theme }) => ({
          background: theme.palette.background.gradient,
          color: theme.palette.text.blue,
        }),
      },
    },
  },
});

export default theme;
