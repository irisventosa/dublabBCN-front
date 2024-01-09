import { Bside, RadioApiShow } from "../types";

const formatDateToStandard = (dateString: string | Date) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const mergeBsidesWithShows = (latestShows: RadioApiShow[], bSides: Bside[]) => {
  const formattedResults = bSides.map((bSide) => {
    const formattedDate = formatDateToStandard(bSide.date); // Use the function to format date

    return {
      ...bSide,
      date: formattedDate,
    };
  });

  const latestPodcasts = latestShows.concat(formattedResults);

  latestPodcasts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB.getTime() - dateA.getTime();
  });

  return latestPodcasts;
};

export default mergeBsidesWithShows;
