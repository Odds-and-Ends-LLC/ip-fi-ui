import { filterModalOpenAtom, filterOpenAtom } from "@/atoms";
import { FilterGroup, ItemsSectionHeader, MinMaxFilter, Modal, TagSelectionFilter } from "@/components";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { useAtom, useAtomValue } from "jotai";

export default function NFTsFilter() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("large"));
  const open = useAtomValue(filterOpenAtom);
  const [modalOpen, setModalOpen] = useAtom(filterModalOpenAtom);

  const Filter = () => (
    <Stack
      sx={!isMobile ? {
        position: "sticky",
        top: "168px",
        height: "calc(100dvh - 200px)",
        overflow: "auto",
        gap: "16px",
        pr: "16px",
      } : {}}
    >
      <MinMaxFilter name="catalog_inclusion_count" title="Catalogs a part of" />
      <MinMaxFilter name="cost" title="Cost" />
      <MinMaxFilter name="floor_price" title="Floor Price" />
      <TagSelectionFilter name="owners" title="Owners" />
      <MinMaxFilter name="earnings" title="Earnings" />
    </Stack>
  )

  return (
    isMobile ?
      <Modal open={modalOpen} title="Filter" onClose={() => setModalOpen(false)} >
        <Filter />
      </Modal> :
      open && <Filter />
  )
}
