import { Box, Stack } from "@mui/material"
import { FilterGroup, FilterGroupToggleButton, GlassCoverImage } from ".."
import { ReactNode } from "react"
import { SearchFilter } from "../FilterGroup";

export default function InventoryContainer({
  headerTitle,
  children,
} : {
  headerTitle?: ReactNode;
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
          maxWidth: "1920px",
          width: "100%"
        }}
      >
        <FilterGroup>
          <Stack
            sx={{
              padding: { mobile: "16px 32px", tablet: "16px 64px" },
              position: "sticky",
              top: "72px",
              gap: "16px",
              minWidth: "100vw",
              bgcolor: "background.default",
              zIndex: 10,
            }}
          >
            <Box sx={{ display: { mobile: "block", large: "none" } }}>
              {headerTitle}
            </Box>
            <Stack sx={{ flexDirection: "row", gap: "16px", alignItems: "center" }}>
              <FilterGroupToggleButton />
              <Box sx={{ display: { mobile: "none", large: "block" } }}>
                {headerTitle}
              </Box>
              <SearchFilter />
            </Stack>
          </Stack>
          <Stack
            sx={{
              flexDirection: "row",
              gap: "32px",
              height: "100%",
              padding: { mobile: "104px 24px 32px", tablet: "96px 64px 32px" },
            }}
          >
            {children}
          </Stack>
        </FilterGroup>
      </Stack>
    </Stack>
  )
}
