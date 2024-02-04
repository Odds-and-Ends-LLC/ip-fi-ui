// packages
import { Button, Stack, TextField, Typography, useTheme } from "@mui/material";

// styles
import styles from "./JoinWaitlist.module.css";

// components

export default function JoinWaitlist() {
  const theme = useTheme();

  return (
    <Stack
      className={styles.joinWaitlist}
      sx={{
        background: theme.palette.background.gradientInverted,
      }}
    >
      <Stack
        className={styles.joinWaitlistContainer}
        sx={{
          alignItems: { desktop: "center" },
          flexDirection: { desktop: "row" },
          padding: { mobile: "40px 24px", tablet: "80px 100px" },
        }}
      >
        <Typography color="blue.main" sx={{ typography: { mobile: "h2-mobile", tablet: "h1" } }}>
          JOIN WAITLIST
        </Typography>
        <Stack className={styles.joinWaitlistInput} sx={{ maxWidth: { desktop: "540px" } }}>
          <TextField
            placeholder="Enter your email"
            variant="standard"
            sx={{
              "& .MuiInput-input": {
                width: { tablet: "calc(100% - 160px)" },
              },
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            className={styles.joinWaitlistButton}
            sx={{ position: { tablet: "absolute" } }}
          >
            SUBSCRIBE
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
