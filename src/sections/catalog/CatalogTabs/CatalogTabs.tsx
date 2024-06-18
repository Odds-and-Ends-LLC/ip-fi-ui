// packages
import { Stack } from "@mui/material";
import { useContext, useState } from "react";

// components
import { Catalog, Tabs } from "@/components";
import { Analytics } from "..";
import { CatalogViewContext } from "../CatalogView/CatalogView";

export default function CatalogTables() {
  const [catalogTab, setCatalogTab] = useState("nft");
  const catalog = useContext(CatalogViewContext)

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
