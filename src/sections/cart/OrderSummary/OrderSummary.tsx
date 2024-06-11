// packages
import { ReactNode } from "react";
import { Button, Stack, Typography, Divider, ButtonProps } from "@mui/material";

// styles
import styles from "./OrderSummary.module.css";

// components
import { Icon } from "@/components";

// types
import { Catalog } from "@/types";
import { Variant } from "@mui/material/styles/createTypography";

export default function OrderSummary({
  data,
  hideSubtotal,
  ContinueBtnProps,
}: {
  data?: Catalog;
  hideSubtotal?: boolean;
  ContinueBtnProps?: ButtonProps;
}) {
  const SummaryDetail = ({
    label,
    value,
    valueIcon,
    valueTextVariant = "body1",
  }: {
    label: string;
    value?: string | number;
    valueIcon?: ReactNode;
    valueTextVariant?: Variant;
  }) => {
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
      <Typography variant="h5" textTransform="none">
        Order Summary
      </Typography>
      <SummaryDetail label="Catalog Name" value={data?.name} />
      <SummaryDetail label="Total NFTs" value={data?.nfts?.length} />
      <SummaryDetail label="Total NFTs with Exclusive License" value={data?.nfts?.length} />
      {/* update Total NFTs with Exclusive License value */}
      <SummaryDetail
        label="Subtotal in ETH"
        valueIcon={<Icon icon="ethereum" size={18} />}
        value={0}
      />
      {!hideSubtotal && (
        <>
          <Divider flexItem sx={{ borderColor: "dividerGray.main" }} />
          <SummaryDetail label="Subtotal" value={`$ ${0}`} valueTextVariant="h4" />
          <Button
            variant="solidGreen"
            endIcon={<Icon icon="arrowRight" />}
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
