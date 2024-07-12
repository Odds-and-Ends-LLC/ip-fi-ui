// components
import { NFT, ItemsCarousel } from "@/components";
import { getFeaturedNFTs } from "@/lib/client/nft";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import NFTsSkeleton from "./NFTsSkeleton";
import { NFTType } from "@/types";

export default function NFTs() {
  const { data: nfts, isFetching } = useQuery({
    queryKey: ["featured-nfts"],
    queryFn: () => getFeaturedNFTs()
  });

  if (isFetching) {
    return <NFTsSkeleton />
  }

  if (!nfts?.data) {
    return <></>;
  }

  return (
    <ItemsCarousel
      title="NFTS"
      viewAllUrl="/nfts"
      items={
        nfts.data.map((nft: NFTType, i:number) => (
          <Box key={i} sx={{ aspectRatio: "1/1.29", width: "100%", maxHeight: "426px" }}>
            <NFT
              nft={nft}
              variant="card"
              action="add"
            />
          </Box>
        ))
      }
    />
  )
}
