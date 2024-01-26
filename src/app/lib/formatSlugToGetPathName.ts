const formatslugToGetPathName = (slug: string) => {
  let formattedSlug = slug.replace(/[0-9]/g, "").replace(/-+$/, "");
  if (formattedSlug === "macguffin") {
    formattedSlug = "macguffin-20";
  }

  return formattedSlug;
};

export default formatslugToGetPathName;
