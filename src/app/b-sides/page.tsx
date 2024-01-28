import { Metadata } from "next";
import ResponsiveProfilesList from "../components/Bsides/ResponsiveProfileList";
import useDublabApi from "../lib/hooks/useDublabApi";

export const metadata: Metadata = {
  title: "b-sides | dublab BCN",
  description:
    "Pàgina on es poden veure els programes que diferents convidats han gravat a la ràdio.",
};

export const revalidate = 7200;

const BsidesList = async () => {
  const { getBsides } = useDublabApi();
  const bsidePage = "1";

  const bSidesList = await getBsides(bsidePage);

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
      <ResponsiveProfilesList podcastsList={bSidesList} />
    </main>
  );
};

export default BsidesList;
