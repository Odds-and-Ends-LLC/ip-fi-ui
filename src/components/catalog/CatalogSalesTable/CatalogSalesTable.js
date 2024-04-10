// packages
import { Box, Stack, Typography } from "@mui/material";

// components
import { Avatar, Table } from "@/components/shared";
import { EthIcon } from "public/icons";

// styles
import styles from "./CatalogSalesTable.module.css";

export default function CatalogSalesTable() {
  const renderRank = (rank) => <Typography color="text.gray" sx={{ typography: { desktop: "body1", mobile: "body3" }}}>{rank}</Typography>;

  const renderNumber = (rank) => <Typography color="text.gray" variant="body1">{rank}</Typography>;

  const renderCatalog = (row, showPrice) => (
    <Stack
      className={styles.catalogSalesTableCatalog}
      sx={{
        gap: {
          desktop: "24px",
          mobile: "16px",
        },
      }}
    >
      <Avatar size="s" image="/images/image_1.png" />
      <Stack className={styles.catalogSalesTableCatalogName}>
        <Typography
          className={styles.catalogSalesTableCatalogName}
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
    <Stack className={styles.catalogSalesTablePrice}>
      <EthIcon />
      <Typography variant="body1" color="text.gray">{price}</Typography>
    </Stack>
  );

  const renderBuyer = (image, name) => (
    <Stack className={styles.catalogSalesTableBuyer}>
      <Avatar size="s" image={image || "/images/image_1.png"} />
      <Typography variant="body1" color="text.gray">{name}</Typography>
    </Stack>
  );

  const renderHeaderLeft = () => (
    <Stack>
      <Typography color="text.disabled" sx={{ typography: { desktop: "body2", mobile: "body3" }}}>uMANILA/eth&apos;s</Typography>
      <Typography
        sx={{
          typography: { desktop: "h6", mobile: "label3" },
          width: { mobile: "calc(100%)", desktop: "unset" },
        }}
      >
        CATALOG SALES
      </Typography>
    </Stack>
  );

  const columns = [
    {
      width: 24,
      sortable: false,
      renderCell: ({ row }) => renderRank(row.rank),
    },
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
      width: 120,
      sortable: false,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => renderPrice(row.price),
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
      sortable: false,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => renderNumber(row.quantity),
    },
    {
      field: "subtotal",
      headerName: "Subtotal",
      width: 120,
      sortable: false,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => renderPrice(row.subtotal),
    },
    {
      field: "buyer",
      headerName: "Buyer",
      flex: 1,
      sortable: false,
      renderCell: ({ row }) => renderBuyer(row.buyerImage, row.buyerName),
    },
    {
      field: "purchaseDate",
      headerName: "Purchase Date",
      width: 188,
      sortable: false,
      align: "right",
      headerAlign: "left",
      renderCell: ({ row }) => renderNumber(row.purchaseDate),
    },
  ];

  const rows = [
    { id: 1, rank: 1, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, quantity: 135, subtotal: 29.76, buyerName: "Markiplier", purchaseDate: "10/11/2023 9:55 am" },
    { id: 2, rank: 2, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, quantity: 135, subtotal: 29.76, buyerName: "Markiplier", purchaseDate: "10/11/2023 9:55 am" },
    { id: 3, rank: 3, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, quantity: 135, subtotal: 29.76, buyerName: "Markiplier", purchaseDate: "10/11/2023 9:55 am" },
    { id: 4, rank: 4, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, quantity: 135, subtotal: 29.76, buyerName: "Markiplier", purchaseDate: "10/11/2023 9:55 am" },
    { id: 5, rank: 5, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, quantity: 135, subtotal: 29.76, buyerName: "Markiplier", purchaseDate: "10/11/2023 9:55 am" },
    { id: 6, rank: 6, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, quantity: 135, subtotal: 29.76, buyerName: "Markiplier", purchaseDate: "10/11/2023 9:55 am" },
    { id: 7, rank: 7, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, quantity: 135, subtotal: 29.76, buyerName: "Markiplier", purchaseDate: "10/11/2023 9:55 am" },
    { id: 8, rank: 8, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, quantity: 135, subtotal: 29.76, buyerName: "Markiplier", purchaseDate: "10/11/2023 9:55 am" },
    { id: 9, rank: 9, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, quantity: 135, subtotal: 29.76, buyerName: "Markiplier", purchaseDate: "10/11/2023 9:55 am" },
  ];

  return (
    <Table
      headerLeftComponent={renderHeaderLeft()}
      minWidth="1280px"
      minHeight="480px"
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
