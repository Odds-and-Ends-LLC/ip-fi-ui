// packages
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";

// styles
import styles from "./Modal.module.css";

// components
import { Icon } from "@/components";

export default function Modal({ title, titleIcon, children, actions, open, onClose }) {
  return (
    <Dialog scroll="paper" open={open} onClose={onClose}>
      <DialogTitle>
        <Stack className={styles.modalTitle} color="text.brandSecondary">
          {titleIcon}
          <Typography variant="h6">{title}</Typography>
        </Stack>
        <Button variant="unstyled" size="small" onClick={onClose}>
          <Icon icon="close" size={18} />
        </Button>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      {actions && (
        <DialogActions>
          <Stack
            className={styles.modalActions}
            sx={{
              flexDirection: { tablet: "row" },
              justifyContent: { tablet: "flex-end" },
            }}
          >
            {actions}
          </Stack>
        </DialogActions>
      )}
    </Dialog>
  );
}
