import { dublabSisters } from "@/app/paths";
import Link from "next/link";

const Sisters = () => {
  return (
    <li className="group flex flex-col items-center dropdown dropdown-6 cursor-pointer">
      Sisters
      <div className="mt-5 dropdown_menu dropdown_menu--animated dropdown_menu-6 bg-[#ECECEC] rounded-b-lg pb-2">
        <ul className="flex flex-col items-center">
          {dublabSisters.map(({ label, route }) => (
            <li
              key={route}
              className="h-6 px-3 py-3 flex items-center self-center "
            >
              <Link className="py-4 mt-[1px] " href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Sisters;
