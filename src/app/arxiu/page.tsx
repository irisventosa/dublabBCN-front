import { Metadata } from "next";
import ArchivedResponsiveProfilesList from "../components/Archive/ArchiveResponsiveComponent";
import Spinner from "../components/ui/Spinner";
import useDublabApi from "../lib/hooks/useDublabApi";

export const metadata: Metadata = {
  title: "Arxiu",
  description: "Programes programes que en el passat s'han emès a dublab bcn",
};

const ArchivedProfiles = async () => {
  const { getArchivedProfiles } = useDublabApi();
  const archivePage = "1";

  const archivedProfiles = await getArchivedProfiles(archivePage);

  if (!archivedProfiles) return <Spinner />;

  return (
    <main className="flex flex-col mt-[219px] bg-black text-white ">
      <ul className="flex flex-row gap-[376px]">
        <li>
          <span className="h-[22px] px-8">2016 - 2023</span>
        </li>
      </ul>
      <div className="flex text-[32px] sm:text-[72px] gap-[35px] sm:gap-[140px] pt-[62px] ml-8 ">
        <h2 className="pl-20">Arxiu</h2>
      </div>
      <section>
        <ArchivedResponsiveProfilesList podcastsList={archivedProfiles} />
      </section>
    </main>
  );
};

export default ArchivedProfiles;
