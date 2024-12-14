import { filterModalOpenAtom, filterOpenAtom } from "@/atoms";
import { FilterGroup, MinMaxFilter, Modal, SliderRangeFilter, TagSelectionFilter } from "@/components";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { useAtom, useAtomValue } from "jotai";

export default function CatalogsFilter() {
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
      <MinMaxFilter name="cost" title="Cost" />
      <SliderRangeFilter name="nftCount" title="NFT Count" min={1} max={20} step={1} />
      <MinMaxFilter name="ownerCount" title="Number of owners" />
      <TagSelectionFilter name="ownerAddresses" title="Owners" />
      <TagSelectionFilter name="creatorAddresses" title="Creators" />
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
