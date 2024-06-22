// packages
import { Box, Grid } from "@mui/material";

// styles
import styles from "./ColorPicker.module.css";

export default function ColorPicker({
  colors = [],
  selected = "#9cffac",
  onChange,
  disabled,
} : {
  colors: string[];
  selected: string;
  onChange: (color: string) => void,
  disabled?: boolean;
}) {
  return (
    <Grid className={styles.colorPicker} container spacing={1}>
      {colors.map((color, i) => (
        <Grid className={styles.colorPickerItem} item desktop={.6} laptop={.6} tablet={1} mobile={1.5} key={i}>
          <Box
            className={styles.colorPickerItemColor}
            onClick={() => !disabled && onChange(color)}
            sx={{
              bgcolor: color,
              borderWidth: {
                laptop: "3px",
                mobile: "2px",
              },
              borderStyle: "solid",
              ...selected.toLowerCase() === color.toLowerCase() && {
                borderColor: disabled ? "dividers.default" : "catalog.green4",
                ...disabled && { opacity: .5 },
              },
              cursor: disabled ? "default" : "pointer",
            }}
          />
        </Grid>
      ))}
    </Grid>
  )
}
