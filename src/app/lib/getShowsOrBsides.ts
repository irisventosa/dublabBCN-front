import useSWR from "swr";

const getShowsOrBsides = (fetchCallback: CallableFunction) => {
  const apiRequestPages = Array.from(
    { length: 7 },
    (_, index) => `${index + 1}`
  );

  const apiProfilesOrBsides = apiRequestPages.map((page: string) => {
    const { data: apiPodcasts } = useSWR(page, () => fetchCallback(page));
    return apiPodcasts;
  });

  return apiProfilesOrBsides;
};

export default getShowsOrBsides;
