import { lastNavLabels, firstNavLabels } from "@/app/paths";
import Link from "next/link";
import Programes from "./Programes";
import Sisters from "./Sisters";

const NavBar = (): React.ReactElement => {
  //el margin left con el diseño que esta hecho para resolucion macboock14 se sale del vw cuando la res es menor
  return (
    <nav className=" bg-[#ECECEC] min-w-[719px] h-[42px] flex justify-center rounded-md font-Favorit text-sm font-normal uppercase  ">
      <ul className=" flex items-center flex-row justify-between gap-[49px] ">
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
  );
};

export default NavBar;
