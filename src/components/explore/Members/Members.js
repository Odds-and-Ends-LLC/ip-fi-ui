// packages
import { Box } from "@mui/material";

// components
import { ItemsCarousel, Member } from "@/components/shared";

// styles
import styles from "./Members.module.css";

export default function Members() {
  return (
    <Box>
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
        slideWidth={{ mobile: "60%", tablet: "40%", laptop: "25%", desktop: "20%"  }}
        slideHeight={{ mobile: "90vw", tablet: "45vw", laptop: "30vw"  }}
        slideMaxHeight="357px"
      />
    </Box>
  )
}
