import he from "he";

const formatAirtimeShowName = (airtimeShowName: string) => {
  if (airtimeShowName === "When...Plants...Sing") {
    const showIsPlants = "whenplantssing";
    return showIsPlants;
  }

  if (airtimeShowName === "@cero.en.conducta") {
    const showIsPlants = "cero-en-conducta";
    return showIsPlants;
  }

  if (airtimeShowName === "house-of-spunk-") {
    const showIsSpunk = "house-of-spunk";
    return showIsSpunk;
  }

  if (airtimeShowName === "SoWhat") {
    const showIsJazz = "so-what";
    return showIsJazz;
  }

  const decodedName = he.decode(airtimeShowName);

  const decodeAndFixShowName = decodedName
    .toLowerCase()
    .normalize("NFD") // Decompose characters (remove diacritical marks)
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters except spaces and hyphens
    .replace(/\./g, "") // Remove periods
    .normalize(); // Compose characters back

  return decodeAndFixShowName;
};

export default formatAirtimeShowName;
