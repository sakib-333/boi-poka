export const sortWishList = (wishlist, setWishlist, type) => {
  if (type === "rating") {
    setWishlist([...wishlist].sort((r1, r2) => r2.rating - r1.rating));
  } else if (type === "number-of-pages") {
    setWishlist([...wishlist].sort((p1, p2) => p2.totalPages - p1.totalPages));
  } else {
    setWishlist(
      [...wishlist].sort((y1, y2) => y2.yearOfPublishing - y1.yearOfPublishing)
    );
  }
};
