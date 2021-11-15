import moment from "moment";

const getRuntime = (runtime) => {
  const hours = parseInt(runtime / 60);
  const minutes = runtime - hours * 60;
  const res =
    hours > 0
      ? `${hours} hour(s)`
      : "" + minutes > 0
      ? `${minutes} minute(s)`
      : "";
  return res;
};

const getScheduleTime = (time, language) => {
  let res = time;
  if (time) {
    const timeArr = time.split(":");
    const timeObj = moment()
      .set("hours", timeArr[0])
      .set("minutes", timeArr[1]);
    res =
      language === "English"
        ? timeObj.format("HH:mm")
        : timeObj.format("hh:mmA");
  }
  return res;
};

export { getRuntime, getScheduleTime };
