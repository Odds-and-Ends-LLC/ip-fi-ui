// packages
import { Box, Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";

// components
import { DiscordIcon, InstagramIcon, LooksRareIcon, OpenSeaIcon, SettingsIcon, ShareIcon, Twitter, WebIcon } from "@/elements";
import { CollapsibleText, InfoList, ProfilePicture, ShareButton, WalletDisplay } from "@/components";
import { ProfileStats } from ".";

// styles
import styles from "./Profile.module.css";
import { useColor } from "color-thief-react";

export default function Profile() {
  const { data: color, loading } = useColor("/images/image_2.png", "hex");

  return (
    <Stack
      className={styles.profile}
      sx={{
        bgcolor: "background.default"
      }}
    >
      <Stack className={styles.profileBanner} sx={{ bgcolor: color }}>
        {!loading &&
          <>
            <Box
              className={styles.profileBannerShadow}
              sx={{ bgcolor: "background.black" }}
            />
            <Box className={styles.profileBannerWrapper}>
              <Image
                className={styles.profileBannerImage}
                src="/images/image_2.png"
                alt="profile banner"
                fill
              />
            </Box>
          </>
        }
      </Stack>
      <Stack
        className={styles.profileSection}
        sx={{
          padding: { mobile: "0px 24px 24px", tablet: "0px 64px 64px" },
          gap: { mobile: "16px", tablet: "24px" },
          bgcolor: "background.default"
        }}
      >
        <Box className={styles.profileSectionPfp}>
          <ProfilePicture image="/images/image_2.png" size="m" upload />
        </Box>
        <Stack
          className={styles.profileSectionName}
        >
          <Stack>
            <Typography variant="h4-desktop" color="text.primary">MARKIPLIER</Typography>
            <Typography variant="body2" color="text.disabledBlue">Active 4 hours ago</Typography>
          </Stack>
          <Stack className={styles.profileSectionButtons}>
            <Button
              startIcon={<SettingsIcon />}
              variant="outlineWhite"
              href="/profile/settings"
              sx={{
                display: { mobile: "none", tablet: "flex" },
              }}
            >
              SETTINGS
            </Button>
            <Button
              variant="outlineWhite"
              href="/profile/settings"
              sx={{
                display: { mobile: "flex", tablet: "none" },
                minWidth: { mobile: "40px" }
              }}
            >
              <SettingsIcon />
            </Button>
            <ShareButton title="SHARE PROFILE" link="" />
          </Stack>
        </Stack>
        <WalletDisplay
          variant="select"
          truncated
          withBackground
          walletAddress="5507FecAF4ce510xaDE345a6428b4C8A7Bd2180D5C"
        />
        <ProfileStats
          stats={[
            { label: "Collections", value: "84" },
            { label: "Contracts", value: "10" },
          ]}
        />
        <CollapsibleText>
          Collecting NFTs like stars. This section is up to 240 characters only. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
        </CollapsibleText>
        <InfoList
          info={[
            { label: "Joined", value: <Typography variant="body2" color="text.primary">509 Days ago</Typography> },
            { label: "Response Time", value: <Typography variant="h6" color="text.secondary">84%</Typography> },
            { label: "Response Rate", value: <Typography variant="body2" color="text.primary">Within Hours</Typography> },
          ]}
        />
        <Stack className={styles.profileSocials}>
          {/* <IconButton color="primary" href="/">
            <WebIcon />
          </IconButton>
          <IconButton color="primary" href="/">
            <Twitter />
          </IconButton>
          <IconButton color="primary" href="/">
            <InstagramIcon />
          </IconButton>
          <IconButton color="primary" href="/">
            <DiscordIcon />
          </IconButton>
          <IconButton color="primary" href="/">
            <OpenSeaIcon />
          </IconButton>
          <IconButton color="primary" href="/">
            <LooksRareIcon />
          </IconButton> */}
        </Stack>
        <Divider
          sx={{ borderColor: "dividerWhite.main" }}
        />
      </Stack>
    </Stack>
  );
};
