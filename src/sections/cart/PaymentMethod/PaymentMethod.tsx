// packages
import { useEffect, useState } from "react";
import { Stack, Typography, Radio, Paper } from "@mui/material";

// styles
import styles from "./PaymentMethod.module.css";

// components
import { Avatar } from "@/components";

// types

export default function PaymentMethod({
  onChangePaymentMethod,
}: {
  onChangePaymentMethod: (paymentOption?: string) => void;
}) {
  const [paymentOption, setPaymentOption] = useState<string | undefined>(undefined);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentOption(event.target.value);
  };

  useEffect(() => {
    onChangePaymentMethod(paymentOption);
  }, [onChangePaymentMethod, paymentOption]);

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
          checked={paymentOption === value}
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
