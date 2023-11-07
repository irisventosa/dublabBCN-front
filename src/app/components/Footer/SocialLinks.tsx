import Link from "next/link";
import React from "react";

const SocialLinks = (): React.ReactElement => {
  return (
    <div>
      <span>Social</span>
      <ul className="mt-[26px]">
        <li>
          <Link href={"https://www.instagram.com/dublab.es/"}>Instagram</Link>
        </li>
        <li>
          <Link href={"https://twitter.com/dublabes"}>Twitter</Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
