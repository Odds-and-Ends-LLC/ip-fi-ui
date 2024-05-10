// packages
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./ForBrands.module.css";

// components
import { Frame, TextBox, CustomList } from "@/components";

// types
import { AlignType } from "@/types";
import { ReactNode } from "react";

const brandsBenefit = [
  "COLLABORATE WITH OTHERS",
  "MAINTAIN ASSET OWNERSHIP",
  "EARN ADDITIONAL REVENUE",
  "SET CUSTOM LICENSING TERMS",
];

export default function ForBrands() {
  const Window = ({ title, contentAlign, children } : { title?: string; contentAlign?: AlignType; children?: ReactNode }) => {
    return (
      <Frame
        title={
          <>
            <Typography variant="h6">{title}</Typography>
            <Image src="/icons/circles.svg" alt="icon" width={40} height={8} />
            <Image src="/icons/window_buttons.svg" alt="buttons" width={70} height={18} />
          </>
        }
        height="fit-content"
        width="100%"
        headerJustify="space-between"
        contentAlign={contentAlign}
      >
        {children}
      </Frame>
    );
  };

  return (
    <Grid
      container
      columnSpacing="144px"
      direction={{ desktop: "row-reverse" }}
      sx={{
        padding: { mobile: "40px 24px", tablet: "136px 100px" },
        rowGap: { mobile: "80px" },
      }}
    >
      <Grid
        item
        desktop={6}
        className={styles.brandsGridItem}
        sx={{ gap: { mobile: "80px", tablet: "64px" } }}
      >
        <Stack className={styles.brandsTitle}>
          <Typography variant="h2">
            FOR BRANDS
          </Typography>
        </Stack>
        <Stack>
          <Stack className={styles.brandsImages}>
            <Box className={styles.brandsImagesGlow} sx={{ backgroundColor: "status.info" }} />
            <Box className={styles.brandsWindow1} sx={{ left: { mobile: "0", desktop: "-24px" } }}>
              <Window title="media" contentAlign="start">
                <Box>
                  <Typography variant="h6">brand collab ft. nft</Typography>
                  <Typography>Licensed for use.</Typography>
                </Box>
                <Box
                  className={styles.brandsImageBar}
                  sx={{
                    borderColor: "primary.main",
                  }}
                >
                  <Box
                    className={styles.brandsImageBarProgress}
                    sx={{
                      backgroundColor: "primary.main",
                    }}
                  />
                </Box>
                <Image src="/icons/playlist_buttons.svg" alt="buttons" width={120} height={18} />
              </Window>
            </Box>
            <Box
              className={styles.brandsWindow2}
              sx={{
                left: { desktop: "-8px" },
                bottom: { mobile: "0", desktop: "52px" },
              }}
            >
              <Window title="CloneX #19799">
                <Image src="/icons/check_circle.svg" alt="check" width={34} height={34} />
                <Typography>
                  BORED APP YACHT CLUB #11, CURRENTLY IN THE POSSESSION OF E11EVEN MIAMI.
                </Typography>
              </Window>
            </Box>
            <Box className={styles.brandsImage}>
              <Frame
                title={<Typography variant="h6">CloneX #19799</Typography>}
                imageSrc="/images/image_4.png"
              />
            </Box>
          </Stack>
        </Stack>
      </Grid>
      <Grid
        item
        desktop={6}
        className={styles.brandsGridItem}
        sx={{ gap: { mobile: "80px", tablet: "128px" } }}
      >
        <TextBox>
          <Typography color="text.gray">
            From Adidas to Nightclub E11even, businesses are “apeing in” to the NFT space. They
            often purchase an NFT themselves (the Florida nightclub recently paid more then $400,000
            for a single Bored Ape NFT). IP-Fi enables your IP to generate multiple revenue streams
            through a downflow of users all while not having to give up ownership of the asset in
            your wallet.
          </Typography>
        </TextBox>

        <CustomList list={brandsBenefit} />
      </Grid>
    </Grid>
  );
}