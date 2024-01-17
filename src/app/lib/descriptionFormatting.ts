const descriptionFormatting = (description: string) => {
  if (description.length > 500) {
    return description.slice(0, 150) + "...";
  } else if (description.length > 60) {
    const halfDescription = Math.ceil(description.length / 2);
    const selectedDescription = description.slice(0, halfDescription) + "...";
    return selectedDescription;
  }

  return description;
};

export default descriptionFormatting;
