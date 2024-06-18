// packages
import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { format } from "date-fns";

// styles
import styles from "./Updates.module.css";

// types
import { LandingUpdateType } from "@/types";

export default function UpdatesCard({
  update,
} : {
  update: LandingUpdateType
}) {
  return (
    <Card className={styles.updatesCard} sx={{ borderColor: "dividers.brand" }}>
      <CardActionArea>
        <CardContent className={styles.updatesCardTitle}>
          <Typography variant="label2" color="secondary" component="div">
            {format(update.date, "MMM dd, yyyy")}
            <Typography color="primary" component="span">
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
  )
}
