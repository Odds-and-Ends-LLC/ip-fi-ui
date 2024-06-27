// packages
import { Grid, Stack } from "@mui/material";
import { useAtomValue } from "jotai";
import { useState } from "react";

// components
import { NFTMarketTable, CatalogSalesTable } from "..";
import { PriceVolumeGraph } from "@/sections/global";
import { catalogViewAtom } from "@/atoms";
import { TimeFilterType } from "@/types";
import { Tabs } from "@/components";

export default function AnalyticsTables() {
  const [time, setTime] = useState<TimeFilterType>("all");
  const catalog = useAtomValue(catalogViewAtom);

  return (
    <Stack sx={{ p: { tablet: "16px", mobile: 0 }, gap: { mobile: "24px" } }}>
      <Tabs
        value={time}
        tabs={[
          { label: "ALL", value: "all" },
          { label: "1h", value: "1h" },
          { label: "6h", value: "6h" },
          { label: "24h", value: "24h" },
          { label: "7d", value: "7d" },
        ]}
        onChange={(duration) => setTime(duration as TimeFilterType)}
        tabsStyle={{
          ["@media (max-width:980px)"]: {
            width: "100%",
            flex: 1
          }
        }}
      />
      <Grid container spacing={3}>
        <Grid item mobile={12} laptop={6}>
          <NFTMarketTable time={time} />
        </Grid>
        <Grid item mobile={12} laptop={6}>
          <PriceVolumeGraph catalogId={catalog.id} />
        </Grid>
      </Grid>
      <CatalogSalesTable />
    </Stack>
  )
};
