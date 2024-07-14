import { filterModalOpenAtom, filterOpenAtom } from "@/atoms";
import { CheckboxGroupFilter, FilterGroup, MinMaxFilter, Modal } from "@/components";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { useAtom, useAtomValue } from "jotai";

export default function MembersFilter() {
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
      <MinMaxFilter name="nftsOwned" title="NFTs Owned" />
      <MinMaxFilter name="catalogsOwned" title="Catalogs Owned" />
      <MinMaxFilter name="catalogsCreated" title="Catalogs Created" />
      <MinMaxFilter name="amountEarned" title="Amount Earned" />
      <CheckboxGroupFilter
        name="catalogDetails"
        title="Catalog Details"
        checkboxes={[
          { label: "Owns a catalog", value: "hasOwnedCatalog" },
          { label: "Created a catalog", value: "hasCreatedCatalog" },
        ]}
      />
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
