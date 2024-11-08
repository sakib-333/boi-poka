export const addToWishList = (wishlist, setWishlist, book) => {
  const flag = wishlist.find((wLbook) => wLbook.bookId === book.bookId);

  if (flag) {
    console.log("Book exist");
  } else {
    setWishlist((currList) => [...currList, book]);
  }
};
