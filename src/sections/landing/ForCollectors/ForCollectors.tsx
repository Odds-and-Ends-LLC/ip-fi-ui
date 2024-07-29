// packages
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./ForCollectors.module.css";

// components
import { Frame, TextBox, CustomList } from "@/components";

const collectorsBenefit = [
  "SHOWCASE NEW IP",
  "EARN PASSIVE REVENUE",
  "RECEIVE PARTICIPATION INCENTIVES",
  "ACCESS NFT WITHOUT PURCHASING IT",
];

export default function ForCollectors() {
  return (
    <Grid
      container
      columnSpacing="144px"
      sx={{
        padding: { mobile: "40px 24px", tablet: "72px 100px" },
        rowGap: { mobile: "80px" },
      }}
    >
      <Grid
        item
        desktop={6}
        className={styles.collectorsGridItem}
        sx={{ gap: { mobile: "80px", tablet: "64px" } }}
      >
        <Stack className={styles.collectorsTitle} sx={{ paddingTop: { tablet: "64px" } }}>
          <Typography variant="h2">
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
        <Stack className={styles.collectorsImages}>
          <Box className={styles.collectorsImagesGlow} sx={{ bgcolor: "status.info" }} />
          <Box className={styles.collectorsImage3} sx={{ left: { mobile: "0", desktop: "14px" } }}>
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
                  <Image src="/images/circles_window.svg" alt="icon" width={40} height={8} />
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
                  backgroundColor: "secondary.main",
                  color: "background.secondary",
                }}
              >
                REVIEW
              </Typography>
            </Frame>
          </Box>
        </Stack>
      </Grid>
      <Grid
        item
        desktop={6}
        className={styles.collectorsGridItem}
        sx={{ gap: { mobile: "80px", tablet: "128px" } }}
      >
        <TextBox>
          <Typography color="text.gray">
            iPFi makes it easy to find NFT personas all while giving you the potential to earn by
            being early to do so. Think a Bored Ape is going to release his own coffee brand? Get
            in early and add a stream of passive revenue to your collection, grow the profile of
            your personas, and receive exclusive on-chain incentives to participate.
          </Typography>
        </TextBox>
        <CustomList list={collectorsBenefit} />
      </Grid>
    </Grid>
  );
}
