"use client";
// packages
import { Unbounded, Work_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import NextLink from "next/link";

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

const colors = {
  blue: {
    100: "#e6e6ea",
    200: "#ccccd6",
    300: "#b3b3c1",
    400: "#999aad",
    500: "#808198",
    600: "#676783",
    700: "#4d4e6f",
    800: "#34355a",
    900: "#1a1b46",
    1000: "#010231",
    1100: "#01022c",
    1200: "#010227",
    1300: "#010122",
    1400: "#01011d",
    1500: "#010119",
  },
  purple: {
    100: "#f0e7ff",
    200: "#e2d0ff",
    300: "#d3b8ff",
    400: "#c5a1ff",
    500: "#b689ff",
    600: "#a771ff",
    700: "#995aff",
    800: "#8a42ff",
    900: "#7c2bff",
    1000: "#6d13ff",
    1100: "#6211e6",
    1200: "#570fcc",
    1300: "#4c0db3",
    1400: "#410b99",
    1500: "#370a80",
  },
  green: {
    100: "#f1fff3",
    200: "#e3ffe7",
    300: "#d5ffdb",
    400: "#c7ffcf",
    500: "#b9ffc4",
    600: "#aaffb8",
    700: "#9cffac",
    800: "#8effa0",
    900: "#80ff94",
    1000: "#72ff88",
    1100: "#67e67a",
    1200: "#5bcc6d",
    1300: "#50b35f",
    1400: "#449952",
    1500: "#398044",
  },
  gray: {
    100: "#fdfdfe",
    200: "#fafcfd",
    300: "#f8fafc",
    400: "#f5f8fb",
    500: "#f3f7fa",
    600: "#f1f5f8",
    700: "#eef3f7",
    800: "#ecf1f6",
    900: "#e9f0f5",
    1000: "#e7eef4",
    1100: "#d0d6dc",
    1200: "#b9bec3",
    1300: "#a2a7ab",
    1400: "#8b8f92",
    1500: "#74777a",
  },
  teal: "#33c7f5",
  orange: "#eda73d",
  red: "#cd4747",
  yellow: "#dcd75d",
  black: "#000000",
};

declare module "@mui/material/styles" {
  // custom tokens
  interface TypeStatus {
    success?: string;
    info?: string;
    warning?: string;
    error?: string;
  }

  interface TypeIcon {
    default?: string;
    brand?: string;
  }

  interface TypeDividers {
    default?: string;
    brand?: string;
    dark?: string;
  }

  interface TypeGradients {
    one?: string;
    two?: string;
    three?: string;
  }

  interface TypeCatalog {
    purple1?: string;
    purple2?: string;
    purple3?: string;
    purple4?: string;
    blue1?: string;
    blue2?: string;
    blue3?: string;
    blue4?: string;
    green1?: string;
    green2?: string;
    green3?: string;
    green4?: string;
    red?: string;
    orange?: string;
    yellow?: string;
    teal?: string;
    gradient1?: string;
    gradient2?: string;
  }

  interface Palette {
    status: TypeStatus;
    icon: TypeIcon;
    dividers: TypeDividers;
    gradient: TypeGradients;
    catalog: TypeCatalog;
  }

  interface PaletteOptions {
    status?: TypeStatus;
    icon?: TypeIcon;
    dividers?: TypeDividers;
    gradient?: TypeGradients;
    catalog?: TypeCatalog;
  }

  interface SimplePaletteColorOptions {
    success?: string;
    info?: string;
    warning?: string;
    error?: string;
  }

  interface TypeBackground {
    secondary: string;
    tertiary: string;
    white: string;
    grayOverlay: string;
    purpleOverlay: string;
    greenOverlay: string;
  }

  interface TypeText {
    dark: string;
    brandPrimary: string;
    brandSecondary: string;
    disabledBlue: string;
  }

  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    large: true;
    desktop: true;
  }

  interface TypographyVariants {
    label1: React.CSSProperties;
    label2: React.CSSProperties;
    label3: React.CSSProperties;
    link1: React.CSSProperties;
    link2: React.CSSProperties;
    button1: React.CSSProperties;
    button2: React.CSSProperties;
    button3: React.CSSProperties;
    button4: React.CSSProperties;
    graph: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    label1?: React.CSSProperties;
    label2?: React.CSSProperties;
    label3?: React.CSSProperties;
    link1?: React.CSSProperties;
    link2?: React.CSSProperties;
    button1?: React.CSSProperties;
    button2?: React.CSSProperties;
    button3?: React.CSSProperties;
    button4?: React.CSSProperties;
    graph?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    label1?: true;
    label2?: true;
    label3?: true;
    link1?: true;
    link2?: true;
    button1?: true;
    button2?: true;
    button3?: true;
    button4?: true;
    graph?: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonOwnProps {
    mode?: "icon";
  }

  interface ButtonPropsVariantOverrides {
    solidGradient: true;
    solidPurple: true;
    solidGreen: true;
    solidWhite: true;
    solidDark: true;
    outlineGreen: true;
    outlinePurple: true;
    outlineWhite: true;
    clearGreen: true;
    clearPurple: true;
    clearWhite: true;
    clearDark: true;
    outlineDark: true;
    clearRed: true;
    clearPurpleUnderline: true;
    clearWhiteUnderline: true;
    scrollToTop: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsVariantOverrides {
    solidGradient: true;
    solidPurple: true;
    solidGreen: true;
    solidWhite: true;
    solidDark: true;
    outlineGreen: true;
    outlinePurple: true;
    outlineWhite: true;
    clearGreen: true;
    clearPurple: true;
    clearWhite: true;
    clearDark: true;
    outlineDark: true;
    clearRed: true;
    clearPurpleUnderline: true;
    clearWhiteUnderline: true;
    scrollToTop: true;
  }
}

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    translucent: true;
  }
}

