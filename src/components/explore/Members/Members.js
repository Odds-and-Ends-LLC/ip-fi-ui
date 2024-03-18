// packages
import { Grid } from "@mui/material";

// components
import { ItemsCarousel, Member } from "@/components/shared";

export default function Members() {
  return (
    <ItemsCarousel
      title="MEMBERS"
      count={33}
      viewAllurl="/"
      slides={[
        <Grid key={1} container spacing={3}>
          <Grid item mobile={3}>
            <Member />
          </Grid>
          <Grid item mobile={3}>
            <Member />
          </Grid>
          <Grid item mobile={3}>
            <Member />
          </Grid>
          <Grid item mobile={3}>
            <Member />
          </Grid>
        </Grid>,
        <Grid key={2} container spacing={3}>
          <Grid item mobile={3}>
            <Member />
          </Grid>
          <Grid item mobile={3}>
            <Member />
          </Grid>
          <Grid item mobile={3}>
            <Member />
          </Grid>
          <Grid item mobile={3}>
            <Member />
          </Grid>
        </Grid>
      ]}
    />
  )
}
