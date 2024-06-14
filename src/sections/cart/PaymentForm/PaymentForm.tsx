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
import { Catalog } from "@/types";

export default function PaymentForm({
  data,
  onPurchaseCatalog,
}: {
  data?: Catalog;
  onPurchaseCatalog: () => void;
}) {
  const [showNFTs, setShowNFTs] = useState(false);

  return (
    <Paper
      component={Stack}
      variant="translucent"
      className={styles.paymentForm}
      sx={{ padding: { mobile: "24px", tablet: "24px 32px" } }}
    >
      <CatalogListName name={"uManila/eth"} />
      <Divider flexItem />
      <ItemDetail label="Total NFTs" value={0} />
      <ItemDetail label="Total NFTs with Exclusive License" value={0} />
      <Divider flexItem />

      <ItemDetail
        label="Payment Method"
        valueIcon={<Image src={"/images/payment_usdc.png"} alt={"usdc"} height={24} width={24} />}
        value={"USDC"}
      />
      <ItemDetail
        label="Subtotal in ETH"
        valueIcon={<Icon icon="ethereum" size={18} />}
        value={0}
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
          <CatalogNftTable data={data?.nfts} />
        </Stack>
      )}
      <Divider flexItem />
      <ItemDetail label="Subtotal" value={`$ ${0}`} valueTextVariant="h4" />
      <Button variant="solidGreen" onClick={onPurchaseCatalog}>
        PURCHASE CATALOG
      </Button>
    </Paper>
  );
}
