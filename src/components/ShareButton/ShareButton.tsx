// packages
import { Button, Stack, Typography } from "@mui/material";
import copy from "copy-to-clipboard";
import { useState } from "react";

// components
import styles from "./ShareButton.module.css";
import { Icon, Modal } from "..";

export default function ShareButton({
  title = "SHARE",
  link = "",
} : {
  title: string;
  link: string;
}) {
  const [openShareModal, setOpenShareModal] = useState(false);

  const handleCopyLink = () => {
    copy(link);
  };

  const SocialShareButton = ({ label, icon, href = "/" } : { label: string; icon: any; href: string; }) => {
    return (
      <Button
        fullWidth
        variant="clearPurpleUnderline"
        href={href}
        sx={{ color: "text.secondary" }}
        startIcon={icon}
        endIcon={<Icon icon="share" />}
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
        startIcon={<Icon icon="share" />}
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
        <Icon icon="share" />
      </Button>
      <Modal
        open={openShareModal}
        onClose={() => setOpenShareModal(false)}
        title={title}
      >
        <SocialShareButton label="FACEBOOK" icon={<Icon icon="facebook" />} href="/" />
        <SocialShareButton label="TWITTER" icon={<Icon icon="twitterX" />} href="/" />
        <Stack
          className={styles.shareButtonModalCopyButton}
          sx={{ borderColor: "dividerGray.main", flexDirection: { tablet: "row" } }}
        >
          <Stack className={styles.shareButtonModalCopyLink}>
            <Icon icon="link" />
            <Typography noWrap maxWidth="300px">{link}</Typography>
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
