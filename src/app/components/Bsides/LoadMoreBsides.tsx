import useDublabApi from "@/app/lib/hooks/useDublabApi";
import { Bside } from "@/app/types";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ProfilesList from "../Profiles/ProfilesList";

const LoadMore = () => {
  const { getBsides } = useDublabApi();
  const [bsides, setBsides] = useState<Bside[]>([]);

  const [page, setPage] = useState(1);

  const { ref, inView } = useInView();

  const loadMoreBsides = useCallback(async () => {
    const nextPage = (page % 12) + 1;
    const { results } = (await getBsides(nextPage)) ?? [];
    setBsides((prevProfiles: Bside[]) => [...prevProfiles, ...results]);
    setPage(nextPage);
  }, [getBsides, page]);

  useEffect(() => {
    if (inView) {
      loadMoreBsides();
    }
  }, [inView, loadMoreBsides]);

  return (
    <div className="mt-[61px]">
      <ProfilesList firstPageOfProfiles={bsides} />
      <div
        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
        ref={ref}
      ></div>
    </div>
  );
};

export default LoadMore;
