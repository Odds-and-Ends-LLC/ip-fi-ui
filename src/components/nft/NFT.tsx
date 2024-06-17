// packages
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Grid, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// components
import { ExpandIcon, EyeOffIcon, EyeOnIcon } from "@/elements/icons";

// styles
import styles from "./NFT.module.css";
import { NFT as NFTType } from "@/types";

export default function NFT({
  nft,
  action,
  headerAction,
  visible = true,
  onVisibilityChange = () => {},
  onExpand = () => {},
  variant = "profile"
} : {
  nft: NFTType;
  action?: "view" | "add";
  headerAction?: "visibility" | "expand";
  visible?: boolean;
  onVisibilityChange?: (state: boolean) => void;
  onExpand?: (nft: NFTType) => void;
  variant?: "profile" | "card";
}) {
  const theme = useTheme();
  const [visibleState, setVisibleState] = useState(visible);

  const handleHeaderActionClick = () => {
    if (headerAction === "visibility") {
      setVisibleState(!visibleState);
      onVisibilityChange(!visibleState);
    } else if (headerAction === "expand") {
      onExpand(nft);
    }
  };

  return (
    <Card
      className={styles.nft}
      sx={{
        bgcolor: "background.tertiary",
      }}
    >
      {headerAction &&
        <Button
          className={styles.nftHeaderAction}
          variant="solidWhite"
          onClick={handleHeaderActionClick}
        >
          {headerAction === "visibility" && (visibleState ? <EyeOnIcon color={theme.palette.background.default} /> : <EyeOffIcon color={theme.palette.background.default} />)}
          {headerAction === "expand" && <ExpandIcon color={theme.palette.background.default} />}
        </Button>
      }
      <CardActionArea
        className={styles.nftActionArea}
        LinkComponent={Link}
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
          image={nft.image}
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
          {nft.price &&
            <Chip
              className={styles.nftPrice}
              icon={<Image src="/icons/eth.svg" alt="eth" width={18} height={18} />}
              label={nft.price}
              sx={{
                bgcolor: "background.greenOverlay",
                typography: "button1"
              }}
            />
          }
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
                    {nft.collectionName}
                  </Typography>
                  <Typography variant="h6">
                    {nft.name}
                  </Typography>
                </Stack>
              </Grid>
              <Grid key="catalogs" item mobile={6}>
                <Stack className={styles.nftItem}>
                  <Typography variant="body2" color="text.disabled">
                    Catalogs
                  </Typography>
                  <Typography variant="h6">
                    {nft.catalogCount}
                  </Typography>
                </Stack>
              </Grid>
              <Grid key="earnings" item mobile={6}>
                <Stack className={styles.nftItem}>
                  <Typography variant="body2" color="text.disabled">
                    Earnings
                  </Typography>
                  <Typography variant="h6">
                    {nft.amountEarned}
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
            {action == "view" && <Button className={styles.nftActionButton} variant="solidDark" fullWidth>VIEW CATALOGS</Button>}
            {action == "add" && <Button className={styles.nftActionButton} variant="solidDark" fullWidth>ADD TO CATALOG</Button>}
          </>
        }
      </CardActions>
    </Card>
  )
}
