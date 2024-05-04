// packages
import { Box, Divider, Stack, Typography } from "@mui/material";

// components
import { DataContainer } from "@/components";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// styles
import styles from "./PriceVolumeGraph.module.css";

export default function Table() {
  const data = [
    { month: "", price: 400, volume: 400 },
    { month: "Jan", price: 300, volume: 344 },
    { month: "Feb", price: 282, volume: 320 },
    { month: "Mar", price: 225, volume: 301 },
    { month: "Apr", price: 258, volume: 243 },
    { month: "May", price: 291, volume: 255 },
    { month: "Jun", price: 290, volume: 254 },
    { month: "Jul", price: 288, volume: 190 },
    { month: "Aug", price: 250, volume: 202 },
    { month: "Sep", price: 321, volume: 221 },
    { month: "Oct", price: 220, volume: 311 },
    { month: "Nov", price: 215, volume: 290 },
    { month: "Dec", price: 329, volume: 319 },
  ]

  const renderHeaderLeft = () => (
    <Stack>
      <Typography color="text.disabled" sx={{ typography: { desktop: "body2", mobile: "body3" }}}>Price & Volume history</Typography>
      <Typography
        sx={{
          typography: { desktop: "h6", mobile: "label3" },
          width: { mobile: "calc(100%)", desktop: "unset" },
        }}
      >
        YEAR 2023
      </Typography>
    </Stack>
  );

  const renderTooltip = (props) => {
    if (!props.label || !props.payload || !props.payload.length) {
      return;
    }

    const label = props.label;
    const volume = props.payload[0].value;
    const price = props.payload[1].value;

    return (
      <Stack
        className={styles.priceVolumeGraphTooltip}
        sx={{
          bgcolor: "background.black",
        }}
      >
        <Typography variant="h6-sans" textTransform="none">{label}</Typography>
        <Divider sx={{ borderColor: "dividerWhite.main" }} />
        <Stack>
          <Stack flexDirection="row" gap="4px">
            <Typography variant="h4" color="text.secondary">Price:</Typography>
            <Typography variant="h4">{price}</Typography>
          </Stack>
          <Stack flexDirection="row" gap="4px">
            <Typography variant="h4" color="text.purple">Volume:</Typography>
            <Typography variant="h4">{volume} ETH</Typography>
          </Stack>
        </Stack>
      </Stack>
    )
  }

  return (
    <DataContainer
      headerLeftComponent={renderHeaderLeft()}
      bordered
      hasBackground
    >
      <Box
        className={styles.priceVolumeGraph}
        sx={{
          padding: {
            mobile: "8px",
            tablet: "16px",
          },
          height: {
            mobile: "420px",
          },
          typography: "graph",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis orientation="right" axisLine={false} tickLine={false} width={32} />
            <CartesianGrid stroke="#1A1B46" strokeWidth={.5} />
            <Tooltip content={renderTooltip} />
            <Area dataKey="volume" stroke="#7C2BFF" strokeWidth={3} fill="#370A8059" />
            <Area dataKey="price" label="price" stroke="#72FF88" strokeWidth={3} fill="#39804459" />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </DataContainer>
  );
};