declare module "@mui/material/Alert" {
  interface AlertPropsVariantOverrides {
    input: true;
    snackbar: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.purple[600],
    },
    secondary: {
      main: colors.green[1100],
    },
    background: {
      default: colors.blue[1500], // this is primary
      secondary: colors.blue[1100],
      tertiary: colors.blue[900],
      white: colors.gray[100],
      grayOverlay: `${colors.gray[1500]}59`,
      purpleOverlay: `${colors.purple[1500]}59`,
      greenOverlay: `${colors.green[1200]}59`,
    },
    text: {
      primary: colors.gray[100],
      secondary: colors.gray[900],
      dark: colors.blue[1100],
      brandPrimary: colors.purple[900],
      brandSecondary: colors.green[1000],
      disabled: colors.gray[1200],
      disabledBlue: colors.blue[500],
    },
    status: {
      success: colors.green[1200],
      info: colors.teal,
      warning: colors.orange,
      error: colors.purple[900],
    },
    icon: {
      default: colors.gray[100],
      brand: colors.purple[900],
    },
    dividers: {
      default: colors.gray[1100],
      brand: colors.purple[700],
      dark: colors.blue[1100],
    },
    gradient: {
      one: `linear-gradient(90deg, ${colors.purple[500]} 0%, ${colors.green[1200]} 100%)`,
      two: `linear-gradient(90deg, ${colors.green[1200]} 0%, ${colors.purple[500]} 100%)`,
      three: `linear-gradient(90deg, ${colors.green[1000]}80 0%, ${colors.purple[100]}80 100%)`,
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1200,
      large: 1440,
      desktop: 1512,
    },
  },
  typography: {
    fontFamily: workSans.style.fontFamily,
    body1: {
      fontFamily: workSans.style.fontFamily,
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "24px",
    },
    body2: {
      fontFamily: workSans.style.fontFamily,
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "20px",
    },
    label1: {
      fontFamily: unbounded.style.fontFamily,
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "24px",
      textTransform: "uppercase",
    },
    label2: {
      fontFamily: unbounded.style.fontFamily,
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
      textTransform: "uppercase",
    },
    label3: {
      fontFamily: unbounded.style.fontFamily,
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "17.36px",
      textTransform: "uppercase",
    },
    link1: {
      fontFamily: unbounded.style.fontFamily,
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
    },
    link2: {
      fontFamily: unbounded.style.fontFamily,
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "24px",
    },
    button1: {
      fontFamily: workSans.style.fontFamily,
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    },
    button2: {
      fontFamily: workSans.style.fontFamily,
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    },
    button3: {
      fontFamily: workSans.style.fontFamily,
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "24px",
    },
    button4: {
      fontFamily: workSans.style.fontFamily,
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "24px",
    },
    graph: {
      fontFamily: workSans.style.fontFamily,
      fontSize: "12px",
      lineHeight: "16px",
    },
  },
});

