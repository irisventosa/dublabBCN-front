interface FetchCallback<T> {
  (page: string): Promise<T>;
}

const getProfilesOrBsides = async <T>(fetchCallback: FetchCallback<T>) => {
  const numberOfPages = fetchCallback.name === "getProfiles" ? 8 : 18;

  const apiRequestPages = Array.from(
    { length: numberOfPages },
    (_, index) => `${index + 1}`
  );

  const apiProfilesOrBsides = await Promise.all(
    apiRequestPages.map(async (page: string) => {
      try {
        const response = await fetchCallback(page);
        return response;
      } catch (error) {
        throw new Error(`Error fetching data for page ${page}:`);
      }
    })
  );

  return apiProfilesOrBsides;
};

export default getProfilesOrBsides;
