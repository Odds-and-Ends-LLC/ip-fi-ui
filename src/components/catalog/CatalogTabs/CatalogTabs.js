// packages
import { Box, Stack } from "@mui/material";
import { useState } from "react";

// components
import { Tabs } from "@/components/shared";
import { Analytics, Binder } from "..";
import { NFTBackground } from "@/components/nft";

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
