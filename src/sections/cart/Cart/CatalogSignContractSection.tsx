import { Alert, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import { Icon, Modal } from "@/components";
import { ItemDetail, PaymentForm } from "..";
import { useAtom, useAtomValue } from "jotai";
import { purchaseCatalogDataAtom, userSessionAtom } from "@/atoms";
import Image from "next/image";
import { useRef, useState } from "react";
import SignaturePad from "react-signature-pad-wrapper";
import { PaymentMethodType, PurchaseCatalogDetailsType } from "@/types";
import { LicenseTerms, NftTable } from "../SignContract";
import { LoadingButton } from "@mui/lab";
import styles from "./Cart.module.css";
import { purchaseCatalog } from "@/lib/actions/catalog";

const paymentMethods: Record<PaymentMethodType, string> = {
  usdc: "USDC",
  ethereum: "Ethereum",
  "credit-card": "Credit Card",
};

export default function CatalogSignContractSection({
  onBack,
  onCompletePurchase,
} : {
  onBack: () => void;
  onCompletePurchase: (data: PurchaseCatalogDetailsType) => void;
}) {
  const purchaseCatalogData = useAtomValue(purchaseCatalogDataAtom);
  const [error, setError] = useState("");
  const user = useAtomValue(userSessionAtom);
  const [openSignaturePad, setOpenSignaturePad] = useState(false);
  const [signatureImage, setSignatureImage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const signaturePadRef = useRef<SignaturePad>(null);

  const subtotal = purchaseCatalogData.cartItem.catalog.nfts?.reduce((total, nft) => total + nft.currentPrice, 0);

  const handleBack = () => {
    onBack();
  };

  const handleOpenSignaturePad = () => {
    setOpenSignaturePad(true);
    setError("");
  };

  const handleClearSignature = () => {
    signaturePadRef.current?.clear();
  };

  const handleSignContract = () => {
    setError("");
    if (signaturePadRef.current?.isEmpty()) {
      setError("Please provide a signature.");
      return;
    }

    setSignatureImage(signaturePadRef.current?.toDataURL() || "");
    setOpenSignaturePad(false);
  };
  const handleCompleteSignContract = async () => {
    setSubmitting(true);

    const res = await purchaseCatalog({ ...purchaseCatalogData, signature: signatureImage });

    if (res.error) {
      // handle error
    }

    if (res.data) {
      onCompletePurchase(res.data);
    }
  };

  return (
    <Stack
      className={styles.catalogCartContents}
      sx={{ height: { laptop: "calc(100vh - 160px)" } }}
    >
      <Stack
        className={styles.catalogMainSection}
        sx={{ padding: { mobile: "0 24px", tablet: "0 64px" } }}
      >
        <Paper
          component={Stack}
          variant="translucent"
          className={styles.signContract}
          sx={{ padding: { mobile: "24px 0", tablet: "24px", laptop: "42px 72px 24px" } }}
        >
          <Typography variant="h4" sx={{ margin: { mobile: "0 24px", tablet: 0 } }}>
            CONTRACT
          </Typography>
          <Stack
            className={styles.signContractContents}
            sx={{
              backgroundColor: "background.tertiary",
              padding: { mobile: "24px", laptop: "32px 64px" },
            }}
          >
            <Stack className={styles.signContractDetails}>
              <ItemDetail
                gap="8px"
                label="Payment Method"
                valueIcon={<Image src={`/images/payment_${purchaseCatalogData.paymentMethod}.png`} alt={purchaseCatalogData.paymentMethod || "payment"} height={24} width={24} />}
                value={purchaseCatalogData.paymentMethod && paymentMethods[purchaseCatalogData.paymentMethod]}
              />
              <ItemDetail gap="8px" label="Subtotal:" value={`$ ${subtotal}`} valueTextVariant="h4" />
            </Stack>
            <Divider flexItem />
            <Stack gap="24px">
              <Typography variant="h5" textTransform="none">
                NFTs
              </Typography>
              <Paper component={Stack} variant="translucent" className={styles.signContractNFTTable}>
                <NftTable data={purchaseCatalogData.cartItem.catalog.nfts} />
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
                  {signatureImage ?
                    <Image onClick={handleOpenSignaturePad} src={signatureImage} alt="signature" width={280} height={101} style={{ cursor: "pointer", backgroundColor: "transparent", position: "absolute", zIndex: 1, left: "50%", bottom: 0, transform: "translate(-50%)" }} /> :
                    <Stack
                      className={styles.signContractAddSignatureBtn}
                      sx={{ color: "text.disabledBlue" }}
                      onClick={handleOpenSignaturePad}
                    >
                      <Icon icon="add" size={18} />
                      <Typography variant="link2">Add Signature</Typography>
                    </Stack>
                  }
                </Stack>
                <Divider flexItem />
                <Typography color="text.disabled">{user?.username}</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            className={styles.signContractActionBtns}
            sx={{ margin: { mobile: "0 24px", tablet: 0 } }}
          >
            <Button disabled={submitting} variant="clearGreen" onClick={handleBack}>
              CANCEL
            </Button>
            <LoadingButton loading={submitting} variant="solidGreen" disabled={!signatureImage} onClick={handleCompleteSignContract}>
              SIGN CONTRACT
            </LoadingButton>
          </Stack>
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
                    onClick={handleClearSignature}
                  >
                    CLEAR
                  </Button>
                  <Button variant="solidGreen" onClick={handleSignContract}>
                    SUBMIT
                  </Button>
                </Stack>
              </>
            }
            contentStyles={{ padding: "24px !important", justifyContent: "center", alignItems: "center" }}
          >
            <Stack sx={{ width: { laptop: "495px", mobile: "100%" }, aspectRatio: 25/9, backgroundColor: "background.tertiary" }}>
              <SignaturePad options={{ penColor: "#fff", minWidth: 2.5,  maxWidth: 4.2 }} ref={signaturePadRef} redrawOnResize />
            </Stack>
            {error &&
              <Alert icon={<Icon icon="alert" />} severity="error">
                {error}
              </Alert>
            }
          </Modal>
        </Paper>
      </Stack>
    </Stack>
  )
}
