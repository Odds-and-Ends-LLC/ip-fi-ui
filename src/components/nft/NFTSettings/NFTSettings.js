// packages
import { useRouter } from "next/navigation";
import { Button, Stack, Typography, Switch, Paper } from "@mui/material";

// styles
import styles from "./NFTSettings.module.css";

// components
import { ArrowLeftIcon } from "@/elements/icons";
import { NFTBackground } from "..";

export default function NFTSettings() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <Stack className={styles.nftSettings} sx={{ backgroundColor: "blue.main" }}>
      <NFTBackground />
      <Stack
        className={styles.nftSettingsSection}
        sx={{
          padding: { mobile: "104px 24px 32px", tablet: "96px 64px 32px" },
        }}
      >
        <Paper
          variant="outlined"
          component={Stack}
          className={styles.nftSettingsPaper}
          sx={{ padding: { tablet: "24px 40px" } }}
        >
          <Button startIcon={<ArrowLeftIcon />} onClick={handleBack}>
            BACK
          </Button>
          <Typography variant="h4-desktop" px="24px">
            NFT SETTINGS
          </Typography>
          <Stack
            className={styles.nftSettingsWrapper}
            sx={{ px: "24px", flexDirection: { tablet: "row" } }}
          >
            <Stack className={styles.nftSettingsContent}>
              <Typography variant="label">ALLOW EXCLUSIVE LICENSE FOR NFT</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Stack>
            <Switch defaultChecked focusVisibleClassName=".Mui-focusVisible" />
          </Stack>
        </Paper>
      </Stack>
    </Stack>
  );
}
