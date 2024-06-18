// packages
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Property } from "csstype";
import Image from "next/image";

// styles
import styles from "./page.module.css";

// components
import { LoginForm } from "@/sections/login";

// types
import { ResponsiveCssProp } from "@/types";

export default function Login() {
  const ArtBackground = ({
    display = "block",
  }: {
    display?: ResponsiveCssProp<Property.Display>;
  }) => {
    return (
      <Stack className={styles.artBackground} sx={{ display }}>
        <Image priority src="/images/login_gradient.png" alt="gradient" sizes="100%" fill />
        <Box
          className={styles.artBackgroundImgContainer}
          sx={{ maxWidth: { mobile: "480px", laptop: "1024px", position: "relative" } }}
        >
          <Image
            priority
            src="/images/login_art.png"
            alt="art"
            sizes="100%"
            fill
            className={styles.artBackgroundImg}
          />
        </Box>
      </Stack>
    );
  };

  return (
    <Grid container className={styles.login}>
      <Grid
        item
        mobile={12}
        laptop={6}
        className={styles.loginArtGrid}
        sx={{ display: { mobile: "none", laptop: "block" } }}
      >
        <Stack
          className={styles.loginArtGridContainer}
          sx={{ padding: { mobile: "24px", laptop: "96px 72px" } }}
        >
          <ArtBackground />
          <Box
            className={styles.loginArtImgContainer}
            sx={{ display: { mobile: "none", laptop: "block" } }}
          >
            <Image
              priority
              src="/images/wave_partition.svg"
              alt="partition"
              sizes="100%"
              fill
              className={styles.loginArtImg}
            />
          </Box>
          <Typography variant="h2">LOREM IPSUM DOLOR SIT AMET</Typography>
        </Stack>
      </Grid>
      <Grid
        item
        mobile={12}
        laptop={6}
        className={styles.loginFormGrid}
        sx={{
          backgroundColor: { mobile: "transparent", laptop: "background.tertiary" },
          padding: { mobile: "96px 24px 24px", laptop: "72px 24px 24px" },
        }}
      >
        <ArtBackground display={{ mobile: "block", laptop: "none" }} />
        <Stack className={styles.loginFormGridContainer}>
          <Box
            className={styles.loginFormMobileBg}
            sx={{ backgroundColor: "background.tertiary" }}
          />
          <Stack className={styles.loginFormContainer}>
            <Box className={styles.loginFormLogo}>
              <Image
                priority
                src="/images/logo.svg"
                alt="logo"
                fill
                style={{ aspectRatio: "106/40" }}
              />
            </Box>
            <LoginForm />
          </Stack>
          <Typography variant="label3">{new Date().getFullYear()} © Kek Labs.</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
