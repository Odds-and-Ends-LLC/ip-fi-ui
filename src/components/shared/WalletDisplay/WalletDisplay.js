// packages
import { useEffect, useRef, useState } from "react";
import { Box, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./WalletDisplay.module.css";

// components
import { truncate } from "@/utils/truncate";
import { ArrowHeadDownIcon, ArrowHeadUpIcon } from "@/elements/icons";

export default function WalletDisplay({
  walletAddress,
  walletList,
  truncated,
  fullWidth,
  endIcon,
  variant,
  withBackground,
}) {
  const walletDisplayRef = useRef(null);
  const [walletAddressDisplay, setWalletAddressDisplay] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const openSelect = Boolean(anchorEl);
  const handleOpenSelect = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseSelect = () => {
    setAnchorEl(null);
  };
  const handleChange = (value) => {
    setWalletAddressDisplay(value);
    setAnchorEl(null);
  };

  useEffect(() => {
    if (walletList && variant === "select") {
      setWalletAddressDisplay(walletList[0]);
    } else {
      setWalletAddressDisplay(walletAddress);
    }
  }, [walletAddress, walletList, variant]);

  return (
    <Stack
      ref={walletDisplayRef}
      className={styles.walletDisplay}
      sx={{
        backgroundColor: withBackground ? "rgba(116, 119, 122, 0.35)" : "transparent",
        width: fullWidth ? "100%" : "fit-content",
      }}
    >
      <Box className={styles.walletDisplayIcon}>
        <Image priority src="/images/metamask.png" alt="metamask" sizes="100%" fill />
      </Box>
      {!truncated && (
        <Typography width="100%" sx={{ display: { mobile: "none", laptop: "block" } }}>
          {walletAddressDisplay}
        </Typography>
      )}
      <Typography
        width="100%"
        sx={{ display: { mobile: "block", laptop: truncated ? "block" : "none" } }}
      >
        {truncate(walletAddressDisplay, 8, 4)}
      </Typography>
      {endIcon}
      {variant === "select" && (
        <>
          <IconButton
            id="select-button"
            aria-controls={openSelect ? "select-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openSelect ? "true" : undefined}
            sx={{ color: "text.primary" }}
            onClick={handleOpenSelect}
          >
            {openSelect ? <ArrowHeadUpIcon /> : <ArrowHeadDownIcon />}
          </IconButton>
          <Menu
            id="select-menu"
            anchorEl={anchorEl}
            open={openSelect}
            onClose={handleCloseSelect}
            MenuListProps={{
              "aria-labelledby": "select-button",
              sx: { width: walletDisplayRef?.current?.clientWidth },
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {walletList?.map((walletAddress, i) => (
              <MenuItem key={i} onClick={() => handleChange(walletAddress)}>
                {truncate(walletAddress, 8, 4)}
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </Stack>
  );
}
