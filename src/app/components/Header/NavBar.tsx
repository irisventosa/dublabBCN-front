import { firstNavLabels, lastNavLabels } from "@/app/paths";
import Link from "next/link";
import Programes from "./Programes";
import Sisters from "./Sisters";
import { useSlideOver } from "@/app/contexts/useContexts";

const NavBar = (): React.ReactElement => {
  const { isOpen } = useSlideOver();

  return (
    <>
      {!isOpen && (
        <div className="">
          <nav className="hidden sm:visible bg-[#ECECEC] px-12 h-[42px] sm:flex justify-center rounded-md font-Favorit text-sm font-normal uppercase">
            <ul className="flex items-center flex-row justify-between gap-[80px]">
              {firstNavLabels.map(({ label, route }) => (
                <li key={route} className="pt-[2px]">
                  <Link href={route}>{label}</Link>
                </li>
              ))}
              <Programes />
              <Sisters />
              {lastNavLabels.map(({ label, route }) => (
                <li key={route} className="pt-[2px]">
                  <Link href={route}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
