import { Button, Stack } from "@mui/material"
import { GlassCoverImage, Icon } from ".."
import { ReactNode } from "react"

export default function InventoryContainer({
  children
} : {
  children: ReactNode;
}) {
  return (
    <Stack
      sx={{
        minHeight: "100dvh",
        position: "relative",
       }}
    >
      <GlassCoverImage fixed />
      <Stack
        sx={{
          padding: { mobile: "104px 0px 32px", tablet: "96px 64px 32px" },
          gap: { mobile: "24px", tablet: "32px" },
          maxWidth: "1920px",
          width: "100%"
        }}
      >
        <Button
          variant="clearGreen"
          startIcon={<Icon icon="arrowLeft" />}
          href="/explore"
          sx={{ alignSelf: "flex-start" }}
        >
          BACK TO EXCHANGE PORTAL
        </Button>
        <Stack
          sx={{
            flexDirection: "row",
            gap: "32px",
            height: "100%",
          }}
        >
          {children}
        </Stack>
      </Stack>
    </Stack>
  )
}
