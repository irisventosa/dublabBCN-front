import { routeModule } from "next/dist/build/templates/app-page";
import Link from "next/link";

const links = [
  { label: "Latest", route: "/home" },
  { label: "Calendari", route: "/calendari" },
  { label: "Arxiu", route: "/arxiu" },
  { label: "Programes", route: "/programes" },
  { label: "Sisters", route: "/sisters" },
  { label: "Merch", route: "/merch" },
  { label: "Info", route: "/info" },
];

const NavBar = (): React.ReactElement => {
  //el margin left con el diseño que esta hecho para resolucion macboock14 se sale del vw cuando la res es menor
  return (
    <nav className=" bg-[#ECECEC] min-w-[719px] h-[42px] ml-[21.74px] flex justify-center rounded-md font-Favorit text-sm font-normal uppercase  ">
      <ul className=" flex items-center flex-row justify-between gap-[49px] ">
        {links.map(({ label, route }) => (
          <li key={route}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
