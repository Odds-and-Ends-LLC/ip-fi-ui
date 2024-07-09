import { useHydrateAtoms } from 'jotai/utils';
import { ScopeProvider } from 'jotai-scope'
import { filterQueryAtom } from '@/atoms';
import { useAtomValue } from 'jotai';
import { ReactNode, useEffect } from 'react';
import { Stack } from '@mui/material';
import SearchFilter from './SearchFilter';
import { useSearchParams } from 'next/navigation';

export default function FilterGroup({
  children,
  searchbarPlaceholder,
} : {
  children: ReactNode;
  searchbarPlaceholder?: string;
}) {
  const QueryReporter = () => {
    const filterQuery = useAtomValue(filterQueryAtom);

    useEffect(() => {
      if (filterQuery) {
        window.history.pushState(null, "", `?${filterQuery.toString()}`);
      }
    }, [filterQuery]);

    return null;
  };

  const HydrateAtoms = ({ children } : { children: ReactNode }) => {
    const urlQuery = useSearchParams();

    useHydrateAtoms([[filterQueryAtom, urlQuery]]);
    return children;
  };

  return (
    <ScopeProvider atoms={[filterQueryAtom]}>
      <HydrateAtoms>
        <QueryReporter />
        <Stack gap="8px" maxWidth="380px">
          <SearchFilter title={searchbarPlaceholder} />
          {children}
        </Stack>
      </HydrateAtoms>
    </ScopeProvider>
  );
};
