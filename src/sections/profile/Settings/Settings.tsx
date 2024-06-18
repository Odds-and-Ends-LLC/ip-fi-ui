// packages
import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button, Stack } from "@mui/material";

// styles
import styles from "./Settings.module.css";

// components
import { Icon, Tabs } from "@/components";
import { SettingsProfile, SettingsAccount, SettingsWallet, SettingsBackground } from ".";

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

  const handleTabChange = (value: string) => {
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
        backgroundColor: "background.secondary",
      }}
    >
      <SettingsBackground />
      <Stack
        className={styles.settingsPaper}
        sx={{ flexDirection: { mobile: "column", laptop: "row" } }}
      >
        <Stack
          className={styles.tabsLaptopUp}
          sx={{
            backgroundColor: "background.tertiary",
            display: { mobile: "none", laptop: "flex" },
          }}
        >
          <Tabs
            orientation="vertical"
            value={tab || "profile"}
            tabs={[
              { label: "PROFILE", value: "profile", icon: <Icon icon="avatar" size={18} /> },
              { label: "ACCOUNT", value: "account", icon: <Icon icon="settings" size={18} /> },
              { label: "WALLET", value: "wallet", icon: <Icon icon="wallet" size={18} /> },
            ]}
            onChange={(value) => handleTabChange(value)}
          />
        </Stack>
        <Stack
          className={styles.tabsMobileUp}
          sx={{
            backgroundColor: "background.tertiary",
            display: { mobile: "flex", laptop: "none" },
          }}
        >
          <Tabs
            variant="fullWidth"
            value={tab || "profile"}
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
            <Button
              variant="clearGreen"
              startIcon={<Icon icon="arrowLeft" />}
              sx={{ alignSelf: "flex-start" }}
            >
              BACK TO PROFILE
            </Button>
            <Stack className={styles.tabPanelContent}>
              {tab === "profile" && <SettingsProfile />}
              {tab === "account" && <SettingsAccount />}
              {tab === "wallet" && <SettingsWallet />}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
