// packages
import { Box, Stack, Typography } from "@mui/material";

// components
import { Avatar, Table } from "@/components/shared";
import { EthIcon } from "public/icons";

// styles
import styles from "./MarketTable.module.css";

export default function MarketTable() {
  const renderCatalog = (row, showPrice) => (
    <Stack
      className={styles.marketTableCatalog}
      sx={{
        gap: {
          desktop: "24px",
          mobile: "16px",
        },
      }}
    >
      <Avatar size="s" image="/images/image_1.png" />
      <Stack className={styles.marketTableCatalogName}>
        <Typography
          className={styles.marketTableCatalogName}
          sx={{
            typography: { desktop: "h6", mobile: "label3" },
            width: { mobile: "calc(100%)", desktop: "unset" },
          }}
        >
          {row.catalogName}
        </Typography>
        <Typography color="text.disabledBlue" sx={{ typography: { desktop: "body2", mobile: "body3" }}}>{row.totalNfts} Total NFTS</Typography>
        {showPrice &&
          <Stack flexDirection="row" alignItems="center">
            <Typography sx={{ typography: { desktop: "body1", mobile: "body3" }}}>Price: </Typography>
            <Stack justifyContent="center" sx={{ display: { desktop: "flex", mobile: "none" }}}><EthIcon /></Stack>
            <Stack justifyContent="center" sx={{ display: { desktop: "none", mobile: "flex" }}}><EthIcon size={16} /></Stack>
            <Typography color="text.gray" sx={{ typography: { desktop: "body1", mobile: "body3" }}}>{row.price}</Typography>
          </Stack>
        }
      </Stack>
    </Stack>
  );

  const renderPrice = (price) => (
    <Stack className={styles.marketTablePrice}>
      <EthIcon />
      <Typography variant="body1" color="text.gray">{price}</Typography>
    </Stack>
  );

  const renderVolumeDelta = (volumeDelta) => (
    <Typography color={volumeDelta < 0 ? "text.red" : "text.secondary"} sx={{ typography: { desktop: "body2", mobile: "body3" }}}>
      {volumeDelta > 0 && "+"} {volumeDelta} %
    </Typography>
  );

  const renderHeaderLeft = () => (
    <Stack>
      <Typography color="text.disabled" sx={{ typography: { desktop: "body2", mobile: "body3" }}}>Market of</Typography>
      <Typography
        sx={{
          typography: { desktop: "h6", mobile: "label3" },
          width: { mobile: "calc(100%)", desktop: "unset" },
        }}
      >
        IP-Fi&apos;s Catalog
      </Typography>
    </Stack>
  );

  const desktopColumns = [
    {
      field: "catalog",
      headerName: "Catalog",
      flex: 1,
      sortable: false,
      renderCell: ({ row }) => renderCatalog(row),
    },
    {
      field: "price",
      headerName: "Price",
      width: 96,
      sortable: false,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => renderPrice(row.price),
    },
    {
      field: "volumeDelta",
      headerName: "2H Change",
      flex: 1,
      sortable: false,
      align: "right",
      headerAlign: "right",
      renderCell: ({ row }) => renderVolumeDelta(row.volumeDelta),
    },
  ];

  const mobileColumns = [
    {
      field: "catalog",
      headerName: "Catalog",
      flex: 1,
      sortable: false,
      renderCell: ({ row }) => renderCatalog(row, true),
    },
    {
      field: "volumeDelta",
      headerName: "2H Change",
      width: 96,
      sortable: false,
      align: "right",
      headerAlign: "right",
      renderCell: ({ row }) => renderVolumeDelta(row.volumeDelta),
    },
  ];

  const rows = [
    { id: 1, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volumeDelta: 135 },
    { id: 2, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volumeDelta: 135 },
    { id: 3, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volumeDelta: 135 },
    { id: 4, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volumeDelta: 135 },
    { id: 5, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volumeDelta: 135 },
    { id: 6, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volumeDelta: 135 },
  ];

  return (
    <>
      <Box sx={{ display: { tablet: "block", mobile: "none" } }}>
        <Table
          headerLeftComponent={renderHeaderLeft()}
          dataGridProps={{
            rows: rows,
            rowHeight: 60,
            hideFooter: true,
            columns: desktopColumns,
          }}
        />
      </Box>
      <Box sx={{ display: { desktop: "none", mobile: "block" } }}>
        <Table
          headerLeftComponent={renderHeaderLeft()}
          dataGridProps={{
            rows: rows,
            rowHeight: 80,
            hideFooter: true,
            columns: mobileColumns,
          }}
        />
      </Box>
    </>

  );
};
