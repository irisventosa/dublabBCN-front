"use client";

import useSWR from "swr";
import SearchAndFilters from "../components/SearchAndFilters";
import LoadMore from "../components/ShowsProfiles/LoadMoreProfiles";
import ProfilesList from "../components/ShowsProfiles/ProfilesList";
import useDublabApi from "../lib/hooks/useDublabApi";

const ShowProfilesList = () => {
  const { getProfiles } = useDublabApi();

  const { data: apiProfilesList } = useSWR("1", getProfiles);

  if (!apiProfilesList) return <div>Loading...</div>;

  return (
    <main className="flex flex-col mt-[219px]">
      <ul className="flex flex-row gap-[376px]">
        <li>
          <span className="h-[22px] px-8 ">COMING UP /// TODAY & TOMORROW</span>
        </li>
        <li>
          <SearchAndFilters />
        </li>
      </ul>
      <div className="flex text-[72px] gap-[140px] pt-[62px] ml-8 ">
        <span>AAA</span>
        <h2> SHOWS</h2>
      </div>
      <ProfilesList firstPageOfProfiles={apiProfilesList.results} />
      <LoadMore />
    </main>
  );
};

export default ShowProfilesList;
