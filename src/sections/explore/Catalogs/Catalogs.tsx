// components
import { CatalogCover, ItemsCarousel } from "@/components";
import { getFeaturedCatalogs } from "@/lib/client/catalog";
import { CatalogType } from "@/types";
import { Box} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import CatalogsSkeleton from "./CatalogsSkeleton";

export default function Catalogs() {
  const { data: catalogs, isFetching } = useQuery({
    queryKey: ["featured-catalogs"],
    queryFn: () => getFeaturedCatalogs()
  });

  const renderCatalog = (catalog: CatalogType ) => (
    <CatalogCover
      key={catalog.id}
      catalog={catalog}
    />
  );

  if (isFetching) {
    return <CatalogsSkeleton />
  }

  if (!catalogs?.data) {
    return <></>;
  }

  return (
    <ItemsCarousel
      title="CATALOGS"
      viewAllUrl="/catalogs"
      items={
        catalogs.data.map((catalog: CatalogType, i: number) => (
          <Box key={i} sx={{ aspectRatio: "1/.7", width: "100%" }}>
            {renderCatalog(catalog)}
          </Box>
        ))
      }
    />
  )
}
