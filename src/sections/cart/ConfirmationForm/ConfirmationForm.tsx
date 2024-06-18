// packages
import { Button, Divider, Link, Paper, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";

// styles
import styles from "./ConfirmationForm.module.css";

// components
import { CatalogListName, Icon } from "@/components";
import { ItemDetail } from "..";

// types
import { CatalogType } from "@/types";

export default function ConfirmationForm({ data }: { data?: CatalogType }) {
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
        <CatalogListName name={"uManila/eth"} description={"8 NFTs"} />
        <Divider flexItem />
        <ItemDetail justify label="Purchase ID" value={"#1324"} />
        <ItemDetail
          justify
          label="Purchase Date"
          value={format(1718385368927, "MM-dd-yyyy hh:mm:ss aa")}
          valueNoWrap={false}
        />
        <Divider flexItem />

        <ItemDetail
          justify
          label="Payment Method"
          valueIcon={<Image src={"/images/payment_usdc.png"} alt={"usdc"} height={24} width={24} />}
          value={"USDC"}
        />
        <ItemDetail
          justify
          label="Subtotal in ETH"
          valueIcon={<Icon icon="ethereum" size={18} />}
          value={0}
        />
        <Divider flexItem />
        <ItemDetail justify label="Subtotal" value={`$ ${0}`} valueTextVariant="h4" />
        <Button variant="outlineWhite" endIcon={<Icon icon="download" />}>
          DOWNLOAD CONTRACT
        </Button>
      </Paper>
      <Link href="/" color="text.brandSecondary">
        Go to My Profile
      </Link>
    </Stack>
  );
}
