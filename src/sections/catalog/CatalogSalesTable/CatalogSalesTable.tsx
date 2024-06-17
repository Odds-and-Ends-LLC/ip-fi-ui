// packages
import { Box, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { GridRowModel } from "@mui/x-data-grid";
import { format } from "date-fns";

// components
import { getCatalogSales } from "@/lib/client/catalog";
import styles from "./CatalogSalesTable.module.css";
import { Avatar, Table } from "@/components";
import { CatalogSalesData } from "@/types";
import { EthIcon } from "@/elements/icons";

export default function CatalogSalesTable({
  catalogId
} : {
  catalogId: string;
}) {
  const renderRank = (rank: number) => <Typography color="text.gray" sx={{ typography: { desktop: "body1", mobile: "body3" }}}>{rank}</Typography>;

  const renderNumber = (rank: string | number) => <Typography color="text.gray" variant="body1">{rank}</Typography>;

  const renderCatalog = (row: CatalogSalesData, showPrice?: boolean) => (
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
          {row.catalog.name}
        </Typography>
        <Typography color="text.disabledBlue" sx={{ typography: { desktop: "body2", mobile: "body3" }}}>{row.catalog.nfts?.length || 0} Total NFTS</Typography>
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

  const renderPrice = (price: number) => (
    <Stack className={styles.catalogSalesTablePrice}>
      <EthIcon />
      <Typography variant="body1" color="text.gray">{price}</Typography>
    </Stack>
  );

  const renderBuyer = (image: string, name: string) => (
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
      renderCell: ({ row } : { row: GridRowModel<CatalogSalesData> }) => renderRank(row.rank),
    },
    {
      field: "catalog",
      headerName: "Catalog",
      flex: 1,
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<CatalogSalesData> }) => renderCatalog(row),
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
      sortable: false,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row } : { row: GridRowModel<CatalogSalesData> }) => renderPrice(row.price),
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
      sortable: false,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row } : { row: GridRowModel<CatalogSalesData> }) => renderNumber(row.quantity),
    },
    {
      field: "subtotal",
      headerName: "Subtotal",
      width: 120,
      sortable: false,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row } : { row: GridRowModel<CatalogSalesData> }) => renderPrice(row.subtotal),
    },
    {
      field: "buyer",
      headerName: "Buyer",
      flex: 1,
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<CatalogSalesData> }) => renderBuyer(row.buyer.pfp, row.buyer.username),
    },
    {
      field: "purchaseDate",
      headerName: "Purchase Date",
      width: 188,
      sortable: false,
      align: "right",
      headerAlign: "left",
      renderCell: ({ row } : { row: GridRowModel<CatalogSalesData> }) => renderNumber(format(row.purchasedAt, "MM/dd/yyyy HH:mm a")),
    },
  ];

  return (
    <Table
      headerLeftComponent={renderHeaderLeft()}
      minWidth="1280px"
      minHeight="480px"
      maxHeight="480px"
      columns={columns}
      dataGridProps={{
        rows: rows,
        rowHeight: 60,
        hideFooter: true,
      }}
    />
  );
};
