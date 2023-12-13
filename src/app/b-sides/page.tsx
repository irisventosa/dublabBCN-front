"use client";
import useSWR from "swr";
import SearchAndFilters from "../components/SearchAndFilters";
import useDublabApi from "../lib/hooks/useDublabApi";
import ProfilesList from "../components/Profiles/ProfilesList";
import LoadMore from "../components/Profiles/LoadMoreProfiles";

const BSidesList = () => {
  const { getBsidesData } = useDublabApi();

  const { data: bSidesList } = useSWR("1", getBsidesData);

  if (!bSidesList) return <div>Loading...</div>;

  return (
    <main className="flex flex-col mt-[219px] bg-black text-white">
      <ul className="flex flex-row gap-[376px]">
        <li>
          <span className="h-[22px] px-8 ">COMING UP /// TODAY & TOMORROW</span>
        </li>
        <li>
          <SearchAndFilters />
        </li>
      </ul>
      <div className="flex text-[72px] gap-[140px] pt-[62px] ml-8 ">
        <span>bbb</span>
        <h2> b-sides</h2>
      </div>
      <ProfilesList firstPageOfProfiles={bSidesList.results} />
      <LoadMore />
    </main>
  );
};

export default BSidesList;
