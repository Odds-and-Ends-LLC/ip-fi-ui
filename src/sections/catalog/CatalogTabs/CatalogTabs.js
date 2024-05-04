// packages
import { Stack } from "@mui/material";
import { useState } from "react";

// components
import { Tabs } from "@/components";
import { Analytics, Binder } from "..";

export default function CatalogTables() {
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
      {catalogTab === "nft" && <Binder catalogName={"YES"} coverImage={"/images/image_1.png"} />}
      {catalogTab === "analytics" && <Analytics />}
    </Stack>
  );
}
