"use client";

// packages
import { Button, Stack, Typography } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";

// component
import { ArrowHeadLeftIcon, ArrowHeadRightIcon } from "@/elements";
import UpdatesCard from "./UpdatesCard";
import { Carousel } from "@/components";

// styles
import styles from "./Updates.module.css";

// types
import { LandingUpdateType } from "@/types";

export default function UpdatesCarousel({
  updates
} : {
  updates: LandingUpdateType[];
}) {
  const renderBlogs = () => (
    updates?.map((update, index) => (
      <UpdatesCard key={index} update={update} />
    ))
  );

  return (
    <Carousel
      slides={renderBlogs()}
      header={(prev, next) => {
        return (
          <Stack
            className={styles.updatesCarouselHeader}
            sx={{
              flexDirection: { tablet: "row" },
            }}
          >
            <Typography variant="h2">
              UPDATES
            </Typography>
            <Stack
              className={styles.updatesCarouselHeaderButtons}
              sx={{
                flexDirection: { tablet: "row" },
                justifyContent: { mobile: "space-between", tablet: "unset" },
              }}
            >
              <Stack className={styles.updatesCarouselHeaderPrevNextButtons}>
                <Button variant="clearWhite" mode="icon" aria-label="previous blogs" {...prev}>
                  <ArrowHeadLeftIcon />
                </Button>
                <Button variant="clearWhite" mode="icon" aria-label="next blogs" {...next}>
                  <ArrowHeadRightIcon />
                </Button>
              </Stack>
              <Button variant="solidGreen" endIcon={<ArrowOutward />}>
                browse all
              </Button>
            </Stack>
          </Stack>
        );
      }}
    />
  )
}
