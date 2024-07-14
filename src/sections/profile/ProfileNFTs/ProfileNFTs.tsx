// packages
import { Stack} from "@mui/material";

// components
import ProfileNFTsList from "./ProfileNFTsList";
import ProfileNFTsFilter from "./ProfileNFTsFilter";
import { FilterGroup, FilterGroupToggleButton, SearchFilter } from "@/components";

export default function ProfileNFTs() {
  return (
    <FilterGroup>
      <Stack sx={{ position: "sticky", pb: "16px", bgcolor: "background.secondary", top: "144px", flexDirection: "row", gap: "16px", alignItems: "center", zIndex: 10, }}>
        <FilterGroupToggleButton />
        <SearchFilter />
      </Stack>
      <Stack
        sx={{
          flexDirection: "row",
          gap: "32px",
          height: "100%",
        }}
      >
        <ProfileNFTsFilter />
        <ProfileNFTsList />
      </Stack>
    </FilterGroup>
  )
}
