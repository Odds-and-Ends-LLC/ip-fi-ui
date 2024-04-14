// packages
import { Divider, Stack, Typography } from "@mui/material";
import { Fragment } from "react";

// styles
import styles from "./CatalogInfo.module.css";

/**
 * @typedef Info
 * @type {object}
 * @property {string} label
 * @property {string} value
 * @param {{ info: Info[] }} props
 */

export default function CatalogInfo({
  info = [],
}) {
  return (
    <Stack
      className={styles.catalogInfo}
      sx={{
        gap: { laptop: "24px", mobile: "16px" },
        flexDirection: { tablet: "row", mobile: "column" }
      }}>
      {info.map((item, index) => (
        <Fragment key={index}>
          <Stack className={styles.catalogInfoItem} sx={{ flexDirection: { tablet: "row", mobile: "column" } }} >
            <Typography variant="body2" color="text.disabledBlue">{item.label}:</Typography>
            <Typography variant="body2" color="text.white">{item.value}</Typography>
          </Stack>
          {(index < info.length - 1) &&
            <>
              <Divider
                orientation="vertical"
                sx={{ borderColor: "dividerWhite.main", display: { laptop: "block", mobile: "none" }}}
              />
              <Divider
                flexItem
                sx={{ borderColor: "dividerWhite.main", display: { tablet: "none", mobile: "block" }}}
              />
            </>
          }
        </Fragment>
      ))}
    </Stack>
  );
}
