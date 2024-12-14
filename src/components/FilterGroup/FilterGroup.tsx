import { useHydrateAtoms } from 'jotai/utils';
import { ScopeProvider } from 'jotai-scope'
import { filterQueryAtom } from '@/atoms';
import { useAtomValue } from 'jotai';
import { ReactNode, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function FilterGroup({
  children,
} : {
  children: ReactNode;
}) {
  const QueryReporter = () => {
    const filterQuery = useAtomValue(filterQueryAtom);

    useEffect(() => {
      if (filterQuery) {
        window.history.replaceState(null, "", `?${filterQuery.toString()}`);
      }
    }, [filterQuery]);

    return null;
  };

  const HydrateAtoms = ({ children } : { children: ReactNode }) => {
    const urlQuery: URLSearchParams = useSearchParams() || new URLSearchParams();

    useHydrateAtoms([[filterQueryAtom, urlQuery]]);
    return children;
  };

  return (
    <ScopeProvider atoms={[filterQueryAtom]}>
      <HydrateAtoms>
        <QueryReporter />
        {children}
      </HydrateAtoms>
    </ScopeProvider>
  );
};
