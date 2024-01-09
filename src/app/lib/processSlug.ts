import { RadioApiShow } from "../types";

export const formatSlugToGetShowName = (slug: string): string => {
  if (slug.substring(0, 4) === "6474") {
    const showIsNumeric = "6474";
    return showIsNumeric;
  }

  if (slug.substring(0, 12) === "macguffin-20") {
    const showIsNeus = "macGuffin-20";
    return showIsNeus;
  }

  if (slug.substring(0, 14) === "whenplantssing") {
    const showIsPlants = "When...Plants...Sing";
    return showIsPlants;
  }

  if (slug.substring(0, 8) === "5wuguan5") {
    const showIs5wuguan5 = "5wuguan5";
    return showIs5wuguan5;
  }

  const showName = slug.replace(/-/g, " ").replace(/\d/g, "").replace(/'/g, "");
  return showName;
};

export const extractDatesForShowList = (slug: string): string => {
  const dates = slug.match(/\d+/g);
  return dates ? dates.join(".") : "";
};

export const extractDatesForUrl = (slug: string): string => {
  const dates = slug.match(/\d+/g);
  return dates ? dates.join("-") : "";
};

export const extractDatesForCard = (slug: string): string => {
  const dates = slug.match(/\d+/g);
  return dates ? dates.join("/") : "";
};

export const formatAndSortRelatedShowsInfo = (shows: RadioApiShow[]) => {
  const formattedShows = shows.map(({ slug, tags }) => {
    const showName = formatSlugToGetShowName(slug);
    const showDateForShowList = extractDatesForShowList(slug);
    const showDateForUrl = extractDatesForUrl(slug);
    const showDateForList = extractDatesForCard(slug);
    const showTags = tags;

    return {
      showName,
      showDateForShowList,
      showTags,
      showDateForUrl,
      showDateForList,
    };
  });

  formattedShows.sort((a, b) => {
    const dateA = new Date(
      `20${a.showDateForList.slice(-2)}-${a.showDateForList.slice(
        3,
        5
      )}-${a.showDateForList.slice(0, 2)}`
    ).getTime();
    const dateB = new Date(
      `20${b.showDateForList.slice(-2)}-${b.showDateForList.slice(
        3,
        5
      )}-${b.showDateForList.slice(0, 2)}`
    ).getTime();

    return dateB - dateA;
  });

  return formattedShows;
};
