"use client";
import useSWR from "swr";
import LoadMoreBsides from "../components/Bsides/LoadMoreBsides";
import ProfilesList from "../components/Profiles/ProfilesList";
import SearchAndFilters from "../components/SearchAndFilters";
import useDublabApi from "../lib/hooks/useDublabApi";

const BsidesList = () => {
  const { getBsides } = useDublabApi();

  const { data: bSidesList } = useSWR("1", getBsides);

  if (!bSidesList) return <div>Loading...</div>;

  return (
    <main className="flex flex-col mt-[219px] bg-black text-white">
      <ul className="flex flex-row gap-[376px]">
        <li>
          <span className="h-[22px] px-8">COMING UP /// TODAY & TOMORROW</span>
        </li>
        <li>
          <SearchAndFilters />
        </li>
      </ul>
      <div className="flex text-[72px] gap-[140px] pt-[62px] ml-8">
        <span>bbb</span>
        <h2>b-sides</h2>
      </div>
      <ProfilesList firstPageOfProfiles={bSidesList.results} />
      <LoadMoreBsides />
    </main>
  );
};

export default BsidesList;
