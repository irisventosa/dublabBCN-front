import { routeModule } from "next/dist/build/templates/app-page";
import Link from "next/link";

const links = [
  { label: "Calendari", route: "/calendari" },
  { label: "Arxiu", route: "/arxiu" },
  { label: "Programes", route: "/programes" },
  { label: "Sisters", route: "/sisters" },
  { label: "Info", route: "/info" },
];

const NavBar = (): React.ReactElement => {
  return (
    <nav>
      <ul>
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
