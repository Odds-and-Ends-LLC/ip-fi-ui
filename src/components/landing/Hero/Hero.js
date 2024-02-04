// packages
import { Button, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

// components
import { HeroBubbleCarousel, HeroTextCarousel } from ".";

// styles
import styles from "./Hero.module.css";

export default function Hero() {
  const [turns, setTurns] = useState(1);

  return (
    <Stack
      className={styles.hero}
      sx={{
        p: {
          tablet: "100px",
          mobile: "40px 24px"
        }
      }}
    >
      <Stack
        className={styles.heroText}
        sx={{
          width: {
            desktop: "640px",
            mobile: "100%",
          },
          pr: {
            desktop: "111px",
            mobile: "0px",
          }
        }}
      >
        <Stack className={styles.heroBanner}>
          <Stack>
            <Typography variant="h1" color="text.secondary" sx={{ typography: { desktop: "h1", mobile: "h2" } }}>NFT</Typography>
            <HeroTextCarousel texts={["LICENSING", "COLLAB", "UTILITY"]} showTextIndex={turns - 1} />
            <Typography variant="h1" color="text.purple" sx={{ typography: { desktop: "h1", mobile: "h2" } }}>PLATFORM</Typography>
          </Stack>
          <Stack className={styles.heroReelMobile} sx={{ display: { desktop: "none", mobile: "flex" } }}>
            <HeroBubbleCarousel
              images={[
                "/images/image_1.png",
                "/images/image_2.png",
                "/images/image_3.png",
                "/images/image_4.png",
                "/images/image_4.png",
              ]}
              turns={turns}
              onTurn={() => setTurns(turns + 1 > 3 ? 1 : turns + 1)}
            />
          </Stack>
          <Typography className={styles.heroBannerText}>
            We connect brands of all sizes to NFT IP to facilitate collaboration and cobranding opportunities.
            With IP-Fi, you can find the licensing deal of your dreams or search for
            opportunities that will unlock mutual value for NFT collectors and brands alike.
          </Typography>
          <Typography className={styles.heroBannerText}>
            We are on a mission to help brands enter the NFT world without spending $400,000 worth
            of Ethereum on a Bored Ape, while at the same time helping NFT collectors build up the
            profile of their NFT personas and generate a stream of passive income.
          </Typography>
        </Stack>
        <Typography variant="h6" color="text.secondary">
          Engage, collect, share, create, earn, license, and more with IP-Fi.
        </Typography>
        <TextField
          placeholder="Enter your email"
          variant="standard"
          InputProps={{
            endAdornment:
              <InputAdornment position="end">
                <Button variant="contained">
                  Submit
                </Button>
              </InputAdornment>,
          }}
        />
      </Stack>
      <Stack className={styles.heroReel} sx={{ display: { desktop: "flex", mobile: "none" } }}>
        <HeroBubbleCarousel
          images={[
            "/images/image_1.png",
            "/images/image_2.png",
            "/images/image_3.png",
            "/images/image_4.png",
            "/images/image_4.png",
          ]}
          turns={turns}
          onTurn={() => setTurns(turns + 1 > 3 ? 1 : turns + 1)}
        />
      </Stack>
    </Stack>
  );
}
