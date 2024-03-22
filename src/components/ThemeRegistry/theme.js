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
const dividerWhite = "#D0D6DC";
const blue = "#01022C";
const darkBlue = "#1A1B46";
const lightBlue = "#33C7F5";
const textGreen = "#72FF88";
const textPurple = "#7C2BFF";
const brandGreen = "#67E67A";
const brandPurple = "#A771FF";
const dividerGray = "#D0D6DC";
const dividerPurple = "#995AFF";
const surfaceGreen = "#398044";
const black = "#010119";
const textDisabled = "#B9BEC3";
const textDisabledBlue = "#808198";
const iconButtonGray = "#E7EEF4";
const red = "#ED523D";

// background colors
const lightPurple = "#b689ff1a";
const lightGreen = `${surfaceGreen}40`;
const purpleToGreen = `linear-gradient(90deg, ${brandPurple} 0%, ${brandGreen} 100%)`;
const greenToPurple = `linear-gradient(90deg, ${brandGreen} 0%, ${brandPurple} 100%)`;
const translucentGray =
  "linear-gradient(130deg, rgba(26, 27, 70, 0.3) -1.35%, rgba(26, 27, 70, 0.05) 100%)";
const translucentStrongGray =
  "linear-gradient(130deg, rgba(255, 255, 255, 0.15) -1.35%, rgba(255, 255, 255, 0.05) 100%)";
