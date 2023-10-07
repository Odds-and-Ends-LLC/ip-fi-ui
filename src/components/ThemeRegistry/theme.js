import { Azeret_Mono, Unbounded, Work_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";

// colors
const white = "#FFFFFF";
const blue = "#010119";
const green = "#5BCC6D";
const purple = "#B689FF";

const workSans = Work_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const azeretMono = Azeret_Mono({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const unbounded = Unbounded({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const breakpointsTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      desktop: 1440,
    },
  },
});

const theme = createTheme({
  palette: {
    text: {
      primary: white,
      secondary: green,
      blue: blue,
    },
    primary: {
      main: blue
    },
    secondary: {
      main: green,
    },
    purple: {
      main: purple,
    },
    background: {
      default: blue,
      green: green,
      lightPurple: "rgba(182, 137, 255, 0.1)",
      lightGreen: "rgba(10, 248, 255, 0.1)",
    },
    gradients: {
      default: "linear-gradient(270deg, #50B35F 0%, #B689FF 100%)"
    },
  },
  typography: {
    fontFamily: workSans.style.fontFamily,
    "h1-unbounded": {
      fontFamily: unbounded.style.fontFamily,
      fontSize: "80px",
      fontWeight: 400,
      lineHeight: "80px",
      letterSpacing: "-0.04em",
    },
    "h1-azeret-mono": {
      fontFamily: azeretMono.style.fontFamily,
      fontSize: "80px",
      fontWeight: 400,
      lineHeight: "80px",
      letterSpacing: "-0.04em",
    },
    h2: {
      fontFamily: unbounded.style.fontFamily,
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
      lineHeight: "20px",
      letterSpacing: "0.04em",
    },
    "h4-bold": {
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
  },
  breakpoints: breakpointsTheme.breakpoints,
  components: {
    MuiAppBar: {
      defaultProps: {
        position: "relative",
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: "72px",
          padding: "16px 64px",
          [breakpointsTheme.breakpoints.down("tablet")]: {
            padding: "16px 24px",
          }
        }
      }
    },
  },
});

export default theme;
