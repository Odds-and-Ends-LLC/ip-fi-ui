// packages
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

// styles
import styles from "./Updates.module.css";

// components

export default function Updates() {
  const BlogCard = ({ date = "Jan 1, 2023", type = "Blog", title = "Title", image }) => {
    return (
      <Card className={styles.updatesBlogCard} sx={{ borderColor: "divider" }}>
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
            <CardMedia component="img" height="100%" image={image} alt="blog image" />
          </Stack>
        </CardActionArea>
      </Card>
    );
  };
  return (
    <Stack sx={{ padding: { mobile: "40px 24px", tablet: "100px" } }}>
      <Stack sx={{ width: "100%", maxWidth: "240px" }}>
        <BlogCard title="10 Things You Can Do With Your NFT" />
      </Stack>
    </Stack>
  );
}
