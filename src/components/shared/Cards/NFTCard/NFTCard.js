// packages
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import Image from "next/image";

// styles
import styles from "./NFTCard.module.css";
import { ExpandIcon, EyeOffIcon, EyeOnIcon } from "public/icons";
export default function NFTCard({
  collectionName = "Collection Name",
  nftName = "NFT Name",
  contracts = 10,
  earnings = 264,
  price = "29.30",
  action = "add",
  headerAction = "visibility",
  visible = false,
  onVisibilityChange = () => {},
  onExpand = () => {},
  variant = "profile"
}) {
  const theme = useTheme();
  const [visibleState, setVisibleState] = useState(visible);

  const handleHeaderActionClick = () => {
    if (headerAction === "visibility") {
      setVisibleState(!visibleState);
      onVisibilityChange(!visibleState);
    } else if (headerAction === "expand") {
      onExpand();
    }
  };

  return (
    <Box className={styles.nftCardWrapper}>
      {headerAction &&
        <Button
          className={styles.nftCardHeaderAction}
          variant="containedSolidWhite"
          onClick={handleHeaderActionClick}
        >
          {headerAction === "visibility" && (visibleState ? <EyeOnIcon color={theme.palette.background.default} /> : <EyeOffIcon color={theme.palette.background.default} />)}
          {headerAction === "expand" && <ExpandIcon color={theme.palette.background.default} />}
        </Button>
      }
      <Card
        className={styles.nftCard}
        sx={{
          bgcolor: "background.darkBlue",
          height: variant === "profile" ? "486px" : "426px",
          "&:hover .MuiCardMedia-root .MuiStack-root": {
            opacity: 1,
          },
          "&:hover .MuiCardActions-root .MuiButton-root": {
            bgcolor: "background.black"
          }
        }}
      >
        <CardMedia
          image="/images/image_4.png"
          className={styles.nftCardMedia}
          sx={{
            height: variant === "profile" ? "100%" : "250px",
            borderRadius: (variant === "profile" && !action) ? "8px" : "8px 8px 0px 0px",
          }}
        >
          <Chip
            className={styles.nftCardPrice}
            icon={<Image src="/icons/eth.svg" alt="eth" width={18} height={18} />}
            label={price}
            sx={{
              bgcolor: "background.lightGreen",
              typography: "button"
            }}
          />
          <Stack
            className={styles.nftCardShadow}
            sx={{
              background: "linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%)",
            }}
          />
          {!visibleState &&
            <>
              <Box
                className={styles.nftCardFixedShadow}
                sx={{
                  background: "linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%)",
                }}
              />
              <Typography
                className={styles.nftCardHiddenText}
                variant="body2"
              >
                Hidden From Public
              </Typography>
            </>
          }
        </CardMedia>
        {variant !== "profile" &&
          <CardContent className={styles.nftCardContent}>
            <Grid container spacing={1}>
              <Grid item mobile={12}>
                <Stack className={styles.nftCardItem}>
                  <Typography variant="body2" color="text.disabled">
                    {collectionName}
                  </Typography>
                  <Typography variant="h6">
                    {nftName}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item mobile={6}>
                <Stack className={styles.nftCardItem}>
                  <Typography variant="body2" color="text.disabled">
                    Contracts
                  </Typography>
                  <Typography variant="h6">
                    {contracts}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item mobile={6}>
                <Stack className={styles.nftCardItem}>
                  <Typography variant="body2" color="text.disabled">
                    Earnings
                  </Typography>
                  <Typography variant="h6">
                    {earnings}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        }
        <CardActions className={styles.nftCardAction}>
          {action &&
            <>
              {action == "view" && <Button className={styles.nftCardActionButton} variant="containedSolidDark" fullWidth>VIEW CATALOGS</Button>}
              {action == "add" && <Button className={styles.nftCardActionButton} variant="containedSolidDark" fullWidth>ADD TO CATALOG</Button>}
            </>
          }
        </CardActions>
      </Card>
    </Box>
  )
}
