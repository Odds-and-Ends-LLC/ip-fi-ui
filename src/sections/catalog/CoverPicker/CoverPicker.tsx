// packages
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import Image from "next/image";

// styles
import styles from "./CoverPicker.module.css";
import { NFTType } from "@/types";

export default function CoverPicker({
  nfts,
  selected,
  onChange = () => {},
  disabled,
} : {
  nfts: NFTType[];
  selected: string;
  onChange: (id: string) => void;
  disabled?: boolean;
}) {
  return (
    <Grid className={styles.coverPicker} container spacing={1}>
      {nfts.map(({ id, image }) => (
        <Grid className={styles.coverPickerItem} key={id} item desktop={1.2} laptop={1.5} tablet={2} mobile={4} >
          <Box
            className={styles.coverPickerItemImageContainer}
            onClick={() => !disabled && onChange(id)}
            sx={{
              ...selected === id && {
                borderWidth: {
                  laptop: "5px",
                  mobile: "2px",
                },
                borderStyle: "solid",
                borderColor: disabled ? "dividers.default" : "catalog.green4",
                ...disabled && { opacity: .5 },
              },
              cursor: disabled ? "default" : "pointer",
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
