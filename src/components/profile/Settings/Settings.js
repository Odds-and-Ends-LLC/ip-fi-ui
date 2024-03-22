// packages
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button, Stack } from "@mui/material";

// styles
import styles from "./Settings.module.css";

// components
import { ArrowLeftIcon, PickAvatarIcon, SettingsIcon, WalletIcon } from "public/icons";
import { Tabs } from "@/components/shared";
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
    router.push(pathname + "?tab=" + value);
  };

  return (
    <Stack
    className={styles.settings}
      sx={{
        padding: "134px 68px 74px",
        backgroundColor: "#01022C",

      }}
    >
      <Stack className={styles.settingsPaper}>
        <Stack
          sx={{
            backgroundColor: "#1A1B46",
            width: "309px",
            borderRadius: "10px 0 0 10px",
            padding: "42px 0",
          }}
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
          sx={{
            flex: 1,
            // backgroundColor: "beige",
            borderRadius: "0 10px 10px 0",
            padding: "24px 42px 42px",
            alignItems: "start",
            gap: "24px",
            overflowY: "auto",
          }}
        >
          <Button startIcon={<ArrowLeftIcon />}>BACK TO PROFILE</Button>
          <Stack
            sx={{ padding: "0 24px", alignItems: "start", flex: 1, width: "100%", gap: "24px" }}
          >
            {tab === "profile" && <SettingsProfile />}
            {tab === "account" && <SettingsAccount />}
            {tab === "wallet" && <SettingsWallet data={data} />}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
