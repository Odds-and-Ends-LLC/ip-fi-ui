// packages
import { useState } from "react";
import { Checkbox, Chip, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./CatalogNftTable.module.css";

// components
import { Table } from "@/components/shared";
import { DeleteIcon, EthIcon } from "public/icons";

// data
const nfts = [
  {
    id: 1,
    name: "NFT_NAME",
    collectionName: "CloneX",
    price: 29.76,
    exclusiveLicense: false,
  },
  {
    id: 2,
    name: "NFT_NAME",
    collectionName: "CloneX",
    price: 29.76,
    exclusiveLicense: true,
  },
  {
    id: 3,
    name: "NFT_NAME",
    collectionName: "CloneX",
    price: 29.76,
    exclusiveLicense: true,
  },
  {
    id: 4,
    name: "NFT_NAME",
    collectionName: "CloneX",
    price: 29.76,
    exclusiveLicense: false,
  },
  {
    id: 5,
    name: "NFT_NAME",
    collectionName: "CloneX",
    price: 29.76,
    exclusiveLicense: true,
  },
  {
    id: 6,
    name: "NFT_NAME",
    collectionName: "CloneX",
    price: 29.76,
    exclusiveLicense: false,
  },
];

export default function CatalogNftTable() {
  const [selectedNfts, setSelectedNfts] = useState([]);
  const handleNftCheckbox = (e, value) => {
    const currentIndex = selectedNfts.indexOf(value);
    const newSelected = [...selectedNfts];

    if (e.target.checked) {
      console.log("add", value);
      newSelected.push(value);
    } else {
      newSelected.splice(currentIndex, 1);
    }

    setSelectedNfts(newSelected);
  };

  console.log("selectedNfts", selectedNfts);

  const columns = [
    {
      field: "nft",
      renderHeader: () => (
        <Typography pl="40px" variant="title">
          NFT
        </Typography>
      ),
      minWidth: 128,
      flex: 1,
      sortable: true,
      renderCell: ({ row }) => (
        <Stack sx={{ flexDirection: "row", gap: "16px", flex: 1 }}>
          <Checkbox
            sx={{ color: "dividerGray.main", padding: 0 }}
            onChange={(e) => handleNftCheckbox(e, row?.id)}
          />
          <Image
            src="/images/image_4.png"
            alt="nft"
            width={80}
            height={80}
            style={{ borderRadius: "8px" }}
          />
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
            {row?.exclusiveLicense && (
              <Chip
                variant="outlined"
                size="small"
                color="primary"
                label="Buy with Exclusive License"
              />
            )}
          </Stack>
        </Stack>
      ),
    },
    {
      field: "price",
      renderHeader: () => (
        <Typography pl="32px" variant="title">
          Price
        </Typography>
      ),
      minWidth: 128,
      sortable: false,
      renderCell: ({ row }) => (
        <Stack className={styles.tableColumnPrice}>
          <EthIcon />
          <Typography color="text.gray">{row?.price?.toString()}</Typography>
        </Stack>
      ),
    },
    {
      field: "delete",
      renderHeader: () => (
        <IconButton
          aria-label="delete nft"
          sx={{ flexDirection: "row", gap: "8px", color: "#7D5252", alignItems: "center" }}
        >
          <DeleteIcon />
          <Typography variant="button">({selectedNfts?.length})</Typography>
        </IconButton>
      ),
      minWidth: 104,
      sortable: false,
      renderCell: ({ row }) => (
        <IconButton aria-label="delete nft" color="error">
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];
  return (
    <Stack
      className={styles.historyTableWrapper}
      sx={{
        maxHeight: { mobile: "406px", laptop: "100%" },
        minWidth: { mobile: "598px", tablet: "none" },
      }}
    >
      <Table
        width="100%"
        minHeight={0}
        maxHeight="100%"
        bordered={false}
        hasBackground={false}
        dataGridProps={{
          columns: columns,
          rows: nfts,
          rowHeight: 104,
          columnHeaderHeight: 50,
          hideFooter: true,
          disableRowSelectionOnClick: true,
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
  );
}
