// packages
import { useState } from "react";
import { Button, Divider, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./PaymentForm.module.css";

// components
import { CatalogListName, Icon } from "@/components";
import { CatalogNftTable, ItemDetail } from "..";

// types
import { PaymentMethodType, PurchaseCatalogPayloadType } from "@/types";

const paymentMethods: Record<PaymentMethodType, string> = {
  usdc: "USDC",
  ethereum: "Ethereum",
  "credit-card": "Credit Card",
};

export default function PaymentForm({
  data,
  onPurchaseCatalog,
}: {
  data: PurchaseCatalogPayloadType;
  onPurchaseCatalog: () => void;
}) {
  const [showNFTs, setShowNFTs] = useState(false);
  const subtotal = data.cartItem.catalog.nfts?.reduce((total, nft) => total + nft.currentPrice, 0);
  const withExclusiveLicenses = data.cartItem.catalog.nfts?.filter((nft) => nft.withExclusiveLicense).length;

  return (
    <Stack>
      {" "}
      <Paper
        component={Stack}
        variant="translucent"
        className={styles.paymentForm}
        sx={{ padding: { mobile: "24px", tablet: "24px 32px" } }}
      >
        <CatalogListName name={data.cartItem.catalog.name} />
        <Divider flexItem />
        <ItemDetail justify label="Total NFTs" value={data.cartItem.catalog.nfts?.length} />
        <ItemDetail justify label="Total NFTs with Exclusive License" value={withExclusiveLicenses} />
        <Divider flexItem />

        <ItemDetail
          justify
          label="Payment Method"
          valueIcon={<Image src={`/images/payment_${data.paymentMethod}.png`} alt={data.paymentMethod || "payment"} height={24} width={24} />}
          value={data.paymentMethod && paymentMethods[data.paymentMethod]}
        />
        <ItemDetail
          justify
          label="Subtotal in ETH"
          valueIcon={<Icon icon="ethereum" size={18} />}
          value={subtotal}
        />
        <Stack
          className={styles.paymentFormViewNFT}
          sx={{ color: "text.brandSecondary" }}
          onClick={() => setShowNFTs(!showNFTs)}
        >
          <Typography variant="link2">View NFTs</Typography>
          <Icon icon={showNFTs ? "chevronUp" : "chevronDown"} size={18} />
        </Stack>
        {showNFTs && (
          <Stack className={styles.paymentFormNFTList}>
            <CatalogNftTable data={data.cartItem} />
          </Stack>
        )}
        <Divider flexItem />
        <ItemDetail justify label="Subtotal" value={`$ ${subtotal}`} valueTextVariant="h4" />
        <Button variant="solidGreen" onClick={onPurchaseCatalog}>
          PURCHASE CATALOG
        </Button>
      </Paper>
    </Stack>
  );
}
