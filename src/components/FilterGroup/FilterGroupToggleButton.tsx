import { filterModalOpenAtom, filterOpenAtom } from "@/atoms";
import { FilterList } from "@mui/icons-material";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

export default function FilterGroupToggleButton({
  modalMode,
} : {
  modalMode?: boolean;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("large"));
  const setFilterOpen = useSetAtom(filterOpenAtom);
  const setFilterModalOpen = useSetAtom(filterModalOpenAtom);

  useEffect(() => {
    if (!isMobile) {
      setFilterModalOpen(false);
    }
  }, [isMobile, setFilterModalOpen])

  const handleClick = () => {
    if (isMobile || modalMode) {
      setFilterModalOpen((open) => !open);
      return;
    }

    setFilterOpen((open) => !open);
  };

  return (
    <Button variant="outlineWhite" mode="icon" onClick={handleClick}>
      <FilterList />
    </Button>
  )
}
