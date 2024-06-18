// packages
import { Button, Stack, Typography, Divider, ButtonProps, Paper } from "@mui/material";

// styles
import styles from "./OrderSummary.module.css";

// components
import { Icon } from "@/components";
import { ItemDetail } from "..";

// types
import { CatalogType } from "@/types";

export default function OrderSummary({
  data,
  hideSubtotal,
  ContinueBtnProps,
}: {
  data?: CatalogType;
  hideSubtotal?: boolean;
  ContinueBtnProps?: ButtonProps;
}) {
  return (
    <Stack>
      <Paper
        component={Stack}
        variant="translucent"
        className={styles.orderSummary}
        sx={{ padding: { mobile: "24px", laptop: "24px 32px" } }}
      >
        <Typography variant="h5" textTransform="none">
          Order Summary
        </Typography>
        <ItemDetail justify label="Catalog Name" value={data?.name} />
        <ItemDetail justify label="Total NFTs" value={data?.nfts?.length} />
        <ItemDetail justify label="Total NFTs with Exclusive License" value={data?.nfts?.length} />
        {/* update Total NFTs with Exclusive License value */}
        <ItemDetail
          justify
          label="Subtotal in ETH"
          valueIcon={<Icon icon="ethereum" size={18} />}
          value={0}
        />
        {!hideSubtotal && (
          <>
            <Divider flexItem sx={{ borderColor: "dividerGray.main" }} />
            <ItemDetail justify label="Subtotal" value={`$ ${0}`} valueTextVariant="h4" />
            <Button variant="solidGreen" endIcon={<Icon icon="arrowRight" />} {...ContinueBtnProps}>
              CONTINUE
            </Button>
          </>
        )}
      </Paper>
    </Stack>
  );
}
