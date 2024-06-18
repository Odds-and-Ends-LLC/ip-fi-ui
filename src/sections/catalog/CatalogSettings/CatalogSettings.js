// packages
import { Button, Stack, Typography, Paper, TextField, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

// components
import { CatalogCover, Icon } from "@/components";
import { NFTBackground } from "@/sections/nft";
import { CoverPicker, ColorPicker } from "..";

// styles
import styles from "./CatalogSettings.module.css";

export default function CatalogSettings() {
  const router = useRouter();
  const [name, setName] = useState("uMANILA/eth");
  const [isNameValid, setIsNameValid] = useState(false);
  const [coverImage, setCoverImage] = useState(1);
  const [color, setColor] = useState("#9cffac");

  const nfts = [
    { id: 1, image: "/images/image_1.png" },
    { id: 2, image: "/images/image_2.png" },
    { id: 3, image: "/images/image_3.png" },
    { id: 4, image: "/images/image_4.png" },
    { id: 5, image: "/images/image_1.png" },
    { id: 6, image: "/images/image_2.png" },
    { id: 7, image: "/images/image_3.png" },
    { id: 8, image: "/images/image_4.png" },
    { id: 9, image: "/images/image_1.png" },
    { id: 10, image: "/images/image_2.png" },
    { id: 11, image: "/images/image_1.png" },
    { id: 12, image: "/images/image_2.png" },
    { id: 13, image: "/images/image_3.png" },
    { id: 14, image: "/images/image_4.png" },
    { id: 15, image: "/images/image_1.png" },
    { id: 16, image: "/images/image_2.png" },
    { id: 17, image: "/images/image_3.png" },
    { id: 18, image: "/images/image_4.png" },
    { id: 19, image: "/images/image_1.png" },
    { id: 20, image: "/images/image_2.png" },
  ];

  const colors = [
    "#c6a3ff",
    "#4d4e6f",
    "#9cffac",
    "#cd4747",
    "#eda73d",
    "#dcd75d",
    "#33c7f5",
  ];

  const handleBack = () => {
    router.back();
  };

  const handleNameChange = (text) => {
    setName(text);
    setIsNameValid(true);
  };

  const handleCoverImageChange = (id) => {
    setCoverImage(id);
  };

  const handleColorChange = (color) => {
    setColor(color);
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
          <Button startIcon={<Icon icon="arrowLeft" />} onClick={handleBack}>
            BACK
          </Button>
          <Stack
            className={styles.catalogSettingsWrapper}
            sx={{ px: "24px", flexDirection: { mobile: "column" } }}
          >
            <Typography variant="h4-desktop">
              CATALOG SETTINGS
            </Typography>
            <Stack className={styles.catalogSettingsName}>
              <Typography variant="label">
                Catalog Name
              </Typography>
              <Stack className={styles.catalogSettingsNameInput}>
                <TextField
                  variant="filled"
                  defaultValue={name || ""}
                  onChange={(e) => handleNameChange(e.target.value)}
                  sx={{
                    "& .MuiFilledInput-root": {
                      height: "40px",
                      padding: "8px",
                    },
                  }}
                />
                <Button variant="solidGreen" disabled={!isNameValid}>
                  UPDATE
                </Button>
              </Stack>
            </Stack>
            <Typography variant="h5">
              CATALOG COVER SETTINGS
            </Typography>
            <Box className={styles.catalogSettingsCover}>
              <CatalogCover catalogName="CATALOG NAME" image={nfts.find(({ id }) => id === coverImage).image} backgroundColor={color} />
            </Box>
            <Typography variant="body1">
              Select NFT as Cover:
            </Typography>
            <CoverPicker nfts={nfts} selected={coverImage} onChange={handleCoverImageChange} />
            <Typography variant="body1">
              Select background color for Catalog cover:
            </Typography>
            <ColorPicker colors={colors} selected={color} onChange={handleColorChange} />
          </Stack>
        </Paper>
      </Stack>
    </Stack>
  );
}
