// packages
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  SxProps,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// styles
import styles from "./Modal.module.css";

// components
import { Icon } from "@/components";
import { ReactNode } from "react";

export default function Modal({
  title,
  titleIcon,
  children,
  actions,
  open = false,
  onClose,
  contentStyles,
}: {
  open?: boolean;
  title: string;
  titleIcon?: any;
  children: ReactNode;
  actions?: ReactNode;
  onClose: () => void;
  contentStyles?: SxProps;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("large"));
  return (
    <Dialog scroll="paper" open={open} onClose={onClose} fullScreen={isMobile}>
      <DialogTitle>
        <Stack className={styles.modalTitle} color="text.brandSecondary">
          {titleIcon}
          <Typography variant="h6">{title}</Typography>
        </Stack>
        <Button variant="unstyled" size="small" onClick={onClose}>
          <Icon icon="close" size={18} />
        </Button>
      </DialogTitle>
      <DialogContent sx={{ ...contentStyles }}>{children}</DialogContent>
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
