import FilterGroupItemContainer from "./FilterGroupItemContainer";
import { Slider, Stack, Typography } from "@mui/material";
import { filterQueryAtom } from "@/atoms";
import { useAtom } from "jotai";
import { useState } from "react";

export default function SliderRangeFilter({
  title,
  name,
  min,
  max,
  step,
} : {
  title: string;
  name: string;
  min: number;
  max: number;
  step: number;
}) {
  const [filterQuery, setFilterQuery] = useAtom(filterQueryAtom);
  const [value, setValue] = useState(Number(filterQuery.get(name)));

  return (
    <FilterGroupItemContainer title={title}>
      <Stack sx={{ flexDirection: "row", gap: "16px", alignItems: "center" }}>
        <Typography variant="button2">{min}</Typography>
        <Slider
          onChange={(_, v) => setValue(v as number)}
          onChangeCommitted={(_, value) => {
            const query = new URLSearchParams(filterQuery.toString());
            query.set(name, value.toString());
            setFilterQuery(query);
          }}
          valueLabelDisplay="auto"
          value={value}
          shiftStep={step}
          step={step}
          marks
          min={min}
          max={max}
        />
        <Typography variant="button2">{max}</Typography>
      </Stack>
    </FilterGroupItemContainer>
  )
}
