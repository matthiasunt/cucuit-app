export const getTimeSlots = (day: string) => {
  const timeSlots = [];
  let currentHour = new Date().getHours();
  const currentMinutes = new Date().getMinutes();
  let offset = currentMinutes > 30 ? 1 : 0;
  if (day !== 'today') {
    currentHour = 0;
    offset = 0;
  }
  for (let i = currentHour + offset; i < 24; i++) {
    const slot = Math.floor(i) + ':';
    if (i !== currentHour + offset || i === 0) {
      timeSlots.push(slot + '00');
    }
    timeSlots.push(slot + '30');
  }
  return timeSlots;
};

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
