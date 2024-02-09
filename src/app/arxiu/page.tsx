import { Metadata } from "next";
import useDublabApi from "../lib/hooks/useDublabApi";
import getProfilesOrBsides from "../lib/getShowsOrBsides";
import Spinner from "../components/ui/Spinner";
import ResponsiveProfilesList from "../components/Bsides/ResponsiveProfileList";

export const metadata: Metadata = {
  title: "Arxiu",
  description: "Programes programes que en el passat s'han emès a dublab bcn",
};

const ArchivedProfiles = async () => {
  const { getArchivedProfiles } = useDublabApi();

  const onAirProfiles = await getProfilesOrBsides(getArchivedProfiles);

  const isAllDataLoaded = onAirProfiles.every((apiProfiles) => apiProfiles);

  if (!isAllDataLoaded) return <Spinner />;

  return (
    <main className="flex flex-col mt-[219px] ">
      <ul className="flex flex-row gap-[376px]">
        <li>
          <span className="h-[22px] px-8 ">COMING UP /// TODAY & TOMORROW</span>
        </li>
      </ul>
      <div className="flex text-[32px] sm:text-[72px] gap-[35px] sm:gap-[140px] pt-[62px] ml-8 ">
        <span>AAA</span>
        <h2>Arxiu</h2>
      </div>
      <section>
        {onAirProfiles.map((profiles, index) => (
          <ResponsiveProfilesList key={index} podcastsList={profiles} />
        ))}
      </section>
    </main>
  );
};

export default ArchivedProfiles;
