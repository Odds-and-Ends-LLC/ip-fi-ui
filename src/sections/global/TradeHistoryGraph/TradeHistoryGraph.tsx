// packages
import { Box, Divider, Stack, Typography } from "@mui/material";

// components
import { DataContainer } from "@/components";
import { Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// styles
import styles from "./TradeHistoryGraph.module.css";
import { useQuery } from "@tanstack/react-query";
import { getTradeHistory } from "@/lib/client/catalog";
import TradeHistoryGraphSkeleton from "./TradeHistoryGraphSkeleton";
import { useAtomValue } from "jotai";
import { selectedCatalogAtom } from "@/atoms";

export default function TradeHistoryGraph() {
  const selectedCatalog = useAtomValue(selectedCatalogAtom);
  const { data: tradeHistory, isFetching } = useQuery({
    queryKey: ["trade-history", selectedCatalog.id],
    queryFn: () => getTradeHistory(selectedCatalog.id),
  })

  const renderHeaderLeft = () => (
    <Stack>
      <Typography color="text.disabled" sx={{ typography: { desktop: "body2", mobile: "body3" }}}>Trade History of</Typography>
      <Typography
        sx={{
          typography: { desktop: "h6", mobile: "label3" },
          width: { mobile: "calc(100%)", desktop: "unset" },
        }}
      >
        {selectedCatalog.name}
      </Typography>
    </Stack>
  );

  if (isFetching) {
    return (<TradeHistoryGraphSkeleton />)
  }

  if (!tradeHistory?.data) {
    return;
  }

  return (
    <DataContainer
      headerLeftComponent={renderHeaderLeft()}
      bordered
      hasBackground
    >
      <Box
        className={styles.tradeHistoryGraph}
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
          <ComposedChart data={tradeHistory.data}>
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis orientation="right" axisLine={false} tickLine={false} width={32} />
            <CartesianGrid stroke="#1A1B46" strokeWidth={.5} />
            <Bar dataKey="barInfo" barSize={36} fill="#1A1B46" style={{ zIndex: -1 }} />

            <Tooltip cursorStyle={{ z: 10000 }} content={(props) => {
              if (!props.label || !props.payload || !props.payload.length) {
                return;
              }

              const label = props.label;
              const barInfo = props.payload[0].value;
              const lineInfo1 = props.payload[1].value;
              const lineInfo2 = props.payload[2].value;


              return (
                <Stack
                  className={styles.tradeHistoryGraphTooltip}
                  sx={{
                    bgcolor: "background.default",
                  }}
                >
                  <Typography variant="h6" textTransform="none">{label}</Typography>
                  <Divider sx={{ borderColor: "dividers.default" }} />
                  <Stack>
                    <Stack flexDirection="row" gap="8px">
                      <Typography variant="body2" color="text.brandSecondary">barInfo:</Typography>
                      <Typography variant="body2">{barInfo}</Typography>
                    </Stack>
                    <Stack flexDirection="row" gap="8px">
                      <Typography variant="body2" color="text.brandPrimary">lineInfo1:</Typography>
                      <Typography variant="body2">{lineInfo1}</Typography>
                    </Stack>
                    <Stack flexDirection="row" gap="8px">
                      <Typography variant="body2" color="text.brandPrimary">lineInfo2:</Typography>
                      <Typography variant="body2">{lineInfo2}</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              )
            }}/>
            <Line dataKey="lineInfo1" stroke="#7C2BFF" strokeWidth={3} />
            <Line dataKey="lineInfo2" label="lineInfo2" stroke="#72FF88" strokeWidth={3} />
          </ComposedChart>
        </ResponsiveContainer>
      </Box>
    </DataContainer>
  );
};
