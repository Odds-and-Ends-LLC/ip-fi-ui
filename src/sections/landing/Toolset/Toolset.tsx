// packages
import { ArrowOutward } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./Toolset.module.css";

export default function Toolset() {
  return (
    <Stack
      className={styles.toolset}
      sx={{
        p: { tablet: "80px 100px", mobile: "40px 24px" },
        height: { desktop: "1028px", mobile: "720px" }
      }}
    >
      <Stack
        className={styles.toolsetContent}
        sx={{ gap: { desktop: "40px", mobile: "24px" } }}
      >
        <Typography
          className={styles.toolsetTitle}
          variant="h2"
          sx={(theme) => ({
            background: theme.palette.gradient.one,
          })}
        >
          Make Passive Income off your IP
        </Typography>
        <Typography className={styles.toolsetText} color="text.gray">
          You can now add another layer of income to the NFT in your collection that increases over
          time. The more people who purchase licensing agreements, the bigger the reward to each
          subsequent holder of the agreements, and most of all, to you. Use our analytics tools
          to dive in to see how well your assets are performing.
        </Typography>
        <Box
          className={styles.toolsetImage}
          sx={{
            width: { desktop: "876px", tablet: "560px", mobile: "326px" },
            height: { desktop: "500px", tablet: "320px", mobile: "186px" }
          }}
        >
          <Image
            src="/images/toolset_graph.png"
            alt="toolset graph"
            fill
          />
        </Box>
        <Button variant="solidGreen" endIcon={<ArrowOutward />}>
          LEARN MORE
        </Button>
      </Stack>
      <Image
        className={styles.toolsetBackground}
        src="/images/toolset.png"
        alt="toolset"
        fill
      />
    </Stack>
  );
};
