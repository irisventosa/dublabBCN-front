/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import ProfilesList from "../components/Profiles/ProfilesList";
import ProfilesListMobile from "../components/Profiles/ProfilesListMobile";
import getProfilesOrBsides from "../lib/getShowsOrBsides";
import useDublabApi from "../lib/hooks/useDublabApi";

const ShowProfiles = () => {
  const { getProfiles } = useDublabApi();
  const mobileBreakPoint = 640;
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < mobileBreakPoint;

  const onAirProfiles = getProfilesOrBsides(getProfiles);

  const isAllDataLoaded = onAirProfiles.every((apiProfiles) => apiProfiles);

  if (!isAllDataLoaded) return <div>Loading...</div>;

  return (
    <main className="flex flex-col mt-[219px]">
      <ul className="flex flex-row gap-[376px]">
        <li>
          <span className="h-[22px] px-8 ">COMING UP /// TODAY & TOMORROW</span>
        </li>
      </ul>
      <div className="flex text-[72px] gap-[140px] pt-[62px] ml-8 ">
        <span>AAA</span>
        <h2>SHOWS</h2>
      </div>
      <section>
        {isMobile
          ? onAirProfiles.map((profiles, index) => (
              <ProfilesListMobile
                key={index}
                seasonProfiles={profiles!.results}
              />
            ))
          : onAirProfiles.map((profiles, index) => (
              <ProfilesList
                key={index}
                firstPageOfProfiles={profiles!.results}
              />
            ))}
      </section>
    </main>
  );
};

export default ShowProfiles;
