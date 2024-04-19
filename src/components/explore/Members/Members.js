// packages
import { Box } from "@mui/material";

// components
import { Circle, ItemsCarousel, Member } from "@/components/shared";

// styles
import styles from "./Members.module.css";

export default function Members() {
  return (
    <Box position="relative" >
      <Box className={styles.membersCircles}>
        <Circle
          absolute
          fillColor="transparent"
          borderColor="primary.light"
          size={{ desktop: "250px", mobile: "120px" }}
          bottom="10%"
          right="-2%"
        />
        <Circle
          absolute
          fillColor="secondary.main"
          size={{ desktop: "200px", mobile: "100px" }}
          right={{ desktop: "15%", tablet: "10%", mobile: "5%" }}
        />
        <Circle
          absolute
          size={{ desktop: "325px", mobile: "160px" }}
          left={{ desktop: "15%", tablet: "10%", mobile: "2%" }}
        />
      </Box>
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
