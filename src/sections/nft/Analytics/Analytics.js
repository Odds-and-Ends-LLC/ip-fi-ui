// packages
import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./Analytics.module.css";
import { BellIcon, CalendarIcon, EthIcon, EyeOnIcon, FileIcon, WarningIcon } from "@/elements/icons";

// components

export default function Analytics() {
  const Item = ({ label, value, icon, textColor = "text.secondary" }) => {
    return (
      <Stack className={styles.item}>
        <Stack className={styles.itemLabel}>
          <Typography color="text.disabled">{label}</Typography>
        </Stack>
        <Stack className={styles.itemValue} sx={{ color: textColor }}>
          <Stack className={styles.itemIcon}>{icon}</Stack>
          <Typography variant="h4-desktop" color="inherit">
            {value}
          </Typography>
        </Stack>
      </Stack>
    );
  };
  return (
    <Stack className={styles.analytics}>
      <Typography sx={{ typography: { tablet: "h4-desktop", mobile: "h5" } }}>ANALYTICS</Typography>
      <Stack className={styles.analyticsContent}>
        <Divider sx={{ borderColor: "dividerGray.main" }} />
        <Stack className={styles.analyticsSection}>
          <Typography variant="h6">Contracts</Typography>
          <Stack className={styles.analyticsContracts} sx={{ flexDirection: { tablet: "row" } }}>
            <Item icon={<FileIcon />} label="Proposals" value="145" />
            <Item icon={<BellIcon />} label="Active" value="145" />
            <Item icon={<WarningIcon />} label="Ended" value="10" textColor="text.warning" />
          </Stack>
        </Stack>
        <Divider sx={{ borderColor: "dividerGray.main" }} />
        <Stack className={styles.analyticsSection}>
          <Typography variant="h6">Performance</Typography>
          <Stack className={styles.analyticsPerformance} sx={{ flexDirection: { tablet: "row" } }}>
            <Item
              icon={<EyeOnIcon color="currentColor" />}
              label="Total Received Views"
              value="145"
            />
            <Item icon={<EthIcon />} label="Total Amount Earned" value="145" />
            <Item
              icon={<CalendarIcon />}
              label="Average Contract Length"
              value="12 months"
              textColor="text.primary"
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
