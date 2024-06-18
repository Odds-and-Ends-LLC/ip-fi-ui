// packages
import { useContext, useState } from "react";
import { Box, Grid, Stack } from "@mui/material";
import { useAtom } from "jotai";

// components
import { Tabs } from "@/components";
import { MarketTable, TrendingTable } from "..";

// styles
import styles from "./CatalogTables.module.css";
import { TimeFilterType } from "@/types";
import { PriceVolumeGraph } from "@/sections/global";
import { CatalogViewContext } from "@/sections/catalog/CatalogView/CatalogView";

export default function CatalogTables() {
  const [catalogTab, setCatalogTab] = useState("trending");
  const [time, setTime] = useState<TimeFilterType>("all");
  const catalog = useContext(CatalogViewContext);

  return (
    <>
      <Stack
        className={styles.catalogTablesHeader}
        sx={{
          flexDirection: {
            desktop: "row",
            tablet: "row",
            mobile: "column"
          },
          gap: {
            desktop: "16px",
            mobile: "8px",
          },
          ["@media (max-width:980px)"]: {
            flexDirection: "column"
          }
        }}
      >
        <Tabs
          value={catalogTab}
          tabs={[
            { label: "TRENDING", value: "trending" },
            { label: "MARKET", value: "market" },
          ]}
          onChange={setCatalogTab}
          tabsStyle={{
            px: { mobile: "24px", tablet: "0px" },
          }}
          tabStyle={{
            ["@media (max-width:980px)"]: {
              width: "100%",
              flex: 1
            }
          }}
        />
        <Tabs
          value={time}
          tabs={[
            { label: "ALL", value: "all" },
            { label: "1h", value: "1h" },
            { label: "6h", value: "6h" },
            { label: "24h", value: "24h" },
            { label: "7d", value: "1d" },
          ]}
          onChange={(value) => setTime(value as TimeFilterType)}
          tabsStyle={{
            px: { mobile: "24px", tablet: "0px" },
            ["@media (max-width:980px)"]: {
              width: "100%",
              flex: 1
            }
          }}
        />
      </Stack>
      <Box
        sx={{ px: { mobile: "24px", tablet: "0px" }, }}
      >
        {catalogTab === "trending" && <TrendingTable time={time} />}
        {catalogTab === "market" &&
          <Grid container spacing={3}>
            <Grid item mobile={12} laptop={6}>
              <MarketTable time={time} />
            </Grid>
            <Grid item mobile={12} laptop={6}>
              <PriceVolumeGraph catalogId={catalog.id} />
            </Grid>
          </Grid>
        }
      </Box>
    </>
  );
}
