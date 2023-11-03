// packages
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./ForCollectors.module.css";

// components
import { Frame } from "@/components/shared";
import { TextBox, CustomList } from "..";

const collectorsBenefit = [
  "Collaborate with brands",
  "Earn passive revenue",
  "Find or get endorsement deals",
  "Receive participation incentives",
];

export default function ForCollectors() {
  return (
    <Grid container>
      <Grid item tablet={6} className={styles.collectorsGridItem}>
        <Stack className={styles.collectorsLeftContainer}>
          <Stack className={styles.collectorsTitle}>
            <Typography variant="h2">
              FOR
              <br />
              COLLECTORS
            </Typography>
            <Image src="/icons/asterisk.svg" alt="icon" width={80} height={80} />
          </Stack>
          <Stack className={styles.collectorsImages}>
            <Box className={styles.collectorsImagesLight} sx={{ backgroundColor: "info.main" }} />
            <Box className={styles.collectorsImage3}>
              <Frame
                title={<Typography variant="h6">CloneX #19799</Typography>}
                imageSrc="/images/image_3.png"
              />
            </Box>
            <Box className={styles.collectorsImage2}>
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
                width="350px"
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
      <Grid item tablet={6} className={styles.collectorsGridItem}>
        <Stack sx={{ padding: "64px 72px" }}>
          <TextBox>
            <Typography color="text.gray">
              We help you find brands and businesses looking to collaborate with NFT personas. Let
              us help your personas find the endorsement deals and collaborations of your dreams.
              You can add a stream of passive revenue to your collection, grow the profile of your
              personas, and receive exclusive on-chain incentives to participate.
            </Typography>
          </TextBox>
        </Stack>
        <CustomList list={collectorsBenefit} />
      </Grid>
    </Grid>
  );
}
