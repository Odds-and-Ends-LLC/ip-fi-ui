// packages
import { usePathname } from "next/navigation";
import { Stack } from "@mui/material";
import { useAtomValue } from "jotai";

// components
import { Catalog, Tabs } from "@/components";
import { catalogViewAtom } from "@/atoms";
import { Analytics } from "..";

export default function CatalogTabs() {
  const catalog = useAtomValue(catalogViewAtom);
  const pathname = usePathname() ?? "/";

  const fragments = pathname.split("/").filter((fragment) => fragment !== "") ;
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
