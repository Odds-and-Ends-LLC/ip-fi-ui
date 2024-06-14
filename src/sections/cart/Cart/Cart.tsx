// packages
import { ReactNode, useEffect, useState } from "react";
import { Button, Paper, Stack, Typography } from "@mui/material";

// styles
import styles from "./Cart.module.css";

// components
import { Icon, ItemsSectionHeader, Modal, Tabs, TextField } from "@/components";
import {
  CatalogNftTable,
  OrderSummary,
  PaymentMethod,
  PaymentSummary,
  ProgressIndicator,
} from "..";

// types
import { Catalog } from "@/types";
interface RenderedCatalog {
  label: string;
  value: string;
  icon: ReactNode;
  iconPosition: "end";
}

// data
const catalogs: Catalog[] = [
  {
    id: "catalog1",
    name: "uMANILA/eth",
    nfts: [
      {
        id: "nft1",
        name: "NFT_NAME",
        image: "/images/image_4.png",
        collectionName: "CloneX",
        price: 29.76,
        exclusiveLicense: false,
      },
      {
        id: "nft2",
        name: "NFT_NAME",
        image: "/images/image_4.png",
        collectionName: "CloneX",
        price: 29.76,
        exclusiveLicense: true,
      },
      {
        id: "nft3",
        name: "NFT_NAME",
        image: "/images/image_4.png",
        collectionName: "CloneX",
        price: 29.76,
        exclusiveLicense: true,
        usersWithExclusiveLicense: [{ id: "user1" }],
      },
      {
        id: "nft4",
        name: "NFT_NAME",
        image: "/images/image_4.png",
        collectionName: "CloneX",
        price: 29.76,
        exclusiveLicense: false,
      },
      {
        id: "nft5",
        name: "NFT_NAME",
        image: "/images/image_4.png",
        collectionName: "CloneX",
        price: 29.76,
        exclusiveLicense: true,
        usersWithExclusiveLicense: [{ id: "user2" }],
      },
      {
        id: "nft6",
        name: "NFT_NAME",
        image: "/images/image_4.png",
        collectionName: "CloneX",
        price: 29.76,
        exclusiveLicense: false,
      },
    ],
  },
  {
    id: "catalog2",
    name: "CloneX Col.",
    nfts: [
      {
        id: "nft7",
        name: "NFT_NAME",
        image: "/images/image_4.png",
        collectionName: "CloneX",
        price: 29.76,
        exclusiveLicense: false,
      },
    ],
  },
  {
    id: "catalog3",
    name: "Test",
    nfts: [],
  },
];

