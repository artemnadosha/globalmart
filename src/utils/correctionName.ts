export const correctionName = (str: string) =>
  str[0].toUpperCase() + str.replace("-", " ").substring(1);
