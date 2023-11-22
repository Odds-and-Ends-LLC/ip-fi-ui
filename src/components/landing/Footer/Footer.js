// packages
import { Button, Link, Stack, Typography } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import Image from "next/image";

// styles
import styles from "./Footer.module.css";
import { Discord, Instagram, Linkedin, Twitter } from "public/icons";

// components

export default function Footer() {
  const SocialLink = ({ children, icon, href = "/" }) => {
    return (
      <Button
        variant="underlined"
        href={href}
        startIcon={icon}
        endIcon={<ArrowOutward color="primary" />}
        target="_blank"
        rel="noreferrer"
      >
        <Typography variant="button" className={styles.footerSocialsText}>
          {children}
        </Typography>
      </Button>
    );
  };
  return (
    <Stack
      className={styles.footer}
      sx={{
        padding: { mobile: "40px 24px", tablet: "80px 100px" },
        gap: { mobile: "40px", tablet: "80px" },
      }}
    >
      <Image src="/images/logo.svg" alt="logo" width={106} height={40} />
      <Stack
        className={styles.footerLinksGrid}
        sx={{
          flexDirection: { tablet: "row" },
        }}
      >
        <Stack className={styles.footerTeamAndContact}>
          <Stack className={styles.footerTeam}>
            <Typography variant="h6">TEAM</Typography>
            <Link href="/">@phygital_good</Link>
            <Link href="/">@guyettaaron</Link>
          </Stack>
          <Stack className={styles.footerContact}>
            <Typography variant="h6">CONTACT</Typography>
            <Link href="/">hello@ipfi.com</Link>
          </Stack>
        </Stack>
        <Stack className={styles.footerLinks}>
          <Typography variant="h6">LINKS</Typography>
          <Link href="/">Whitepaper</Link>
          <Link href="/">Hiring</Link>
          <Link href="/">Privacy</Link>
          <Link href="/">Terms</Link>
        </Stack>
        <Stack className={styles.footerSocials}>
          <SocialLink icon={<Twitter />} href="/">
            TWITTER
          </SocialLink>
          <SocialLink icon={<Instagram />} href="/">
            INSTAGRAM
          </SocialLink>
          <SocialLink icon={<Discord />} href="/">
            DISCORD
          </SocialLink>
          <SocialLink icon={<Linkedin />} href="/">
            LINKEDIN
          </SocialLink>
        </Stack>
      </Stack>
      <Typography variant="label">
        {new Date().getFullYear()} © IP-Fi. Powered by Phygital.eth.
      </Typography>
    </Stack>
  );
}
