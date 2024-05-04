"use client";

// packages
import { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowBack, ArrowForward, ArrowOutward } from "@mui/icons-material";

// styles
import styles from "./Updates.module.css";

// components
import { Carousel } from "@/components";

export default function UpdatesCarousel({ updates = [] }) {
  const [mainContainerSize, setMainContainerSize] = useState(0);
  const [updatesContainerSize, setUpdatesContainerSize] = useState(0);
  const mainContainerRef = useRef(null);
  const updatesContainerRef = useRef(null);

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

  const BlogCard = ({ date = "Jan 1, 2023", type = "Blog", title = "Title", image, width }) => {
    return (
      <Card className={styles.updatesBlogCard} sx={{ borderColor: "divider", width: width }}>
        <CardActionArea>
          <CardContent className={styles.updatesBlogCardTitle}>
            <Typography variant="label2" color="primary" component="div">
              {date}
              <Typography color="secondary" component="span">
                &nbsp;/&nbsp;
              </Typography>
              {type}
            </Typography>
            <Typography variant="h5">{title}</Typography>
          </CardContent>
          <Stack
            className={styles.updatesBlogCardMedia}
            sx={{ backgroundColor: "background.lightPurple" }}
          >
            <CardMedia
              component="img"
              height="100%"
              image={image || "/images/blog-placeholder.png"}
              alt="blog image"
            />
          </Stack>
        </CardActionArea>
      </Card>
    );
  };

  const renderBlogs = () => {
    return updates.map((update, index) => {
        return (
          <BlogCard
            key={index}
            width={{ mobile: "100%" }}
            {...update}
          />
        );
      });
  };

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
                      {/* <IconButton aria-label="previous blogs" {...prev}>
                        <ArrowBack color="white" />
                      </IconButton>
                      <IconButton aria-label="next blogs" {...next}>
                        <ArrowForward color="white" />
                      </IconButton> */}
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
