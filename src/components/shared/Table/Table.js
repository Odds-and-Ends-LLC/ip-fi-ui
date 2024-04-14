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
 *  bordered: Boolean,
 *  minWidth: any,
 *  dataGridProps: DataGridProps }} props
 *
 */

export default function Table({
  headerLeftComponent,
  headerRightComponent,
  bordered = true,
  minWidth = "",
  minHeight = "",
  maxHeight = "",
  dataGridProps,
}) {
  return (
    <Stack className={styles.table} sx={{ ...(bordered && { border: "2px solid #72ff8833" }) }}>
      {(headerLeftComponent || headerRightComponent) &&
        <>
          <Stack className={styles.tableHeader} sx={{ padding: { tablet: "24px 32px", mobile: "16px" }}}>
            {headerLeftComponent}
            <Box className={styles.tableHeaderRight}>
              {headerRightComponent}
            </Box>
          </Stack>
          <Divider sx={{ borderColor: "dividerGray.main" }}  />
        </>
      }
      <Box className={styles.tableDataContainer} sx={{ minHeight, maxHeight }} >
        <DataGrid className={styles.tableData} {...dataGridProps} sx={{ minWidth }} />
      </Box>
    </Stack>
  )
};
