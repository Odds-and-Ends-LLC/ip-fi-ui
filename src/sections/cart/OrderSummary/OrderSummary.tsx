// packages
import { Button, Stack, Typography, Divider, ButtonProps, Paper } from "@mui/material";

// styles
import styles from "./OrderSummary.module.css";

// components
import { Icon } from "@/components";
import { ItemDetail } from "..";

// types
import { Catalog } from "@/types";

export default function OrderSummary({
  data,
  hideSubtotal,
  ContinueBtnProps,
}: {
  data?: Catalog;
  hideSubtotal?: boolean;
  ContinueBtnProps?: ButtonProps;
}) {
  return (
    <Paper
      component={Stack}
      variant="translucent"
      className={styles.orderSummary}
      sx={{ padding: { mobile: "24px", laptop: "24px 32px" } }}
    >
      <Typography variant="h5" textTransform="none">
        Order Summary
      </Typography>
      <ItemDetail label="Catalog Name" value={data?.name} />
      <ItemDetail label="Total NFTs" value={data?.nfts?.length} />
      <ItemDetail label="Total NFTs with Exclusive License" value={data?.nfts?.length} />
      {/* update Total NFTs with Exclusive License value */}
      <ItemDetail
        label="Subtotal in ETH"
        valueIcon={<Icon icon="ethereum" size={18} />}
        value={0}
      />
      {!hideSubtotal && (
        <>
          <Divider flexItem sx={{ borderColor: "dividerGray.main" }} />
          <ItemDetail label="Subtotal" value={`$ ${0}`} valueTextVariant="h4" />
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
    </Paper>
  );
}
