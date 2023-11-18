import React from "react";

const DaySelector = (): React.ReactElement => {
  return (
    <ul className="flex flex-row gap-28 text-xl justify-between pt-14 pb-6 px-8 ">
      <li>MON 30/01</li>
      <li>TUE 31/01</li>
      <li>WED 01/02</li>
      <li>THU 02/02</li>
      <li>FRI 03/02</li>
      <li>SAT 04/02</li>
      <li>SUN 05/02</li>
    </ul>
  );
};

export default DaySelector;
