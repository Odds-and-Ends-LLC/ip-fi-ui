// packages
import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./SignContract.module.css";

// components
import { Icon, Table } from "@/components";

// types
import { NFT } from "@/types";
import { GridRowSelectionModel } from "@mui/x-data-grid";

// data
const currentUserId = "user1"; // sample only - get current user ID

export default function NftTable({
  data = [],
  isEditable,
}: {
  data?: NFT[];
  isEditable?: boolean;
}) {
  const [selectedNfts, setSelectedNfts] = useState<GridRowSelectionModel>([]);
  const handleSelectNfts = (ids: GridRowSelectionModel) => {
    setSelectedNfts(ids);
  };

  const columns = [
    {
      field: "favorite",
      renderHeader: () => null,
      minWidth: 72,
      sortable: false,
      renderCell: ({ row }: { row: NFT }) => (
        <Stack sx={{ flex: 1 , alignItems: "center"}}>
          <Image
            src="/icons_png/Favorite_Selected_40x40.png"
            alt="favorite"
            height={40}
            width={40}
          />
        </Stack>
      ),
    },
    {
      field: "nft",
      renderHeader: () => <Typography variant="label3">NFT</Typography>,
      minWidth: 280,
      flex: 1,
      sortable: false,
      renderCell: ({ row }: { row: NFT }) => (
        <Stack sx={{ flexDirection: "row", gap: "16px", flex: 1 }}>
          <Image src={row.image} alt="nft" width={80} height={80} style={{ borderRadius: "8px" }} />
          <Stack
            sx={{
              justifyContent: "center",
              gap: "4px",
            }}
          >
            <Typography variant="h6" noWrap>
              {row?.name}
            </Typography>
            <Typography noWrap>
              <Typography variant="body2" component="span" color="text.disabled" noWrap>
                Collection:&nbsp;
              </Typography>
              <Typography variant="body2" component="span" noWrap>
                {row?.collectionName}
              </Typography>
            </Typography>
            {/* CHECK CONDITION for with Exclusive License */}
            {row?.withExclusiveLicense && (
              <Typography
                className={styles.nftWithExclusiveLicense}
                variant="graph"
                color="text.brandSecondary"
              >
                <Icon icon="check" size={18} /> with Exclusive License
              </Typography>
            )}
          </Stack>
        </Stack>
      ),
    },
    {
      field: "owner",
      renderHeader: () => null,
      minWidth: 280,
      flex: 1,
      sortable: false,
      renderCell: ({ row }: { row: NFT }) => (
        <Stack sx={{ gap: "4px", flex: 1 }}>
          <Typography variant="body2" color="text.disabled" noWrap>
            NFT Owner:&nbsp;
            <Typography component="span" variant="inherit" color="text.primary">
              {"John Doe"}
            </Typography>
          </Typography>
          <Typography variant="body2" color="text.disabled" noWrap>
            Catalog Owner:&nbsp;
            <Typography component="span" variant="inherit" color="text.primary">
              {"Jane Doe"}
            </Typography>
          </Typography>
        </Stack>
      ),
    },
    {
      field: "price",
      renderHeader: () => (
        <Typography pl="32px" variant="label3">
          Price
        </Typography>
      ),
      minWidth: 128,
      maxWidth: 192,
      flex: 1,
      sortable: false,
      renderCell: ({ row }: { row: NFT }) => (
        <Stack className={styles.tableColumnPrice}>
          <Icon icon="ethereum" />
          <Typography color="text.secondary">{row?.price?.toString()}</Typography>
          {row.withExclusiveLicense && ( // update condition and value
            <Typography color="text.disabledBlue" sx={{ textDecoration: "line-through" }}>
              {row?.price?.toString()}
            </Typography>
          )}
        </Stack>
      ),
    },
  ];
  return (
    <Stack
      className={styles.nftTableWrapper}
      sx={{
        maxHeight: { mobile: "100%", laptop: "100%" },
        minWidth: { mobile: "672px", laptop: "none" },
      }}
    >
      <Table
        rows={data}
        columns={columns}
        minHeight="0px"
        maxHeight="100%"
        bordered={false}
        hasBackground={false}
        dataGridProps={{
          rowHeight: 104,
          columnHeaderHeight: 50,
          hideFooter: true,
          disableRowSelectionOnClick: true,
          checkboxSelection: isEditable ? true : false,
          onRowSelectionModelChange: handleSelectNfts,
          scrollbarSize: 0,
          disableColumnSelector: true,
          sx: {
            "& .MuiDataGrid-columnHeader": {
              padding: "0 16px",
              "&:focus-within": {
                outline: "none",
              },
            },
            "& .MuiDataGrid-withBorderColor": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              padding: "0 16px",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "unset",
            },
            "& .MuiDataGrid-row": {
              borderTopStyle: "solid",
              borderTopWidth: "1px",
              borderTopColor: "dividers.default",
            },
            "& .MuiDataGrid-columnHeaderCheckbox": {
              minWidth: "56px !important",
              maxWidth: "56px !important",
              padding: 0,
              "& .MuiCheckbox-root": {
                padding: 0,
              },
              "& .MuiDataGrid-columnHeaderTitleContainer": {
                justifyContent: "end",
              },
            },
            "& .MuiDataGrid-cellCheckbox": {
              minWidth: "56px !important",
              maxWidth: "56px !important",
              padding: 0,
              justifyContent: "end",
              "& .MuiCheckbox-root": {
                padding: 0,
              },
            },
            "& .MuiDataGrid-virtualScroller": {
              overflow: "hidden",
            },
          },
        }}
      />
    </Stack>
  );
}
