import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import FilterGroupItemContainer from "./FilterGroupItemContainer";
import { filterQueryAtom } from "@/atoms";
import { useAtom } from "jotai";
import { ChangeEvent } from "react";

interface RadioType {
  label: string;
  value: string;
};

export default function RadioGroupFilter({
  title,
  name,
  radioButtons
} : {
  title: string;
  name: string;
  radioButtons: RadioType[];
}) {
  const [filterQuery, setFilterQuery] = useAtom(filterQueryAtom);

  return (
    <FilterGroupItemContainer title={title}>
      <RadioGroup
        name={name}
        value={filterQuery.get(name)}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const query = new URLSearchParams(filterQuery.toString());
          query.set(name, e.target.value);
          setFilterQuery(query);
        }}
      >
      {radioButtons.map((radioButton, i) => (
        <FormControlLabel key={i} value={radioButton.value} control={<Radio />} label={radioButton.label} />
      ))}
      </RadioGroup>
    </FilterGroupItemContainer>
  )
}
