// packages
import { Box, Grid } from "@mui/material";

// styles
import styles from "./ColorPicker.module.css";

export default function ColorPicker({
  colors = [],
  selected = "#9cffac",
  onChange = () => {},
}) {
  return (
    <Grid className={styles.colorPicker} container spacing={1}>
      {colors.map((color, i) => (
        <Grid className={styles.colorPickerItem} item desktop={.6} laptop={.6} tablet={1} mobile={1.5} key={i}>
          <Box
            className={styles.colorPickerItemColor}
            onClick={() => onChange(color)}
            sx={{
              bgcolor: color,
              borderColor: "dividerGray.main",
              borderWidth: {
                laptop: "3px",
                mobile: "1px",
              },
              borderStyle: "solid",
              ...selected === color && {
                borderColor: "background.green"
              }
            }}
          />
        </Grid>
      ))}
    </Grid>
  )
}
