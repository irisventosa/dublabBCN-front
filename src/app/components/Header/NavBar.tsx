import { linksEnd, linksStart, programesDropDown } from "@/app/paths";
import Link from "next/link";

const NavBar = (): React.ReactElement => {
  //el margin left con el diseño que esta hecho para resolucion macboock14 se sale del vw cuando la res es menor
  return (
    <nav className=" bg-[#ECECEC] min-w-[719px] h-[42px] flex justify-center rounded-md font-Favorit text-sm font-normal uppercase  ">
      <ul className=" flex items-center flex-row justify-between gap-[49px] ">
        {linksStart.map(({ label, route }) => (
          <li key={route}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
        <li className="group mt-[56px] flex flex-col items-center ">
          Programes
          <ul className="invisible group-hover:visible flex items-center flex-col bg-[#ECECEC] rounded-b-lg pb-2 ">
            {programesDropDown.map(({ label, route }) => (
              <li key={route} className="h-6 px-3 py-3 flex items-center ">
                <Link className="py-4 mt-[1px] " href={route}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        {linksEnd.map(({ label, route }) => (
          <li key={route}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
