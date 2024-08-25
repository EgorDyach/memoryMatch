export const getTimeBetween = (
  time1: string | Date | number,
  time2: string | number | Date,
  seconds?: boolean
): number =>
  Math.abs(new Date(time1).getTime() - new Date(time2).getTime()) /
  (seconds ? 1000 : 1);
