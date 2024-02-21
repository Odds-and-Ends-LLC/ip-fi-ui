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
          sx={(theme) => ({
            background: theme.palette.background.gradientInverted,
            typography: { desktop: "h2", mobile: "h2-mobile" }
          })}
        >
          Make Passive Income off your IP
        </Typography>
        <Typography className={styles.toolsetText} color="text.gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
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
        <Button variant="contained" color="primary" endIcon={<ArrowOutward />}>
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
