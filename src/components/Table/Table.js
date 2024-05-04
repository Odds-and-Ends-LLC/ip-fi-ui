// packages
import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import { Box, Stack } from "@mui/material";

// components
import { DataContainer } from "..";

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
    <DataContainer
      headerLeftComponent={headerLeftComponent}
      headerRightComponent={headerRightComponent}
      bordered={bordered}
      hasBackground={hasBackground}
    >
      <Box
        className={styles.table}
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
    </DataContainer>
  );
};