theme.palette.catalog = {
  purple1: colors.purple[400],
  purple2: colors.purple[600],
  purple3: colors.purple[800],
  purple4: colors.purple[1000],
  blue1: colors.blue[500],
  blue2: colors.blue[700],
  blue3: colors.blue[800],
  blue4: colors.blue[1000],
  green1: colors.blue[400],
  green2: colors.blue[700],
  green3: colors.blue[1100],
  green4: colors.blue[1300],
  red: colors.red,
  orange: colors.orange,
  yellow: colors.yellow,
  teal: colors.teal,
  gradient1: theme.palette.gradient.one,
  gradient2: theme.palette.gradient.two,
};

theme.typography.h1 = {
  fontFamily: unbounded.style.fontFamily,
  fontWeight: 500,
  fontSize: "80px",
  lineHeight: "80px",
  letterSpacing: "-0.04em",
  textTransform: "uppercase",
  [theme.breakpoints.down("tablet")]: {
    fontWeight: 400,
    fontSize: "48px",
    lineHeight: "48px",
  },
};

theme.typography.h2 = {
  fontFamily: unbounded.style.fontFamily,
  fontWeight: 500,
  fontSize: "48px",
  lineHeight: "48px",
  textTransform: "uppercase",
  [theme.breakpoints.down("tablet")]: {
    fontWeight: 500,
    fontSize: "32px",
    lineHeight: "40px",
  },
};

theme.typography.h3 = {
  fontFamily: unbounded.style.fontFamily,
  fontWeight: 600,
  fontSize: "32px",
  lineHeight: "40px",
  textTransform: "uppercase",
  [theme.breakpoints.down("tablet")]: {
    fontWeight: 600,
    fontSize: "32px",
    lineHeight: "40px",
  },
};

theme.typography.h4 = {
  fontFamily: unbounded.style.fontFamily,
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "32px",
  [theme.breakpoints.down("tablet")]: {
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "24px",
  },
};

theme.typography.h5 = {
  fontFamily: unbounded.style.fontFamily,
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "24px",
  textTransform: "uppercase",
};

theme.typography.h6 = {
  fontFamily: unbounded.style.fontFamily,
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "20px",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
};

