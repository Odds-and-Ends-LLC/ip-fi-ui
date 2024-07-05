// packages
import { Button, Divider, Paper, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";

// styles
import styles from "./ConfirmationForm.module.css";

// components
import { CatalogListName, Icon } from "@/components";
import { ItemDetail } from "..";

// types
import { PaymentMethodType, PurchaseCatalogDetailsType } from "@/types";
import { useAtomValue } from "jotai";
import { userSessionAtom } from "@/atoms";

const paymentMethods: Record<PaymentMethodType, string> = {
  usdc: "USDC",
  ethereum: "Ethereum",
  "credit-card": "Credit Card",
};

export default function ConfirmationForm({ data }: { data: PurchaseCatalogDetailsType }) {
  const user = useAtomValue(userSessionAtom);

  return (
    <Stack className={styles.confirmationFormContainer}>
      <Typography variant="h4" textAlign="center">
        THANK YOU FOR YOUR PURCHASE! 🙌
      </Typography>
      <Paper
        component={Stack}
        variant="translucent"
        className={styles.confirmationForm}
        sx={{ padding: { mobile: "24px", tablet: "24px 32px" } }}
      >
        <CatalogListName name={data.catalog.name} image={data.catalog.coverImage} description={`${data.catalog.nfts.length} NFTs`} />
        <Divider flexItem />
        <ItemDetail justify label="Purchase ID" value={`#${data.id}`} />
        <ItemDetail
          justify
          label="Purchase Date"
          value={format(data.purchasedAt, "MM-dd-yyyy hh:mm:ss aa")}
          valueNoWrap={false}
        />
        <Divider flexItem />

        <ItemDetail
          justify
          label="Payment Method"
          valueIcon={<Image src={`/images/payment_${data.paymentMethod}.png`} alt={data.paymentMethod} height={24} width={24} />}
          value={paymentMethods[data.paymentMethod]}
        />
        <ItemDetail
          justify
          label="Subtotal in ETH"
          valueIcon={<Icon icon="ethereum" size={18} />}
          value={data.subtotalEth}
        />
        <Divider flexItem />
        <ItemDetail justify label="Subtotal" value={`$ ${data.subtotal}`} valueTextVariant="h4" />
        <Button variant="outlineWhite" endIcon={<Icon icon="download" />} href={data.contractFile}>
          DOWNLOAD CONTRACT
        </Button>
      </Paper>
      <Button variant="clearGreen" href={`/${user?.username}`}>
        Go to My Profile
      </Button>
    </Stack>
  );
}
