import { Bside, RadioApiShow } from "../types";

const mergeBsidesWithShows = (latestShows: RadioApiShow[], bSides: Bside[]) => {
  const formattedResults = bSides.map((item) => {
    const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return {
      ...item,
      date: formattedDate,
    };
  });

  const latestPodcasts = latestShows.concat(formattedResults);

  latestPodcasts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    return dateB - dateA;
  });

  return latestPodcasts;
};

export default mergeBsidesWithShows;
