import { filterQueryAtom } from "@/atoms";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Stack, TextField } from "@mui/material";
import { useDebounce } from "@uidotdev/usehooks";

export default function SearchFilter({
  title = "Search",
} : {
  title?: string;
}) {
  const [filterQuery, setFilterQuery] = useAtom(filterQueryAtom);
  const [searchTerm, setSearchTerm] = useState(filterQuery.get("search"));
  const debouncedTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const query = new URLSearchParams(filterQuery.toString());
    query.set("search", debouncedTerm || "");

    setFilterQuery(query);
  }, [debouncedTerm, filterQuery, setFilterQuery]);

  return (
    <TextField
      variant="filled"
      placeholder={title}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  )
}
