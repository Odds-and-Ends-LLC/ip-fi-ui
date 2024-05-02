// packages
import { useEffect, useMemo, useState } from "react";
import {
  Button,
  LinearProgress,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";

// styles
import styles from "./CatalogCart.module.css";

// components
import { ArrowHeadRightIcon, ArrowLeftIcon, PlusIcon } from "public/icons";
import { Modal, Tabs } from "@/components/shared";
import { CatalogNftTable, OrderSummary } from "..";

// data
const catalogs = [
  {
    id: 1,
    name: "uMANILA/eth",
    nfts: [
      { id: 1, name: "" },
      { id: 2, name: "" },
      { id: 3, name: "" },
      { id: 4, name: "" },
      { id: 5, name: "" },
      { id: 6, name: "" },
      { id: 7, name: "" },
      { id: 8, name: "" },
    ],
  },
  { id: 2, name: "CloneX Col.", nfts: [] },
];

export default function CatalogCart() {
  const STEPS = ["Catalog Cart", "Order Summary", "Payment", "Sign Contract"];
  const [activeStep, setActiveStep] = useState(0);
  const [catalogList, setCatalogList] = useState([]);
  const [openModal, setOpenModal] = useState("");
  const stepProgress = useMemo(() => Math.floor(25 * (activeStep + 1)), [activeStep]);

  const handleAddCatalog = () => {
    // add catalog
    setOpenModal("createCatalog");
  };

  useEffect(() => {
    const renderCatalogs = (catalogs) => {
      const catalogArray = [];
      catalogs?.map((catalog) =>
        catalogArray.push({
          label: catalog?.name,
          value: catalog?.name,
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
    <Stack
      className={styles.catalogCart}
      sx={{
        backgroundColor: "blue.main",
        height: { laptop: "100vh" },
      }}
    >
      <LinearProgress
        variant="determinate"
        value={stepProgress}
        className={styles.catalogCartProgressBar}
        sx={{
          "& .MuiLinearProgress-bar1Determinate": {
            background:
              "linear-gradient(to right, #995AFF 0%, #A771FF 25%, #67E67A 50%, #A771FF 75%, #67E67A 100%)",
          },
        }}
      />
      <Stack
        className={styles.catalogCartSection}
        sx={{
          padding: { mobile: "0 24px 32px", tablet: "0 64px 32px" },
          height: { laptop: "calc(100vh - 80px)" },
        }}
      >
        <Stepper
          nonLinear
          activeStep={activeStep}
          connector={<ArrowHeadRightIcon />}
          className={styles.catalogCartStepper}
        >
          {STEPS.map((step, index) => {
            return (
              <Step key={index}>
                <StepLabel>
                  <Typography variant="link" color="inherit">
                    {step}
                  </Typography>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Stack className={styles.catalogTabs}>
          <Tabs
            tabStyle={{ padding: "0 16px", "& .MuiTab-iconWrapper": { margin: 0 } }}
            tabs={catalogList}
          />
          <IconButton aria-label="add catalog" onClick={handleAddCatalog} color="white">
            <PlusIcon />
          </IconButton>

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
        </Stack>
        <Stack className={styles.catalogTableAndSummary} sx={{ flexDirection: { laptop: "row" } }}>
          <Stack className={styles.catalogNftTable}>
            <CatalogNftTable />
          </Stack>
          <Stack
            className={styles.catalogOrderDetails}
            sx={{ maxWidth: { laptop: "368px", desktop: "464px" } }}
          >
            <OrderSummary
              data={""}
              hideSubtotal={false}
              ContinueBtnProps={{
                disabled: true,
                onClick: () => console.log("continue"),
              }}
            />
          </Stack>
        </Stack>
        <Button startIcon={<ArrowLeftIcon />}>CONTINUE SHOPPING</Button>
      </Stack>
    </Stack>
  );
}
