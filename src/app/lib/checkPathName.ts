const checkPathName = (pathname: string) => {
  const backgroundColorForBSides = "/b-sides";
  const backgroundColorForArxiu = "/arxiu";
  const pageIsBlack =
    pathname.includes(backgroundColorForBSides) ||
    pathname.includes(backgroundColorForArxiu);

  return pageIsBlack;
};

export default checkPathName;
