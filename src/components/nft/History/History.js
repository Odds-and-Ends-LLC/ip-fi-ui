// packages
import { Grid, Paper, Stack, Typography } from "@mui/material";
import { startCase } from "lodash";
import Image from "next/image";

// styles
import styles from "./History.module.css";

// components
import { ItemsSectionHeader, Select, Table } from "@/components/shared";

// data
const history = [
  {
    id: 1,
    event: "transfer",
    price: 29.76,
    from: "Ysa Domingo",
    to: "Ysa Domingo",
    purchaseDate: "10/11/2023 9:55 am",
  },
  {
    id: 2,
    event: "transfer",
    price: 29.76,
    from: "Ysa Domingo",
    to: "Ysa Domingo",
    purchaseDate: "10/11/2023 9:55 am",
  },
  {
    id: 3,
    event: "transfer",
    price: 29.76,
    from: "Ysa Domingo",
    to: "Ysa Domingo",
    purchaseDate: "10/11/2023 9:55 am",
  },
  {
    id: 4,
    event: "transfer",
    price: 29.76,
    from: "Ysa Domingo",
    to: "Ysa Domingo",
    purchaseDate: "10/11/2023 9:55 am",
  },
];

export default function History() {
  const columns = [
    {
      field: "event",
      headerName: "Event",
      // width: 64,
      flex: 1,
      sortable: false,
      renderCell: ({ row }) => <Typography color="text.gray">{startCase(row?.event)}</Typography>,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      sortable: false,
      renderCell: ({ row }) => <Typography color="text.gray">{row?.price?.toString()}</Typography>,
    },
    {
      field: "from",
      headerName: "From",
      flex: 1,
      sortable: false,
      renderCell: ({ row }) => <Typography color="text.gray">{row?.price?.toString()}</Typography>,
    },
    {
      field: "to",
      headerName: "To",
      flex: 1,
      sortable: false,
      renderCell: ({ row }) => <Typography color="text.gray">{row?.price?.toString()}</Typography>,
    },
    {
      field: "purchase_date",
      headerName: "Purchase Date",
      flex: 1,
      sortable: true,
      renderCell: ({ row }) => <Typography color="text.gray">{row?.price?.toString()}</Typography>,
    },
  ];
  return (
    <Stack className={styles.history}>
      <Stack className={styles.historyHeader} sx={{ flexDirection: { tablet: "row" } }}>
        <ItemsSectionHeader title="HISTORY" count={10} />
        <Stack className={styles.historyHeaderOptions}>
          <Select
            minWidth="112px"
            label="FILTER"
            options={["filter 1", "filter 2"]}
            onChange={(value) => console.log(value)}
          />
          <Select minWidth="104px" label="SORT" />
        </Stack>
      </Stack>
      <Paper variant="outlined" component={Stack} className={styles.historyContent}>
        <Stack
          sx={{ minWidth: "902px", width: "100%", maxHeight: { mobile: "406px", laptop: "100%" } }}
        >
          <Table
            bordered={false}
            dataGridProps={{
              rows: history,
              rowHeight: 60,
              hideFooter: true,
              columns: columns,
            }}
          />
        </Stack>
      </Paper>
    </Stack>
  );
}
