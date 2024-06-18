// packages
import { useState } from "react";
import { Button, Divider, Paper, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";

// styles
import styles from "./SignContract.module.css";

// components
import { Icon, Modal } from "@/components";
import { ItemDetail } from "..";
import { LicenseTerms, NftTable } from ".";

// types
import { NFTType } from "@/types";

export default function SignContract({
  data,
  onCancel,
  onSignContract,
}: {
  data?: NFTType[];
  onCancel: () => void;
  onSignContract: () => void;
}) {
  const [openSignaturePad, setOpenSignaturePad] = useState(false);

  const handleUndoSignature = () => {
    console.log("undo");
  };
  const handleSignContract = () => {
    console.log("sign");
    setOpenSignaturePad(false);
  };
  const handleCompleteSignContract = () => {
    onSignContract();
  };

  return (
    <Paper
      component={Stack}
      variant="translucent"
      className={styles.signContract}
      sx={{ padding: { mobile: "24px 0", tablet: "24px", laptop: "42px 72px 24px" } }}
    >
      <Typography variant="h4" sx={{ margin: { mobile: "0 24px", tablet: 0 } }}>
        CONTRACT&nbsp;
        <Typography component="span" variant="h4" color="text.brandSecondary">
          #{"09102"}
        </Typography>
      </Typography>
      <Stack
        className={styles.signContractContents}
        sx={{
          backgroundColor: "background.tertiary",
          padding: { mobile: "24px", laptop: "32px 64px" },
        }}
      >
        <Stack className={styles.signContractDetails}>
          <ItemDetail gap="8px" label="Purchase ID:" value={"#1324"} />
          <ItemDetail
            gap="8px"
            label="Purchase Date:"
            value={format(1718385368927, "MM-dd-yyyy hh:mm:ss aa")}
            valueNoWrap={false}
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
        <Stack gap="24px">
          <Typography variant="h5" textTransform="none">
            NFTs
          </Typography>
          <Paper component={Stack} variant="translucent" className={styles.signContractNFTTable}>
            <NftTable data={data} />
          </Paper>
        </Stack>
        <Paper
          component={Stack}
          variant="outlinedGreen"
          className={styles.signContractLicenseTerms}
          sx={{ padding: { mobile: "16px", tablet: "32px" } }}
        >
          <Typography variant="h5">LICENSE TERMS</Typography>
          <LicenseTerms />
        </Paper>
        <Stack className={styles.signContractSignature}>
          <Typography variant="h5" textAlign="end">
            SIGNED BY:
          </Typography>
          <Stack className={styles.signContractSignatureBox}>
            <Stack height="40px" className={styles.signContractAddSignatureBox}>
              <Stack
                className={styles.signContractAddSignatureBtn}
                sx={{ color: "text.disabledBlue" }}
                onClick={() => setOpenSignaturePad(true)}
              >
                <Icon icon="add" size={18} />
                <Typography variant="link2">Add Signature</Typography>
              </Stack>
            </Stack>
            <Divider flexItem />
            <Typography color="text.disabled">Name & Signature</Typography>
          </Stack>
          <Stack className={styles.signContractSignatureDate}>
            <Typography color="text.disabledBlue">Date:</Typography>
            <Typography>{format(1718385368927, "MM-dd-yyyy hh:mm:ss aa")}</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        className={styles.signContractActionBtns}
        sx={{ margin: { mobile: "0 24px", tablet: 0 } }}
      >
        <Button variant="clearGreen" onClick={onCancel}>
          CANCEL
        </Button>
        <Button variant="solidGreen" disabled={false} onClick={handleCompleteSignContract}>
          SIGN CONTRACT
        </Button>
      </Stack>

      {/* // MODAL // */}
      <Modal
        title="ADD SIGNATURE"
        titleIcon={undefined}
        open={openSignaturePad}
        onClose={() => setOpenSignaturePad(false)}
        actions={
          <>
            <Button variant="clearWhite" onClick={() => setOpenSignaturePad(false)}>
              CANCEL
            </Button>
            <Stack className={styles.signaturePadButtons} sx={{ flexDirection: { tablet: "row" } }}>
              <Button
                variant="outlineWhite"
                startIcon={<Icon icon="undo" />}
                onClick={handleUndoSignature}
              >
                UNDO
              </Button>
              <Button variant="solidGreen" onClick={handleSignContract}>
                SUBMIT
              </Button>
            </Stack>
          </>
        }
        contentStyles={{ padding: "24px !important" }}
      >
        <Stack className={styles.signaturePad} sx={{ backgroundColor: "background.tertiary" }}>
          {/* signature pad */}
        </Stack>
      </Modal>
    </Paper>
  );
}
