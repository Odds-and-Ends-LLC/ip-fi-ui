// packages
import { Stack, Typography } from "@mui/material";

// styles
import styles from "./Footer.module.css";

// components

export default function Footer() {
  return (
    <Stack
      className={styles.footer}
      sx={{
        padding: { mobile: "40px 24px", tablet: "80px 100px" },
        gap: { mobile: "40", tablet: "80px" },
      }}
    >
      <Stack>Logo</Stack>
      <Stack
        className={styles.footerLinks}
        sx={{
          flexDirection: { tablet: "row" },
        }}
      >
        <Stack>
          <Stack>
            <Typography variant="h6">TEAM</Typography>
            <Typography>@phygital_good</Typography>
            <Typography>@guyettaaron</Typography>
          </Stack>
          <Stack>
            <Typography variant="h6">CONTACT</Typography>
            <Typography>hello@ipfi.com</Typography>
          </Stack>
        </Stack>
        <Stack>
          <Typography variant="h6">LINKS</Typography>
          <Typography>Whitepaper</Typography>
          <Typography>Hiring</Typography>
          <Typography>Privacy</Typography>
          <Typography>Terms</Typography>
        </Stack>
        <Stack>
          <Typography>TWITTER</Typography>
          <Typography>INSTAGRAM</Typography>
          <Typography>DISCORD</Typography>
          <Typography>LINKEDIN</Typography>
        </Stack>
      </Stack>
      <Typography>{new Date().getFullYear()} © IP-Fi. Powered by Phygital.eth.</Typography>
    </Stack>
  );
}
