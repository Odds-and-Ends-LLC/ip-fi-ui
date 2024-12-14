// packages
import { Button, Link, Stack, Typography } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import { ReactNode } from "react";
import Image from "next/image";

// styles
import styles from "./Footer.module.css";
import { Icon } from "..";

// components

export default function Footer() {
  const SocialLink = ({ children, icon, href = "/" } : { children: ReactNode, icon: any; href: string;  }) => {
    return (
      <Button
        variant="clearWhiteUnderline"
        href={href}
        startIcon={icon}
        endIcon={<ArrowOutward color="secondary" />}
        target="_blank"
        rel="noreferrer"
      >
        {children}
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
        <Stack
          className={styles.footerTeamAndContact}
          sx={{ gap: { mobile: "40px", tablet: "24px" } }}
        >
          <Stack className={styles.footerTeam}>
            <Typography variant="h6">TEAM</Typography>
            <Link href="https://x.com/guyettaaron" color="text.brandSecondary">@guyettaaron</Link>
          </Stack>
          <Stack className={styles.footerContact}>
            <Typography variant="h6">CONTACT</Typography>
            <Link href="/" color="text.brandSecondary">hello@ipfi.com</Link>
          </Stack>
        </Stack>
        <Stack className={styles.footerLinks}>
          <Typography variant="h6">LINKS</Typography>
          <Link href="/" color="text.brandSecondary">Whitepaper</Link>
          <Link href="/" color="text.brandSecondary">Hiring</Link>
          <Link href="/" color="text.brandSecondary">Privacy</Link>
          <Link href="/" color="text.brandSecondary">Terms</Link>
        </Stack>
        <Stack className={styles.footerSocials}>
          <SocialLink icon={<Icon icon="twitterX" color="secondary.main" />} href="/">
            TWITTER
          </SocialLink>
          <SocialLink icon={<Icon icon="instagram" color="secondary.main" />} href="/">
            INSTAGRAM
          </SocialLink>
          <SocialLink icon={<Icon icon="discord" color="secondary.main" />} href="/">
            DISCORD
          </SocialLink>
          <SocialLink icon={<Icon icon="linkedIn" color="secondary.main" />} href="/">
            LINKEDIN
          </SocialLink>
        </Stack>
      </Stack>
      <Typography variant="label1">
        {new Date().getFullYear()} © Kek Labs.
      </Typography>
    </Stack>
  );
}
