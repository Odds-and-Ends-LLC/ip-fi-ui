// packages
import { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./CatalogNftTable.module.css";

// components
import { Icon, Table } from "@/components";

// types
import { NFTType } from "@/types";
import { GridRowSelectionModel } from "@mui/x-data-grid";

// data
const currentUserId = "user1"; // sample only - get current user ID

export default function CatalogNftTable({
  data = [],
  isEditable,
}: {
  data?: NFTType[];
  isEditable?: boolean;
}) {
  const [selectedNfts, setSelectedNfts] = useState<GridRowSelectionModel>([]);
  const hasBoughtwithExclusiveLicense = (users: { id: string }[] | undefined) => {
    return users?.find((user) => user.id === currentUserId);
  };
  const handleSelectNfts = (ids: GridRowSelectionModel) => {
    setSelectedNfts(ids);
  };

  const columns = [
    {
      field: "nft",
      renderHeader: () => <Typography variant="label3">NFT</Typography>,
      minWidth: 280,
      flex: 1,
      sortable: true,
      renderCell: ({ row }: { row: NFTType }) => (
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
            {/* CHECK CONDITION for Buy with Exclusive License & with Exclusive License(UNCOMMENT) */}
            {row?.withExclusiveLicense && (
              <Button variant="outlineGreen" size="small">
                Buy with Exclusive License
              </Button>
            )}
            {/* {row?.withExclusiveLicense && (
              <Typography
                className={styles.nftWithExclusiveLicense}
                variant="graph"
                color="text.brandSecondary"
              >
                <Icon icon="check" size={18} /> with Exclusive License
              </Typography>
            )} */}
          </Stack>
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
      renderCell: ({ row }: { row: NFTType }) => (
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
    {
      field: "delete",
      renderHeader: () => (
        <Button
          aria-label="delete nft"
          variant="clearRed"
          disabled={selectedNfts.length === 0}
          sx={{ flexDirection: "row", gap: "8px", alignItems: "center" }}
        >
          <Icon icon="delete" />
          <Typography variant="button1">({selectedNfts?.length})</Typography>
        </Button>
      ),
      minWidth: 104,
      sortable: false,
      renderCell: ({ row }: { row: NFTType }) => (
        <Button aria-label="delete nft" variant="clearRed" mode="icon">
          <Icon icon="delete" />
        </Button>
      ),
    },
  ];
  return (
    <Stack
      className={styles.nftTableWrapper}
      sx={{
        maxHeight: { mobile: "406px", laptop: "100%" },
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
          columnHeaderHeight: isEditable ? 50 : 0,
          hideFooter: true,
          disableRowSelectionOnClick: true,
          checkboxSelection: isEditable ? true : false,
          onRowSelectionModelChange: handleSelectNfts,
          scrollbarSize: 0,
          disableColumnSelector: true,
          columnVisibilityModel: {
            nft: true,
            price: true,
            delete: isEditable ? true : false,
          },
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
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
              borderBottomColor: "dividers.default",
              display: isEditable ? "block" : "none",
            },
            "& .MuiDataGrid-row:not(:last-child)": {
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
              borderBottomColor: "dividers.default",
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
              "& .MuiDataGrid-overlayWrapper": {
                display: "none",
              },
            },
          },
        }}
      />
      {data?.length === 0 && (
        <Stack className={styles.nftTableEmpty}>
          <Image
            src="/images/empty_box.png"
            alt="empty box"
            height={100}
            width={100}
            style={{ opacity: 0.5 }}
          />
          <Typography color="text.disabledBlue">Add items in this Catalog</Typography>
        </Stack>
      )}
    </Stack>
  );
}
