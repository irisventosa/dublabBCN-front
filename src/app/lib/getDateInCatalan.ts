const date = new Date();
export const year = date.getFullYear();

export const getDayName = () => {
  const weekdays = [
    "Diumenge",
    "Dilluns",
    "Dimarts",
    "Dimecres",
    "Dijous",
    "Divendres",
    "Dissabte",
  ];
  const dayPosition = date.getDay();
  const weekDay = weekdays[dayPosition];

  return weekDay;
};

export const getDayNumberAndMonth = () => {
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

  const monthPosition = date.getMonth();

  const day = date.getDate();
  const month = months[monthPosition];

  const catalanDate = `/ ${day} de ${month} `;

  return catalanDate;
};
