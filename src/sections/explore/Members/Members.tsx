// packages
import { useQuery } from "@tanstack/react-query";
import { Box } from "@mui/material";

// components
import { Circle, ItemsCarousel, Member } from "@/components";

// styles
import { getFeaturedUsers } from "@/lib/client/user";
import MembersSkeleton from "./MembersSkeleton";
import styles from "./Members.module.css";
import { UserType } from "@/types";

export default function Members() {
  const { data: members, isFetching } = useQuery({
    queryKey: ["featured-users"],
    queryFn: () => getFeaturedUsers()
  });

  if (isFetching) {
    return <MembersSkeleton />
  }

  if (!members?.data) {
    return <></>;
  }

  return (
    <Box position="relative">
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
        viewAllUrl="/members"
        items={
          members.data.map((member: UserType, i:number) => (
            <Box key={i} sx={{ aspectRatio: "1/1.05", width: "100%", minHeight: "232px", maxHeight: "232px" }}>
              <Member
                key={i}
                username={member.username}
                pfp={member.pfp}
                lastActive={member.lastActiveAt}
                collections={member.collectionCount}
                catalogs={member.catalogCount}
                joinedDate={member.joinedAt}
              />
            </Box>
          ))
        }
      />
    </Box>
  )
}
