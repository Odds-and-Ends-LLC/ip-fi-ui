// packages
import { Grid } from "@mui/material";

// components
import { CatalogCover, ItemsCarousel } from "@/components/shared";

export default function Catalogs() {
  return (
    <ItemsCarousel
      title="CATALOGS"
      count={26}
      viewAllurl="/"
      slides={[
        <Grid container spacing={3} height="30vw" maxHeight="475px">
          <Grid item mobile={6}>
            <CatalogCover image="images/image_2.png" title="🥇 TOP 2" />
          </Grid>
          <Grid item mobile={6}>
            <CatalogCover image="images/image_3.png" title="🥇 TOP 3" />
          </Grid>
        </Grid>,
        <Grid container spacing={3} height="30vw" maxHeight="475px">
          <Grid item mobile={6}>
            <CatalogCover image="images/image_2.png" title="🥇 TOP 2" />
          </Grid>
          <Grid item mobile={6}>
            <CatalogCover image="images/image_3.png" title="🥇 TOP 3" />
          </Grid>
        </Grid>
      ]}
    />
  )
}