theme.components = {
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
  MuiAvatar: {
    styleOverrides: {
      root: {
        transition: "filter 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        boxShadow: "none",
        "&.MuiPaper-root": {
          backgroundColor: "unset",
        },
        "&:before": {
          opacity: 1,
          backgroundColor: theme.palette.dividers.brand,
        },
        "&.Mui-expanded": {
          margin: "0px 0px 24px",
          [theme.breakpoints.down("desktop")]: {
            margin: "0px 0px 16px",
          },
        },
        "&.Mui-expanded:before": {
          backgroundColor: theme.palette.dividers.brand,
          opacity: 1,
        },
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        ...theme.typography.h4,
        padding: "16px 0px",
        [theme.breakpoints.down("desktop")]: {
          padding: "8px 0px",
        },
      },
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
        paddingTop: 0,
        paddingBottom: 0,
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
      root: {
        border: "none",
        "& .MuiDataGrid-withBorderColor": {
          border: "1px solid",
          borderImageSource: theme.palette.gradient.three,
        },
        "& .MuiDataGrid-columnHeader": {
          ...theme.typography.label3,
          [theme.breakpoints.down("tablet")]: {
            fontSize: "12px",
            padding: "0px 8px",
          },
        },
        "[class^=MuiDataGrid-cell]": {
          border: "none",
          padding: "0px 16px",
          [theme.breakpoints.down("tablet")]: {
            padding: "0px 8px",
          },
        },
        "& .MuiDataGrid-columnHeader .MuiDataGrid-columnSeparator": {
          display: "none",
        },
        "& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within":
          {
            outline: "none",
          },
        "& .MuiDataGrid-main": {
          // remove overflow hidden overwise sticky does not work
          overflow: "unset",
        },
        "& .MuiDataGrid-columnHeaders": {
          position: "sticky",
          top: 0,
          zIndex: 1,
        },
        "& .MuiDataGrid-virtualScroller": {
          // remove the space left for the header
          marginTop: "0 !important",
        },
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: `
      html, body {
        margin: 0;
        height: 100%;
        width: 100%;
      }

      body {
        background: ${theme.palette.background.default};
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
          borderColor: theme.palette.dividers.default,
          borderWidth: "1px",
        },
        ":after": {
          borderWidth: "1px",
        },
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        height: "72px",
        padding: "16px 64px",
        gap: "24px",
        justifyContent: "space-between",
        [theme.breakpoints.down("tablet")]: {
          padding: "16px 24px",
        },
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
      disableTouchRipple: true,
    },
  },
  MuiButton: {
    defaultProps: {
      disableRipple: true,
      disableFocusRipple: true,
      fullWidth: false,
    },
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        padding: ownerState.mode === "icon" ? "8px" : "8px 16px",
        ...theme.typography.button1,
        backgroundColor: "transparent",
        borderRadius: 0,
        boxShadow: "none",
        minWidth: "40px",
        height: "40px",
        "&:hover": {
          boxShadow: "none",
        },
      }),
    },
    variants: [
      {
        props: { variant: "solidGradient" },
        style: {
          background: theme.palette.gradient.one,
          color: theme.palette.text.dark,
          "&:hover": {
            background: theme.palette.gradient.one,
          },
        },
      },
      {
        props: { variant: "solidPurple" },
        style: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.primary,
          "&:hover": {
            backgroundColor: theme.palette.text.brandPrimary,
          },
          "&.Mui-disabled": {
            color: theme.palette.text.disabled,
            backgroundColor: "#A991D0",
          },
        },
      },
      {
        props: { variant: "solidGreen" },
        style: {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.text.dark,
          "&:hover": {
            backgroundColor: theme.palette.text.brandSecondary,
          },
          "&.Mui-disabled": {
            color: theme.palette.text.disabledBlue,
            backgroundColor: "#88BE90",
          },
        },
      },
      {
        props: { variant: "solidWhite" },
        style: {
          backgroundColor: theme.palette.background.white,
          color: theme.palette.text.dark,
          "&:hover": {
            backgroundColor: colors.gray[1300],
          },
          "&.Mui-disabled": {
            color: theme.palette.text.disabledBlue,
            backgroundColor: "#B8B8D3",
          },
        },
      },
      {
        props: { variant: "solidDark" },
        style: {
          backgroundColor: theme.palette.background.secondary,
          color: theme.palette.text.primary,
          "&:hover": {
            backgroundColor: theme.palette.background.default,
          },
          "&.Mui-disabled": {
            color: theme.palette.text.disabledBlue,
            backgroundColor: "#B8B8D3",
          },
        },
      },
      {
        props: { variant: "outlineGreen" },
        style: {
          color: theme.palette.text.brandSecondary,
          border: `1px solid ${theme.palette.text.brandSecondary}`,
          "&:hover": {
            backgroundColor: theme.palette.background.greenOverlay,
          },
          "&.Mui-disabled": {
            border: "1px solid #5C6B5E",
            color: "#5C6B5E",
          },
        },
      },
      {
        props: { variant: "outlineWhite" },
        style: {
          color: theme.palette.text.primary,
          border: `1px solid ${theme.palette.dividers.default}`,
          "&:hover": {
            backgroundColor: theme.palette.background.grayOverlay,
          },
          "&.Mui-disabled": {
            border: `1px solid ${theme.palette.text.disabledBlue}`,
            color: theme.palette.text.disabledBlue,
          },
        },
      },
      {
        props: { variant: "outlineDark" },
        style: {
          color: theme.palette.background.secondary,
          border: `1px solid ${theme.palette.background.secondary}`,
          "&:hover": {
            backgroundColor: theme.palette.background.grayOverlay,
          },
          "&.Mui-disabled": {
            border: `1px solid ${theme.palette.text.disabledBlue}`,
            color: theme.palette.text.disabledBlue,
          },
        },
      },
      {
        props: { variant: "clearGreen" },
        style: {
          color: theme.palette.text.brandSecondary,
          "&:hover": {
            backgroundColor: theme.palette.background.grayOverlay,
          },
          "&.Mui-disabled": {
            color: "#5C6B5E",
          },
        },
      },
      {
        props: { variant: "clearPurple" },
        style: {
          color: theme.palette.text.brandPrimary,
          "&:hover": {
            backgroundColor: theme.palette.background.grayOverlay,
          },
        },
      },
      {
        props: { variant: "clearWhite" },
        style: {
          color: theme.palette.text.primary,
          "&:hover": {
            backgroundColor: theme.palette.background.grayOverlay,
          },
          "&.Mui-disabled": {
            color: theme.palette.text.disabledBlue,
          },
        },
      },
      {
        props: { variant: "clearRed" },
        style: {
          color: theme.palette.catalog.red,
          "&:hover": {
            backgroundColor: theme.palette.background.grayOverlay,
          },
          "&.Mui-disabled": {
            color: "#7D5252",
          },
        },
      },
      {
        props: { variant: "clearDark" },
        style: {
          color: theme.palette.text.dark,
        },
      },
      {
        props: { variant: "clearPurpleUnderline" },
        style: {
          justifyContent: "flex-start",
          color: theme.palette.text.dark,
          padding: "0 0 16px",
          borderBottom: `1px solid ${theme.palette.dividers.dark}`,
        },
      },
      {
        props: { variant: "clearWhiteUnderline" },
        style: {
          justifyContent: "flex-start",
          color: theme.palette.background.white,
          padding: "0 0 16px",
          borderBottom: `1px solid ${theme.palette.dividers.default}`,
          gap: "8px",
          "&:hover": {
            backgroundColor: "unset",
          },
          "& .MuiButton-startIcon": {
            margin: 0,
          },
          "& .MuiButton-endIcon": {
            marginLeft: "auto",
          },
        },
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
          justifyContent: "flex-start",
          width: "100%",
        },
      },
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
        color: theme.palette.text.primary,
        minHeight: "40px",
        padding: "8px 16px",
        transition: ".3s ease",
        width: "fit-content",
        minWidth: "unset",
        maxWidth: "unset",
        "&:hover": {
          backgroundColor: `${colors.gray[1500]}bf`,
        },
        "&.Mui-selected": {
          backgroundColor: `${colors.gray[1500]}73`,
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
      component: NextLink,
    },
    styleOverrides: {
      root: {
        textDecoration: "none",
        width: "fit-content",
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      bar1Determinate: {
        background: theme.palette.gradient.two,
      },
      root: {
        backgroundColor: colors.gray[1500],
      },
    },
  },
  MuiFilledInput: {
    defaultProps: {
      hiddenLabel: true,
    },
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.background.grayOverlay,
        borderColor: theme.palette.dividers.default,
        borderRadius: 0,
        borderStyle: "solid",
        borderWidth: "1px",
        paddingLeft: "8px",
        paddingRight: "8px",
        "&:hover": {
          backgroundColor: theme.palette.background.grayOverlay,
        },
        "&:hover:not(.Mui-disabled, .Mui-error):before, &::before, &::after": {
          borderBottom: "none",
        },
        "&.Mui-focused": {
          borderColor: theme.palette.secondary.main,
          backgroundColor: theme.palette.background.grayOverlay,
        },
      },
      input: {
        height: "40px",
        padding: 0,
        "&::placeholder": {
          color: theme.palette.text.disabledBlue,
          opacity: 1,
        },
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      InputLabelProps: {
        component: Typography,
      },
    },
    styleOverrides: {
      root: {
        gap: "8px",
        "& .MuiFormLabel-root": {
          position: "relative",
          maxWidth: "unset",
          transform: "none",
          color: theme.palette.text.secondary,
        },
        "& .MuiFormLabel-root.Mui-focused": {
          color: theme.palette.text.secondary,
        },
        "& .MuiFormLabel-root.Mui-error": {
          color: theme.palette.text.secondary,
        },
        "& .MuiFormLabel-asterisk": {
          display: "none",
        },
        "& .MuiFormHelperText-root": {
          margin: 0,
          color: theme.palette.text.secondary,
          ...theme.typography.body1,
        },
        "& .MuiFormHelperText-root.Mui-error": {
          color: theme.palette.text.secondary,
        },
        "& .MuiInputBase-root": {
          margin: 0,
        },
        "& .MuiInputBase-input": {
          height: "100%",
          padding: 0,
          "&::placeholder": {
            color: theme.palette.text.disabledBlue,
          },
        },
      },
    },
    variants: [
      {
        props: { variant: "standard" },
        style: {
          "& .MuiInput-input": {
            color: colors.blue[900],
            height: "40px",
            marginBottom: "16px",
            padding: 0,
            "&::placeholder": {
              color: colors.blue[700],
              opacity: 1,
            },
          },
          "& .MuiInput-root": {
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottomColor: theme.palette.dividers.brand,
            },
            "&::before": {
              borderBottomColor: theme.palette.dividers.brand,
            },
            "&::after": {
              borderBottomColor: theme.palette.dividers.dark,
            },
          },
        },
      },
      {
        props: { variant: "filled" },
        style: {
          "& :not(.MuiInputBase-multiline).MuiFilledInput-root": {
            height: "40px",
          },
          "& .MuiFilledInput-root": {
            borderRadius: 0,
            gap: "8px",
            padding: "8px",
            border: `1px solid ${theme.palette.dividers.default}`,
            transition: "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            background: theme.palette.background.grayOverlay,
            "&.Mui-error": {
              border: `1px solid ${theme.palette.status.error}`,
              "&::before": {
                borderBottomColor: "transparent",
              },
            },
            "&.Mui-disabled": {
              opacity: 0.5,
            },
          },
          "& .MuiInputBase-adornedEnd": {
            padding: "8px 0 8px 8px",
          },
        },
      },
    ],
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        margin: "0 !important",
        maxHeight: "unset",
        height: "100%",
      },
      positionStart: {
        flexShrink: 0,
        minWidth: "24px",
        padding: 0,
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
        backgroundColor: theme.palette.background.secondary,
        borderColor: theme.palette.dividers.default,
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
        borderBottomColor: theme.palette.dividers.default,
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
  MuiDialogActions: {
    styleOverrides: {
      root: {
        borderTopColor: theme.palette.dividers.default,
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        padding: "16px",
      },
    },
  },
  MuiSnackbar: {
    styleOverrides: {
      root: {
        position: "absolute",
        width: "100%",
      },
      anchorOriginTopRight: {
        top: "-24px",
        right: "-24px",
        [theme.breakpoints.down("tablet")]: {
          top: "-8px",
          right: 0,
          left: 0,
        },
      },
    },
  },
  MuiAlert: {
    styleOverrides: {
      icon: {
        marginRight: "8px",
        padding: 0,
      },
      message: {
        alignSelf: "center",
        padding: 0,
      },
      action: {
        padding: 0,
        "& .MuiButtonBase-root": {
          marginLeft: "16px",
          marginRight: 0,
          padding: "0 8px",
        },
      },
    },
    variants: [
      {
        props: { severity: "error" },
        style: {
          backgroundColor: theme.palette.status.error,
          color: theme.palette.text.primary,
        },
      },
      {
        props: { severity: "info" },
        style: {
          backgroundColor: theme.palette.status.info,
          color: theme.palette.text.dark,
        },
      },
      {
        props: { severity: "success" },
        style: {
          backgroundColor: theme.palette.status.success,
          color: theme.palette.text.dark,
        },
      },
      {
        props: { severity: "warning" },
        style: {
          backgroundColor: theme.palette.status.warning,
          color: theme.palette.text.dark,
        },
      },
      {
        props: { variant: "input" },
        style: {
          borderRadius: 0,
          padding: "8px",
        },
      },
    ],
  },
  MuiSwitch: {
    styleOverrides: {
      root: {
        width: 56,
        height: 32,
        padding: 0,
        "& .MuiSwitch-switchBase": {
          padding: 0,
          margin: 2,
          transitionDuration: "300ms",
          "&.Mui-checked": {
            transform: "translateX(24px)",
            color: theme.palette.background.white,
            "& + .MuiSwitch-track": {
              backgroundColor: theme.palette.secondary.main,
              opacity: 1,
              border: 0,
            },
            "&.Mui-disabled + .MuiSwitch-track": {
              opacity: 0.5,
            },
          },
          "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: theme.palette.secondary.main,
            border: "6px solid #fff",
          },
          "&.Mui-disabled .MuiSwitch-thumb": {
            color: "gray",
          },
          "&.Mui-disabled + .MuiSwitch-track": {
            opacity: 0.3,
          },
        },
        "& .MuiSwitch-thumb": {
          boxSizing: "border-box",
          width: 28,
          height: 28,
        },
        "& .MuiSwitch-track": {
          borderRadius: 32 / 2,
          backgroundColor: theme.palette.dividers.default,
          opacity: 1,
        },
      },
    },
  },
  MuiPaper: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      outlined: {
        //to do: change outline variant to translucent
        backdropFilter: "blur(50px)",
        background:
          "linear-gradient(113deg, rgba(26, 27, 70, 0.50) 0%, rgba(26, 27, 70, 0.10) 100%)",
        border: "1px solid rgba(114, 255, 136, 0.20)",
        borderRadius: "8px",
        boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.15)",
        flex: 1,
        overflow: "auto", //add to css
        padding: "16px",
      },
    },
    variants: [
      {
        props: {
          variant: "translucent",
        },
        style: {
          backdropFilter: "blur(50px)",
          background: `linear-gradient(130deg, ${colors.blue[900]}4d -1.35%, ${colors.blue[900]}0d 100%)`,
          borderColor: `${colors.green[1000]}33`,
          borderStyle: "solid",
          borderWidth: "1px",
          borderRadius: "8px",
          boxShadow: `0px 4px 24px 0px ${colors.black}33`,
          flex: 1,
          overflow: "auto",
          padding: "16px",
        },
      },
    ],
  },
  MuiChip: {
    defaultProps: {
      variant: "outlined",
      size: "medium",
    },
    styleOverrides: {
      root: {
        padding: "8px 16px",
      },
      label: {
        padding: 0,
      },
      outlined: {
        borderStyle: "solid",
        borderWidth: "1px",
      },
      sizeMedium: ({ theme }) => ({
        ...theme.typography.label3,
        borderRadius: "2px",
      }),
      sizeSmall: {
        borderRadius: "4px",
        fontSize: "12px",
        height: "fit-content",
        lineHeight: "20px",
        padding: "2px 4px",
        width: "fit-content",
      },
    },
    variants: [
      {
        props: {
          status: "active",
        },
        style: {
          borderColor: "#72FF88",
          background: "rgba(57, 128, 68, 0.35)",
        },
      },
      {
        props: {
          status: "pending",
        },
        style: {
          borderColor: "#D0D6DC",
          background: "rgba(116, 119, 122, 0.35)",
        },
      },
      {
        props: {
          status: "declined",
        },
        style: {
          borderColor: "#995AFF",
          background: "rgba(55, 10, 128, 0.35)",
        },
      },
      {
        props: {
          status: "canceled",
        },
        style: {
          borderColor: theme.palette.catalog.orange,
          background: "rgba(116, 119, 122, 0.35)",
        },
      },
    ],
  },
  MuiCircularProgress: {
    defaultProps: {
      color: "primary",
    },
  },
  MuiSelect: {
    styleOverrides: {
      root: {
        "& svg": {
          // zIndex: -1,
          pointerEvents: "none",
          position: "absolute",
          right: "8px",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderWidth: 0,
        },
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        backgroundColor: theme.palette.background.grayOverlay,
        marginTop: "4px",
      },
    },
  },
  MuiStep: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiStepLabel: {
    styleOverrides: {
      label: {
        "&.Mui-active": {
          fontWeight: 400,
        },
      },
      labelContainer: {
        color: theme.palette.text.disabledBlue,
      },
    },
  },
};
