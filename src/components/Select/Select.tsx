// packages
import { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { kebabCase } from "lodash";

// styles
import styles from "./Select.module.css";

// components
import { Icon } from "@/components";

export default function Select({
  disabled = false,
  hideNone = false,
  label,
  minWidth,
  onChange,
  options = [],
  variant = "standard",
}: {
  disabled?: boolean;
  hideNone?: boolean;
  label?: string;
  minWidth?: string;
  onChange?: (value: string) => void;
  options?: string[];
  variant?: "standard" | "outlined" | "filled";
}) {
  const [value, setValue] = useState("");
  const handleChange = (event: SelectChangeEvent<string>) => {
    setValue(event?.target?.value);
    onChange && onChange(event?.target?.value);
  };

  return (
    <FormControl
      disabled={options.length === 0 || disabled}
      size="small"
      hiddenLabel
      sx={{ minWidth: minWidth }}
    >
      <InputLabel
        shrink={false}
        className={styles.selectLabel}
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
        <Typography variant="button1" color="inherit">
          {label}
        </Typography>
      </InputLabel>
      <MuiSelect
        variant={variant}
        value={value}
        onChange={handleChange}
        autoFocus={false}
        IconComponent={(props) => {
          if (props.className.includes("MuiSelect-iconOpen")) {
            return <Icon icon="arrowHeadUp" />;
          }
          return <Icon icon="arrowHeadDown" />;
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
