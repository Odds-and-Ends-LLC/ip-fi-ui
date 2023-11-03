// packages
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./ForBrands.module.css";

// components
import { Frame } from "@/components/shared";
import { TextBox, CustomList } from "..";

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
        width="400px"
        height="fit-content"
        headerJustify="space-between"
        contentAlign={contentAlign}
      >
        {children}
      </Frame>
    );
  };

  return (
    <Grid container sx={{ margin: { desktop: "72px 0", mobile: "0" } }}>
      <Grid item tablet={6} className={styles.brandsGridItem}>
        <Stack sx={{ padding: "64px 72px" }}>
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
        </Stack>
        <CustomList list={brandsBenefit} />
      </Grid>
      <Grid item tablet={6} className={styles.brandsGridItem}>
        <Stack className={styles.brandsRightContainer}>
          <Stack className={styles.brandsTitle}>
            <Typography variant="h2">FOR BRANDS</Typography>
            {/* <Image src="/icons/asterisk.svg" alt="icon" width={80} height={80} /> */}
          </Stack>
          <Stack className={styles.brandsImages}>
            <Box className={styles.brandsImagesLight} sx={{ backgroundColor: "info.main" }} />
            <Box className={styles.brandsWindow1}>
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
            <Box className={styles.brandsWindow2}>
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
    </Grid>
  );
}
