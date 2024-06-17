// packages
import { Stack } from "@mui/material";
import { useState } from "react";

// components
import { NFTMarketTable, CatalogSalesTable } from "..";
import { TimeFilter } from "@/types";
import { Tabs } from "@/components";

export default function AnalyticsTables() {
  const [durationTab, setDurationTab] = useState<TimeFilter>("all");

  return (
    <Stack sx={{ p: { tablet: "16px", mobile: 0 }, gap: { mobile: "24px" } }}>
      <Tabs
        value={durationTab}
        tabs={[
          { label: "ALL", value: "all" },
          { label: "1h", value: "1h" },
          { label: "6h", value: "6h" },
          { label: "24h", value: "24h" },
          { label: "7d", value: "7d" },
        ]}
        onChange={(duration) => setDurationTab(duration as TimeFilter)}
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
