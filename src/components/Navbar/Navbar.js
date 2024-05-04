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
  useTheme,
} from "@mui/material";
import Image from "next/image";

// components
import { DiscordIcon, InstagramIcon, Linkedin, LogoutIcon, Twitter, WarningIcon } from "@/elements/icons";
import { Avatar, Modal } from "..";

// styles
import styles from "./Navbar.module.css";

// actions
import { logout } from "@/lib/actions/auth";

// types
import { User } from "@/types";


/**
 * @param {{ user: User | null }} props
 */

export default function Navbar({
  user,
}) {
  const theme = useTheme();
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("desktop"));
  const displayDesktop = { desktop: "flex", mobile: "none" };
  const displayMobile = { desktop: "none", mobile: "flex" };

  useEffect(() => {
    const setPageBgColor = () => {
      if (pathname !== "/") {
        return theme.palette.background.default;
      } else {
        return theme.palette.background.default;
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

  const handleLogout = () => {
    logout();
    setLogoutOpen(false);
  };

  const renderLinks = () => (
    <Stack
      className={styles.navbarLinks}
      sx={{ flexDirection: { desktop: "row", mobile: "column" } }}
    >
      <Stack className={styles.navbarLinksDesktop}>
        <Button variant="clearWhite" href="/explore">
          Explore
        </Button>
      </Stack>
      <Stack className={styles.navbarLinksDesktop}>
        {user && (
          <>
            <Link href="/profile" className={styles.navbarLogo} rel="" target="">
              <Avatar image={user.pfp} size="s" />
            </Link>
            <Button variant="clearWhite" mode="icon" onClick={() => setLogoutOpen(true)}>
              <LogoutIcon />
            </Button>
          </>
        )}
        {(!user && pathname !== "/login") && (
          <Button
            variant="solidGradient"
            href="/login"
          >
            Login
          </Button>
        )}
      </Stack>
    </Stack>
  );

  return (
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
          variant="solidGradient"
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
                variant="solidGradient"
                sx={{ display: displayMobile }}
                onClick={() => setDrawerOpen(false)}
              >
                <Image src="/icons/close.svg" alt="menu" width={24} height={24} />
              </Button>
            </Stack>
            <Stack className={styles.navbarMobileDrawerContent}>{renderLinks()}</Stack>
            <Stack className={styles.navbarMobileDrawerFooter}>
              <Stack className={styles.navbarMobileDrawerSocials}>
                {/* <IconButton color="secondary" href="/">
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
                </IconButton> */}
              </Stack>
              <Typography variant="label">
                {new Date().getFullYear()} © Kek Labs.
              </Typography>
            </Stack>
          </Drawer>
        )}
      </Toolbar>
      <Modal
        title="Logout"
        titleIcon={<WarningIcon />}
        open={logoutOpen}
        onClose={() => setLogoutOpen(false)}
        actions={
          <>
            <Button variant="outlineWhite" onClick={() => setLogoutOpen(false)}>
              CANCEL
            </Button>
            <Button
              variant="solidGradient"
              onClick={handleLogout}
            >
              YES, LOGOUT
            </Button>
          </>
        }
      >
        <Typography variant="body1">Are you sure you want to logout of iP-Fi?</Typography>
      </Modal>
    </AppBar>
  );
}
