// packages
import { Stack } from "@mui/material";
import { useState } from "react";

// components
import { Catalog, Tabs } from "@/components";
import { Analytics } from "..";
import { Catalog as CatalogType } from "@/types";

export default function CatalogTables({
  catalog
} : {
  catalog: CatalogType;
}) {
  const [catalogTab, setCatalogTab] = useState("nft");

  return (
    <Stack position="relative" sx={{ gap: { mobile: "24px"} }}>
      <Tabs
        value={catalogTab}
        tabs={[
          { label: "NFT", value: "nft" },
          { label: "ANALYTICS", value: "analytics" },
        ]}
        onChange={setCatalogTab}
        tabsStyle={{
          ["@media (max-width:980px)"]: {
            width: "100%"
          }
        }}
      />
      {catalogTab === "nft" &&
        <Catalog catalog={catalog} />
      }
      {catalogTab === "analytics" && <Analytics  />}
    </Stack>
  );
}
