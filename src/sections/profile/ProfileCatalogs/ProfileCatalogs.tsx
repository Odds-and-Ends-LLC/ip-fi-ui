// packages
import { Box, CircularProgress, Grid, Stack} from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";

// components
import { CatalogCover, InfiniteGridScroller, ItemsSectionHeader } from "@/components";
import { getUserCatalogs } from "@/lib/client/user";
import { profileViewAtom } from "@/atoms";
import { CatalogType } from "@/types";
import ProfileCatalogMarketTable from "../ProfileCatalogMarketTable";
import { TradeHistoryGraph } from "@/sections/global";
import { catalogs } from "@/data";

export default function ProfileCatalogs() {
  const profile = useAtomValue(profileViewAtom);

  const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["user-catalogs", profile.username],
    queryFn: ({ pageParam }) => getUserCatalogs(profile.username, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.hasNextPage ? lastPage.page + 1 : undefined,
    placeholderData: (lastPage) => lastPage,
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
    <>
      <Grid container spacing={3}>
        <Grid item mobile={12} laptop={6}>
          <ProfileCatalogMarketTable />
        </Grid>
        <Grid item mobile={12} laptop={6}>
          <TradeHistoryGraph catalog={catalogs[0]} />
        </Grid>
      </Grid>
      <InfiniteGridScroller
        data={profileCatalogs}
        header={
          <Stack sx={{ pb: "16px", justifyContent: "center", bgcolor: "background.secondary" }}>
            <ItemsSectionHeader title="CATALOGS" count={profile.catalogCount} />
          </Stack>
        }
        stickyHeader
        stickyHeaderTopOffset="144px"
        renderItem={({ item, index }) => (
          <Box key={index} sx={{ aspectRatio: "1/.7", width: "100%" }}>
            {renderCatalog(item)}
          </Box>
        )}
        onEndReached={() => fetchNextPage()}
        footer={(isFetching || hasNextPage) && <CircularProgress color="secondary" sx={{ mx: "auto" }} />}
      />
    </>
  )
}
