export const date = new Date();
export const year = date.getFullYear();
export const currentHour = date.getHours();

export const getDayNameInCatalan = (currentDate: Date) => {
  const weekdaysInCatalan = [
    "Diumenge",
    "Dilluns",
    "Dimarts",
    "Dimecres",
    "Dijous",
    "Divendres",
    "Dissabte",
  ];

  const dayPosition = currentDate.getDay();
  const weekDay = weekdaysInCatalan[dayPosition];

  return weekDay;
};

export const getDayNumberAndMonth = (currentDate: Date) => {
  const months = [
    "Gener",
    "Febrer",
    "Març",
    "Abril",
    "Maig",
    "Juny",
    "Juliol",
    "Agost",
    "Setembre",
    "Octubre",
    "Novembre",
    "Desembre",
  ];

  const monthPosition = currentDate.getMonth();

  const day = currentDate.getDate();
  const month = months[monthPosition];

  const catalanDate = `/ ${day} de ${month} `;

  return catalanDate;
};

export const getDayName = (currentDate: Date) => {
  const weekdays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const dayPosition = currentDate.getDay();
  const weekDay = weekdays[dayPosition];

  return weekDay;
};
