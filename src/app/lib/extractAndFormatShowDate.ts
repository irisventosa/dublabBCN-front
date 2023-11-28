const extractAndFormatShowDate = (timestamp: string) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`; // Formats minutes to include leading zero if necessary

  return formattedTime;
};

export default extractAndFormatShowDate;
