// packages
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select as MuiSelect, Typography } from "@mui/material";

// styles

// components
import { ArrowHeadDownIcon, ArrowHeadUpIcon } from "@/elements/icons";
import { kebabCase } from "lodash";

export default function Select({ minWidth, label, options = [], onChange, hideNone }) {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <FormControl
      disabled={options.length === 0}
      size="small"
      hiddenLabel
      sx={{ minWidth: minWidth }}
    >
      <InputLabel
        shrink={false}
        sx={{
          color: "text.primary",
          "&.Mui-focused": {
            color: "text.primary",
          },
          "&.MuiFormLabel-filled": {
            opacity: 0,
          },
        }}
      >
        <Typography variant="button" color="inherit">
          {label}
        </Typography>
      </InputLabel>
      <MuiSelect
        value={value}
        onChange={handleChange}
        IconComponent={(props) => {
          if (props.className.includes("MuiSelect-iconOpen")) {
            return <ArrowHeadUpIcon />;
          }
          return <ArrowHeadDownIcon />;
        }}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        }}
      >
        {!hideNone && <MenuItem value="">None</MenuItem>}
        {options?.map((option, i) => (
          <MenuItem key={i} value={kebabCase(option)}>
            {option}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
