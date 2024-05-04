// packages
import { Box, Divider, Stack } from "@mui/material";

// styles
import styles from "./DataContainer.module.css";

/**
 *
 * @param {{
 *  headerLeftComponent: any,
 *  headerRightComponent: any,
 *  hasBackground: Boolean,
 *  bordered: Boolean,
 *  children: any }} props
 *
 */

export default function DataContainer({
  headerLeftComponent,
  headerRightComponent,
  bordered = true,
  hasBackground = true,
  children,
}) {
  return (
    <Stack className={styles.dataContainer}
      sx={{
        ...(bordered && { border: "2px solid #72ff8833" }),
        ...(hasBackground && {
          boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.15)",
          backdropFilter: "blur(50px)",
          background: "linear-gradient(139deg, rgba(1, 2, 44, 1) 0%, rgba(1, 2, 44, 0.60) 100%)",
        }),
      }}>
      {(headerLeftComponent || headerRightComponent) &&
        <>
          <Stack
            className={styles.dataContainerHeader}
            sx={{
              padding: { tablet: "24px 32px", mobile: "16px" },
              ...hasBackground && {
                bgcolor: "background.default",
                borderRadius: "8px",
              },
            }}
          >
            {headerLeftComponent}
            <Box className={styles.dataContainerHeaderRight}>
              {headerRightComponent}
            </Box>
          </Stack>
          <Divider sx={{ borderColor: "dividerGray.main" }}  />
        </>
      }
      {children}
    </Stack>
  )
};
