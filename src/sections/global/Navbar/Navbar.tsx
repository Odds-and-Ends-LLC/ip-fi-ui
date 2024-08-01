"use client";

// packages
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Link,
  Stack,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { truncate } from "@/utils/truncate";
import Image from "next/image";

// components
import { Avatar, Icon, Modal } from "@/components";

// styles
import styles from "./Navbar.module.css";

// actions
import { logout } from "@/lib/actions/auth";
import { userSessionAtom } from "@/atoms";

const coloredPaths = ["/catalogs", "/nfts", "/members"];

export default function Navbar() {
  const pathname = usePathname();
  const [userSession, setUserSession] = useAtom(userSessionAtom);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [logoutOpen, setLogoutOpen] = useState<boolean>(false);
  const [backgroundColor, setBackgroundColor] = useState<string>(
    coloredPaths.includes(pathname || "") ? "background.default" : "transparent",
  );
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("tablet"));
  const displayTablet = { tablet: "flex", mobile: "none" };
  const displayMobile = { tablet: "none", mobile: "flex" };

  useEffect(() => {
    if (coloredPaths.includes(pathname || "")) return;

    const handleScroll = () => {
      if (window.scrollY > 24) {
        setBackgroundColor("background.default");
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

  const handleLogout = async () => {
    await logout();
    setUserSession(null);
    setLogoutOpen(false);
  };

  const renderDesktopLinks = () => (
    <>
      <Stack className={styles.navbarLinksDesktop}>
        <Button variant="clearWhite" href="/explore">
          Explore
        </Button>
      </Stack>
      {pathname !== "/login" && (
        <Stack className={styles.navbarLinksDesktop}>
          {userSession && (
            <>
              <Button variant="clearWhite" mode="icon" href="/cart">
                <Icon icon="cart" />
              </Button>
              <Link
                href={`/${userSession.username}`}
                className={styles.navbarLogo}
                rel=""
                target=""
              >
                <Avatar image={userSession.pfp} size="s" />
              </Link>
              <Button variant="clearWhite" mode="icon" onClick={() => setLogoutOpen(true)}>
                <Icon icon="logout" />
              </Button>
            </>
          )}
          {!userSession && (
            <Button variant="solidGradient" href="/login">
              Login
            </Button>
          )}
        </Stack>
      )}
    </>
  );

  const renderMobileLinks = () => (
    <>
      <Stack className={styles.navbarLinksMobile}>
        {pathname !== "/login" && (
          <>
            {userSession && (
              <>
                <Link href={`/${userSession.username}`} rel="" target="">
                  <Stack
                    className={styles.navbarUserDetailsMobile}
                    onClick={() => setDrawerOpen(false)}
                  >
                    <Avatar image={userSession.pfp} size="s" />
                    <Stack>
                      <Typography variant="label2" color="text.primary">
                        {userSession.username}
                      </Typography>
                      {userSession?.walletAddresses?.map((address, i) => (
                        <Typography
                          key={i}
                          variant="label2"
                          color="text.brandSecondary"
                          textTransform="none"
                        >
                          {truncate(address, 4, 4)}
                        </Typography>
                      ))}
                    </Stack>
                  </Stack>
                </Link>
                <Divider flexItem />
              </>
            )}
            {!userSession && (
              <Button variant="solidGradient" href="/login">
                Login
              </Button>
            )}
          </>
        )}
        <Stack className={styles.navbarMobileButtons}>
          <Button variant="solidGradient" fullWidth href="/explore">
            Explore
          </Button>
          {userSession && (
            <Stack className={styles.navbarMobileUserButtons}>
              <Button
                variant="clearWhite"
                startIcon={<Icon icon="cart" />}
                endIcon={<Icon icon="arrowHeadRight" />}
                href="/cart"
                className={styles.mobileButtonClear}
              >
                <Typography variant="button1" width="100%" textAlign="start">
                  CART
                </Typography>
              </Button>
              <Button
                variant="outlineWhite"
                startIcon={<Icon icon="logout" />}
                onClick={() => setLogoutOpen(true)}
              >
                LOGOUT
              </Button>
            </Stack>
          )}
        </Stack>
      </Stack>
    </>
  );

  return (
    <AppBar sx={{ backgroundColor: backgroundColor }}>
      <Toolbar>
        <Link href="/" className={styles.navbarLogo} rel="" target="">
          <Image src="/images/logo.svg" alt="logo" width={106} height={40} />
        </Link>
        <Box className={styles.navbarLinksContainer} sx={{ display: displayTablet }}>
          <Stack
            className={styles.navbarLinks}
            sx={{ flexDirection: { tablet: "row", mobile: "column" } }}
          >
            {renderDesktopLinks()}
          </Stack>
        </Box>
        <Button
          className={styles.navbarMobileMenu}
          variant="solidGradient"
          sx={{ display: displayMobile }}
          onClick={() => setDrawerOpen(true)}
        >
          <Icon icon="menu" />
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
                <Icon icon="close" />
              </Button>
            </Stack>
            <Stack className={styles.navbarMobileDrawerContent}>
              <Stack
                className={styles.navbarLinks}
                sx={{ flexDirection: { tablet: "row", mobile: "column" }, flex: "1 0" }}
              >
                {renderMobileLinks()}
              </Stack>
            </Stack>
            <Stack className={styles.navbarMobileDrawerFooter}>
              <Stack className={styles.navbarMobileDrawerSocials}>
                <Button variant="solidGreen" mode="icon" href="/">
                  <Icon icon="twitterX" />
                </Button>
                <Button variant="solidGreen" mode="icon" href="/">
                  <Icon icon="instagram" />
                </Button>
                <Button variant="solidGreen" mode="icon" href="/">
                  <Icon icon="discord" />
                </Button>
                <Button variant="solidGreen" mode="icon" href="/">
                  <Icon icon="linkedIn" />
                </Button>
              </Stack>
              <Typography variant="label1">{new Date().getFullYear()} © Kek Labs.</Typography>
            </Stack>
          </Drawer>
        )}
      </Toolbar>
      <Modal
        title="Logout"
        titleIcon={<Icon icon="info" />}
        open={logoutOpen}
        onClose={() => setLogoutOpen(false)}
        actions={
          <>
            <Button variant="outlineWhite" onClick={() => setLogoutOpen(false)}>
              CANCEL
            </Button>
            <Button variant="solidGradient" onClick={handleLogout}>
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
