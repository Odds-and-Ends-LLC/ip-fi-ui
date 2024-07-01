// packages
import { Box, Card, CardContent, Stack, Typography, useTheme } from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import { motion } from "framer-motion";

// components
import styles from "./Member.module.css";
import { ProfilePicture } from "..";

export default function Member({
  memberName = "Member",
  pfp,
  lastActive,
  collections = 0,
  catalogs = 0,
  joinedDate,
  responseTime = "Within Hours",
  responseRate,
  variant = "card",
} : {
  memberName: string;
  pfp?: string;
  lastActive?: Date;
  collections?: number;
  catalogs?: number;
  joinedDate?: Date;
  responseTime?: string;
  responseRate?: string;
  variant?: "card" | "list";
}) {
  const theme = useTheme();

  return (
    variant === "card" ?
      <Card
        className={styles.memberCard}
        component={motion.div}
        whileHover={{
          background: theme.palette.background.grayOverlay,
        }}
        animate={{
          background: theme.palette.background.grayOverlay,
        }}
      >
        <Box className={styles.memberCardProfilePicture}>
          <ProfilePicture image={pfp} />
        </Box>
        <CardContent className={styles.memberCardContent}>
          <Stack className={styles.memberCardTopDetails}>
            <Stack className={styles.memberCardItem}>
              <Typography variant="h6">
                {memberName}
              </Typography>
              {lastActive &&
                <Typography variant="body2" color="text.disabledBlue">
                  Active {formatDistanceToNow(lastActive, { addSuffix: true })}
                </Typography>
              }
            </Stack>
            <Stack className={styles.memberCardNumbers}>
              <Stack className={styles.memberCardItem}>
                <Typography variant="body2" color="text.disabled">
                  Collections
                </Typography>
                <Typography variant="h6">
                  {collections}
                </Typography>
              </Stack>
              <Stack className={styles.memberCardItem}>
                <Typography variant="body2" color="text.disabled">
                  Catalogs
                </Typography>
                <Typography variant="h6">
                  {catalogs}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack className={styles.memberCardBottomDetails}>
            {joinedDate &&
              <Stack className={styles.memberCardRow}>
                <Typography variant="body2" color="text.disabledBlue">
                  Joined
                </Typography>
                <Typography variant="body2">
                  {formatDistanceToNow(joinedDate, { addSuffix: true })}
                </Typography>
              </Stack>
            }
            {/* <Stack className={styles.memberCardRow}>
              <Typography variant="body2" color="text.disabledBlue">
                Response Time
              </Typography>
              <Typography variant="body2">
                {responseTime}
              </Typography>
            </Stack>
            <Stack className={styles.memberCardRow}>
              <Typography variant="body2" color="text.disabledBlue">
                Response Rate
              </Typography>
              <Typography variant="body2">
                {responseRate}
              </Typography>
            </Stack> */}
          </Stack>
        </CardContent>
      </Card> :
      <Stack className={styles.memberList}>
        <ProfilePicture size="xs" />
        <Stack>
          <Typography variant="body1">{memberName}</Typography>
          {lastActive && <Typography variant="body2" color="text.disabledBlue">Active {formatDistanceToNow(lastActive, { addSuffix: true })}</Typography>}
        </Stack>
      </Stack>
  )
}
