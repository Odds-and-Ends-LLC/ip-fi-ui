import { Unbounded, Work_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { forwardRef } from "react";
import NextLink from "next/link";

const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
  return <NextLink ref={ref} {...props} />;
});

// colors
const white = "#FDFDFE";
const offWhite = "#E9F0F5";
const blue = "#01022C";
const lightBlue = "#33C7F5";
const textGreen = "#72FF88";
const textPurple = "#7C2BFF";
const brandGreen = "#67E67A";
const brandPurple = "#A771FF";
const dividerGray = "#D0D6DC";
const dividerPurple = "#995AFF";
const surfaceGreen = "#398044";

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
      secondary: textGreen,
      purple: textPurple,
      blue: blue,
      gray: offWhite,
    },
    primary: {
      main: brandGreen,
      light: textGreen,
      dark: surfaceGreen,
      contrastText: blue,
    },
    secondary: {
      main: brandPurple,
      dark: textPurple,
      contrastText: white,
    },
    info: {
      main: lightBlue,
      contrastText: white,
    },
    blue: {
      main: blue,
      contrastText: white,
    },
    background: {
      default: blue,
      paper: brandGreen,
      lightPurple: "rgba(182, 137, 255, 0.1)",
      lightGreen: `${surfaceGreen}40`,
      gradient: "linear-gradient(270deg, #A771FF 0%, #67E67A 100%)",
      gradientInverted: "linear-gradient(270deg, #67E67A 0%, #A771FF 100%)",
      gradientBlue: "linear-gradient(180deg, #010119 0%, #01020F 97.5%)",
    },
    divider: dividerPurple,
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
      fontSize: "48px",
      fontWeight: 500,
      lineHeight: "48px",
      letterSpacing: "0em",
    },
    "h2-mobile": {
      fontFamily: unbounded.style.fontFamily,
      textTransform: "uppercase",
      fontSize: "36px",
      fontWeight: 400,
      lineHeight: "36px",
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
    h6: {
      fontFamily: unbounded.style.fontFamily,
      fontSize: "16px",
      fontWeight: "700",
      letterSpacing: "0.04em",
      lineHeight: "20px",
      textTransform: "uppercase",
    },
    body1: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    button: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "24px",
      letterSpacing: "0.04em",
    },
    label: {
      fontFamily: unbounded.style.fontFamily,
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "24px",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      desktop: 1440,
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
        maxWidth: false,
      },
    },
    MuiAppBar: {
      defaultProps: {
        position: "relative",
      },
      styleOverrides: {
        root: {
          backgroundColor: blue,
          boxShadow: "none",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          height: "72px",
          padding: "16px 64px",
          [theme.breakpoints.down("tablet")]: {
            padding: "16px 24px",
          },
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableFocusRipple: true,
        fullWidth: false,
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "none",
          height: "40px",
          padding: "8px 16px",
          "&:hover": {
            boxShadow: "none",
          },
        },
        gradient: ({ theme }) => ({
          background: theme.palette.background.gradient,
          color: theme.palette.text.blue,
        }),
        underlined: {
          borderBottom: `1px solid ${dividerGray}`,
          padding: "0 0 16px",
        },
        startIcon: {
          alignItems: "center",
          display: "flex",
          height: "24px",
          justifyContent: "center",
          marginLeft: 0,
          width: "24px",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        color: "text.secondary",
        component: LinkBehaviour,
        rel: "noreferrer",
        target: "_blank",
      },
      styleOverrides: {
        root: {
          // "&:hover": {},
          textDecoration: "none",
          // transition: ".3s ease",
          width: "fit-content",
        },
      },
    },
    MuiMobileStepper: {
      styleOverrides: {
        dots: {
          gap: "8px",
        },
        dot: ({ theme }) => ({
          borderRadius: 0,
          ":not(.MuiMobileStepper-dotActive)": {
            backgroundColor: theme.palette.background.lightPurple,
          },
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          ...(ownerState.variant === "standard" && {
            "& .MuiInput-input": {
              color: theme.palette.text.blue,
              height: "40px",
              marginBottom: "16px",
              padding: 0,
              "&::placeholder": {
                color: theme.palette.text.blue,
                opacity: 1,
              },
            },
            "& .MuiInput-root": {
              "&:hover:not(.Mui-disabled, .Mui-error):before": {
                borderBottomColor: theme.palette.divider,
              },
              "&::before": {
                borderBottomColor: theme.palette.divider,
              },
              "&::after": {
                borderBottomColor: theme.palette.blue.main,
              },
            },
          }),
        }),
      },
    },
  },
});

export default theme;
