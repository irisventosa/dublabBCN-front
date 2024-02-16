import { usePathname } from "next/navigation";
import checkPathName from "../lib/checkPathName";

interface TracklistProps {
  tracklist: string;
}

const Tracklist = ({ tracklist }: TracklistProps) => {
  const pathname = usePathname();

  const pageIsBlack = checkPathName(pathname);
  const lineColor = pageIsBlack ? "white" : "black";

  if (tracklist.trim() === "") {
    return (
      <section className="mt-14">
        <h2>Tracklist</h2>
        <hr
          className={`border-${lineColor} sm:w-[719px] w-[98%] pr-4 p-[2px] `}
        />
        <span className="text-[14px]">
          El tracklist no esta disponible en aquest moment
        </span>
      </section>
    );
  }

  const formattedTracklist: string[] = tracklist.split("\n");

  return (
    <section className=" w-fit lg:min-w-[1000px] mt-7 sm:mt-14">
      <h2>Tracklist</h2>
      <hr className={`border-${lineColor} sm:w-[719px] w-[98%] pr-4 p-1 `} />
      <ul className="text-[14px]  mb-4 ">
        {formattedTracklist.map((track, index) => (
          <li key={index}>{`${(index + 1)
            .toString()
            .padStart(3, "0")} ${track}`}</li>
        ))}
      </ul>
    </section>
  );
};

export default Tracklist;
