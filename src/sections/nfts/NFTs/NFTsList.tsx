import { InfiniteGridScroller, NFT } from "@/components";
import { getNFTs } from "@/lib/client/nft";
import { Box, CircularProgress } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function NFTsList() {
  const query = useSearchParams();
  const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["nfts", query.toString()],
    queryFn: ({ pageParam }) => getNFTs(pageParam, query),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.hasNextPage ? lastPage.page + 1 : undefined,
  });

  const nfts = data?.pages.map(({ data: nfts }) => nfts || [])?.flat() || [];

  return (
    <InfiniteGridScroller
      data={nfts}
      renderItem={({ item, index }) =>
        <Box key={index} sx={{ aspectRatio: "1/1.29", width: "100%", maxHeight: "426px" }}>
          <NFT
            nft={item}
            variant="card"
            action="add"
          />
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
