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
            <HeroTextCarousel texts={["LICENSING", "UTILITY", "REWARDS", "COLLAB", "SHARING"]} showTextIndex={turns - 1} />
            <Typography variant="h1" color="text.purple" sx={{ typography: { desktop: "h1", mobile: "h2" } }}>PLATFORM</Typography>
          </Stack>
          <Stack className={styles.heroReelMobile} sx={{ display: { desktop: "none", mobile: "flex" } }}>
            <HeroBubbleCarousel
              images={[
                "/images/image_1.png",
                "/images/image_2.png",
                "/images/image_3.png",
                "/images/image_4.png",
                "/images/image_1.png",
                "/images/image_2.png",
                "/images/image_3.png",
                "/images/image_4.png",
              ]}
              turns={turns}
              onTurn={() => setTurns(turns + 1 > 5 ? 1 : turns + 1)}
            />
          </Stack>
          <Typography className={styles.heroBannerText}>
            Earn rewards for licensing your IP to others and gain visibility into those rewards
            without giving up the rights to your assets. NFT holders can leverage their IP while
            maintaining it in their wallet, all while viewing their potential IP licensing
            earnings on-chain.
          </Typography>
          <Typography className={styles.heroBannerText}>
            If you love that Bored Ape or always wanted a CloneX, now you can license to access
            the IP, all while having the potential to earn rewards when other people license it
            after you. Get an authorized derivative that includes your license to the IP.
          </Typography>
        </Stack>
        <Typography variant="h6" color="text.secondary">
          ENGAGE, COLLECT, SHARE, CREATE, EARN, LICENSE, AND MORE WITH IPFI.
        </Typography>
      </Stack>
      <Stack className={styles.heroReel} sx={{ display: { desktop: "flex", mobile: "none" } }}>
        <HeroBubbleCarousel
          images={[
            "/images/image_1.png",
            "/images/image_2.png",
            "/images/image_3.png",
            "/images/image_4.png",
            "/images/image_1.png",
            "/images/image_2.png",
            "/images/image_3.png",
            "/images/image_4.png",
          ]}
          turns={turns}
          onTurn={() => setTurns(turns + 1 > 5 ? 1 : turns + 1)}
        />
      </Stack>
    </Stack>
  );
}
