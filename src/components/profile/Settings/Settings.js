// packages
import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button, Stack } from "@mui/material";

// styles
import styles from "./Settings.module.css";

// components
import { ArrowLeftIcon, PickAvatarIcon, SettingsIcon, WalletIcon } from "public/icons";
import { BackgroundCircles, Tabs } from "@/components/shared";
import { SettingsProfile, SettingsAccount, SettingsWallet } from "./";

const data = {
  walletAddresses: [
    "5507FecAF4ce510xaDE345a6428b4C8A7Bd2180D5C",
    "5507FecAF4ce510xaDE345a6428b4C8A7Bd2180D5C",
    "5507FecAF4ce510xaDE345a6428b4C8A7Bd2180D5C",
  ],
};

export default function Settings() {
  const pathname = usePathname();
  const router = useRouter();
  const urlQuery = useSearchParams();
  const tab = urlQuery.get("tab");

  const handleTabChange = (value) => {
    router.replace(pathname + "?tab=" + value);
  };

  useEffect(() => {
    if (!tab) router.replace(pathname + "?tab=profile");
  }, [pathname, router, tab]);

  return (
    <Stack
      className={styles.settings}
      sx={{
        padding: { mobile: "80px 24px 24px", tablet: "134px 68px 74px" },
        backgroundColor: "blue.main",
      }}
    >
      <BackgroundCircles
        width="1024px"
        height="832px"
        containerPlacement={{ bottom: "48px" }}
        circle2Props={{ placement: { top: "96px", right: "168px" } }}
        circleOutlineProps={{ placement: { bottom: 0, right: 0 } }}
      />
      <Stack
        className={styles.settingsPaper}
        sx={{ flexDirection: { mobile: "column", laptop: "row" } }}
      >
        <Stack
          className={styles.tabsLaptopUp}
          sx={{ backgroundColor: "blue.dark", display: { mobile: "none", laptop: "flex" } }}
        >
          <Tabs
            orientation="vertical"
            value={tab}
            tabs={[
              { label: "PROFILE", value: "profile", icon: <PickAvatarIcon size={18} /> },
              { label: "ACCOUNT", value: "account", icon: <SettingsIcon size={18} /> },
              { label: "WALLET", value: "wallet", icon: <WalletIcon size={18} /> },
            ]}
            onChange={(value) => handleTabChange(value)}
          />
        </Stack>
        <Stack
          className={styles.tabsMobileUp}
          sx={{ backgroundColor: "blue.dark", display: { mobile: "flex", laptop: "none" } }}
        >
          <Tabs
            variant="fullWidth"
            value={tab}
            tabs={[
              { label: "PROFILE", value: "profile" },
              { label: "ACCOUNT", value: "account" },
              { label: "WALLET", value: "wallet" },
            ]}
            onChange={(value) => handleTabChange(value)}
          />
        </Stack>
        <Stack
          className={styles.tabPanelContainer}
          sx={{
            padding: {
              mobile: "0 0 4px",
              laptop: "4px 0",
            },
          }}
        >
          <Stack
            className={styles.tabPanel}
            sx={{ padding: { mobile: "12px 0 20px", laptop: "24px 42px 42px" } }}
          >
            <Button startIcon={<ArrowLeftIcon />}>BACK TO PROFILE</Button>
            <Stack className={styles.tabPanelContent}>
              {tab === "profile" && <SettingsProfile />}
              {tab === "account" && <SettingsAccount />}
              {tab === "wallet" && <SettingsWallet data={data} />}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
