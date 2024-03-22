// packages
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";

// components
import { DiscordIcon, InstagramIcon, Linkedin, Twitter } from "public/icons";

// styles
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("desktop"));
  const displayDesktop = { desktop: "flex", mobile: "none" };
  const displayMobile = { desktop: "none", mobile: "flex" };

  useEffect(() => {
    const setPageBgColor = () => {
      if (pathname !== "/") {
        return "background.default";
      } else {
        return "background.black";
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 24) {
        setBackgroundColor(setPageBgColor());
      } else {
        setBackgroundColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      handleScroll();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const renderLinks = () => (
    <Stack
      className={styles.navbarLinks}
      sx={{ flexDirection: { desktop: "row", mobile: "column" } }}
    >
      <Stack className={styles.navbarLinksDesktop} sx={{ display: displayDesktop }}>
        <Button variant="text" color="white" href="/explore">
          Explore
        </Button>
        <Button variant="text" color="white">
          Trading
        </Button>
      </Stack>
      <Stack gap="16px" sx={{ display: displayMobile }}>
        <Button variant="gradient">Explore</Button>
        <Button variant="gradient">Trading</Button>
      </Stack>
      <Button
        href="/login"
        variant="gradientInverted"
        sx={{ ml: { desktop: "auto", mobile: "none" } }}
      >
        Login
      </Button>
    </Stack>
  );

  return pathname !== "/login" ? (
    <AppBar sx={{ backgroundColor: backgroundColor }}>
      <Toolbar>
        <Link href="/" className={styles.navbarLogo} rel="" target="">
          <Image src="/images/logo.svg" alt="logo" width={106} height={40} />
        </Link>
        <Box className={styles.navbarLinksContainer} sx={{ display: displayDesktop }}>
          {renderLinks()}
        </Box>
        <Button
          className={styles.navbarMobileMenu}
          variant="gradient"
          sx={{ display: displayMobile }}
          onClick={() => setDrawerOpen(true)}
        >
          <Image src="/icons/menu.svg" alt="menu" width={24} height={24} />
        </Button>
        {isMobile && (
          <Drawer
            open={drawerOpen}
            anchor="right"
            PaperProps={{
              className: styles.navbarMobileDrawer,
              sx: {
                bgcolor: "background.default",
              },
            }}
          >
            <Stack className={styles.navbarMobileDrawerHeader}>
              <Link href="/">
                <Image src="/images/logo.svg" alt="logo" width={106} height={40} />
              </Link>
              <Button
                className={styles.navbarMobileMenu}
                variant="gradient"
                sx={{ display: displayMobile }}
                onClick={() => setDrawerOpen(false)}
              >
                <Image src="/icons/close.svg" alt="menu" width={24} height={24} />
              </Button>
            </Stack>
            <Stack className={styles.navbarMobileDrawerContent}>{renderLinks()}</Stack>
            <Stack className={styles.navbarMobileDrawerFooter}>
              <Stack className={styles.navbarMobileDrawerSocials}>
                <IconButton color="secondary" href="/">
                  <Twitter />
                </IconButton>
                <IconButton color="secondary" href="/">
                  <InstagramIcon />
                </IconButton>
                <IconButton color="secondary" href="/">
                  <DiscordIcon />
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
        )}
      </Toolbar>
    </AppBar>
  ) : null;
}
