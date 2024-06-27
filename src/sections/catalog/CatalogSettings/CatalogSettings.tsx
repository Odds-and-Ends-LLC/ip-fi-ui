// packages
import { Button, Stack, Typography, Paper, Box, Alert, Snackbar } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { z } from "zod";

// components
import { CatalogType, UpdateCatalogPayloadType } from "@/types";
import { CatalogCover, Icon, TextField } from "@/components";
import { updateCatalog } from "@/lib/actions/catalog";
import styles from "./CatalogSettings.module.css";
import { NFTBackground } from "@/sections/nft";
import { CoverPicker, ColorPicker } from "..";

const schema = z.object({
  name: z
    .string()
    .min(1, "Catalog name is required."),

});

export default function CatalogSettings({
  catalog
} : {
  catalog: CatalogType
}) {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const form = useForm<UpdateCatalogPayloadType>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: catalog.name,
      coverImageNFTId: catalog.coverImageNFTId,
      coverColor: catalog.coverColor,
    }
  });

  const { watch, setValue, setError, clearErrors, formState: { errors, isValid, isSubmitting, isDirty } } = form;

  const name = watch("name");
  const coverImageNFTId = watch("coverImageNFTId");
  const coverColor = watch("coverColor");

  const pendingCatalog = useMemo(() => {
    const newCatalog = { ...catalog };

    newCatalog.name = name;
    newCatalog.coverImageNFTId = coverImageNFTId;
    const nft = newCatalog.nfts?.find(({ id }) => id === newCatalog.coverImageNFTId);

    if (nft) {
      newCatalog.coverImage = nft.image;
    }

    newCatalog.coverColor = coverColor;

    return newCatalog as CatalogType;
  }, [name, coverImageNFTId, coverColor, catalog]);

  const colors = [
    "#c6a3ff",
    "#4d4e6f",
    "#9cffac",
    "#cd4747",
    "#eda73d",
    "#dcd75d",
    "#33c7f5",
  ];

  const onSubmit: SubmitHandler<UpdateCatalogPayloadType> = async (data) => {
    const res = await updateCatalog(data);

    if (res.error) {
      setError("root", { message: res.error });
    }

    setOpenSnackbar(true);
  };

  const handleCoverImageChange = (id: string) => {
    setValue("coverImageNFTId", id, { shouldDirty: true });
  };

  const handleColorChange = (color: string) => {
    setValue("coverColor", color, { shouldDirty: true });
  };

  return (
    <Stack className={styles.catalogSettings} sx={{ backgroundColor: "blue.main" }}>
      <NFTBackground />
      <Stack
        className={styles.catalogSettingsSection}
        sx={{
          padding: { mobile: "104px 24px 32px", tablet: "96px 64px 32px" },
        }}
      >
        <Paper
          variant="outlined"
          component={Stack}
          className={styles.catalogSettingsPaper}
          sx={{ padding: { tablet: "24px 40px" } }}
        >
          <Button variant="clearGreen" href={`/catalog/${catalog.uid}`} startIcon={<Icon icon="arrowLeft" />}>
            BACK
          </Button>
          <FormProvider {...form}>
            <Stack
              component="form"
              className={styles.catalogSettingsWrapper}
              sx={{ px: "24px", flexDirection: { mobile: "column" } }}
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <Typography variant="h4">
                CATALOG SETTINGS
              </Typography>
              <Stack className={styles.catalogSettingsName}>
                <Typography variant="label1">
                  Catalog Name
                </Typography>
                <Stack className={styles.catalogSettingsNameInput}>
                  <TextField
                    required
                    name="name"
                  />
                </Stack>
              </Stack>
              <Typography variant="h5">
                CATALOG COVER SETTINGS
              </Typography>
              <Box className={styles.catalogSettingsCover}>
                <CatalogCover catalog={pendingCatalog} hideDetails cover />
              </Box>
              <Typography variant="body1">
                Select NFT as Cover:
              </Typography>
              <CoverPicker disabled={isSubmitting} nfts={catalog.nfts || []} selected={pendingCatalog.coverImageNFTId} onChange={handleCoverImageChange} />
              <Typography variant="body1">
                Select background color for Catalog cover:
              </Typography>
              <ColorPicker disabled={isSubmitting} colors={colors} selected={pendingCatalog.coverColor} onChange={handleColorChange} />
              <LoadingButton
                type="submit"
                variant="solidGreen"
                loading={isSubmitting}
                disabled={!isValid || !isDirty}
                sx={{
                  alignSelf: "flex-start"
                }}
              >
                SAVE CHANGES
              </LoadingButton>
            </Stack>
          </FormProvider>
        </Paper>
      </Stack>
      <Snackbar
          open={openSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          autoHideDuration={4000}
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert
            icon={<Icon icon="check" size={18} />}
            severity="success"
            variant="filled"
            onClose={() => setOpenSnackbar(false)}
            sx={{ alignItems: { mobile: "start", tablet: "center" } }}
          >
            <Stack
              gap="12px"
              sx={{
                flexDirection: { tablet: "row" },
                alignItems: { tablet: "center" },
              }}
            >
              <Typography variant="label2" textTransform="none">
                Success
              </Typography>
              <Typography variant="body2">Catalog successfully updated!</Typography>
            </Stack>
          </Alert>
        </Snackbar>
    </Stack>
  );
}
