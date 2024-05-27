// packages
import { Paper, Stack, Typography } from "@mui/material";

// styles
import styles from "./StatisticsItem.module.css";

// components
import { Icon } from "@/components";

// types
import { IconType } from "@/components/Icon";

export default function StatisticsItem({
  label,
  value,
  icon,
  textColor = "text.brandSecondary",
}: {
  label: string;
  value: string;
  icon?: IconType;
  textColor?: string;
}) {
  return (
    <Paper component={Stack} variant="translucent" className={styles.statisticsItem}>
      <Stack className={styles.statisticsItemLabel}>
        <Typography color="text.disabled">{label}</Typography>
      </Stack>
      <Stack className={styles.statisticsItemValue} sx={{ color: textColor }}>
        {icon && (
          <Stack className={styles.statisticsItemIcon}>
            <Icon icon={icon || "proposal"} />
          </Stack>
        )}
        <Typography variant="h4" color="inherit">
          {value}
        </Typography>
      </Stack>
    </Paper>
  );
}
