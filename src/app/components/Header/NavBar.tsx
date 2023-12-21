import { firstNavLabels, lastNavLabels } from "@/app/paths";
import Link from "next/link";
import Programes from "./Programes";
import Sisters from "./Sisters";
import { useSlideOver } from "@/app/contexts/SlideOverContext";

const NavBar = (): React.ReactElement => {
  const { isOpen } = useSlideOver();

  return (
    <>
      {!isOpen && (
        <nav className="bg-[#ECECEC] min-w-[719px] h-[42px] flex justify-center rounded-md font-Favorit text-sm font-normal uppercase">
          <ul className="flex items-center flex-row justify-between gap-[49px]">
            {firstNavLabels.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
            <Programes />
            <Sisters />
            {lastNavLabels.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;
