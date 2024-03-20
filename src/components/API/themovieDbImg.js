const getUrlImg = (imgName) => {
  if (!imgName) {
    return "Photo not found";
  }
  return `https://image.tmdb.org/t/p/w500/${imgName}`;
};

export default getUrlImg;
