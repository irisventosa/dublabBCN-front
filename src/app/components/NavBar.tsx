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
  return (
    <nav className=" bg-[#ECECEC] w-[719px] h-[42px] ml-[101.74px] flex justify-center rounded-md	font-Favorit text-sm font-normal uppercase  ">
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
