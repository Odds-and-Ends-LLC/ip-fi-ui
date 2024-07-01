// packages
import { BaseSyntheticEvent, ReactNode, useEffect, useRef, useState } from "react";
import { Box, Button, Menu, MenuItem, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./WalletDisplay.module.css";

// components
import { truncate } from "@/utils/truncate";
import { Icon } from "@/components";

export default function WalletDisplay({
  walletAddress,
  walletList,
  fullWidth,
  endIcon,
  type = "expanded",
  mode,
  withBackground,
  onClick,
}: {
  walletAddress?: string;
  walletList?: string[];
  fullWidth?: boolean;
  endIcon?: ReactNode;
  type?: "truncated" | "expanded";
  mode?: "select" | undefined;
  withBackground?: boolean;
  onClick?: () => void;
}) {
  const walletDisplayRef = useRef<HTMLDivElement>(null);
  const [walletAddressDisplay, setWalletAddressDisplay] = useState<string | undefined>("");
  const [anchorEl, setAnchorEl] = useState(null);
  const openSelect = Boolean(anchorEl);
  const handleOpenSelect = (event: BaseSyntheticEvent) => {
    !openSelect ? setAnchorEl(event?.currentTarget) : setAnchorEl(null);
  };
  const handleCloseSelect = () => {
    setAnchorEl(null);
  };
  const handleChange = (value: string) => {
    setWalletAddressDisplay(value);
    setAnchorEl(null);
  };

  useEffect(() => {
    if (walletList && mode === "select") {
      setWalletAddressDisplay(walletList[0]);
    } else {
      setWalletAddressDisplay(walletAddress);
    }
  }, [walletAddress, walletList, mode]);

  const setBackgroundColor = () => {
    if (withBackground || mode === "select") {
      if (openSelect) {
        return "background.purpleOverlay";
      } else if (withBackground) {
        return "background.grayOverlay";
      }
    } else return "transparent";
  };

  return (
    <Stack
      ref={walletDisplayRef}
      className={styles.walletDisplay}
      sx={{
        backgroundColor: setBackgroundColor(),
        cursor: endIcon ? "default" : "pointer",
        padding: endIcon || mode === "select" ? "0 0 0 8px" : "0 8px",
        pointerEvents: !!onClick || !!mode || !!endIcon ? "auto" : "none",
        width: fullWidth ? "100%" : "fit-content",
        "&:hover": {
          backgroundColor:
            (withBackground && mode === "select") || mode === "select"
              ? "background.grayOverlay2"
              : "background.grayOverlay",
        },
      }}
      onClick={mode === "select" ? handleOpenSelect : undefined}
    >
      <Box className={styles.walletDisplayIcon}>
        <Image priority src="/images/metamask.png" alt="metamask" sizes="100%" fill />
      </Box>
      {type === "expanded" && (
        <Typography width="100%" sx={{ display: { mobile: "none", laptop: "block" } }}>
          {walletAddressDisplay}
        </Typography>
      )}
      <Typography
        width="100%"
        sx={{ display: { mobile: "block", laptop: type === "truncated" ? "block" : "none" } }}
      >
        {truncate(walletAddressDisplay ?? "", 8, 4)}
      </Typography>
      {endIcon}
      {mode === "select" && (
        <>
          <Button
            mode="icon"
            id="select-button"
            aria-controls={openSelect ? "select-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openSelect ? "true" : undefined}
            sx={{ color: "text.primary", pointerEvents: "none" }}
            // onClick={handleOpenSelect}
          >
            {openSelect ? <Icon icon="arrowHeadUp" /> : <Icon icon="arrowHeadDown" />}
          </Button>
          <Menu
            id="select-menu"
            anchorEl={anchorEl}
            open={openSelect}
            onClose={handleCloseSelect}
            autoFocus={false}
            MenuListProps={{
              "aria-labelledby": "select-button",
              sx: {
                width: walletDisplayRef?.current?.clientWidth,
              },
            }}
            sx={{
              "& .MuiMenu-paper": {
                backgroundColor: "background.secondary",
                border: "none",
                marginTop: "4px",
              },
              "& ul": {
                backgroundColor: "background.purpleOverlay",
              },
            }}
          >
            {walletList?.map((walletAddress, i) => (
              <MenuItem
                key={i}
                onClick={() => handleChange(walletAddress)}
                sx={{ paddingLeft: "52px" }}
              >
                {type === "expanded" && (
                  <Typography width="100%" sx={{ display: { mobile: "none", laptop: "block" } }}>
                    {walletAddress}
                  </Typography>
                )}
                <Typography
                  width="100%"
                  sx={{
                    display: { mobile: "block", laptop: type === "truncated" ? "block" : "none" },
                  }}
                >
                  {truncate(walletAddress, 8, 4)}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </Stack>
  );
}
