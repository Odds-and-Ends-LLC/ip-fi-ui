// packages
import { DataGrid, DataGridProps, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Box, Stack } from "@mui/material";

// components
import { DataContainer } from "..";

// styles
import styles from "./Table.module.css";

export default function Table({
  headerLeftComponent,
  headerRightComponent,
  bordered = true,
  hasBackground = true,
  minWidth = "",
  minHeight = "",
  maxHeight = "",
  rows,
  columns,
  dataGridProps,
} : {
  headerLeftComponent?: any;
  headerRightComponent?: any;
  bordered?: boolean;
  hasBackground?: boolean;
  minWidth?: string | object;
  minHeight?: string | object;
  maxHeight?: string | object;
  rows: GridRowsProp;
  columns: GridColDef[];
  dataGridProps?: Partial<DataGridProps>,
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
          rows={rows}
          columns={columns}
          sx={{
            ...minWidth && { minWidth },
            ...hasBackground && {
              "& .MuiDataGrid-columnHeaders": {
                bgcolor: "background.secondary",
              },
            },
            ...dataGridProps?.sx }}
        />
      </Box>
    </DataContainer>
  );
};
