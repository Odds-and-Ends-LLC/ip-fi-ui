"use client";

// packages
import { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { ArrowBack, ArrowForward, ArrowOutward } from "@mui/icons-material";

// styles
import styles from "./Updates.module.css";

// components
import { Carousel } from "@/components";
import { LandingUpdate } from "@/types";
import { format } from "date-fns";
import { ArrowHeadLeftIcon, ArrowHeadRightIcon } from "@/elements";

export default function UpdatesCarousel({
  updates = []
} : {
  updates: LandingUpdate[];
}) {
  const [mainContainerSize, setMainContainerSize] = useState<number>(0);
  const [updatesContainerSize, setUpdatesContainerSize] = useState<number>(0);
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const updatesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (updatesContainerRef.current) {
        setUpdatesContainerSize(updatesContainerRef.current.getBoundingClientRect().width);
      }
      if (mainContainerRef.current) {
        setMainContainerSize(mainContainerRef.current.getBoundingClientRect().width);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const whitespace = mainContainerSize - updatesContainerSize;

  const UpdateCard = (update: LandingUpdate) => {
    return (
      <Card className={styles.updatesCard} sx={{ borderColor: "divider" }}>
        <CardActionArea>
          <CardContent className={styles.updatesCardTitle}>
            <Typography variant="label2" color="primary" component="div">
              {format(update.date, "MMM dd, yyyy")}
              <Typography color="secondary" component="span">
                &nbsp;/&nbsp;
              </Typography>
              {update.type}
            </Typography>
            <Typography variant="h5">{update.title}</Typography>
          </CardContent>
          <Stack
            className={styles.updatesCardMedia}
            sx={{ backgroundColor: "background.lightPurple" }}
          >
            <CardMedia
              component="img"
              height="100%"
              image={update.image || "/images/blog-placeholder.png"}
              alt="blog image"
            />
          </Stack>
        </CardActionArea>
      </Card>
    );
  };

  const renderBlogs = () => (
    updates.map((update, index) => (
      <UpdateCard key={index} {...update} />
    ))
  );

  return (
    <Stack ref={mainContainerRef} sx={{ width: "100%" }}>
      <Stack
        ref={updatesContainerRef}
        className={styles.updates}
        sx={{
          padding: { mobile: "40px 24px", tablet: "100px" },
        }}
      >
        <Stack
          sx={{ marginRight: `calc(${whitespace}px * -0.5)` }}
        >
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
                  <Typography sx={{ typography: { mobile: "h2-mobile", tablet: "h2" } }}>
                    UPDATES
                  </Typography>
                  <Stack
                    className={styles.carouselHeaderButtons}
                    sx={{
                      flexDirection: { tablet: "row" },
                      justifyContent: { mobile: "space-between", tablet: "unset" },
                    }}
                  >
                    <Stack className={styles.carouselHeaderPrevNextButtons}>
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
        </Stack>
      </Stack>
    </Stack>
  );
}
