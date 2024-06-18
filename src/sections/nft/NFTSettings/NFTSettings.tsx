// packages
import { useRouter } from "next/navigation";
import { Button, Stack, Typography, Switch, Paper } from "@mui/material";

// styles
import styles from "./NFTSettings.module.css";

// components
import { NFTBackground } from "..";
import { Icon } from "@/components";

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
          variant="translucent"
          component={Stack}
          className={styles.nftSettingsPaper}
          sx={{ padding: { tablet: "24px 40px" } }}
        >
          <Button variant="clearGreen" startIcon={<Icon icon="arrowLeft" />} onClick={handleBack}>
            BACK
          </Button>
          <Typography variant="h4" px="24px">
            NFT SETTINGS
          </Typography>
          <Stack
            className={styles.nftSettingsWrapper}
            sx={{ px: "24px", flexDirection: { tablet: "row" } }}
          >
            <Stack className={styles.nftSettingsContent}>
              <Typography variant="h5">ENABLE EXCLUSIVE LICENSES ONLY.</Typography>
              <Typography>
                Exclusive licenses should be more expensive as it prevents your NFT from being able
                to be a part of more than one catalog.
              </Typography>
            </Stack>
            <Switch defaultChecked focusVisibleClassName=".Mui-focusVisible" />
          </Stack>
        </Paper>
      </Stack>
    </Stack>
  );
}
