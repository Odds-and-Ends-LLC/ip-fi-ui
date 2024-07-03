// packages
import { useEffect, useState } from "react";
import { Stack, Typography, Radio, Paper } from "@mui/material";

// styles
import styles from "./PaymentMethod.module.css";

// components
import { Avatar } from "@/components";
import { useAtom } from "jotai";
import { purchaseCatalogDataAtom } from "@/atoms";
import { PaymentMethodType } from "@/types";

// types

export default function PaymentMethod({
  selected,
  onChange
} : {
  selected: PaymentMethodType;
  onChange: (method: PaymentMethodType) => void;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value as PaymentMethodType)
  };

  const PaymentOption = ({
    icon,
    value,
    label,
    description,
  }: {
    icon: string;
    value: string;
    label: string;
    description: string;
  }) => {
    return (
      <Stack className={styles.paymentOption}>
        <Stack className={styles.paymentOptionLabel}>
          <Avatar size="s" image={icon} />
          <Stack className={styles.paymentOptionLabelText}>
            <Typography variant="label2" fontWeight={700} lineHeight="20px" textTransform="none">
              {label}
            </Typography>
            <Typography variant="body2" color="text.disabledBlue">
              {description}
            </Typography>
          </Stack>
        </Stack>
        <Radio
          checked={selected === value}
          onChange={handleChange}
          value={value}
          name="payment-methods"
          color="secondary"
          inputProps={{ "aria-label": value }}
          sx={{ padding: 0 }}
        />
      </Stack>
    );
  };

  return (
    <Paper
      component={Stack}
      variant="translucent"
      className={styles.paymentMethod}
      sx={{ padding: { mobile: "24px", laptop: "24px 32px" } }}
    >
      <Typography variant="h5" textTransform="none">
        Payment Method
      </Typography>
      <Stack className={styles.paymentOptions}>
        <PaymentOption
          icon="/images/payment_usdc.png"
          value="usdc"
          label="USDC"
          description="Pay under Crypto"
        />
        <PaymentOption
          icon="/images/payment_ethereum.png"
          value="ethereum"
          label="Ethereum"
          description="Pay under Crypto"
        />
        <PaymentOption
          icon="/images/payment_credit_card.png"
          value="credit-card"
          label="Credit Card"
          description="Pay under Stripe"
        />
      </Stack>
    </Paper>
  );
}
