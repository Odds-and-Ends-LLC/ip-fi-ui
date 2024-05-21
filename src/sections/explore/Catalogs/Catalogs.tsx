// components
import { CatalogCover, ItemsCarousel } from "@/components";
import { Box} from "@mui/material";

export default function Catalogs() {
  const catalogs = [
    <CatalogCover catalogName="CATALOG1" key={1} image="images/image_1.png" nftCount={12} creatorName="Markiplier" creatorUserId="1" />,
    <CatalogCover catalogName="CATALOG2" key={2} image="images/image_2.png" nftCount={12} creatorName="Markiplier" creatorUserId="1" />,
    <CatalogCover catalogName="CATALOG3" key={3} image="images/image_3.png" nftCount={12} creatorName="Markiplier" creatorUserId="1" />,
    <CatalogCover catalogName="CATALOG4" key={4} image="images/image_4.png" nftCount={12} creatorName="Markiplier" creatorUserId="1" />,
    <CatalogCover catalogName="CATALOG5" key={5} image="images/image_1.png" nftCount={12} creatorName="Markiplier" creatorUserId="1" />,
  ];

  const items = catalogs.map((catalog, i) => (
    <Box key={i} sx={{ aspectRatio: "1/.7", width: "100%" }}>
      {catalog}
    </Box>
  ));

  return (
    <ItemsCarousel
      title="CATALOGS"
      count={33}
      viewAllUrl="/"
      items={items}
    />
  )
}
