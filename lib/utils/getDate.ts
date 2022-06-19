const getDate = (date: string) => {
  return new Date(
    `${date.substring(0, 4)}-${date.substring(4, 6)}-${date.substring(6, 8)}T${date.substring(9, 11)}:${date.substring(
      11,
      13,
    )}:${date.substring(13, 15)}${date.substring(15)}`,
  );
};

export default getDate;
