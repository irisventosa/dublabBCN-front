const processSlug = (slug: string) => {
  const showName = slug.replace(/-/g, " ");
  const styledShowName = showName.replace(/\d/g, "");
  const showDateforShowList = slug.match(/\d+/g)?.join(".");
  const showDateforUrl = slug.match(/\d+/g)?.join("-");
  const showDateforCard = slug.match(/\d+/g)?.join("/");

  return {
    showName: styledShowName,
    showDateforLists: showDateforShowList,
    showDateforUrl,
    showDateforCard,
  };
};
export default processSlug;
