// packages
import { Grid, Stack, Typography } from "@mui/material";

// components
import { Catalog, CatalogCover, NFT } from "@/components/shared";

// styles
import styles from "./Binder.module.css";

export default function Binder({
  catalogName,
  coverBackgroundColor,
  coverImage,
  nfts = [
    <NFT key={1} headerAction="expand" visible />,
    <NFT key={2} headerAction="expand" visible />,
    <NFT key={3} headerAction="expand" visible />,
    <NFT key={4} headerAction="expand" visible />,
    <NFT key={5} headerAction="expand" visible />,
    <NFT key={6} headerAction="expand" visible />,
  ],
}) {
  return (
    <Catalog
      pages={[
        <CatalogCover key="cover" catalogName={catalogName} backgroundColor={coverBackgroundColor} image={coverImage} cover />
      ].concat(
        nfts
          .concat(
            Array(20 - nfts.length)
            .fill(
              <Stack className={styles.binderPocket} sx={{ borderColor: "background.darkBlue" }}>
                <Typography variant="body2" color="text.disabledBlue">
                  Empty
                </Typography>
              </Stack>
            )
          )
          .flatMap((_, i, a) => i % 4 ? [] : [a.slice(i, i + 4)])
          .map((grid, j) => (
            <Grid key={j} className={styles.binderGrid} container spacing="10px" sx={{ p: { mobile: "16px" } }}>
              {grid.map((item, k) => (
                <Grid key={k} item mobile={6} height="368px">
                  {item}
                </Grid>
              ))}
            </Grid>
          )),
      )}
    />
  )
}
