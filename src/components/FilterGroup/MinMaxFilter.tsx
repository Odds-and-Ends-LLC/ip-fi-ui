import { Alert, Button, InputAdornment, Stack, Typography } from "@mui/material";
import FilterGroupItemContainer from "./FilterGroupItemContainer";
import { filterQueryAtom } from "@/atoms";
import { useAtom } from "jotai";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon, TextField } from "..";

interface MinMaxType {
  min: number;
  max: number;
};

const schema = z.object({
  min: z.coerce.number({ message: "Min should be a number" }),
  max: z.coerce.number({ message: "Max should be a number" }),
})
.partial()
.superRefine((data, ctx) => {
  if ((data.min || 0) <= (data.max || 0)) return true;
  ctx.addIssue({
    code: z.ZodIssueCode.custom,
    message: "Min should be less than max",
    path: ["min"],
  });
  ctx.addIssue({
    code: z.ZodIssueCode.custom,
    message: "Min should be less than max",
    path: ["max"],
  });
});

export default function MinMaxFilter({
  title,
  name,
} : {
  title: string;
  name: string;
}) {

  const Filter = () => {
    const [filterQuery, setFilterQuery] = useAtom(filterQueryAtom);
    const values: MinMaxType = JSON.parse(filterQuery.get(name) || JSON.stringify({ min: 0, max: 0 }));
    const form = useForm<MinMaxType>({
      resolver: zodResolver(schema),
      mode: "onSubmit",
      defaultValues: values,
    });

    const { reset, handleSubmit, formState: { errors, isValid } } = form;

    const onSubmit: SubmitHandler<MinMaxType> = (data) => {
      const query = new URLSearchParams(filterQuery.toString());
      query.set(name, JSON.stringify(data));

      setFilterQuery(query);
    };

    const handleReset = () => {
      reset({ min: 0, max: 0 });
      const query = new URLSearchParams(filterQuery.toString());
      query.set(name, JSON.stringify({ min: 0, max: 0 }));

      setFilterQuery(query);
    }

    return (
      <FormProvider {...form}>
        <Stack sx={{ gap: "8px" }}>
          <TextField
            name="min"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Typography variant="button2" color="text.brandSecondary">
                    Min
                  </Typography>
                </InputAdornment>
              )
            }}
          />
          <TextField
            name="max"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Typography variant="button2" color="text.brandSecondary">
                    Max
                  </Typography>
                </InputAdornment>
              )
            }}
          />
          {(errors.root) && <Alert icon={<Icon icon="alert" />} severity="error">{errors.root.message}</Alert>}
          <Stack sx={{ flexDirection: "row", gap: "8px", alignSelf: "flex-end" }}>
            <Button variant="clearPurple" onClick={handleReset}>Reset</Button>
            <Button variant="solidGreen" onClick={handleSubmit(onSubmit)}>Apply</Button>
          </Stack>
        </Stack>
      </FormProvider>
    )
  };

  return (
    <FilterGroupItemContainer title={title}>
      <Filter />
    </FilterGroupItemContainer>
  )
}
