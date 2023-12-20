interface TracklistProps {
  tracklist: string;
}

const Tracklist = ({ tracklist }: TracklistProps) => {
  const formattedTracklist: string[] = tracklist.split("\n");
  return (
    <section className="mt-14">
      <h2>Tracklist</h2>
      <hr className="border-black w-[719px] " />
      <ul className="text-[14px] pt-3 ">
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
