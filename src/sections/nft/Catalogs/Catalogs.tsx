// packages
import { Button, Paper, Stack } from "@mui/material";

// styles
import styles from "./Catalogs.module.css";

// components
import { ItemsSectionHeader, Select } from "@/components";
import { ItemsCatalogs } from ".";

// types
import { CatalogData } from "../types";

// data
const catalogs: CatalogData[] = [
  {
    id: 1,
    name: "CATALOG",
    image: "/images/checker.png",
    price: 150,
    status: "active",
    nft_name: "nft_name",
    collection_name: "collection_name",
    licensor: "licensorUsername",
    licensee: "licenseeUsername",
  },
  {
    id: 2,
    name: "CATALOG",
    image: "/images/checker.png",
    price: 150,
    status: "active",
    nft_name: "nft_name",
    collection_name: "collection_name",
    licensor: "licensorUsername",
    licensee: "licenseeUsername",
  },
  {
    id: 3,
    name: "CATALOG",
    image: "/images/checker.png",
    price: 150,
    status: "ended",
    nft_name: "nft_name",
    collection_name: "collection_name",
    licensor: "licensorUsername",
    licensee: "licenseeUsername",
  },
  {
    id: 4,
    name: "CATALOG",
    image: "/images/checker.png",
    price: 150,
    status: "ended",
    nft_name: "nft_name",
    collection_name: "collection_name",
    licensor: "licensorUsername",
    licensee: "licenseeUsername",
  },
  {
    id: 5,
    name: "CATALOG",
    image: "/images/checker.png",
    price: 150,
    status: "ended",
    nft_name: "nft_name",
    collection_name: "collection_name",
    licensor: "licensorUsername",
    licensee: "licenseeUsername",
  },
  {
    id: 6,
    name: "CATALOG",
    image: "/images/checker.png",
    price: 150,
    status: "active",
    nft_name: "nft_name",
    collection_name: "collection_name",
    licensor: "licensorUsername",
    licensee: "licenseeUsername",
  },
  {
    id: 7,
    name: "CATALOG",
    image: "/images/checker.png",
    price: 150,
    status: "active",
    nft_name: "nft_name",
    collection_name: "collection_name",
    licensor: "licensorUsername",
    licensee: "licenseeUsername",
  },
  {
    id: 8,
    name: "CATALOG",
    image: "/images/checker.png",
    price: 150,
    status: "ended",
    nft_name: "nft_name",
    collection_name: "collection_name",
    licensor: "licensorUsername",
    licensee: "licenseeUsername",
  },
];

export default function Catalogs() {
  return (
    <Stack className={styles.catalogs}>
      <Stack className={styles.catalogsHeader} sx={{ flexDirection: { tablet: "row" } }}>
        <ItemsSectionHeader title="CATALOGS" count={10} />
        <Stack className={styles.catalogsHeaderOptions}>
          <Select
            minWidth="118px"
            label="FILTER"
            options={["filter 1", "filter 2"]}
            onChange={(value) => console.log(value)}
          />
          <Select minWidth="106px" label="SORT" />
        </Stack>
      </Stack>
      <Paper variant="translucent" component={Stack} className={styles.catalogsContent}>
        {catalogs?.map((catalog, i) => (
          <ItemsCatalogs key={i} data={catalog} />
        ))}
        <Button fullWidth variant="outlineWhite">
          LOAD MORE
        </Button>
      </Paper>
    </Stack>
  );
}
