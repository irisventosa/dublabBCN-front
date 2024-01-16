interface TracklistProps {
  tracklist: string;
}

const Tracklist = ({ tracklist }: TracklistProps) => {
  if (tracklist.trim() === "") {
    return (
      <section className="mt-14">
        <h2>Tracklist</h2>
        <hr className="border-black w-[719px] " />
        <span className="text-[14px] pt-7">
          El tracklist no esta disponible en aquest moment
        </span>
      </section>
    );
  }

  const formattedTracklist: string[] = tracklist.split("\n");

  return (
    <section className=" mt-7 sm:mt-14">
      <h2>Tracklist</h2>
      <hr className="border-black sm:w-[719px] w-[98%] pr-4 p-1 " />
      <ul className="text-[14px] sm:pt-4 mb-4 ">
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
