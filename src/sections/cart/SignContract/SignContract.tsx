// packages
import { Button, Divider, Paper, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";

// styles
import styles from "./SignContract.module.css";

// components
import ItemDetail from "../ItemDetail";

export default function SignContract() {
  return (
    <Paper
      component={Stack}
      variant="translucent"
      className={styles.signContract}
      sx={{ padding: { mobile: "24px", tablet: "42px 72px 24px" } }}
    >
      <Typography variant="h4">
        CONTRACT&nbsp;
        <Typography component="span" variant="h4" color="text.brandSecondary">
          #{"09102"}
        </Typography>
      </Typography>
      <Stack
        className={styles.signContractContents}
        sx={{
          backgroundColor: "background.tertiary",
          padding: { mobile: "24px", tablet: "32px 64px" },
        }}
      >
        <Stack className={styles.signContractDetails}>
          <ItemDetail gap="8px" label="Purchase ID:" value={"#1324"} />
          <ItemDetail
            gap="8px"
            label="Purchase Date:"
            value={format(1718385368927, "MM-dd-yyyy hh:mm:ss aa")}
          />
          <ItemDetail
            gap="8px"
            label="Payment Method:"
            valueIcon={
              <Image src={"/images/payment_usdc.png"} alt={"usdc"} height={24} width={24} />
            }
            value={"USDC"}
          />
          <ItemDetail gap="8px" label="Subtotal:" value={`$ ${0}`} valueTextVariant="h4" />
        </Stack>
        <Divider flexItem />
        <Typography variant="h5" textTransform="none">
          NFTs
        </Typography>
      </Stack>
      <Stack className={styles.signContractActionBtns}>
        <Button variant="clearGreen">CANCEL</Button>
        <Button variant="solidGreen" disabled={true}>
          SIGN CONTRACT
        </Button>
      </Stack>
    </Paper>
  );
}
