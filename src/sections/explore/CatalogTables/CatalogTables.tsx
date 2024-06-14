// packages
import { useState } from "react";
import { Box, Grid, Stack } from "@mui/material";
import { useAtom } from "jotai";

// components
import { Tabs } from "@/components";
import { MarketTable, PriceVolumeGraph, TrendingTable } from "..";
import { exploreTimeFilterAtom } from "@/atoms";

// styles
import styles from "./CatalogTables.module.css";
import { ExploreTimeFilter } from "@/types";

export default function CatalogTables() {
  const [catalogTab, setCatalogTab] = useState("trending");
  const [time, setTime] = useAtom(exploreTimeFilterAtom);

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
          onChange={(value) => setTime(value as ExploreTimeFilter)}
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
        {catalogTab === "trending" && <TrendingTable />}
        {catalogTab === "market" &&
          <Grid container spacing={3}>
            <Grid item mobile={12} laptop={6}>
              <MarketTable />
            </Grid>
            <Grid item mobile={12} laptop={6}>
              <PriceVolumeGraph />
            </Grid>
          </Grid>
        }
      </Box>
    </>
  );
}
