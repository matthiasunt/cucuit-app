export const getTimeSlots = (date: Date) => {
  const timeSlots = [];
  let currentHour = new Date().getHours();
  const currentMinutes = new Date().getMinutes();
  let offset = currentMinutes > 30 ? 1 : 0;
  if (isToday(date)) {
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

export const isToday = (someDate) => {
  const today = new Date();
  return someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear();
};
