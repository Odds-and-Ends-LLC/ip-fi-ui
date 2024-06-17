// packages
import { useQuery } from "@tanstack/react-query";
import { Box } from "@mui/material";

// components
import { Circle, ItemsCarousel, Member } from "@/components";

// styles
import { getFeaturedUsers } from "@/lib/client/user";
import MembersSkeleton from "./MembersSkeleton";
import styles from "./Members.module.css";
import { formatDistanceToNow } from "date-fns";

export default function Members() {
  const { data: members, isFetching } = useQuery({
    queryKey: ["featured-users"],
    queryFn: () => getFeaturedUsers()
  });

  if (isFetching) {
    return <MembersSkeleton />
  }

  if (!members) {
    return;
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
        count={33}
        viewAllUrl="/"
        items={
          members.map((member, i) => (
            <Box key={i} sx={{ aspectRatio: "1/1.05", width: "100%", minHeight: "340px", maxHeight: "356px" }}>
              <Member
                key={i}
                memberName={member.username}
                pfp={member.pfp}
                lastActive={member.lastActiveAt ? formatDistanceToNow(member.lastActiveAt) : ""}
                catalogs={member.catalogCount}
                contracts={member.contractCount}
                joinedDate={formatDistanceToNow(member.joinedAt)}
              />
            </Box>
          ))
        }
      />
    </Box>
  )
}
