// packages
import { Box, Divider, Stack } from "@mui/material";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";

// styles
import styles from "./Table.module.css";

/**
 *
 * @param {{
 *  headerLeftComponent: any,
 *  headerRightComponent: any,
 *  bordered: Boolean,
 *  dataGridProps: DataGridProps }} props
 *
 */

export default function Table({
  headerLeftComponent,
  headerRightComponent,
  bordered = true,
  dataGridProps,
}) {

  return (
    <Stack className={styles.table} sx={{ ...(bordered && { border: "2px solid #72ff8833" }) }}>
      {(headerLeftComponent || headerRightComponent) &&
        <>
          <Stack className={styles.tableHeader}>
            {headerLeftComponent}
            <Box className={styles.tableHeaderRight}>
              {headerRightComponent}
            </Box>
          </Stack>
          <Divider sx={{ borderColor: "dividerGray.main" }}  />
        </>
      }
      <DataGrid className={styles.tableData} {...dataGridProps} autoHeight />
    </Stack>
  )
};
