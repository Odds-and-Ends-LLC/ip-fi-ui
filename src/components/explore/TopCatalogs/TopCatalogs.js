// packages
import { Grid } from "@mui/material";

// components
import { CatalogCover } from "@/components/shared";

export default function TopCatalogs() {
  return (
    <>
      {/* Desktop Grid */}
      <Grid container spacing={3} height="30vw" maxHeight="475px" sx={{ display: { desktop: "flex", mobile: "none" } }}>
        <Grid item mobile={6} >
          <CatalogCover image="images/image_1.png" title="🥇 TOP 1" />
        </Grid>
        <Grid item mobile={6}>
          <Grid container spacing={3} height="30vw" maxHeight="475px">
            <Grid item mobile={6}>
              <CatalogCover image="images/image_2.png" title="🥇 TOP 2" />
            </Grid>
            <Grid item mobile={6}>
              <CatalogCover image="images/image_3.png" title="🥇 TOP 3" />
            </Grid>
            <Grid item mobile={6}>
              <CatalogCover image="images/image_4.png" title="🥇 TOP 4" />
            </Grid>
            <Grid item mobile={6}>
              <CatalogCover image="images/image_1.png" title="🥇 TOP 5" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Tablet Grid */}
      <Grid container spacing={2} height="60vw" maxHeight="540px" sx={{ display: { desktop: "none", tablet: "flex", mobile: "none" } }}>
        <Grid item mobile={6}>
          <Grid container spacing={2} height="100%" maxHeight="540px">
            <Grid item mobile={12}>
              <CatalogCover image="images/image_1.png" title="🥇 TOP 1" />
            </Grid>
            <Grid item mobile={12}>
              <CatalogCover image="images/image_2.png" title="🥇 TOP 2" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item mobile={6}>
          <Grid container spacing={2} height="100%"  maxHeight="540px">
            <Grid item mobile={12}>
              <CatalogCover image="images/image_3.png" title="🥇 TOP 3" />
            </Grid>
            <Grid item mobile={12}>
              <CatalogCover image="images/image_4.png" title="🥇 TOP 4" />
            </Grid>
            <Grid item mobile={12}>
              <CatalogCover image="images/image_1.png" title="🥇 TOP 5" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Mobile Grid */}
      <Grid container height="560px" spacing={2} sx={{ display: { desktop: "none", tablet: "none", mobile: "flex" } }}>
        <Grid item mobile={12}>
          <CatalogCover image="images/image_1.png" title="🥇 TOP 1" />
        </Grid>
        <Grid item mobile={12}>
          <CatalogCover image="images/image_1.png" title="🥇 TOP 1" />
        </Grid>
        <Grid item mobile={12}>
          <CatalogCover image="images/image_1.png" title="🥇 TOP 1" />
        </Grid>
        <Grid item mobile={12}>
          <CatalogCover image="images/image_1.png" title="🥇 TOP 1" />
        </Grid>
        <Grid item mobile={12}>
          <CatalogCover image="images/image_1.png" title="🥇 TOP 1" />
        </Grid>
      </Grid>
    </>
  )
}
