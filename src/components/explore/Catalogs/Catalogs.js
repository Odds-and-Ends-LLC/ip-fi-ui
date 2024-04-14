// components
import { CatalogCover, ItemsCarousel } from "@/components/shared";

export default function Catalogs() {
  return (
    <ItemsCarousel
      title="CATALOGS"
      count={33}
      viewAllurl="/"
      slides={[
        <CatalogCover key={1} image="images/image_1.png" />,
        <CatalogCover key={2} image="images/image_2.png" />,
        <CatalogCover key={3} image="images/image_3.png" />,
        <CatalogCover key={4} image="images/image_4.png" />,
        <CatalogCover key={5} image="images/image_1.png" />,
      ]}
      slideWidth={{ mobile: "80%", tablet: "45%", laptop: "45%", desktop: "35%" }}
      slideHeight={{ mobile: "45vw", tablet: "25vw", laptop: "30vw"  }}
      slideMaxHeight="453px"
    />
  )
}
