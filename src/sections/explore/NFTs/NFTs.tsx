// components
import { NFT, ItemsCarousel } from "@/components";
import { getFeaturedNFTs } from "@/lib/client/nft";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export default function NFTs() {
  const { data: nfts, isFetching } = useQuery({
    queryKey: ["featured-nfts"],
    queryFn: () => getFeaturedNFTs()
  });

  if (isFetching || !nfts) return;

  return (
    <ItemsCarousel
      title="NFTS"
      count={33}
      viewAllUrl="/"
      items={
        nfts.map((nft, i) => (
          <Box key={i} sx={{ aspectRatio: "1/1.29", width: "100%", maxHeight: "426px" }}>
            <NFT
              variant="card"
              id={nft.id}
              nftName={nft.name}
              collectionName={nft.collectionName}
              image={nft.image}
              price={nft.price}
              earnings={nft.amountEarned}

            />
          </Box>
        ))
      }
    />
  )
}