const grayBackground = "#74777A59";
const darkBlueBackground = "#1A1B46E6";
const darkGreenBackground = "#39804459";

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
      disabledBlue: textDisabledBlue,
      disabled: textDisabled,
      grayOverlay: grayBackground,
      red,
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
    error: {
      main: red,
      contrastText: white,
    },
    blue: {
      main: blue,
      dark: darkBlue,
      contrastText: white,
    },
    white: {
      main: white,
      contrastText: black,
    },
    dividerGray: {
      main: dividerGray,
    },
    background: {
      default: blue,
      green: brandGreen,
      lightPurple: lightPurple,
      lightGreen: lightGreen,
      gradient: purpleToGreen,
      gradientInverted: greenToPurple,
      gradientBlue: "linear-gradient(180deg, #010119 0%, #01020F 97.5%)",
      darkBlue: darkBlueBackground,
      darkGreen: darkGreenBackground,
      iconButtonGray,
      translucentGray,
      translucentStrongGray,
      dividerWhite,
      black,
      white,
    },
    divider: dividerPurple,
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1200,
      desktop: 1512,
    },
  },
  typography: {
    fontFamily: workSans.style.fontFamily,
    h1: {
      fontFamily: unbounded.style.fontFamily,
      textTransform: "uppercase",
      fontSize: "80px",
      fontWeight: 500,
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
    "h3-desktop": {
      fontFamily: unbounded.style.fontFamily,
      fontSize: "32px",
      fontWeight: 600,
      lineHeight: "40px",
    },
    "h3-unbounded": {
      fontFamily: unbounded.style.fontFamily,
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
    "h4-desktop": {
      fontFamily: unbounded.style.fontFamily,
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "32px",
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
      fontFamily: unbounded.style.fontFamily,
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "24px",
    },
    "h6-sans": {
      fontFamily: workSans.style.fontFamily,
      fontSize: "16px",
      fontWeight: "700",
      letterSpacing: "0.04em",
      lineHeight: "20px",
      textTransform: "uppercase",
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
    body2: {
      fontSize: "16px",
      lineHeight: "20px",
    },
    body3: {
      fontSize: "14px",
      lineHeight: "20px",
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
    label2: {
      fontFamily: unbounded.style.fontFamily,
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "24px",
    },
    label3: {
      fontFamily: unbounded.style.fontFamily,
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "normal",
    },
    link: {
      fontFamily: unbounded.style.fontFamily,
      fontSize: "14px",
      lineHeight: "24px",
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&.MuiPaper-root": {
            backgroundColor: "unset",
          },
          "&.Mui-expanded": {
            margin: "0px 0px 24px",
            [theme.breakpoints.down("desktop")]: {
              margin: "0px 0px 16px",
            },
          },
          "&.Mui-expanded:before": {
            opacity: 1,
          },
        }),
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: unbounded.style.fontFamily,
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "32px",
          backgroundColor: "unset",
          padding: "16px 0px",
          minHeight: "40px",
          [theme.breakpoints.down("desktop")]: {
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "24px",
            backgroundColor: "unset",
            padding: "8px 0px",
          },
        }),
        content: {
          alignItems: "center",
          margin: 0,
          "&.Mui-expanded": {
            margin: 0,
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          paddingTop: "0px",
          paddingBottom: "0px",
        },
      },
    },
    MuiDataGrid: {
      defaultProps: {
        disableColumnMenu: true,
        sortingMode: "server",
        filterMode: "server",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          border: "none",
          "& .MuiDataGrid-withBorderColor": {
            borderColor: grayBackground,
          },
          "& .MuiDataGrid-columnHeader": {
            fontFamily: unbounded.style.fontFamily,
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "normal",
            [theme.breakpoints.down("tablet")]: {
              fontSize: "12px",
              padding: "0px 4px",
            },
          },
          "[class^=MuiDataGrid-cell]": {
            border: "none",
            [theme.breakpoints.down("tablet")]: {
              padding: "0px 4px",
            },
          },
          "& .MuiDataGrid-columnHeader .MuiDataGrid-columnSeparator": {
            display: "none",
          },
        }),
      }
    },
    MuiCssBaseline: {
      styleOverrides: `
        html, body {
          margin: 0;
          height: 100%;
          width: 100%;
        }

        body {
          background: ${black};
        }

        /* Scrollbar - Chrome, Edge, and Safari */
        *::-webkit-scrollbar {
          width: 8px;
          background-color: transparent;
        }
        *::-webkit-scrollbar-track {
          border-radius: 8px;
          background-color: #8B8F92;
        }
        *::-webkit-scrollbar-thumb {
          border-radius: 8px;
          background-color: #4D4E6F;
        }

        // /* Scrollbar - Firefox */
        // * {
        //   scrollbar-width: thin;
        //   scrollbar-color: #ff0000 #000000;
        // }
      `,
    },
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
        maxWidth: false,
      },
      styleOverrides: {
        root: {
          overflowX: "hidden",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          height: "56px",
          paddingBottom: "16px",
        },
        underline: {
          ":before, &:hover:not(.Mui-disabled, .Mui-error):before": {
            borderColor: dividerWhite,
            borderWidth: "1px",
          },
          ":after": {
            borderWidth: "1px",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          position: "fixed",
          top: 0,
          transition: "background-color 0.3s",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          height: "72px",
          padding: "16px 64px",
          gap: "24px",
          justifyContent: "space-between",
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
          height: "fit-content",
          padding: "8px 16px",
          "&:hover": {
            boxShadow: "none",
          },
          "&.Mui-disabled": {
            color: textDisabledBlue,
          },
        },
        gradient: {
          background: purpleToGreen,
          color: blue,
        },
        gradientInverted: {
          background: greenToPurple,
          color: blue,
        },
        underlined: {
          borderBottom: `1px solid ${dividerGray}`,
          padding: "0 0 16px",
          "&:hover": {
            background: "none",
          },
        },
        unstyled: {
          minWidth: 0,
          padding: 0,
        },
        startIcon: {
          alignItems: "center",
          display: "flex",
          height: "24px",
          justifyContent: "center",
          marginLeft: 0,
          width: "24px",
        },
        containedPrimary: {
          "&.Mui-disabled": {
            backgroundColor: "#88BE90",
          },
        },
        containedSolidDark: {
          backgroundColor: blue,
          "&:hover": {
            backgroundColor: black,
          },
        },
        containedSolidWhite: {
          backgroundColor: white,
          color: blue,
          "&:hover": {
            backgroundColor: "#A2A7AB",
          },
          "&:active": {
            backgroundColor: "#B8B8D3",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            opacity: 0.25,
          },
        },
        colorGray: {
          backgroundColor: iconButtonGray,
          color: "#808198",
          transition: "background-color 0.3s",
          "&:hover": {
            backgroundColor: white,
          },
        },
      },
      variants: [
        {
          props: { color: "" },
        },
        {
          props: { color: "gray" },
        },
      ],
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          gap: "12px",
        },
        indicator: {
          display: "none",
        },
        vertical: {
          " .MuiTab-root": {
            padding: "8px 24px",
            justifyContent: "flex-start"
          }
        }
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
        disableFocusRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "4px",
          color: white,
          minHeight: "40px",
          padding: "8px 16px",
          transition: ".3s ease",
          "&:hover": {
            backgroundColor: "#74777ABF",
          },
          "&.Mui-selected": {
            backgroundColor: grayBackground,
            color: white,
          },
        },
        labelIcon: {
          flexDirection: "row",
          gap: "8px",
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
        dot: {
          borderRadius: 0,
          ":not(.MuiMobileStepper-dotActive)": {
            backgroundColor: lightPurple,
          },
        },
      },
    },
    MuiFilledInput: {
      defaultProps: {
        hiddenLabel: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: grayBackground,
          borderColor: dividerGray,
          borderRadius: 0,
          borderStyle: "solid",
          borderWidth: "1px",
          paddingLeft: "8px",
          "&:hover": {
            backgroundColor: grayBackground,
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before, &::before, &::after": {
            borderBottom: "none",
          },
          "&.Mui-focused": {
            borderColor: brandGreen,
            backgroundColor: grayBackground,
          },
        },
        input: {
          height: "40px",
          padding: 0,
          "&::placeholder": {
            color: textDisabledBlue,
            opacity: 1,
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        hiddenLabel: true,
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "standard" && {
            "& .MuiInput-input": {
              color: blue,
              height: "40px",
              marginBottom: "16px",
              padding: 0,
              "&::placeholder": {
                color: blue,
                opacity: 1,
              },
            },
            "& .MuiInput-root": {
              "&:hover:not(.Mui-disabled, .Mui-error):before": {
                borderBottomColor: dividerPurple,
              },
              "&::before": {
                borderBottomColor: dividerPurple,
              },
              "&::after": {
                borderBottomColor: blue,
              },
            },
          }),
        }),
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          marginTop: "0 !important",
        },
        positionStart: {
          padding: 0,
          minWidth: "24px",
          justifyContent: "center",
        },
      },
    },
    MuiCardActionArea: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          "&:hover": {
            "& .MuiCardActionArea-focusHighlight": {
              opacity: 0,
            },
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        wrapper: {
          paddingLeft: "24px",
          paddingRight: "24px",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: blue,
          borderColor: dividerGray,
          borderStyle: "solid",
          borderWidth: "1px",
          maxWidth: "576px",
          width: "100%",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          borderBottomColor: dividerGray,
          borderBottomStyle: "solid",
          borderBottomWidth: "1px",
          display: "flex",
          flexDirection: "row",
          gap: "24px",
          padding: "24px 32px",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          padding: "24px 32px 32px !important",
        },
      },
    },
  },
});

export default theme;
