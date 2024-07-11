import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import FilterGroupItemContainer from "./FilterGroupItemContainer";
import { filterQueryAtom } from "@/atoms";
import { useAtom } from "jotai";
import { ChangeEvent } from "react";

interface CheckboxType {
  label: string;
  value: string;
};

export default function CheckboxGroupFilter({
  title,
  name,
  checkboxes
} : {
  title: string;
  name: string;
  checkboxes: CheckboxType[];
}) {
  const [filterQuery, setFilterQuery] = useAtom(filterQueryAtom);
  const values = filterQuery.get(name)?.split(",") || [];

  return (
    <FilterGroupItemContainer title={title}>
      <FormGroup
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const query = new URLSearchParams(filterQuery.toString());
          let newValues = "";
          if (e.target.checked) {
            newValues = [...values, e.target.name].toString();
          } else {
            const currentValues = [...values];
            currentValues.splice(values.indexOf(e.target.name), 1);
            newValues = currentValues.toString();
          }

          query.set(name, newValues);
          setFilterQuery(query);
        }}
      >
      {checkboxes.map((checkbox, i) => (
        <FormControlLabel key={i} name={checkbox.value} control={<Checkbox checked={!!values.includes(checkbox.value)} />} label={checkbox.label} />
      ))}
      </FormGroup>
    </FilterGroupItemContainer>
  )
}
