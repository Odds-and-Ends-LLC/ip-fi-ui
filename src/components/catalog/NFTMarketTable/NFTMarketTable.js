// packages
import { Box, Stack, Typography } from "@mui/material";

// components
import { Avatar, Table } from "@/components/shared";
import { EthIcon } from "@/elements/icons";

// styles
import styles from "./NFTMarketTable.module.css";

export default function NFTMarketTable() {
  const renderCatalog = (row) => (
    <Stack
      className={styles.nftMarketTableCatalog}
      sx={{
        gap: {
          desktop: "24px",
          mobile: "16px",
        },
      }}
    >
      <Avatar size="s" image="/images/image_1.png" />
      <Stack className={styles.nftMarketTableCatalogName}>
        <Typography
          className={styles.nftMarketTableCatalogName}
          sx={{
            typography: { desktop: "h6", mobile: "label3" },
            width: { mobile: "calc(100%)", desktop: "unset" },
          }}
        >
          {row.catalogName}
        </Typography>
        <Typography color="text.disabledBlue" sx={{ typography: { desktop: "body2", mobile: "body3" }}}>{row.totalNfts} Total NFTS</Typography>
      </Stack>
    </Stack>
  );

  const renderPrice = (price) => (
    <Stack className={styles.nftMarketTablePrice}>
      <EthIcon />
      <Typography variant="body1" color="text.gray">{price}</Typography>
    </Stack>
  );

  const renderVolumeDelta = (volumeDelta) => (
    <Typography color={volumeDelta < 0 ? "text.red" : "text.secondary"} variant="body2">
      {volumeDelta > 0 && "+"} {volumeDelta} %
    </Typography>
  );

  const renderHeaderLeft = () => (
    <Stack>
      <Typography color="text.disabled" sx={{ typography: { desktop: "body2", mobile: "body3" }}}>NFT Market of</Typography>
      <Typography
        sx={{
          typography: { desktop: "h6", mobile: "label3" },
          width: { mobile: "calc(100%)", desktop: "unset" },
        }}
      >
        uMANILA/eth
      </Typography>
    </Stack>
  );

  const columns = [
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

  const rows = [
    { id: 1, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volumeDelta: 135 },
    { id: 2, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volumeDelta: 135 },
    { id: 3, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volumeDelta: 135 },
    { id: 4, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volumeDelta: 135 },
    { id: 5, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volumeDelta: 135 },
    { id: 6, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volumeDelta: 135 },
  ];

  return (
    <Table
      headerLeftComponent={renderHeaderLeft()}
      minWidth="640px"
      maxHeight="480px"
      dataGridProps={{
        rows: rows,
        rowHeight: 60,
        hideFooter: true,
        columns,
      }}
    />
  );
};
