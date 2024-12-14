// packages
import { Box, CircularProgress } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";

// components
import { InfiniteGridScroller, NFT } from "@/components";
import { getUserNFTs } from "@/lib/client/user";
import { profileViewAtom } from "@/atoms";

export default function ProfileNFTsList() {
  const profile = useAtomValue(profileViewAtom);

  const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["user-nfts", profile.username],
    queryFn: ({ pageParam }) => getUserNFTs(profile.username, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.hasNextPage ? lastPage.page + 1 : undefined,
  });

  const profileNfts = data?.pages.map(({ data: profileNfts }) => profileNfts || [])?.flat() || [];

  if (!profileNfts) {
    return;
  }

  return (
    <InfiniteGridScroller
      data={profileNfts}
      renderItem={({ item, index }) => (
        <Box key={index} sx={{ aspectRatio: "1/1.29", width: "100%", maxHeight: "426px" }}>
          <NFT
            nft={item}
            variant="card"
            action="add"
          />
        </Box>
      )}
      onEndReached={() => fetchNextPage()}
      footer={(isFetching || hasNextPage) && <CircularProgress color="secondary" sx={{ mx: "auto" }} />}
    />
  )
}
