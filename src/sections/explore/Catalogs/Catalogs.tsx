// components
import { CatalogCover, ItemsCarousel } from "@/components";
import { getFeaturedCatalogs } from "@/lib/client/catalog";
import { Catalog } from "@/types";
import { Box} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import CatalogsSkeleton from "./CatalogsSkeleton";

export default function Catalogs() {
  const { data: catalogs, isFetching } = useQuery({
    queryKey: ["featured-catalogs"],
    queryFn: () => getFeaturedCatalogs()
  });

  const renderCatalog = (catalog: Catalog ) => (
    <CatalogCover
      catalogName={catalog.name}
      key={catalog.id}
      image={catalog.coverImage}
      nftCount={catalog.nfts?.length || 0}
      creatorName={catalog.creatorName}
      creatorUserId={catalog.creatorUserId}
      backgroundColor={catalog.coverColor}
    />
  );

  if (isFetching) {
    return <CatalogsSkeleton />
  }

  if (!catalogs) {
    return;
  }

  return (
    <ItemsCarousel
      title="CATALOGS"
      count={33}
      viewAllUrl="/"
      items={
        catalogs.map((catalog, i) => (
          <Box key={i} sx={{ aspectRatio: "1/.7", width: "100%" }}>
            {renderCatalog(catalog)}
          </Box>
        ))
      }
    />
  )
}
