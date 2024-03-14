// packages
import { Box, Card, CardContent, CardHeader, IconButton, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";

// components
import { ProfilePicture } from "..";

// styles
import styles from "./Member.module.css";
import { motion } from "framer-motion";

export default function Member({
  memberName = "Member",
  lastActive = "4 hours ago",
  collections = 84,
  contracts = 10,
  joinedDate = "2 months ago",
  responseTime = "Within Hours",
  responseRate = 84,
  variant = "list"
}) {
  const theme = useTheme();

  return (
    variant === "card" ?
      <Card
        className={styles.memberCard}
        component={motion.div}
        whileHover={{
          background: theme.palette.background.translucentStrongGray,
        }}
        animate={{
          background: theme.palette.background.translucentGray,
        }}
      >
        <Box className={styles.memberCardProfilePicture}>
          <ProfilePicture />
        </Box>
        <CardHeader
          className={styles.memberCardHeader}
          action={
            <IconButton>
              <Image src="/icons/arrow_up_right.svg" alt="arrow up right" width={18} height={18} />
            </IconButton>
          }
        >
        </CardHeader>
        <CardContent className={styles.memberCardContent}>
          <Stack className={styles.memberCardTopDetails}>
            <Stack className={styles.memberCardItem}>
              <Typography variant="h6">
                {memberName}
              </Typography>
              <Typography variant="body2" color="text.disabledBlue">
                Active {lastActive}
              </Typography>
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
                  Contracts
                </Typography>
                <Typography variant="h6">
                  {contracts}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack className={styles.memberCardBottomDetails}>
            <Stack className={styles.memberCardRow}>
              <Typography variant="body2" color="text.disabledBlue">
                Joined
              </Typography>
              <Typography variant="body2">
                {joinedDate}
              </Typography>
            </Stack>
            <Stack className={styles.memberCardRow}>
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
            </Stack>
          </Stack>
        </CardContent>
      </Card> :
      <Stack className={styles.memberList}>
        <ProfilePicture size="xs" />
        <Stack>
          <Typography variant="body1">{memberName}</Typography>
          <Typography variant="body2" color="text.disabledBlue">Active {lastActive}</Typography>
        </Stack>
      </Stack>
  )
}
