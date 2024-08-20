export const formatNumber = (number: number | string): string => {
  let result = "";
  let c = 0;
  number = number + "";
  for (let i = number.length - 1; i >= 0; i--) {
    if (c % 3 === 0) {
      result = " " + result;
    }
    result = number[i] + result;
    c += 1;
  }
  return result;
};
