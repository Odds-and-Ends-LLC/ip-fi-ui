// packages
import { Divider, Stack, Typography } from "@mui/material";
import { Fragment } from "react";

// styles
import styles from "./InfoList.module.css";

/**
 * @param {{ info: { label: string; value: any }[] }} props
 */

export default function InfoList({
  info = [],
}) {
  return (
    <Stack
      className={styles.infoList}
      sx={{
        gap: { laptop: "24px", mobile: "16px" },
      }}>
      {info.map((item, index) => (
        <Fragment key={index}>
          <Stack className={styles.infoListItem} sx={{ flexDirection: { tablet: "row", mobile: "column" } }} >
            <Typography variant="body2" color="text.disabledBlue">{item.label}:</Typography>
            {item.value}
          </Stack>
          {(index < info.length - 1) &&
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "dividerWhite.main" }}
            />
          }
        </Fragment>
      ))}
    </Stack>
  );
}
