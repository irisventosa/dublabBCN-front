const getAirtimeWeeks = (): { dayName: string; formattedDay: string }[] => {
  const today = new Date();
  const startOfWeek = new Date(today);

  const mondayOffset = (today.getDay() + 6) % 7;
  startOfWeek.setDate(today.getDate() - mondayOffset);

  const weekFormatted: { dayName: string; formattedDay: string }[] = [];

  for (let i = 0; i < 30; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);

    if (date >= today) {
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        day: "2-digit",
        month: "2-digit",
      };

      const formatter = new Intl.DateTimeFormat("en-US", options);

      const formattedDay: string = formatter.format(date).replace(/,/g, " ");

      const dayName: string = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
      })
        .format(date)
        .toLowerCase();

      weekFormatted.push({ dayName, formattedDay });
    }
  }

  return weekFormatted;
};

export default getAirtimeWeeks;
