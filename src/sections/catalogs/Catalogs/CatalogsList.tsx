import { CatalogCover, InfiniteGridScroller, ItemsSectionHeader } from "@/components";
import { getCatalogs } from "@/lib/client/catalog";
import { Box, CircularProgress } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function CatalogsList() {
  const query = useSearchParams();
  const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["catalogs", query?.toString()],
    queryFn: ({ pageParam }) => getCatalogs(pageParam, query ?? undefined),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.hasNextPage ? Number(lastPage.page) + 1 : undefined,
  });

  const catalogs = data?.pages.map(({ data: catalogs }) => catalogs || [])?.flat() || [];

  return (
    <InfiniteGridScroller
      data={catalogs}
      renderItem={({ item, index }) =>
        <Box key={index} sx={{ aspectRatio: "1/.7", width: "100%" }}>
          <CatalogCover catalog={item} />
        </Box>
      }
      onEndReached={fetchNextPage}
      onContentResizeNotEnough={fetchNextPage}
      stickyHeader
      stickyHeaderTopOffset={104}
      footer={(isFetching || hasNextPage) && <CircularProgress color="secondary" sx={{ mx: "auto" }} />}
    />
  );
}
