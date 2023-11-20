const extractUrlForEmbedPlayer = (mixcloudUrl: string) => {
  const showUrl = mixcloudUrl;

  const startIndex = showUrl.indexOf("dublabes");

  if (startIndex !== -1) {
    const pathStartingFromDublabes = showUrl.slice(startIndex);
    return pathStartingFromDublabes;
  } else {
    console.log("The specified string was not found in the URL.");
  }
};

export default extractUrlForEmbedPlayer;
