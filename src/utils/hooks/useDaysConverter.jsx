const useDaysConverter = (date) => {
  const publishedAtDate = new Date(date);
  const todayDate = new Date();
  const totalDays = Math.floor(
    (todayDate - publishedAtDate) / (1000 * 60 * 60 * 24)
  );

  return totalDays;
};

export default useDaysConverter;
