// packages
import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./CustomList.module.css";

export default function CustomList({ list = [] }) {
  if (!list.length) {
    return <></>;
  }

  return (
    <Stack className={styles.listContainer}>
      <Stack className={styles.list}>
        {list.map((item, index) => {
          return (
            <Stack key={index} className={styles.listItem} sx={{ borderColor: "secondary.main" }}>
              <Box className={styles.listItemBullet}>
                <Image src="/icons/asterisk.svg" alt="icon" width={24} height={24} />
              </Box>
              <Divider flexItem orientation="vertical" />
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
