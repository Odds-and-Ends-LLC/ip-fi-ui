// packages
import { Stack } from "@mui/material";
import { useState } from "react";

// components
import { Tabs } from "@/components";
import { NFTMarketTable, CatalogSalesTable } from "..";

export default function AnalyticsTables() {
  const [durationTab, setDurationTab] = useState("all");

  return (
    <Stack sx={{ p: { tablet: "16px", mobile: 0 }, gap: { mobile: "24px" } }}>
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
      <NFTMarketTable />
      <CatalogSalesTable />
    </Stack>
  )
};
