const formatBsideDate = (bsideDate: string | Date) => {
  const dateString = bsideDate;
  const date = new Date(dateString);
  const formattedDate = `${date.getUTCDate()}/${
    date.getUTCMonth() + 1
  }/${date.getUTCFullYear()}`;

  return formattedDate;
};

export default formatBsideDate;
