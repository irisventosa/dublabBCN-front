import fakeShows from "../../../fakeData";
import ShowCard from "../components/LatestShows/ShowCard";
import { getLatestShowsData } from "../lib/radioDataFetching";

const Latest = async () => {
  return (
    <main className="flex flex-col">
      <ul className="grid grid-cols-4 gap-x-3 gap-y-14">
        {fakeShows.map((show, listPosition) => (
          <li className="">
            <ShowCard show={show} listPosition={listPosition} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Latest;
