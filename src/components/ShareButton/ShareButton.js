// packages
import { FacebookIcon, LinkIcon, ShareIcon, XTwitterIcon } from "@/elements";
import { Button, Stack, Typography } from "@mui/material";
import copy from "copy-to-clipboard";
import { useState } from "react";

// components
import { Modal } from "..";

// styles
import styles from "./ShareButton.module.css";

export default function ShareButton({
  title = "SHARE",
  link = "",
}) {
  const [openShareModal, setOpenShareModal] = useState(false);

  const handleCopyLink = () => {
    copy(link);
  };

  const SocialShareButton = ({ label, icon, href = "/" }) => {
    return (
      <Button
        fullWidth
        variant="underlined"
        href={href}
        sx={{ color: "text.secondary" }}
        startIcon={icon}
        endIcon={<ShareIcon />}
      >
        <Typography variant="button" className={styles.shareButton} color="text.primary">
          {label}
        </Typography>
      </Button>
    );
  };

  return (
    <>
      <Button
        startIcon={<ShareIcon />}
        variant="outlineWhite"
        onClick={() => setOpenShareModal(true)}
        sx={{ display: { mobile: "none", tablet: "flex" } }}
      >
        SHARE
      </Button>
      <Button
        variant="outlineWhite"
        onClick={() => setOpenShareModal(true)}
        sx={{ display: { mobile: "flex", tablet: "none" }, minWidth: { mobile: "40px" }}}
      >
        <ShareIcon />
      </Button>
      <Modal
        open={openShareModal}
        onClose={() => setOpenShareModal(false)}
        title={title}
      >
        <SocialShareButton label="FACEBOOK" icon={<FacebookIcon />} href="/" />
        <SocialShareButton label="TWITTER" icon={<XTwitterIcon />} href="/" />
        <Stack
          className={styles.shareButtonModalCopyButton}
          sx={{ borderColor: "dividerGray.main", flexDirection: { tablet: "row" } }}
        >
          <Stack className={styles.shareButtonModalCopyLink}>
            <LinkIcon />
            <Typography noWrap>{link}</Typography>
          </Stack>
          <Button
            variant="solidGreen"
            onClick={handleCopyLink}
            sx={{ width: { mobile: "100%", tablet: "fit-content" }, flexShrink: 0 }}
          >
            COPY LINK
          </Button>
        </Stack>
      </Modal>
    </>
  );
}