export default function Cart() {
  const STEPS = ["Catalog Cart", "Order Summary", "Payment", "Sign Contract"];
  const [activeStep, setActiveStep] = useState<number>(2);
  const [activeCatalog, setActiveCatalog] = useState<Catalog | undefined>(undefined);
  const [catalogsList, setCatalogsList] = useState<RenderedCatalog[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string | undefined>(undefined);
  const [openModal, setOpenModal] = useState("");

  const handleAddCatalog = () => {
    // add catalog
    setOpenModal("createCatalog");
  };

  const handleCreateCatalog = () => {
    // create catalog
  };

  useEffect(() => {
    catalogs && setActiveCatalog(catalogs[0]);
  }, []);

  useEffect(() => {
    const renderCatalogs = (catalogs: Catalog[]): RenderedCatalog[] => {
      const catalogArray: RenderedCatalog[] = [];
      catalogs?.map((catalog) =>
        catalogArray.push({
          label: catalog?.name,
          value: catalog?.id,
          icon: (
            <Stack className={styles.catalogNftCount} sx={{ bgcolor: "background.grayOverlay" }}>
              <Typography variant="label3" color="text.brandSecondary">
                {catalog?.nfts?.length}
              </Typography>
            </Stack>
          ),
          iconPosition: "end",
        }),
      );

      return catalogArray;
    };

    setCatalogsList(renderCatalogs(catalogs));
  }, []);

  return (
    <Stack
      className={styles.catalogCart}
      sx={{
        backgroundColor: "background.secondary",
        height: { laptop: "100vh" },
      }}
    >
      <ProgressIndicator activeStepIndex={activeStep} />
      <Stack
        className={styles.catalogCartContents}
        sx={{ height: { laptop: "calc(100vh - 160px)" } }}
      >
        <Stack
          className={styles.catalogCartSection}
          sx={{ padding: { mobile: "0 24px", tablet: "0 64px" } }}
        >
          <Stack className={styles.catalogHeader}>
            {activeStep === 2 && (
              <Button
                variant="clearGreen"
                startIcon={<Icon icon="arrowLeft" />}
                onClick={() => setActiveStep(1)}
              >
                BACK TO ORDER SUMMARY
              </Button>
            )}
            {activeStep === 1 && (
              <>
                <Button
                  variant="clearGreen"
                  startIcon={<Icon icon="arrowLeft" />}
                  onClick={() => setActiveStep(0)}
                >
                  BACK TO CATALOG CART
                </Button>
                <ItemsSectionHeader
                  title={activeCatalog?.name || ""}
                  count={activeCatalog?.nfts?.length || 0}
                />
              </>
            )}
            {activeStep === 0 && (
              <Stack className={styles.catalogTabs}>
                <Tabs
                  value={activeCatalog?.id || ""}
                  tabStyle={{ padding: "0 16px", "& .MuiTab-iconWrapper": { margin: 0 } }}
                  tabs={catalogsList}
                  onChange={(catalogId) =>
                    setActiveCatalog(catalogs.find((catalog) => catalog?.id === catalogId))
                  }
                />
                <Button variant="clearWhite" aria-label="add catalog" onClick={handleAddCatalog}>
                  <Icon icon="add" />
                </Button>
              </Stack>
            )}
          </Stack>
          {activeStep < 2 && (
            <Stack
              className={styles.catalogTableAndSummary}
              sx={{ flexDirection: { laptop: "row" } }}
            >
              <Stack
                className={styles.catalogCartTable}
                sx={{ maxWidth: { laptop: "calc(100% - 392px)", desktop: "calc(100% - 488px)" } }}
              >
                <Paper variant="translucent" component={Stack} className={styles.catalogNftTable}>
                  <CatalogNftTable data={activeCatalog?.nfts} isEditable={activeStep === 0} />
                </Paper>
              </Stack>
              <Stack
                className={styles.catalogOrderDetails}
                sx={{
                  maxWidth: { laptop: "368px", desktop: "464px" },
                  flexShrink: 0,
                }}
              >
                <OrderSummary
                  data={activeCatalog}
                  hideSubtotal={activeStep === 1}
                  ContinueBtnProps={{
                    disabled: !activeCatalog?.nfts?.length,
                    onClick: () => setActiveStep(1),
                  }}
                />
                {activeStep === 1 && (
                  <PaymentMethod
                    onChangePaymentMethod={(paymentOption) => setPaymentMethod(paymentOption)}
                  />
                )}
              </Stack>
            </Stack>
          )}
          {activeStep === 2 && (
            <Stack>
              <PaymentSummary />
            </Stack>
          )}
        </Stack>
        {activeStep === 0 && (
          <Button
            variant="clearGreen"
            startIcon={<Icon icon="arrowLeft" />}
            href="/"
            sx={{ marginLeft: { mobile: "24px", tablet: "64px" }, marginBottom: "32px" }}
          >
            CONTINUE SHOPPING
          </Button>
        )}
        {activeStep === 1 && (
          <Stack className={styles.footerSubtotal} sx={{ backgroundColor: "background.tertiary" }}>
            <Stack alignItems="end">
              <Typography color="text.disabled">Subtotal</Typography>
              <Typography variant="h4">{`$ ${512}`}</Typography>
            </Stack>
            <Button variant="solidGreen" disabled={!paymentMethod} onClick={() => setActiveStep(2)}>
              PLACE ORDER
            </Button>
          </Stack>
        )}
      </Stack>

      {/* // MODAL // */}
      <Modal
        title="CREATE CATALOG"
        titleIcon={<Icon icon="add" />}
        open={openModal === "createCatalog"}
        onClose={() => setOpenModal("")}
        actions={
          <>
            <Button variant="outlineWhite" onClick={() => setOpenModal("")}>
              CANCEL
            </Button>
            <Button variant="solidGreen" onClick={handleCreateCatalog}>
              CREATE
            </Button>
          </>
        }
      >
        <Typography>
          You are about to create a new catalog in iP-Fi. Please enter a Catalog name.{" "}
        </Typography>
        <Stack gap="8px">
          <Typography>Catalog Name</Typography>
          <TextField id="catalog-name" />
        </Stack>
      </Modal>
    </Stack>
  );
}