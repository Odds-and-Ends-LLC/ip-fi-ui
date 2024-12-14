// packages
import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./CustomList.module.css";
import Icon from "../Icon";

export default function CustomList({ list = [] }) {
  if (!list.length) {
    return <></>;
  }

  return (
    <Stack className={styles.listContainer}>
      <Stack className={styles.list}>
        {list.map((item, index) => {
          return (
            <Stack key={index} className={styles.listItem} sx={{ borderColor: "dividers.brand" }}>
              <Box className={styles.listItemBullet} sx={{ color: "text.brandSecondary" }}>
                <Icon icon="asterisk" size={24} />
              </Box>
              <Divider flexItem orientation="vertical" color="brand" />
              <Typography variant="h6" className={styles.listItemText}>
                {item}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
      <Box className={styles.listLines}>
        <Image src="/images/lines.svg" alt="line" fill className={styles.listLinesImage} />
      </Box>
    </Stack>
  );
}
