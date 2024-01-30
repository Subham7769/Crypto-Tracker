export const getDate = (date) => {
    const day = new Date(date);
    const string = day.getDate() + "/" + (day.getMonth() + 1);
    // months start with 0 so +1
    return string;
  };