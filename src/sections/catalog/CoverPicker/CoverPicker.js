// packages
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import Image from "next/image";

// styles
import styles from "./CoverPicker.module.css";

export default function CoverPicker({
  nfts = [],
  selected = 1,
  onChange = () => {},
}) {
  return (
    <Grid className={styles.coverPicker} container spacing={1}>
      {nfts.map(({ id, image }) => (
        <Grid className={styles.coverPickerItem} key={id} item desktop={1.2} laptop={1.5} tablet={2} mobile={4} >
          <Box
            className={styles.coverPickerItemImageContainer}
            onClick={() => onChange(id)}
            sx={{
              ...selected === id && {
                borderWidth: {
                  laptop: "5px",
                  mobile: "2px",
                },
                borderStyle: "solid",
                borderColor: "background.green"
              }
            }}
          >
            <Image
              className={styles.coverPickerItemImage}
              src={image}
              alt={id}
              fill
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}
