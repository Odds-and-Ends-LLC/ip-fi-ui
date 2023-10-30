// packages
import { useState } from "react";
import { Button, MobileStepper, Stack, Typography } from "@mui/material";

export default function TextButtonsReel() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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
      <Stack sx={{ backgroundColor: "secondary.main", padding: "16px", width: "fit-content", gap: "16px"}}>
        <Button variant="contained" color="blue">Review</Button>
        <MobileStepper
          variant="dots"
          steps={6}
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
              Next
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              Back
            </Button>
          }
        />
      </Stack>
    </Stack>
  );
};
