export const generateTwoRandomItems = (
  size: number
): {
  imgId: number;
  id: number;
  season: number;
}[][] => {
  const res1 = [];
  const res2 = [];
  let id = 0;
  for (let i = 0; i < size ** 2 / 2; i++) {
    let season: number;
    let imgId: number;
    do {
      season = Math.floor(Math.random() * 7);
      imgId = Math.floor(Math.random() * 30);
    } while (
      res1.filter((item) => item.imgId === imgId && item.season === season)
        .length !== 0
    );
    const item = { imgId, season };
    res1.push({ ...item, id }, { ...item, id: id + 1 });
    id += 2;
  }
  for (let i = 0; i < size ** 2 / 2; i++) {
    let season: number;
    let imgId: number;
    do {
      season = Math.floor(Math.random() * 7);
      imgId = Math.floor(Math.random() * 30);
    } while (
      res2.filter((item) => item.imgId === imgId && item.season === season)
        .length !== 0
    );
    const item = { imgId, season };
    res2.push({ ...item, id }, { ...item, id: id + 1 });
    id += 2;
  }
  return [res1, res2];
};
