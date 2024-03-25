// packages
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./WalletList.module.css";

// components
import { CloseIcon } from "public/icons";
import { truncate } from "@/utils/truncate";

export default function WalletList({ walletAddress, onClickRemove }) {
  return (
    <Stack className={styles.walletList}>
      <Box className={styles.walletListIcon}>
        <Image priority src="/images/metamask.png" alt="metamask" sizes="100%" fill />
      </Box>
      <Typography width="100%" sx={{ display: { mobile: "none", tablet: "block" } }}>
        {walletAddress}
      </Typography>
      <Typography width="100%" sx={{ display: { mobile: "block", tablet: "none" } }}>
        {truncate(walletAddress, 8, 4)}
      </Typography>
      <IconButton color="error" onClick={onClickRemove}>
        <CloseIcon color="currentColor" />
      </IconButton>
    </Stack>
  );
}
