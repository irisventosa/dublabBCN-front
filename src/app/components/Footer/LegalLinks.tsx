import Link from "next/link";
import React from "react";

const legalLinks = [
  {
    label: "Política de privacitat",
    href: "your_privacy_policy_url",
  },
  {
    label: "Política de cookies",
    href: "your_cookie_policy_url",
  },
];

const LegalLinks = (): React.ReactElement => {
  return (
    <div>
      <span>Legal</span>
      <ul className="mt-[26px]">
        {legalLinks.map((link) => (
          <li className="h-8 w-max " key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LegalLinks;
