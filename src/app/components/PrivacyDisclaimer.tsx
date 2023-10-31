"use client";

import { useState } from "react";
import Button from "./Button";

const PrivacyDisclaimer = (): React.ReactElement => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className={` ${isHidden ? "hidden" : ""}`}>
      <article className="w-[718px] h-[100px] flex flex-row gap-32 bg-[#ECECEC] z-10 absolute right-0 bottom-0 p-8 items-center rounded-md mr-8">
        <p className="text-xs w-[420px] h-[68px] ">
          YOUR PRIVACY MATTERS. We use cookies technologies to make your visit
          on our website as pleasant as possible. All data collected on your
          browser is anonymous. TERMS AND CONDITIONS
        </p>
        <Button
          className="uppercase bg-black text-white text-sm w-[181px] h-[42px] rounded-md"
          actionOnClick={toggleHidden}
        >
          Sounds good
        </Button>
      </article>
    </div>
  );
};

export default PrivacyDisclaimer;
