import { Accordion, AccordionDetails, AccordionSummary,  Typography } from "@mui/material";
import { ReactNode } from "react";
import { Icon } from "..";

export default function FilterGroupItemContainer({
  title,
  children,
} : {
  title: string
  children: ReactNode;
}) {

  return (
    <Accordion
      defaultExpanded
      sx={{
        border: "2px solid #72ff8833",
        "&:before": { display: "none" },
        "&.Mui-expanded": {
          margin: 0,
        },
      }}
    >
      <AccordionSummary
        expandIcon={<Icon icon="arrowHeadDown" color="text.primary" />}
        sx={{
          bgcolor: "background.secondary",
          maxHeight: "32px",
          p: "16px !important",
          "&.Mui-expanded": {
            minHeight: "48px",
          }
        }}
      >
        <Typography variant="button1">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          bgcolor: "background.tertiary",
          p: "16px",
        }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  )
};
