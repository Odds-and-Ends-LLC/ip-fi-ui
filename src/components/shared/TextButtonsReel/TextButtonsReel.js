// packages
import { Button, Stack, Typography } from "@mui/material";

export default function TextButtonsReel() {
  return (
    <Stack sx={{ gap: "8px" }}>
      <Typography variant="h4-unbounded" color="secondary">Text and Buttons</Typography>
      <Typography variant="h1">Header</Typography>
      <Typography variant="h2">Small Header</Typography>
      <Typography variant="h3">Common Text</Typography>
      <Typography variant="h3-bold">Bold Common Text</Typography>
      <Typography variant="h4">Caption Text</Typography>
      <Typography variant="h4-bold">Bold Caption Text</Typography>
      <Typography variant="h4-unbounded">Unbounded Caption Text</Typography>
      <Typography variant="h5">Small Text</Typography>
      <Button variant="gradient">Join Waitlist</Button>
      <Button variant="contained" color="secondary">Review</Button>
      <Stack sx={{ backgroundColor: "secondary.main", padding: "16px", width: "fit-content"}}>
        <Button variant="contained" color="blue">Review</Button>
      </Stack>
    </Stack>
  );
};
