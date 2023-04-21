export const correctionTag = (str: string) =>
  str
    .split("-")
    .map((item) => item[0].toUpperCase() + item.substring(1))
    .join(" ");

// str[0].toUpperCase() + str.replaceAll("-", " ").substring(1);

export const correctionName = (str: string) =>
  str[0].toUpperCase() + str.replaceAll("-", " ").substring(1);
