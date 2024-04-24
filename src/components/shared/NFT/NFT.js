// packages
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Grid, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import Image from "next/image";

// components
import { ExpandIcon, EyeOffIcon, EyeOnIcon } from "public/icons";

// styles
import styles from "./NFT.module.css";

export default function NFT({
  id = "",
  collectionName = "Collection Name",
  image = "/images/image_4.png",
  nftName = "NFT Name",
  contracts = 10,
  earnings = 264,
  price = "29.30",
  action,
  headerAction,
  visible = true,
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
      onExpand(id);
    }
  };

  return (
    <Card
      className={styles.nft}
      sx={{
        bgcolor: "background.darkBlue",
      }}
    >
      {headerAction &&
        <Button
          className={styles.nftHeaderAction}
          variant="containedSolidWhite"
          onClick={handleHeaderActionClick}
        >
          {headerAction === "visibility" && (visibleState ? <EyeOnIcon color={theme.palette.background.default} /> : <EyeOffIcon color={theme.palette.background.default} />)}
          {headerAction === "expand" && <ExpandIcon color={theme.palette.background.default} />}
        </Button>
      }
      <CardActionArea
        className={styles.nftActionArea}
        sx={{
          "& > .MuiCardMedia-root > .MuiStack-root": {
            opacity: 0,
          },
          "&:hover > .MuiCardMedia-root > .MuiStack-root": {
            opacity: 1,
          },
          cursor: variant !== "profile" ? "pointer" : "default",
        }}
        {...variant !== "profile" && { href: "/nft" }}
      >
        <CardMedia
          image={image}
          className={styles.nftMedia}
          sx={{
            borderRadius: (variant === "profile" && !action) ? "8px" : "8px 8px 0px 0px",
          }}
        >
          {variant !== "profile" &&
            <Stack
              className={styles.nftShadow}
              sx={{
                borderRadius: "8px 8px 0px 0px",
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%)",
              }}
            />
          }
          <Chip
            className={styles.nftPrice}
            icon={<Image src="/icons/eth.svg" alt="eth" width={18} height={18} />}
            label={price}
            sx={{
              bgcolor: "background.lightGreen",
              typography: "button"
            }}
          />
          {!visibleState &&
            <>
              <Box
                className={styles.nftFixedShadow}
                sx={{
                  borderRadius: (variant === "profile" && !action) ? "8px" : "8px 8px 0px 0px",
                  background: "linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%)",
                }}
              />
              <Typography
                className={styles.nftHiddenText}
                variant="body2"
              >
                Hidden From Public
              </Typography>
            </>
          }
        </CardMedia>
        {variant !== "profile" &&
          <CardContent className={styles.nftContent}>
            <Grid container spacing={1}>
              <Grid key="name" item mobile={12}>
                <Stack className={styles.nftItem}>
                  <Typography variant="body2" color="text.disabled">
                    {collectionName}
                  </Typography>
                  <Typography variant="h6">
                    {nftName}
                  </Typography>
                </Stack>
              </Grid>
              <Grid key="contracts" item mobile={6}>
                <Stack className={styles.nftItem}>
                  <Typography variant="body2" color="text.disabled">
                    Contracts
                  </Typography>
                  <Typography variant="h6">
                    {contracts}
                  </Typography>
                </Stack>
              </Grid>
              <Grid key="earnings" item mobile={6}>
                <Stack className={styles.nftItem}>
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
      </CardActionArea>
      <CardActions className={styles.nftAction}>
        {action &&
          <>
            {action == "view" && <Button className={styles.nftActionButton} variant="containedSolidDark" fullWidth>VIEW CATALOGS</Button>}
            {action == "add" && <Button className={styles.nftActionButton} variant="containedSolidDark" fullWidth>ADD TO CATALOG</Button>}
          </>
        }
      </CardActions>
    </Card>
  )
}
