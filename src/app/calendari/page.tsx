import DayOfTheMonth from "../components/Date/DayOfTheMonth";
import DaySelector from "../components/Date/DaySelector";
import ScheduledShowsList from "../components/Schedule/ScheduledShowsList";

const Calendari = (): React.ReactElement => {
  return (
    <main className="flex flex-col">
      <section className="mt-[219px] ">
        <ul className="flex flex-row gap-[376px]">
          <li>
            <span className="h-[22px] px-8 ">
              COMING UP /// TODAY & TOMORROW
            </span>
          </li>
          <li>
            <ul className="flex flex-row gap-[182px] ">
              <li className="tracking-[0.3rem]">Search</li>
              <li>Filters</li>
            </ul>
          </li>
        </ul>
        <DayOfTheMonth />
        <DaySelector />
        <ScheduledShowsList />
      </section>
    </main>
  );
};

export default Calendari;
