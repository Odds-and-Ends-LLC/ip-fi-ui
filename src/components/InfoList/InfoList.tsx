// packages
import { Divider, Stack, Typography } from "@mui/material";
import { Fragment, ReactNode } from "react";

// styles
import styles from "./InfoList.module.css";

export default function InfoList({ info = [] }: { info: { label: string; value: ReactNode }[] }) {
  return (
    <Stack
      className={styles.infoList}
      sx={{
        gap: { laptop: "24px", mobile: "16px" },
        flexDirection: { tablet: "row", mobile: "column" },
      }}
    >
      {info.map((item, index) => (
        <Fragment key={index}>
          <Stack
            className={styles.infoListItem}
            // sx={{ flexDirection: { tablet: "row", mobile: "column" } }}
          >
            <Typography variant="body2" color="text.disabledBlue">
              {item.label}:
            </Typography>
            {item.value}
          </Stack>
          {index < info.length - 1 && (
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "dividerWhite.main", display: { mobile: "none", tablet: "flex" } }}
            />
          )}
        </Fragment>
      ))}
    </Stack>
  );
}
