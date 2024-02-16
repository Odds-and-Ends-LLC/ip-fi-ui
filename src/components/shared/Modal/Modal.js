// packages
import { Button, Dialog, DialogTitle, DialogContent, Stack, Typography } from "@mui/material";
import { CloseIcon } from "public/icons";

// components

export default function Modal({ title, children, open, onClose }) {
  return (
    <Dialog scroll="paper" open={open} onClose={onClose}>
      <DialogTitle>
        <Stack flex={1}>
          <Typography variant="h6" color="text.secondary">
            {title}
          </Typography>
        </Stack>
        <Button variant="unstyled" onClick={onClose}>
          <CloseIcon size={18} />
        </Button>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
