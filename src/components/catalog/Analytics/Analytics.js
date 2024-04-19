// packages
import { Stack } from "@mui/material";

// components
import { AnalyticsTables } from ".";
import { Statistics } from "..";

export default function Analytics() {
  return (
    <Stack sx={{ gap: { mobile: "24px" } }}>
      <Statistics />
      <AnalyticsTables />
    </Stack>
  )
}
