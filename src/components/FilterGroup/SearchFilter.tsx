import { filterQueryAtom } from "@/atoms";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useDebounce } from "@uidotdev/usehooks";

export default function SearchFilter({
  title = "Search",
} : {
  title?: string;
}) {
  const [filterQuery, setFilterQuery] = useAtom(filterQueryAtom);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const debouncedTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedTerm === null) return;

    const query = new URLSearchParams(filterQuery.toString());
    if (!debouncedTerm) {
      query.delete("search");
    } else {
      query.set("search", debouncedTerm || "");
    }

    setFilterQuery(query);
  }, [debouncedTerm]);

  return (
    <TextField
      variant="filled"
      placeholder={title}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      fullWidth
    />
  )
}
