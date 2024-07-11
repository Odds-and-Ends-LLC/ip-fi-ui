import { filterQueryAtom } from "@/atoms";
import { useAtom } from "jotai";
import { useState } from "react";
import FilterGroupItemContainer from "./FilterGroupItemContainer";
import { Button, Chip, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { Icon } from "..";

export default function TagSelectionFilter({
  title,
  placeholder,
  name,
} : {
  title: string;
  placeholder?: string;
  name: string;
}) {
  const [filterQuery, setFilterQuery] = useAtom(filterQueryAtom);
  const [text, setText] = useState("");
  const values = filterQuery.get(name)?.split(",") || [];

  const handleAddTag = () => {
    const query = new URLSearchParams(filterQuery.toString());
    const newValues = [...values, text].toString();

    query.set(name, newValues);
    setFilterQuery(query);
    setText("");
  };

  const handleRemoveTag = (value: string) => {
    const query = new URLSearchParams(filterQuery.toString());
    const currentValues = [...values];
    currentValues.splice(values.indexOf(value), 1);

    query.set(name, currentValues.toString());
    setFilterQuery(query);
  };

  return (
    <FilterGroupItemContainer title={title}>
      <Stack sx={{ gap: "8px" }}>
        <TextField
          fullWidth
          variant="filled"
          placeholder={placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Button mode="icon" variant="clearWhite" onClick={handleAddTag}>
                  <Icon icon="add" />
                </Button>
              </InputAdornment>
            )
          }}
        />
        <Stack sx={{ flexDirection: "row", flexWrap: "wrap", gap: "8px", }}>
          {values.map((value, i) => {
            if (!value) return;
            return (
              <Chip
                key={i}
                variant="filled"
                color="secondary"
                label={value}
                onDelete={() => handleRemoveTag(value)}
                sx={{
                  width: "fit-content",
                  fontWeight: "500",
                  height: "auto",
                  '& .MuiChip-label': {
                    display: 'block',
                    whiteSpace: 'normal',
                  },
                  "& .MuiChip-deleteIcon": {
                    margin: 0
                  }
                }}
              />
            );
          })}
        </Stack>
      </Stack>
    </FilterGroupItemContainer>
  )
};
