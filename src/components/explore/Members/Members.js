// packages
import { Box } from "@mui/material";

// components
import { Circle, ItemsCarousel, Member } from "@/components/shared";

// styles
import styles from "./Members.module.css";

export default function Members() {
  const members = [
    <Member key={1} />,
    <Member key={2} />,
    <Member key={3} />,
    <Member key={4} />,
    <Member key={5} />,
  ]

  const items = members.map((member, i) => (
    <Box key={i} sx={{ aspectRatio: "1/1.05", width: "100%", minHeight: "340px", maxHeight: "356px" }}>
      {member}
    </Box>
  ));


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
        items={items}
      />
    </Box>
  )
}
