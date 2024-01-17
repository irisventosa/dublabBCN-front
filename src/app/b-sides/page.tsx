"use client";
import useSWR from "swr";
import LoadMoreBsides from "../components/Bsides/LoadMoreBsides";
import ProfilesList from "../components/Profiles/ProfilesList";
import useDublabApi from "../lib/hooks/useDublabApi";
import ProfilesListMobile from "../components/Profiles/ProfilesListMobile";
import { useEffect, useState } from "react";

const BsidesList = () => {
  const { getBsides } = useDublabApi();
  const [mobileComponent, setMobileComponent] = useState(false);

  useEffect(() => {
    const mobileBreakPoint = 640;
    const isMobile =
      typeof window !== "undefined" && window.innerWidth < mobileBreakPoint;

    setMobileComponent(isMobile);
  }, []);

  const { data: bSidesList } = useSWR("1", getBsides);

  if (!bSidesList) return <div>Loading...</div>;

  return (
    <main className="flex flex-col mt-[119px] bg-black text-white">
      <ul className="flex flex-row gap-[376px]">
        <li className="mt-[100px]">
          <span className="h-[22px] px-8">COMING UP /// TODAY & TOMORROW</span>
        </li>
      </ul>
      <div className="flex text-[32px] sm:text-[72px] gap-[35px] sm:gap-[140px] pt-[62px] ml-8 ">
        <span>bbb</span>
        <h2>sides</h2>
      </div>
      {mobileComponent ? (
        <ProfilesListMobile seasonProfiles={bSidesList!.results} />
      ) : (
        <ProfilesList firstPageOfProfiles={bSidesList!.results} />
      )}
      <LoadMoreBsides isMobile={mobileComponent} />
    </main>
  );
};

export default BsidesList;
