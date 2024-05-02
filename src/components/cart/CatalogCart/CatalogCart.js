// packages
import { useEffect, useState } from "react";
import { Button, Stack, Typography, IconButton, TextField } from "@mui/material";

// styles
import styles from "./CatalogCart.module.css";

// components
import { PlusIcon } from "public/icons";
import { Modal, Tabs } from "@/components/shared";
import { CatalogNftTable } from "..";

// data
const catalogs = [
  {
    id: 1,
    name: "uMANILA/eth",
    nfts: [
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
    ],
  },
  {
    id: 2,
    name: "CloneX Col.",
    nfts: [
      {
        id: 1,
        name: "NFT_NAME",
        collectionName: "CloneX",
        price: 29.76,
        exclusiveLicense: false,
      },
    ],
  },
];

export default function CatalogCart() {
  const [activeCatalog, setActiveCatalog] = useState(catalogs[0]?.id);
  const [catalogList, setCatalogList] = useState([]);
  const [openModal, setOpenModal] = useState("");

  const activeCatalogIndex = (catalogs, activeCatalog) =>
    catalogs.findIndex((catalog) => catalog.id === activeCatalog);

  const handleAddCatalog = () => {
    // add catalog
    setOpenModal("createCatalog");
  };

  console.log("activeCatalogIndex", catalogs[activeCatalogIndex(catalogs, activeCatalog)]?.nfts);

  useEffect(() => {
    const renderCatalogs = (catalogs) => {
      const catalogArray = [];
      catalogs?.map((catalog) =>
        catalogArray.push({
          label: catalog?.name,
          value: catalog?.id,
          icon: (
            <Stack className={styles.catalogNftCount} sx={{ bgcolor: "text.grayOverlay" }}>
              <Typography variant="label3" color="text.secondary" sx={{}}>
                {catalog?.nfts?.length}
              </Typography>
            </Stack>
          ),
          iconPosition: "end",
        }),
      );

      return catalogArray;
    };

    setCatalogList(renderCatalogs(catalogs));
  }, []);

  return (
    <>
      <Stack className={styles.catalogCart}>
        <Stack className={styles.catalogTabs}>
          <Tabs
            value={activeCatalog}
            tabStyle={{ padding: "0 16px", "& .MuiTab-iconWrapper": { margin: 0 } }}
            tabs={catalogList}
            onChange={setActiveCatalog}
          />
          <IconButton aria-label="add catalog" onClick={handleAddCatalog} color="white">
            <PlusIcon />
          </IconButton>
        </Stack>
        <Stack className={styles.catalogNftTable}>
          <CatalogNftTable data={catalogs[activeCatalogIndex(catalogs, activeCatalog)]?.nfts} />
        </Stack>
      </Stack>

      {/* // MODAL // */}
      <Modal
        title="CREATE CATALOG"
        titleIcon={<PlusIcon />}
        open={openModal === "createCatalog"}
        onClose={() => setOpenModal("")}
        actions={
          <>
            <Button variant="outlined" color="white" onClick={() => setOpenModal("")}>
              CANCEL
            </Button>
            <Button variant="contained" onClick={() => {}}>
              CREATE
            </Button>
          </>
        }
      >
        <Typography>
          You are about to create a new catalog in iP-Fi. Please enter a Catalog name.{" "}
        </Typography>
        <Stack gap="8px">
          <Typography>Catalog Name </Typography>
          <TextField id="catalog-name" variant="filled" />
        </Stack>
      </Modal>
    </>
  );
}
