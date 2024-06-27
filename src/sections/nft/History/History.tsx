// packages
import { CircularProgress, Paper, Stack, Typography } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useAtomValue } from "jotai";
import { startCase } from "lodash";
import { format } from "date-fns";
import { useRef } from "react";

// styles
import styles from "./History.module.css";

// components
import { Avatar, Icon, Select, Table } from "@/components";
import { getNFTHistory } from "@/lib/client/nft";
import { NFTHistoryType } from "@/types";
import { nftViewAtom } from "@/atoms";

export default function History() {
  const query = useSearchParams();
  const tableRef = useRef<HTMLDivElement>(null);
  const nft = useAtomValue(nftViewAtom);

  const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["nft-history", query.toString()],
    queryFn: ({ pageParam }) => getNFTHistory(nft.collectionAddress, nft.tokenId, pageParam, query),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.hasNextPage ? lastPage.page + 1 : undefined,
    placeholderData: (lastPage) => lastPage,
  });

  const nftHistory = data?.pages.map(({ data: transactions }) => transactions || [])?.flat() || [];

  const columns = [
    {
      field: "event",
      headerName: "Event",
      minWidth: 128,
      sortable: false,
      renderCell: ({ row }: { row: NFTHistoryType }) => (
        <Typography color="text.secondary">{startCase(row?.event)}</Typography>
      ),
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 128,
      sortable: false,
      renderCell: ({ row }: { row: NFTHistoryType }) => (
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
      renderCell: ({ row }: { row: NFTHistoryType }) => (
        <Stack className={styles.tableColumnFrom}>
          <Avatar size="s" image={row.fromUserPfp} />
          <Typography>{row.fromUserUsername}</Typography>
        </Stack>
      ),
    },
    {
      field: "to",
      headerName: "To",
      flex: 1,
      sortable: false,
      renderCell: ({ row }: { row: NFTHistoryType }) => (
        <Stack className={styles.tableColumnTo}>
          <Avatar size="s" image={row.toUserPfp} />
          <Typography>{row.toUserUsername}</Typography>
        </Stack>
      ),
    },
    {
      field: "purchase_date",
      headerName: "Purchase Date",
      flex: 1,
      sortable: true,
      renderCell: ({ row }: { row: NFTHistoryType }) => (
        <Typography color="text.secondary">
          {format(row?.purchasedAt, "MM/dd/yyyy h:mmaaa")}
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
      <Paper ref={tableRef} variant="outlined" component={Stack} className={styles.historyContent} onScroll={() => {
        if (isFetching || !hasNextPage || !tableRef.current?.scrollHeight) return;

        if ((tableRef.current?.scrollHeight - tableRef.current?.scrollTop - tableRef.current?.clientHeight) <= 32) {
          fetchNextPage();
        }
      }}>
        <Stack
          className={styles.historyTableWrapper}
          sx={{ maxHeight: { mobile: "406px", laptop: "100%" } }}
        >
          <Table
            rows={nftHistory}
            columns={columns}
            minWidth="902px"
            minHeight={"0"}
            maxHeight="100%"
            bordered={false}
            hasBackground={false}
            dataGridProps={{
              rowHeight: 60,
              columnHeaderHeight: 50,
              loading: isFetching,
              slots: {
                loadingOverlay: () => <></>,
                footer: () => isFetching && <Stack padding="16px" mx="auto"><CircularProgress color="secondary" /></Stack>
              },
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
