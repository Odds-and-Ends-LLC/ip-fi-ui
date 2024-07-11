// packages
import { Button, Stack, Typography, Divider, ButtonProps, Paper } from "@mui/material";

// styles
import styles from "./OrderSummary.module.css";

// components
import { Icon } from "@/components";
import { ItemDetail } from "..";

// types
import { CartItemType } from "@/types";

export default function OrderSummary({
  data,
  hideSubtotal,
  ContinueBtnProps,
}: {
  data: CartItemType;
  hideSubtotal?: boolean;
  ContinueBtnProps?: ButtonProps;
}) {
  const subtotal = data.catalog.nfts?.reduce((total, nft) => total + nft.currentPrice, 0);
  const withExclusiveLicenses = data.catalog.nfts?.filter((nft) => nft.withExclusiveLicense).length;
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
        <ItemDetail justify label="Catalog Name" value={data.catalog.name} />
        <ItemDetail justify label="Total NFTs" value={data.catalog.nfts?.length} />
        <ItemDetail justify label="Total NFTs with Exclusive License" value={withExclusiveLicenses} />
        {/* update Total NFTs with Exclusive License value */}
        <ItemDetail
          justify
          label="Subtotal in ETH"
          valueIcon={<Icon icon="ethereum" size={18} />}
          value={subtotal}
        />
        {!hideSubtotal && (
          <>
            <Divider flexItem sx={{ borderColor: "dividerGray.main" }} />
            <ItemDetail justify label="Subtotal" value={`$ ${subtotal}`} valueTextVariant="h4" />
            <Button variant="solidGreen" endIcon={<Icon icon="arrowRight" />} {...ContinueBtnProps}>
              CONTINUE
            </Button>
          </>
        )}
      </Paper>
    </Stack>
  );
}
