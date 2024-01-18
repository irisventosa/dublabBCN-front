interface weekDays {
  dayName: string;
  formattedDay: string;
}

const createWeekDays = (): weekDays[] => {
  const today = new Date();
  const startOfWeek = new Date(today);

  const mondayOffset = (today.getDay() + 6) % 7;
  startOfWeek.setDate(today.getDate() - mondayOffset);

  const weekFormatted: weekDays[] = [];
  let nextPrefix = false;

  for (let i = 0; i < 17; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);

    if (date >= today) {
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        day: "2-digit",
        month: "2-digit",
      };

      const formatter = new Intl.DateTimeFormat("en-US", options);

      const formattedDay: string = formatter
        .format(date)
        .replace(/(\d{2})\/(\d{2})/, "$2/$1")
        .replace(/,/g, "");

      const dayName: string = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
      })
        .format(date)
        .toLowerCase();

      if (nextPrefix && dayName !== "sunday") {
        weekFormatted.push({ dayName: "next" + dayName, formattedDay });
      } else {
        weekFormatted.push({ dayName, formattedDay });
      }

      if (dayName === "sunday") {
        nextPrefix = true;
      }
    }
  }

  return weekFormatted;
};

export default createWeekDays;
