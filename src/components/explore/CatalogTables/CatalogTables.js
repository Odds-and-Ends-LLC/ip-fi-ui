// packages
import { useState } from "react";
import { Stack } from "@mui/material";

// components
import { Tabs } from "@/components/shared";
import { MarketTable, TrendingTable } from "..";

// styles
import styles from "./CatalogTables.module.css";

export default function CatalogTables() {
  const [catalogTab, setCatalogTab] = useState("trending");
  const [durationTab, setDurationTab] = useState("all");

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
            ["@media (max-width:980px)"]: {
              width: "100%",
              flex: 1
            }
          }}
        />
        <Tabs
          value={durationTab}
          tabs={[
            { label: "ALL", value: "all" },
            { label: "1h", value: "1h" },
            { label: "6h", value: "6h" },
            { label: "24h", value: "24h" },
            { label: "7d", value: "1d" },
          ]}
          onChange={setDurationTab}
          tabsStyle={{
            ["@media (max-width:980px)"]: {
              width: "100%",
              flex: 1
            }
          }}
        />
      </Stack>
      {catalogTab === "trending" && <TrendingTable />}
      {catalogTab === "market" && <MarketTable />}
    </>
  );
}
