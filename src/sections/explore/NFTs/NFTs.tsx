// components
import { NFT, ItemsCarousel } from "@/components";
import { getFeaturedNFTs } from "@/lib/client/nft";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import NFTsSkeleton from "./NFTsSkeleton";

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
      viewAllUrl="/"
      items={
        nfts.data.map((nft, i) => (
          <Box key={i} sx={{ aspectRatio: "1/1.29", width: "100%", maxHeight: "426px" }}>
            <NFT
              nft={nft}
              variant="card"
            />
          </Box>
        ))
      }
    />
  )
}
