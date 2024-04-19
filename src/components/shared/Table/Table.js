// packages
import { Box, Divider, Stack, SxProps } from "@mui/material";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";

// styles
import styles from "./Table.module.css";

/**
 *
 * @param {{
 *  headerLeftComponent: any,
 *  headerRightComponent: any,
 *  hasBackground: Boolean,
 *  bordered: Boolean,
 *  minWidth: any,
 *  dataGridProps: DataGridProps }} props
 *
 */

export default function Table({
  headerLeftComponent,
  headerRightComponent,
  bordered = true,
  hasBackground = true,
  minWidth = "",
  minHeight = "",
  maxHeight = "",
  dataGridProps,
}) {
  return (
    <Stack className={styles.table}
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
            className={styles.tableHeader}
            sx={{
              padding: { tablet: "24px 32px", mobile: "16px" },
              ...hasBackground && {
                bgcolor: "background.default",
                borderRadius: "8px",
              },
            }}
          >
            {headerLeftComponent}
            <Box className={styles.tableHeaderRight}>
              {headerRightComponent}
            </Box>
          </Stack>
          <Divider sx={{ borderColor: "dividerGray.main" }}  />
        </>
      }
      <Box
        className={styles.tableDataContainer}
        sx={{ minHeight, maxHeight }}
      >
        <DataGrid
          className={styles.tableData}
          {...dataGridProps}
          sx={{
            minWidth,
            ...hasBackground && {
              "& .MuiDataGrid-columnHeaders": {
                bgcolor: "background.default",
              },
            },
            ...dataGridProps.sx }}
        />
      </Box>
    </Stack>
  )
};
