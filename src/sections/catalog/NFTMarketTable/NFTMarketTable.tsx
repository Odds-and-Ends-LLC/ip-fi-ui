// packages
import { GridColDef, GridRowModel, GridSortModel } from "@mui/x-data-grid";
import { Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";

// components
import { Avatar, Icon, Table } from "@/components";
import { NFTMarketDataType, TimeFilterType } from "@/types";
import { CatalogViewContext } from "../CatalogView/CatalogView";
import styles from "./NFTMarketTable.module.css";
import { getNFTsMarket } from "@/lib/client/nft";
import NFTMarketTableSkeleton from "./NFTMarketTableSkeleton";

const sortMapping: Record<string, string> = {
  // database field name: query field name
  nft: "nft",
};

export default function NFTMarketTable({
  time
} : {
  time: TimeFilterType;
}) {
  const [query, setQuery] = useState<URLSearchParams>(new URLSearchParams());
  const catalog = useContext(CatalogViewContext);
  const { data: nftMarket, isFetching } = useQuery({
    queryKey: ["nft-market", catalog.id, catalog.uid, time, query.toString()],
    queryFn: () => getNFTsMarket(catalog.id, time, query),
  });

  const renderNFT = (row: NFTMarketDataType) => (
    <Stack
      className={styles.nftMarketTableNFT}
      sx={{
        gap: {
          desktop: "24px",
          mobile: "16px",
        },
      }}
    >
      <Avatar size="s" image="/images/image_1.png" />
      <Stack className={styles.nftMarketTableNFTName}>
        <Typography
          className={styles.nftMarketTableNFTName}
          sx={{
            typography: { desktop: "h6", mobile: "label3" },
            width: { mobile: "calc(100%)", desktop: "unset" },
          }}
        >
          {row.nft.name}
        </Typography>
        <Typography color="text.disabledBlue" sx={{ typography: { desktop: "body2", mobile: "body3" }}}>{row.nft.collectionName}</Typography>
      </Stack>
    </Stack>
  );

  const renderPrice = (price: number) => (
    <Stack className={styles.nftMarketTablePrice}>
      <Icon icon="ethereum" />
      <Typography variant="body1" color="text.gray">{price}</Typography>
    </Stack>
  );

  const renderPriceChange = (priceChange: number) => (
    <Typography color={priceChange < 0 ? "text.red" : "text.secondary"} variant="body2">
      {priceChange > 0 && "+"} {priceChange} %
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
        {catalog.name}
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
      field: "nft",
      headerName: "NFT",
      flex: 1,
      renderCell: ({ row } : { row: GridRowModel<NFTMarketDataType> }) => renderNFT(row),
    },
    {
      field: "price",
      headerName: "Price",
      width: 96,
      sortable: false,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row } : { row: GridRowModel<NFTMarketDataType> }) => renderPrice(row.price),
    },
    {
      field: "priceChange",
      headerName: "2H Change",
      flex: 1,
      sortable: false,
      align: "right",
      headerAlign: "right",
      renderCell: ({ row } : { row: GridRowModel<NFTMarketDataType> }) => renderPriceChange(row.priceChange),
    },
  ];

  return (
    <Table
      headerLeftComponent={renderHeaderLeft()}
      minWidth="640px"
      maxHeight="420px"
      columns={columns}
      rows={nftMarket?.data || []}
      dataGridProps={{
        rowHeight: 60,
        hideFooter: true,
        loading: isFetching,
        rowCount: nftMarket?.data?.length,
        onSortModelChange: handleSort,
        slots: {
          loadingOverlay: NFTMarketTableSkeleton
        },
        sx: {
          "& .MuiDataGrid-overlayWrapper": {
            height: "362px !important",
          },
        }
      }}
    />
  );
};
