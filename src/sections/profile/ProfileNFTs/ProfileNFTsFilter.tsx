import { Stack, useMediaQuery, useTheme } from "@mui/material";

import { MinMaxFilter, Modal, TagSelectionFilter } from "@/components";
import { useAtom, useAtomValue } from "jotai";
import { filterModalOpenAtom, filterOpenAtom } from "@/atoms";

export default function ProfileNFTsFilter() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("large"));
  const open = useAtomValue(filterOpenAtom);
  const [modalOpen, setModalOpen] = useAtom(filterModalOpenAtom);

  const Filter = () => (
    <Stack
      sx={!isMobile ? {
        position: "sticky",
        top: "200px",
        height: "calc(100dvh - 232px)",
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
