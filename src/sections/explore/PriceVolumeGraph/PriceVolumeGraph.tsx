// packages
import { Box, Divider, Stack, Typography } from "@mui/material";

// components
import { DataContainer } from "@/components";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// styles
import styles from "./PriceVolumeGraph.module.css";
import { useQuery } from "@tanstack/react-query";
import { getPriceVolumeHistory } from "@/lib/client/catalog";
import PriceVolumeGraphSkeleton from "./PriceVolumeGraphSkeleton";

export default function Table() {
  const { data, isFetching } = useQuery({
    queryKey: ["price-volume-history"],
    queryFn: () => getPriceVolumeHistory(),
  })

  const renderHeaderLeft = () => (
    <Stack>
      <Typography color="text.disabled" sx={{ typography: { desktop: "body2", mobile: "body3" }}}>Price & Volume history</Typography>
      <Typography
        sx={{
          typography: { desktop: "h6", mobile: "label3" },
          width: { mobile: "calc(100%)", desktop: "unset" },
        }}
      >
        YEAR {new Date().getFullYear()}
      </Typography>
    </Stack>
  );

  if (isFetching) {
    return (<PriceVolumeGraphSkeleton />)
  }

  if (!data) {
    return;
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
            <XAxis dataKey="month" axisLine={false} tickLine={false} hide />
            <YAxis orientation="right" axisLine={false} tickLine={false} width={32} />
            <CartesianGrid stroke="#1A1B46" strokeWidth={.5} />
            <Tooltip content={(props) => {
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
                    bgcolor: "background.default",
                  }}
                >
                  <Typography variant="h6" textTransform="none">{label}</Typography>
                  <Divider sx={{ borderColor: "dividers.default" }} />
                  <Stack>
                    <Stack flexDirection="row" gap="8px">
                      <Typography variant="body2" color="text.brandSecondary">Price:</Typography>
                      <Typography variant="body2">{price}</Typography>
                    </Stack>
                    <Stack flexDirection="row" gap="8px">
                      <Typography variant="body2" color="text.brandPrimary">Volume:</Typography>
                      <Typography variant="body2">{volume} ETH</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              )
            }}/>
            <Area dataKey="volume" stroke="#7C2BFF" strokeWidth={3} fill="#370A8059" />
            <Area dataKey="price" label="price" stroke="#72FF88" strokeWidth={3} fill="#39804459" />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </DataContainer>
  );
};
