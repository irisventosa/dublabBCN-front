import useDublabApi from "@/app/lib/hooks/useDublabApi";
import { ApiProfile } from "@/app/types";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ProfilesList from "./ProfilesList";

const LoadMore = () => {
  const { getProfiles } = useDublabApi();
  const [profiles, setProfiles] = useState<ApiProfile[]>([]);

  const [page, setPage] = useState(1);

  const { ref, inView } = useInView();

  const loadMoreProfiles = useCallback(async () => {
    const nextPage = (page % 12) + 1;
    const { results } = (await getProfiles(nextPage)) ?? [];
    setProfiles((prevProfiles: ApiProfile[]) => [...prevProfiles, ...results]);
    setPage(nextPage);
  }, [getProfiles, page]);

  useEffect(() => {
    if (inView) {
      loadMoreProfiles();
    }
  }, [inView, loadMoreProfiles]);

  return (
    <>
      <ProfilesList firstPageOfProfiles={profiles} />
      <div
        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
        ref={ref}
      ></div>
    </>
  );
};

export default LoadMore;
