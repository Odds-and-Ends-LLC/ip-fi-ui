// packages
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { Stack } from "@mui/material";

// components
import { Catalog, Tabs } from "@/components";
import { Analytics } from "..";
import { CatalogViewContext } from "../CatalogView/CatalogView";

export default function CatalogTabs() {
  const catalog = useContext(CatalogViewContext);
  const pathname = usePathname();

  const fragments = pathname.split("/").filter((fragment) => fragment !== "") ;
  console.log(fragments);
  const catalogTab = fragments[2] || "nft";

  const handleChange = (value: string) => {
    window.history.pushState(null, "", `/catalog/${catalog.uid}/${value}`);
  };

  return (
    <Stack position="relative" sx={{ gap: { mobile: "24px"} }}>
      <Tabs
        value={catalogTab}
        tabs={[
          { label: "NFT", value: "nft" },
          { label: "ANALYTICS", value: "analytics" },
        ]}
        onChange={handleChange}
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
