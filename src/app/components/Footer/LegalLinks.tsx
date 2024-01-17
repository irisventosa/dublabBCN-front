import { legalLinks } from "@/app/paths";
import Link from "next/link";
import React from "react";

const LegalLinks = (): React.ReactElement => {
  return (
    <div>
      <span>Legal</span>
      <ul className="mt-[26px]">
        {legalLinks.map((link) => (
          <li className="h-8 w-max " key={link.label}>
            <Link href={link.route}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LegalLinks;
