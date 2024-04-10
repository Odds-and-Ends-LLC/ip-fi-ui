// packages
import { Stack, SxProps } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./Catalog.module.css";

/**
 *
 * @param {{
 *  part: string,
 *  height: number,
 *  sx: SxProps }} props
 *
 */

export default function CatalogRings({
  part = "spring",
  height,
  sx,
}) {
  return (
    <Stack
      className={styles.catalogRings}
      sx={sx}
    >
      {Array(Math.floor(height * .018)).fill().map((_, i) => (
        <Image key={i} src={`/images/catalog_ring_${part}.png`} alt="catalog ring" width={72} height={26} />
      ))}
    </Stack>
  )
}
