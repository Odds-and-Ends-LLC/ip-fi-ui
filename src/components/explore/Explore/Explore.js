// packages
import { Stack } from "@mui/material";
import { useState } from "react";

// styles
import styles from "./Explore.module.css";
import { CatalogCover, Tabs } from "@/components/shared";
import { Member, NFT } from "@/components/shared";

export default function Explore() {
  const [mainTab, setMainTab] = useState("all");

  return (
    <Stack
      className={styles.explore}
      sx={{
        backgroundColor: "blue.main",
        gap: { mobile: "24px", tablet: "32px" },
        padding: { mobile: "104px 40px 32px", tablet: "124px 64px 32px" },
      }}
    >
      <NFT />
      <Member />
      <Stack width={679} height={475}>
        <CatalogCover />
      </Stack>
    </Stack>
  )
};
