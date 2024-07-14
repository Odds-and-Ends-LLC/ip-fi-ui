// packages
import { FormGroup, Grid, Stack} from "@mui/material";

// components
import ProfileCatalogMarketTable from "../ProfileCatalogMarketTable";
import ProfileCatalogsList from "./ProfileCatalogsList";
import { TradeHistoryGraph } from "@/sections/global";
import { catalogs } from "@/data";
import ProfileCatalogsFilter from "./ProfileCatalogsFilter";
import { FilterGroup, FilterGroupToggleButton, SearchFilter } from "@/components";

export default function ProfileCatalogs() {
  return (
    <>
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
          <ProfileCatalogsFilter />
          <ProfileCatalogsList />
        </Stack>
      </FilterGroup>
    </>
  )
}
