// packages
import {
  Box,
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
import { Carousel } from "@/components/shared";

export default function Updates() {
  const BlogCard = ({ date = "Jan 1, 2023", type = "Blog", title = "Title", image, maxWidth }) => {
    return (
      <Card className={styles.updatesBlogCard} sx={{ borderColor: "divider", maxWidth: maxWidth }}>
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
    return Array(7)
      .fill(0)
      .map((_, index) => {
        return (
          <BlogCard key={index} maxWidth="228.8px" title="10 Things You Can Do With Your NFT" />
        );
      });
  };

  return (
    <Stack
      className={styles.updates}
      sx={{
        padding: { mobile: "40px 0 40px 24px", tablet: "100px 0 100px 100px" },
      }}
    >
      <Carousel
        slides={renderBlogs()}
        emblaOptions={{
          align: "start",
          containScroll: "trimSnaps",
          slidesToScroll: "auto",
        }}
        loading={false}
        containerMarginRight={{ mobile: "24px", tablet: "100px" }}
        header={(prev, next) => {
          return (
            <Stack
              className={styles.updatesCarouselHeader}
              sx={{
                flexDirection: { tablet: "row" },
                paddingRight: { mobile: "24px", tablet: "100px" },
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
                  <IconButton aria-label="previous blogs" {...prev}>
                    <ArrowBack color="white" />
                  </IconButton>
                  <IconButton aria-label="next blogs" {...next}>
                    <ArrowForward color="white" />
                  </IconButton>
                </Stack>
                <Button variant="contained" color="primary" endIcon={<ArrowOutward />}>
                  browse all
                </Button>
              </Stack>
            </Stack>
          );
        }}
      />
    </Stack>
  );
}
