// packages
import { GridColDef, GridRowModel, GridSortModel } from "@mui/x-data-grid";
import { Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { format } from "date-fns";
import { useState } from "react";

// components
import CatalogSalesTableSkeleton from "./CatalogSalesTableSkeleton";
import { getCatalogSales } from "@/lib/client/catalog";
import styles from "./CatalogSalesTable.module.css";
import { Avatar, Icon, Table } from "@/components";
import { CatalogSalesDataType } from "@/types";
import { catalogViewAtom } from "@/atoms";

const sortMapping: Record<string, string> = {
  // database field name: query field name
  catalog: "catalog",
  purchasedAt: "purchasedAt",
};

export default function CatalogSalesTable() {
  const [query, setQuery] = useState<URLSearchParams>(new URLSearchParams());
  const catalog = useAtomValue(catalogViewAtom);

  const { data: catalogSales, isFetching } = useQuery({
    queryKey: ["catalogs-sales", catalog.id, catalog.uid, query.toString()],
    queryFn: () => getCatalogSales(catalog.id, query),
  });

  const renderRank = (rank: number) => <Typography color="text.gray" sx={{ typography: { desktop: "body1", mobile: "body3" }}}>{rank}</Typography>;

  const renderNumber = (rank: string | number) => <Typography color="text.gray" variant="body1">{rank}</Typography>;

  const renderCatalog = (row: CatalogSalesDataType, showPrice?: boolean) => (
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
            <Stack justifyContent="center" sx={{ display: { desktop: "flex", mobile: "none" }}}><Icon icon="ethereum" /></Stack>
            <Stack justifyContent="center" sx={{ display: { desktop: "none", mobile: "flex" }}}><Icon icon="ethereum" size={18} /></Stack>
            <Typography color="text.gray" sx={{ typography: { desktop: "body1", mobile: "body3" }}}>{row.price}</Typography>
          </Stack>
        }
      </Stack>
    </Stack>
  );

  const renderPrice = (price: number) => (
    <Stack className={styles.catalogSalesTablePrice}>
      <Icon icon="ethereum" />
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
      <Typography color="text.disabled" sx={{ typography: { desktop: "body2", mobile: "body3" }}}>
        {catalog.name}&apos;s
      </Typography>
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

  const handleSort = (model: GridSortModel) => {
    if (!model || !model[0]) {
      return;
    }

    const { field, sort } = model[0];
    const params = new URLSearchParams(query.toString());
    params.set("sort", `${sortMapping[field]}`);
    sort === "asc" ?
      params.set("asc", "true") :
      params.delete("asc");

    setQuery(params);
  };

  const columns: GridColDef[] = [
    {
      field: "rank",
      headerName: "",
      width: 24,
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<CatalogSalesDataType> }) => renderRank(row.rank),
    },
    {
      field: "catalog",
      headerName: "Catalog",
      flex: 1,
      renderCell: ({ row } : { row: GridRowModel<CatalogSalesDataType> }) => renderCatalog(row),
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
      align: "center",
      headerAlign: "center",
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<CatalogSalesDataType> }) => renderPrice(row.price),
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
      align: "center",
      headerAlign: "center",
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<CatalogSalesDataType> }) => renderNumber(row.quantity),
    },
    {
      field: "subtotal",
      headerName: "Subtotal",
      width: 120,
      align: "center",
      headerAlign: "center",
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<CatalogSalesDataType> }) => renderPrice(row.subtotal),
    },
    {
      field: "buyer",
      headerName: "Buyer",
      flex: 1,
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<CatalogSalesDataType> }) => renderBuyer(row.buyer.pfp, row.buyer.username),
    },
    {
      field: "purchaseAt",
      headerName: "Purchase Date",
      width: 188,
      align: "right",
      headerAlign: "left",
      renderCell: ({ row } : { row: GridRowModel<CatalogSalesDataType> }) => renderNumber(format(row.purchasedAt, "MM/dd/yyyy HH:mm a")),
    },
  ];

  return (
    <Table
      headerLeftComponent={renderHeaderLeft()}
      minWidth="1280px"
      minHeight="480px"
      maxHeight="480px"
      columns={columns}
      rows={catalogSales?.data || []}
      dataGridProps={{
        rowHeight: 60,
        hideFooter: true,
        loading: isFetching,
        slots: {
          loadingOverlay: CatalogSalesTableSkeleton,
        },
        onSortModelChange: handleSort,
        sx: {
          "& .MuiDataGrid-overlayWrapper": {
            height: "426px !important",
          },
        }
      }}
    />
  );
};
