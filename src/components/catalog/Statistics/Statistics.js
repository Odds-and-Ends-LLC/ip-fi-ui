// packages
import { Divider, Stack, Typography } from "@mui/material";

// components
import { EthIcon } from "@/elements/icons";

// styles
import styles from "./Statistics.module.css";
import { Fragment } from "react";

export default function Statistics() {

  const renderChange = (value) => (
    <Typography variant="h5" color={value >= 0 ? "text.secondary" : "text.red"}>{value > 0 && "+"} {value}%</Typography>
  );

  const renderEth = (value) => (
    <Stack className={styles.statisticsItemEth}>
      <EthIcon />
      <Typography variant="h5" color="text.white">{value}</Typography>
    </Stack>
  );

  const renderItem = (title, children) => (
    <Stack
      className={styles.statisticsItem}
      sx={{
        gap: { mobile: "8px", tablet: "12px" }
      }}
    >
      <Typography variant="body1" color="text.disabledBlue">{title}</Typography>
      {children}
    </Stack>
  );

  const items = [
    renderItem("Price", <Typography variant="h5" color="text.white">$ 123</Typography>),
    renderItem("24H Change", renderChange(6.7)),
    renderItem("24H High", renderEth(29.76)),
    renderItem("24H Low", renderEth(29.76)),
    renderItem("24H Volume", renderEth(29.76)),
  ];

  return (
    <>
      <Stack
        className={styles.statistics}
        sx={{
          gap: "24px",
          flexDirection: { tablet: "row", mobile: "column" }
        }}
      >
        {items.map((item, i) => (
          <Fragment key={i}>
            {item}
            {(i < items.length - 1) &&
              <>
                <Divider
                  className={styles.statisticsItemDividerVertical}
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
      {/* <Stack
        className={styles.statistics}
        sx={{
          gap: "24px",
          display: { tablet: "none", mobile: "flex" }
        }}
      >
        {renderItem("Price", <Typography variant="h5" color="text.white">$ 123</Typography>)}
        {items.slice(1).map((item, i) => (
          <Fragment key={i}>
            {item}
            {(i < items.length - 1) &&
              <Divider
                className={styles.statisticsItemDividerVertical}
                orientation="vertical"
                sx={{ borderColor: "dividerGray.main"}}
              />
            }
          </Fragment>
        ))}
      </Stack> */}
    </>
  );
}
