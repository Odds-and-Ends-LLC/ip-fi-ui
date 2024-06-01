// packages
import { Paper, Stack, Typography } from "@mui/material";
import { startCase } from "lodash";
import { format } from "date-fns";

// styles
import styles from "./History.module.css";

// components
import { Avatar, Icon, Select, Table } from "@/components";

// types
import { NftHistoryData } from "../types";

// data
const history: NftHistoryData[] = [
  {
    id: 1,
    event: "transfer",
    price: 29.76,
    from: "Ysa Domingo",
    to: "Ysa Domingo",
    purchaseDate: 1697086500000,
  },
  {
    id: 2,
    event: "transfer",
    price: 29.76,
    from: "Ysa Domingo",
    to: "Ysa Domingo",
    purchaseDate: 1697075700000,
  },
  {
    id: 3,
    event: "transfer",
    price: 29.76,
    from: "Ysa Domingo",
    to: "Ysa Domingo",
    purchaseDate: 1697075700000,
  },
  {
    id: 4,
    event: "transfer",
    price: 29.76,
    from: "Ysa Domingo",
    to: "Ysa Domingo",
    purchaseDate: 1697075700000,
  },
];

export default function History() {
  const columns = [
    {
      field: "event",
      headerName: "Event",
      minWidth: 128,
      sortable: false,
      renderCell: ({ row }: { row: NftHistoryData }) => (
        <Typography color="text.secondary">{startCase(row?.event)}</Typography>
      ),
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 128,
      sortable: false,
      renderCell: ({ row }: { row: NftHistoryData }) => (
        <Stack className={styles.tableColumnPrice}>
          <Icon icon="ethereum" size={18} />
          <Typography color="text.secondary">{row?.price?.toString()}</Typography>
        </Stack>
      ),
    },
    {
      field: "from",
      headerName: "From",
      flex: 1,
      sortable: false,
      renderCell: ({ row }: { row: NftHistoryData }) => (
        <Stack className={styles.tableColumnFrom}>
          <Avatar size="s" image="/images/image_1.png" />
          <Typography>{row?.from}</Typography>
        </Stack>
      ),
    },
    {
      field: "to",
      headerName: "To",
      flex: 1,
      sortable: false,
      renderCell: ({ row }: { row: NftHistoryData }) => (
        <Stack className={styles.tableColumnTo}>
          <Avatar size="s" image="/images/image_1.png" />
          <Typography>{row?.to}</Typography>
        </Stack>
      ),
    },
    {
      field: "purchase_date",
      headerName: "Purchase Date",
      flex: 1,
      sortable: true,
      renderCell: ({ row }: { row: NftHistoryData }) => (
        <Typography color="text.secondary">
          {format(row?.purchaseDate, "MM/dd/yyyy h:mmaaa")}
        </Typography>
      ),
    },
  ];
  return (
    <Stack className={styles.history}>
      <Stack className={styles.historyHeader} sx={{ flexDirection: { tablet: "row" } }}>
        <Typography variant="h4">HISTORY</Typography>
        <Stack className={styles.historyHeaderOptions}>
          <Select
            minWidth="112px"
            label="FILTER"
            options={["filter 1", "filter 2"]}
            onChange={(value) => console.log(value)}
          />
          <Select minWidth="104px" label="SORT" onChange={undefined} hideNone={undefined} />
        </Stack>
      </Stack>
      <Paper variant="outlined" component={Stack} className={styles.historyContent}>
        <Stack
          className={styles.historyTableWrapper}
          sx={{ maxHeight: { mobile: "406px", laptop: "100%" } }}
        >
          <Table
            rows={history}
            columns={columns}
            minWidth="902px"
            minHeight={"0"}
            maxHeight="100%"
            bordered={false}
            hasBackground={false}
            dataGridProps={{
              rowHeight: 60,
              columnHeaderHeight: 50,
              hideFooter: true,
              sx: {
                "& .MuiDataGrid-columnHeader": {
                  padding: "0 16px",
                },
                "& .MuiDataGrid-cell": {
                  padding: "0 16px",
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: "unset",
                },
              },
            }}
          />
        </Stack>
      </Paper>
    </Stack>
  );
}
