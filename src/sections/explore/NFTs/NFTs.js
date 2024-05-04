// components
import { NFT, ItemsCarousel } from "@/components";
import { Box } from "@mui/material";

export default function NFTs() {
  const nfts = [
    <NFT variant="card" key={1} />,
    <NFT variant="card" key={2} />,
    <NFT variant="card" key={3} />,
    <NFT variant="card" key={4} />,
    <NFT variant="card" key={5} action="add" />
  ];

  const items = nfts.map((nft, i) => (
    <Box key={i} sx={{ aspectRatio: "1/1.29", width: "100%", maxHeight: "426px" }}>
      {nft}
    </Box>
  ));

  return (
    <ItemsCarousel
      title="NFTS"
      count={33}
      viewAllurl="/"
      items={items}
    />
  )
}
