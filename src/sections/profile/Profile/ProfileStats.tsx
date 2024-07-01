// packages
import { Stack, Typography } from "@mui/material";

// styles
import styles from "./Profile.module.css";

interface StatsItem {
  label: string;
  value: string;
}

export default function ProfileStats({
  stats
} : {
  stats: StatsItem[]
}) {
  return (
    <Stack
      className={styles.profileStats}
      sx={{
        gap: {
          tablet: "42px",
          mobile: "16px",
        }
      }}
    >
      {stats.map(({ label, value }, i) => (
        <Stack key={i}>
          <Typography variant="body2" color="text.disabled">{label}</Typography>
          <Typography variant="h6" color="text.primary">{value}</Typography>
        </Stack>
      ))}
    </Stack>
  );
}
