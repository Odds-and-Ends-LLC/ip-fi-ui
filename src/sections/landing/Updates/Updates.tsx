// packages
import { Suspense } from "react";
import { Stack, Typography } from "@mui/material";

// components
import UpdatesCarousel from "./UpdatesCarousel";
import UpdatesCardSkeleton from "./UpdatesCardSkeleton";
import { Carousel } from "@/components";

// styles
import styles from "./Updates.module.css";

// lib
import { getBlogs } from "@/lib/server/blog";

const GetUpdates = async () => {
  const updates = await getBlogs();

  return updates ?
    <UpdatesCarousel updates={updates.data || []} /> :
    <Stack sx={{ bgcolor: "text.brandPrimary", p: "32px" }}>
      <Typography variant="h3" textAlign="center">Check back soon for the latest iP-Fi updates!</Typography>
    </Stack>
};

export default function Updates() {
  return (
    <Stack sx={{ width: "100%" }}>
      <Stack
        className={styles.updates}
        sx={{
          padding: { mobile: "40px 24px", tablet: "100px" },
        }}
      >
        <Suspense fallback={<Carousel slides={Array(4).fill("").map((_, i) => <UpdatesCardSkeleton key={i} />)} />}>
          <GetUpdates />
        </Suspense>
      </Stack>
    </Stack>
  );
}
