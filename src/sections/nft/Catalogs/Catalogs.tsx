// packages
import { Button, CircularProgress, Paper, Stack } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useAtomValue } from "jotai";

// components
import { FilterGroupToggleButton, ItemsSectionHeader } from "@/components";
import { getNFTCatalogs } from "@/lib/client/nft";
import CatalogsFilter from "./CatalogsFilter";
import styles from "./Catalogs.module.css";
import { nftViewAtom } from "@/atoms";
import { ItemsCatalogs } from ".";

export default function Catalogs() {
  const query = useSearchParams();
  const nft = useAtomValue(nftViewAtom);
  const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["nft-catalogs", query?.toString()],
    queryFn: ({ pageParam }) => getNFTCatalogs(nft.collectionAddress, nft.tokenId, pageParam, query ?? undefined),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.hasNextPage ? lastPage.page + 1 : undefined,
  });

  const nftCatalogs = data?.pages.map(({ data: nftCatalogs }) => nftCatalogs || [])?.flat() || [];

  return (
    <Stack className={styles.catalogs}>
      <Stack className={styles.catalogsHeader} sx={{ flexDirection: "row" }}>
        <ItemsSectionHeader title="CATALOGS" count={nft.catalogCount} />
        <FilterGroupToggleButton modalMode />
      </Stack>
      <Paper variant="translucent" component={Stack} className={styles.catalogsTable}>
        <CatalogsFilter />
        <Stack className={styles.catalogsContent}>
          {nftCatalogs?.map((nftCatalog, i) => (
            <ItemsCatalogs key={i} data={nftCatalog} />
          ))}
          <Stack sx={{ pb: "16px" }}>
            {isFetching ?
              <CircularProgress size={32} color="secondary" sx={{ mx: "auto" }} /> :
              hasNextPage &&
                <Button fullWidth variant="outlineWhite" onClick={() => fetchNextPage()}>
                  LOAD MORE
                </Button>
            }
            </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}
