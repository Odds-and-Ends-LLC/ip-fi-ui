// packages
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./ForCollectors.module.css";

// components
import { Frame, TextBox, CustomList } from "@/components/shared";

const collectorsBenefit = [
  "Collaborate with brands",
  "Earn passive revenue",
  "Find or get endorsement deals",
  "Receive participation incentives",
];

export default function ForCollectors() {
  return (
    <Grid container>
      <Grid item desktop={6} className={styles.collectorsGridItem}>
        <Stack
          className={styles.collectorsTitle}
          sx={{
            padding: {
              mobile: "40px 24px",
              tablet: "136px 100px 72px",
              desktop: "136px 72px 64px 100px",
            },
          }}
        >
          <Typography sx={{ typography: { mobile: "h2-mobile", tablet: "h2" } }}>
            FOR
            <br />
            COLLECTORS
          </Typography>
          <Box
            className={styles.collectorsTitleAsterisk}
            sx={{ display: { mobile: "none", tablet: "block" } }}
          >
            <Image src="/icons/asterisk.svg" alt="icon" width={80} height={80} />
          </Box>
        </Stack>
        <Stack
          sx={{
            padding: { mobile: "40px 24px", tablet: "0 100px 72px", desktop: "0 72px 72px 100px" },
          }}
        >
          <Stack className={styles.collectorsImages}>
            <Box className={styles.collectorsImagesGlow} sx={{ backgroundColor: "info.main" }} />
            <Box
              className={styles.collectorsImage3}
              sx={{ left: { mobile: "0", desktop: "14px" } }}
            >
              <Frame
                title={<Typography variant="h6">CloneX #19799</Typography>}
                imageSrc="/images/image_3.png"
              />
            </Box>
            <Box
              className={styles.collectorsImage2}
              sx={{ right: { mobile: "0", desktop: "-36px" } }}
            >
              <Frame
                title={<Typography variant="h6">CloneX #19799</Typography>}
                imageSrc="/images/image_2.png"
              />
            </Box>
            <Box className={styles.collectorsImage1}>
              <Frame
                title={<Typography variant="h6">CloneX #19799</Typography>}
                imageSrc="/images/image_1.png"
              />
            </Box>
            <Box className={styles.collectorsWindow}>
              <Frame
                title={
                  <>
                    <Typography variant="h6">Notification</Typography>
                    <Image src="/icons/circles.svg" alt="icon" width={40} height={8} />
                  </>
                }
                width="100%"
                height="fit-content"
                headerJustify="space-between"
              >
                <Typography>A brand sent a proposal.</Typography>
                <Typography
                  variant="h6"
                  className={styles.collectorsWindowButton}
                  sx={{
                    backgroundColor: "primary.main",
                    color: "text.blue",
                  }}
                >
                  review
                </Typography>
              </Frame>
            </Box>
          </Stack>
        </Stack>
      </Grid>
      <Grid item desktop={6} className={styles.collectorsGridItem}>
        <Box
          sx={{
            padding: {
              mobile: "40px 24px",
              tablet: "0 100px 72px",
              desktop: "64px 100px 64px 72px",
            },
          }}
        >
          <TextBox>
            <Typography color="text.gray">
              We help you find brands and businesses looking to collaborate with NFT personas. Let
              us help your personas find the endorsement deals and collaborations of your dreams.
              You can add a stream of passive revenue to your collection, grow the profile of your
              personas, and receive exclusive on-chain incentives to participate.
            </Typography>
          </TextBox>
        </Box>
        <Box
          sx={{
            padding: {
              mobile: "40px 24px",
              tablet: "0 100px 72px",
              desktop: "64px 100px 64px 72px",
            },
          }}
        >
          <CustomList list={collectorsBenefit} />
        </Box>
      </Grid>
    </Grid>
  );
}
