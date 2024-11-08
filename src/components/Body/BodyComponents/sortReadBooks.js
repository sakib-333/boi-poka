export const sortReadBooks = (listedBooks, setListedBooks, type) => {
  if (type === "rating") {
    setListedBooks([...listedBooks].sort((r1, r2) => r2.rating - r1.rating));
  } else if (type === "number-of-pages") {
    setListedBooks(
      [...listedBooks].sort((p1, p2) => p2.totalPages - p1.totalPages)
    );
  } else {
    setListedBooks(
      [...listedBooks].sort(
        (y1, y2) => y2.yearOfPublishing - y1.yearOfPublishing
      )
    );
  }
};
