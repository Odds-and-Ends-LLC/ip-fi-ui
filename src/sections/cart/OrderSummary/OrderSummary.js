// packages
import { Button, Stack, Typography, Divider } from "@mui/material";

// styles
import styles from "./OrderSummary.module.css";

// components
import { ArrowRightIcon, EthIcon } from "public/icons";

export default function OrderSummary({ data, hideSubtotal, ContinueBtnProps }) {
  const SummaryDetail = ({ label, value, valueIcon, valueTextVariant = "body1" }) => {
    return (
      <Stack className={styles.orderSummaryDetail}>
        <Typography color="text.disabledBlue" className={styles.detailLabel}>
          {label}
        </Typography>
        <Stack
          className={styles.detailValue}
          sx={{ maxWidth: { laptop: "160px", desktop: "256px" } }}
        >
          {valueIcon}
          <Typography variant={valueTextVariant} noWrap>
            {value}
          </Typography>
        </Stack>
      </Stack>
    );
  };

  return (
    <Stack
      className={styles.orderSummary}
      sx={{ padding: { mobile: "24px", laptop: "24px 32px" } }}
    >
      <Typography variant="h5">Order Summary</Typography>
      <SummaryDetail label="Catalog Name" value="uMANILA/eth" />
      <SummaryDetail label="Total NFTs" value={0} />
      <SummaryDetail label="Total NFTs with Exclusive License" value={0} />
      <SummaryDetail label="Subtotal in ETH" valueIcon={<EthIcon size={18} />} value="00.00" />
      {!hideSubtotal && (
        <>
          <Divider flexItem sx={{ borderColor: "dividerGray.main" }} />
          <SummaryDetail label="Subtotal" value={`$ ${0}`} valueTextVariant="h4-desktop" />
          <Button
            variant="solidGreen"
            endIcon={<ArrowRightIcon />}
            disabled={true}
            {...ContinueBtnProps}
          >
            CONTINUE
          </Button>
        </>
      )}
    </Stack>
  );
}
