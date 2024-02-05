// packages
import { AppBar, Toolbar, Button, Stack, Drawer, Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// components
import { Discord, Instagram, Linkedin, Twitter } from "public/icons";

// styles
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("desktop"));
  const displayDesktop = { desktop: "flex", mobile: "none" };
  const displayMobile = { desktop: "none", mobile: "flex" };

  const renderLinks = () => (
    <Stack className={styles.navbarLinks} sx={{ flexDirection: { desktop: "row", mobile: "column" } }}>
      <Button variant="text" color="white" sx={{ display: displayDesktop }}>Explore</Button>
      <Button variant="gradient" sx={{ display: displayMobile }}>Explore</Button>
      <Button variant="gradientInverted" sx={{ ml: { desktop: "auto", mobile: "none" } }}>Login</Button>
    </Stack>
  );

  return (
    <AppBar>
      <Toolbar>
        <Link href="/">
          <Image src="/images/logo.svg" alt="logo" width={106} height={40} />
        </Link>
        <Box className={styles.navbarLinksContainer} sx={{ display: { desktop: "block", mobile: "none" } }}>
          {renderLinks()}
        </Box>
        <Button
          className={styles.navbarMobileMenu}
          variant="gradient"
          sx={{ display: { desktop: "none", mobile: "flex" } }}
          onClick={() => setDrawerOpen(true)}
        >
          <Image src="/icons/menu.svg" alt="menu" width={24} height={24} />
        </Button>
        {isMobile &&
          <Drawer
            open={drawerOpen}
            anchor="right"
            PaperProps={{
              className: styles.navbarMobileDrawer,
              sx: {
                bgcolor: "background.default"
              }
            }}
          >
            <Stack className={styles.navbarMobileDrawerHeader}>
              <Link href="/">
                <Image src="/images/logo.svg" alt="logo" width={106} height={40} />
              </Link>
              <Button
                className={styles.navbarMobileMenu}
                variant="gradient"
                sx={{ display: { desktop: "none", mobile: "flex" } }}
                onClick={() => setDrawerOpen(false)}
              >
                <Image src="/icons/close.svg" alt="menu" width={24} height={24} />
              </Button>
            </Stack>
            <Stack className={styles.navbarMobileDrawerContent}>
              {renderLinks()}
            </Stack>
            <Stack className={styles.navbarMobileDrawerFooter}>
              <Stack className={styles.navbarMobileDrawerSocials}>
                <IconButton color="secondary" href="/">
                  <Twitter />
                </IconButton>
                <IconButton color="secondary" href="/">
                  <Instagram />
                </IconButton>
                <IconButton color="secondary" href="/">
                  <Discord />
                </IconButton>
                <IconButton color="secondary" href="/">
                  <Linkedin />
                </IconButton>
              </Stack>
              <Typography variant="label">
                {new Date().getFullYear()} © IP-Fi. Powered by Phygital.eth.
              </Typography>
            </Stack>
          </Drawer>
        }
      </Toolbar>
    </AppBar>
  );
};
