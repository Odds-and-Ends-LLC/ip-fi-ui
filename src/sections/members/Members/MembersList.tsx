import { InfiniteGridScroller, Member } from "@/components";
import { getUsers } from "@/lib/client/user";
import { Box, CircularProgress } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function MembersList() {
  const query = useSearchParams();
  const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["members", query?.toString()],
    queryFn: ({ pageParam }) => getUsers(pageParam, query ?? undefined),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.hasNextPage ? lastPage.page + 1 : undefined,
  });

  const members = data?.pages.map(({ data: members }) => members || [])?.flat() || [];

  return (
    <InfiniteGridScroller
      data={members}
      renderItem={({ item, index }) =>
      <Box key={index} sx={{ aspectRatio: "1/1.05", width: "100%", minHeight: "232px", maxHeight: "232px" }}>
        <Member
          username={item.username}
          pfp={item.pfp}
          lastActive={item.lastActiveAt}
          collections={item.collectionCount}
          catalogs={item.catalogCount}
          joinedDate={item.joinedAt}
        />
      </Box>
      }
      onEndReached={fetchNextPage}
      onContentResizeNotEnough={fetchNextPage}
      stickyHeader
      stickyHeaderTopOffset={104}
      footer={(isFetching || hasNextPage) && <CircularProgress color="secondary" sx={{ mx: "auto" }} />}
    />
  );
}
