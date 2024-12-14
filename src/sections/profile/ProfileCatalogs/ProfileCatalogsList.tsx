import { Box, CircularProgress, Stack } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";

import { CatalogCover, InfiniteGridScroller, ItemsSectionHeader } from "@/components";
import { getUserCatalogs } from "@/lib/client/user";
import { profileViewAtom } from "@/atoms";
import { CatalogType } from "@/types";

export default function ProfileCatalogsList() {
  const profile = useAtomValue(profileViewAtom);

  const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["user-catalogs", profile.username],
    queryFn: ({ pageParam }) => getUserCatalogs(profile.username, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.hasNextPage ? lastPage.page + 1 : undefined,
  });

  const profileCatalogs = data?.pages.map(({ data: profileCatalogs }) => profileCatalogs || [])?.flat() || [];

  const renderCatalog = (catalog: CatalogType ) => (
    <CatalogCover
      key={catalog.id}
      catalog={catalog}
    />
  );

  if (!profileCatalogs) {
    return;
  }

  return (
    <InfiniteGridScroller
      data={profileCatalogs}
      renderItem={({ item, index }) => (
        <Box key={index} sx={{ aspectRatio: "1/.7", width: "100%" }}>
          {renderCatalog(item)}
        </Box>
      )}
      onEndReached={() => fetchNextPage()}
      footer={(isFetching || hasNextPage) && <CircularProgress color="secondary" sx={{ mx: "auto" }} />}
    />
  )
}
