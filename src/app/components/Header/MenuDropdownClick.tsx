import { DropdownItem } from "@/app/paths";
import Link from "next/link";
import { useState } from "react";

interface DropdownClickProps {
  title: string;
  items: DropdownItem[];
}

const MenuDropdownClick = ({ title, items }: DropdownClickProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <li className="group flex flex-col cursor-pointer pt-[2px] items-start">
      <button className="uppercase" onClick={handleDropdownToggle}>
        {title}
      </button>
      {isDropdownOpen && (
        <div className="mt-5  bg-[#ECECEC] rounded-b-lg pb-2">
          <ul className="flex flex-col gap-4 items-start">
            {items.map(({ label, route }) => (
              <li key={route} className="h-6 py-3 flex items-center text-lg">
                <Link className="mt-[1px]" href={route}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default MenuDropdownClick;
