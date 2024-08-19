export const formatTime = (timer: number) =>
  `${String(Math.floor(timer / 60)).padStart(2, "0")}:${String(
    timer - Math.floor(timer / 60) * 60
  ).padStart(2, "0")}`;
