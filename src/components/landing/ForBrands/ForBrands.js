// packages
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./ForBrands.module.css";

// components
import { Frame, TextBox, CustomList } from "@/components/shared";

const brandsBenefit = [
  "Collaborate with NFT personas",
  "Dive into NFTs easily",
  "Set custom licensing terms",
  "Access NFTs without buying it",
];

export default function ForBrands() {
  const Window = ({ title, contentAlign, children }) => {
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
    <Grid container direction={{ desktop: "row-reverse" }}>
      <Grid item desktop={6} className={styles.brandsGridItem}>
        <Stack
          className={styles.brandsTitle}
          sx={{
            padding: {
              mobile: "40px 24px",
              tablet: "72px 100px",
              desktop: "136px 100px 64px 72px",
            },
          }}
        >
          <Typography sx={{ typography: { mobile: "h2-mobile", tablet: "h2" } }}>
            FOR BRANDS
          </Typography>
          {/* <Image src="/icons/asterisk.svg" alt="icon" width={80} height={80} /> */}
        </Stack>
        <Stack
          sx={{
            padding: { mobile: "40px 24px", tablet: "0 100px 72px", desktop: "0 72px 72px 100px" },
          }}
        >
          <Stack className={styles.brandsImages}>
            <Box className={styles.brandsImagesGlow} sx={{ backgroundColor: "info.main" }} />
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
            <Box className={styles.brandsWindow2} sx={{ left: { mobile: "0", desktop: "-8px" } }}>
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
      <Grid item desktop={6} className={styles.brandsGridItem}>
        <Box
          sx={{
            padding: {
              mobile: "40px 24px",
              tablet: "0 100px 72px",
              desktop: "136px 72px 64px 100px",
            },
          }}
        >
          <TextBox>
            <Typography color="text.gray">
              From Adidas to Nightclub E11even, businesses are “apeing in” to the NFT space. They
              often purchase an NFT themselves (the Florida nightclub recently paid more then
              $400,000 for a single Bored Ape NFT). IP-Fi enables your brand to collaborate with NFT
              personas across multiple collections and blockchains. Start partnering with Bored
              Apes, RTFKT Clones, Dead Fellas, and many other top NFT personas without having to buy
              the underlying NFTs.
            </Typography>
          </TextBox>
        </Box>
        <Box
          sx={{
            padding: {
              mobile: "40px 24px",
              tablet: "0 100px 72px",
              desktop: "64px 72px 136px 100px",
            },
          }}
        >
          <CustomList list={brandsBenefit} />
        </Box>
      </Grid>
    </Grid>
  );
}
