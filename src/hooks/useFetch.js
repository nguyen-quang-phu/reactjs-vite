import { useQuery } from '@tanstack/react-query';

export function useFetch(
  /** @type {any} */ queryKey,
  /** @type {import("react-query").QueryFunction<unknown, any>} */ queryFn,
  // eslint-disable-next-line max-len
  /** @type {Omit<import("react-query").UseQueryOptions<unknown, unknown, unknown, any>, "queryKey" | "queryFn"> | undefined} */ options,
) {
  const state = useQuery(queryKey, queryFn, {
    onError: (error) => {
      // handle error here
    },
    retry: false,
    cacheTime: 0,
    refetchOnWindowFocus: false,
    ...options,
  });

  return { ...state };
}
