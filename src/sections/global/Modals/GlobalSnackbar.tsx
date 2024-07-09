import { Alert, Snackbar, Stack, Typography } from "@mui/material";
import { globalSnackbarAtom } from "@/atoms";
import { Icon } from "@/components";
import { useAtom } from "jotai";

export default function GlobalSnackbar() {
  const [globalSnackbar, setGlobalSnackbar] = useAtom(globalSnackbarAtom);

  return (
    <Snackbar
      open={globalSnackbar.isOpen}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={4000}
      onClose={() => setGlobalSnackbar((data) => ({ ...data, isOpen: false }))}
    >
      <Alert
        icon={<Icon icon={globalSnackbar.status === "sucess" ? "check" : "alert"} size={18} />}
        severity={globalSnackbar.status === "sucess" ? "success" : "error"}
        variant="filled"
        onClose={() => setGlobalSnackbar((data) => ({ ...data, isOpen: false }))}
        sx={{ alignItems: { mobile: "start", tablet: "center" } }}
      >
        <Stack
          gap="12px"
          sx={{
            flexDirection: { tablet: "row" },
            alignItems: { tablet: "center" },
          }}
        >
          <Typography variant="label2" textTransform="none">
            {globalSnackbar.status === "sucess" ? "Success" : "Error"}
          </Typography>
          <Typography variant="body2">{globalSnackbar.message}</Typography>
        </Stack>
      </Alert>
    </Snackbar>
  )
}
