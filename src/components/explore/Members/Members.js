// components
import { ItemsCarousel, Member } from "@/components/shared";

export default function Members() {
  return (
    <ItemsCarousel
      title="MEMBERS"
      count={33}
      viewAllurl="/"
      slides={[
        <Member key={1} />,
        <Member key={2} />,
        <Member key={3} />,
        <Member key={4} />,
        <Member key={5} />,
      ]}
      slideWidth={{ mobile: "70%", tablet: "42%", laptop: "25%"  }}
      slideHeight={{ mobile: "90vw", tablet: "45vw", laptop: "30vw"  }}
      slideMaxHeight="357px"
    />
  )
}
