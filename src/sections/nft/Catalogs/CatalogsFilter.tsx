import { filterModalOpenAtom, filterOpenAtom } from "@/atoms";
import { CheckboxGroupFilter, FilterGroup, MinMaxFilter, Modal } from "@/components";
import { useAtom } from "jotai";

export default function CatalogsFilter() {
  const [modalOpen, setModalOpen] = useAtom(filterModalOpenAtom);

  return (
    <Modal title="Filter" open={modalOpen} onClose={() => setModalOpen(false)}>
      <FilterGroup>
        <MinMaxFilter name="ownerCount" title="Number of owners" />
        <MinMaxFilter name="catalogRevenue" title="Catalog revenue" />
        <CheckboxGroupFilter
          name="license"
          title="License"
          checkboxes={[
            { label: "Exclusive License", value: "exclusiveLicense" },
          ]}
        />
        <MinMaxFilter name="timeRemaining" title="Time remaining" />
      </FilterGroup>
    </Modal>
  )
}
