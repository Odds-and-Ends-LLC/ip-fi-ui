// packages
import { Stack, Typography } from "@mui/material";
import { useState } from "react";

// styles
import styles from "./Explore.module.css";
import { Avatar, CatalogCover, Tabs } from "@/components/shared";
import { Member, NFT } from "@/components/shared";
import { DataGrid } from "@mui/x-data-grid";

export default function Explore() {
  const [mainTab, setMainTab] = useState("all");

  return (
    <Stack
      className={styles.explore}
      sx={{
        backgroundColor: "blue.main",
        gap: { mobile: "24px", tablet: "32px" },
        padding: { mobile: "104px 40px 32px", tablet: "96px 64px 32px" },
      }}
    >
      <Tabs
        value={mainTab}
        tabs={[
          { label: "ALL", value: "all" },
          { label: "CATALOGS", value: "catalogs" },
          { label: "NFTS", value: "nfts" },
          { label: "MEMBERS", value: "members" },
        ]}
        onChange={setMainTab}
      />
      <NFT />
      <Member />
      <Stack width={679} height={475}>
        <CatalogCover />
      </Stack>
      <DataGrid
        columns={[
          {
            field: "rank",
            headerName: "Rank",
            renderCell: ({ row }) => <Typography variant="b1">{row.rank}</Typography>
          },
          { field: "catalog", headerName: "Catalog", flex: 1 },
          { field: "col3", headerName: "Col3", flex: 1 },
          { field: "col4", headerName: "Col4", flex: 1 },
        ]}
        rows={[
          { id: 1, rank: "1", col2: "A2", col3: "A3", col4: "A4" },
          { id: 2, rank: "2", col2: "B2", col3: "B3", col4: "B4" },
          { id: 3, rank: "3", col2: "C2", col3: "C3", col4: "C4" },
          { id: 4, rank: "4", col2: "D2", col3: "D3", col4: "D4" },
          { id: 5, rank: "5", col2: "D2", col3: "D3", col4: "D4" },
        ]}
      />
      <Avatar />
    </Stack>
  )
};
