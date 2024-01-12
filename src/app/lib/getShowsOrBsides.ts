import useSWR from "swr";

interface FetchCallback<T> {
  (page: string): Promise<T>;
}

const getProfilesOrBsides = <T>(fetchCallback: FetchCallback<T>) => {
  const numberOfPages = fetchCallback.name === "getProfiles" ? 7 : 18;

  const apiRequestPages = Array.from(
    { length: numberOfPages },
    (_, index) => `${index + 1}`
  );

  const apiProfilesOrBsides = apiRequestPages.map((page: string) => {
    const { data: apiPodcasts } = useSWR(page, () => fetchCallback(page));
    return apiPodcasts;
  });

  return apiProfilesOrBsides;
};

export default getProfilesOrBsides;
