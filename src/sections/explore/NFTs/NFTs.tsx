// components
import { NFT, ItemsCarousel } from "@/components";
import { Box } from "@mui/material";

export default function NFTs() {
  const nfts = [
    <NFT id="1" image="/images/image_4.png" variant="card" key={1} price={29.30} />,
    <NFT id="2" image="/images/image_4.png" variant="card" key={2} price={29.30} />,
    <NFT id="3" image="/images/image_4.png" variant="card" key={3} price={29.30} />,
    <NFT id="4" image="/images/image_4.png" variant="card" key={4} price={29.30} />,
    <NFT id="5" image="/images/image_4.png" variant="card" key={5} price={29.30} action="add" visible={false} headerAction="visibility" />
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
      viewAllUrl="/"
      items={items}
    />
  )
}
