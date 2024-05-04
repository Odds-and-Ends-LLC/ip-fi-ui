// components
import { CatalogCover, ItemsCarousel } from "@/components";
import { Box} from "@mui/material";

export default function Catalogs() {
  const catalogs = [
    <CatalogCover key={1} image="images/image_1.png" />,
    <CatalogCover key={2} image="images/image_2.png" />,
    <CatalogCover key={3} image="images/image_3.png" />,
    <CatalogCover key={4} image="images/image_4.png" />,
    <CatalogCover key={5} image="images/image_1.png" />,
    <CatalogCover key={6} image="images/image_1.png" />,
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
      viewAllurl="/"
      items={items}
    />
  )
}
