import React from "react";

const TextBackgorund = (): React.ReactElement => {
  const generateTextLines = (xAxis: number, yAxis: number) => {
    const textLines = [];
    const numOfLines = 100;

    for (let i = 0; i < numOfLines; i++) {
      textLines.push(
        <text
          key={i}
          fill="#E2E2E2"
          x={xAxis}
          y={yAxis * (i + 1)}
          className="uppercase font-Favorit text-sm font-light "
        >
          an art of sound in time that expresses ideas and emotions in
          significant forms through the elements of rhythm, melody, harmony, and
          color. an art of sound in time that expresses ideas and emotions in
          significant forms through the elements of rhythm, melody, harmony, and
          color.
        </text>
      );
    }

    return textLines;
  };

  return (
    <div className="z-1">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute mt-[-20px] pl-[5px]"
      >
        {generateTextLines(-123, 40)}
      </svg>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute mt-[-40px]"
      >
        {generateTextLines(152, 80)}
      </svg>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute mt-[0]"
      >
        {generateTextLines(152, 80)}
      </svg>
    </div>
  );
};

export default TextBackgorund;
