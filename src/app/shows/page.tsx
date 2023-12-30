/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { usePathname } from "next/navigation";
import ProfilesList from "../components/Profiles/ProfilesList";
import SearchAndFilters from "../components/SearchAndFilters";
import useGetShowsOrBsides from "../lib/getShowsOrBsides";
import useDublabApi from "../lib/hooks/useDublabApi";

const ShowProfiles = () => {
  const { getProfiles } = useDublabApi();
  const { getBsides } = useDublabApi();
  const pathname = usePathname();

  const fetchedContent = pathname === "/shows" ? getProfiles : getBsides;
  const apiContent = useGetShowsOrBsides(fetchedContent);

  const isAllDataLoaded = apiContent.every((apiProfiles) => apiProfiles);

  if (!isAllDataLoaded) return <div>Loading...</div>;

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
        <h2>SHOWS</h2>
      </div>
      {apiContent.map((profiles, index) => (
        <ProfilesList key={index} firstPageOfProfiles={profiles!.results} />
      ))}
    </main>
  );
};

export default ShowProfiles;
