// components
import { ItemsCarousel, NFT } from "@/components/shared";

export default function NFTs() {
  return (
    <ItemsCarousel
      title="NFTS"
      count={33}
      viewAllurl="/"
      slides={[
        <NFT variant="card" key={1} />,
        <NFT variant="card" key={2} />,
        <NFT variant="card" key={3} />,
        <NFT variant="card" key={4} />,
        <NFT variant="card" key={5} />
      ]}
      slideWidth={{ mobile: "60%", tablet: "40%", laptop: "25%", desktop: "20%" }}
      slideHeight={{ mobile: "80vw", tablet: "40vw", laptop: "30vw" }}
      slideMaxHeight="426px"
    />
  )
}
