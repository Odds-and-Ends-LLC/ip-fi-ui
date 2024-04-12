// packages
import { Button, Paper, Stack } from "@mui/material";

// styles
import styles from "./Contracts.module.css";

// components
import { ItemsSectionHeader, Select } from "@/components/shared";
import ItemsContract from "./ItemsContract";

// data
const contracts = [
  {
    id: 1,
    name: "CONTRACT",
    price: 150,
    status: "active",
    nft_name: "nft_name",
    collection_name: "collection_name",
    licensor: "licensorUsername",
    licensee: "licenseeUsername",
  },
  {
    id: 2,
    name: "CONTRACT",
    price: 150,
    status: "active",
    nft_name: "nft_name",
    collection_name: "collection_name",
    licensor: "licensorUsername",
    licensee: "licenseeUsername",
  },
  {
    id: 3,
    name: "CONTRACT",
    price: 150,
    status: "pending",
    nft_name: "nft_name",
    collection_name: "collection_name",
    licensor: "licensorUsername",
    licensee: "licenseeUsername",
  },
  {
    id: 4,
    name: "CONTRACT",
    price: 150,
    status: "declined",
    nft_name: "nft_name",
    collection_name: "collection_name",
    licensor: "licensorUsername",
    licensee: "licenseeUsername",
  },
  {
    id: 5,
    name: "CONTRACT",
    price: 150,
    status: "canceled",
    nft_name: "nft_name",
    collection_name: "collection_name",
    licensor: "licensorUsername",
    licensee: "licenseeUsername",
  },
  {
    id: 6,
    name: "CONTRACT",
    price: 150,
    status: "active",
    nft_name: "nft_name",
    collection_name: "collection_name",
    licensor: "licensorUsername",
    licensee: "licenseeUsername",
  },
  {
    id: 7,
    name: "CONTRACT",
    price: 150,
    status: "active",
    nft_name: "nft_name",
    collection_name: "collection_name",
    licensor: "licensorUsername",
    licensee: "licenseeUsername",
  },
  {
    id: 8,
    name: "CONTRACT",
    price: 150,
    status: "pending",
    nft_name: "nft_name",
    collection_name: "collection_name",
    licensor: "licensorUsername",
    licensee: "licenseeUsername",
  },
];

export default function Contracts() {
  return (
    <Stack className={styles.contracts}>
      <Stack className={styles.contractsHeader} sx={{ flexDirection: { tablet: "row" } }}>
        <ItemsSectionHeader title="CONTRACTS" count={10} />
        <Stack className={styles.contractsHeaderOptions}>
          <Select
            minWidth="112px"
            label="FILTER"
            options={["filter 1", "filter 2"]}
            onChange={(value) => console.log(value)}
          />
          <Select minWidth="104px" label="SORT" />
        </Stack>
      </Stack>
      <Paper variant="outlined" component={Stack} className={styles.contractsContent}>
        {contracts?.map((contract, i) => (
          <ItemsContract key={i} data={contract} />
        ))}
        <Button fullWidth variant="outlined" color="white">
          LOAD MORE
        </Button>
      </Paper>
    </Stack>
  );
}
