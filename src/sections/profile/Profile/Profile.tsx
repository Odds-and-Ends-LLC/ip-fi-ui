"use client";

// packages
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import { useHydrateAtoms } from "jotai/utils";
import { useColor } from "color-thief-react";
import Image from "next/image";

// components
import { CollapsibleText, Icon, InfoList, ProfilePicture, ShareButton, Tabs, WalletDisplay } from "@/components";
import { ProfileStats } from ".";

// styles
import styles from "./Profile.module.css";
import { profileViewAtom, userSessionAtom } from "@/atoms";
import { usePathname } from "next/navigation";
import ProfileCatalogs from "../ProfileCatalogs";
import ProfileNFTs from "../ProfileNFTs";
import { UserType } from "@/types";
import { useAtomValue } from "jotai";

export default function Profile({
  user
} : {
  user: UserType;
}) {
  useHydrateAtoms([[profileViewAtom, user]]);

  const userSession = useAtomValue(userSessionAtom);
  const pathname = usePathname();
  const fragments = pathname.split("/").filter((fragment) => fragment !== "") ;
  const profileTab = fragments[1] || "catalogs";
  const loggedInUser = user.id === userSession?.userId;

  const { data: color, loading } = useColor(user.pfp || "", "hex");

  const handleTabChange = (value: string) => {
    window.history.pushState(null, "", `/${user.username}/${value}`);
  }

  return (
    <Stack
      className={styles.profile}
      sx={{
        bgcolor: "background.secondary"
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
                src={user.pfp || ""}
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
          bgcolor: "background.secondary"
        }}
      >
        <Box className={styles.profileSectionPfp}>
          <ProfilePicture image={user.pfp} size="m" />
        </Box>
        <Stack
          className={styles.profileSectionName}
        >
          <Stack>
            <Typography variant="h4" color="text.primary">{user.username}</Typography>
            {user.lastActiveAt && <Typography variant="body2" color="text.disabledBlue">Active {formatDistanceToNow(user.lastActiveAt, { addSuffix: true })}</Typography>}
          </Stack>
          <Stack className={styles.profileSectionButtons}>
            {loggedInUser &&
              <Button
                startIcon={<Icon icon="settings" />}
                variant="outlineWhite"
                href="/settings"
                sx={{
                  display: { mobile: "none", tablet: "flex" },
                }}
              >
                SETTINGS
              </Button>
            }
            <Button
              variant="outlineWhite"
              href="/profile/settings"
              sx={{
                display: { mobile: "flex", tablet: "none" },
                minWidth: { mobile: "40px" }
              }}
            >
              <Icon icon="settings" />
            </Button>
            <ShareButton title="SHARE PROFILE" link={`/${user.username}`} />
          </Stack>
        </Stack>
        <WalletDisplay
          type="truncated"
          withBackground
          walletAddress="5507FecAF4ce510xaDE345a6428b4C8A7Bd2180D5C"
        />
        <ProfileStats
          stats={[
            { label: "Collections", value: user.collectionCount.toString() },
            { label: "Catalogs", value: user.catalogCount.toString() },
          ]}
        />
        {user.about &&
          <CollapsibleText>
            {user.about}
          </CollapsibleText>
        }
        <InfoList
          info={[
            {
              label: "Joined",
              value:
                <Typography variant="body2" color="text.primary">
                  {formatDistanceToNow(user.joinedAt, { addSuffix: true })}
                </Typography>
            },
            // { label: "Response Time", value: <Typography variant="h6" color="text.secondary">84%</Typography> },
            // { label: "Response Rate", value: <Typography variant="body2" color="text.primary">Within Hours</Typography> },
          ]}
        />
        <Stack className={styles.profileSocials}>
          {user.website &&
            <Button mode="icon" variant="clearGreen" href={user.website}>
              <Icon icon="website" />
            </Button>
          }
          {user.twitter &&
            <Button mode="icon" variant="clearGreen" href={user.twitter}>
              <Icon icon="twitterX" />
            </Button>
          }
          {user.instagram &&
            <Button mode="icon" variant="clearGreen" href={user.instagram}>
              <Icon icon="instagram" />
            </Button>
          }
          {user.discord &&
            <Button mode="icon" variant="clearGreen" href={user.discord}>
              <Icon icon="discord" />
            </Button>
          }
          {user.opensea &&
            <Button mode="icon" variant="clearGreen" href={user.opensea}>
              <Icon icon="openSea" />
            </Button>
          }
          {user.looksRare &&
            <Button mode="icon" variant="clearGreen" href={user.looksRare}>
              <Icon icon="looksRare" />
            </Button>
          }
        </Stack>
        <Divider
          sx={{ borderColor: "dividers.default" }}
        />
        <Stack sx={{ position: "sticky", top: "72px", height: "72px", justifyContent: "center", zIndex: 10, bgcolor: "background.secondary" }}>
          <Tabs
            value={profileTab}
            tabs={[
              { label: "CATALOGS", value: "catalogs" },
              { label: "NFTS", value: "nfts" },
            ]}
            onChange={handleTabChange}
            tabsStyle={{ px: { mobile: "0", tablet: "0px" } }}
          />
        </Stack>
        {profileTab === "catalogs" && <ProfileCatalogs />}
        {profileTab === "nfts" && <ProfileNFTs />}
      </Stack>
    </Stack>
  );
};
