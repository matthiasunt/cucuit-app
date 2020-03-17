export const addDays = days => date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const isToday = (someDate) => {
  const today = new Date();
  return someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear();
};
