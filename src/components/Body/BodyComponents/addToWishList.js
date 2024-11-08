import { toast } from "react-toastify";

export const addToWishList = (wishlist, setWishlist, book) => {
  const flag = wishlist.find((wLbook) => wLbook.bookId === book.bookId);

  if (flag) {
    toast.error("Book already exist!");
  } else {
    setWishlist((currList) => [...currList, book]);
    toast.success("Book added!");
  }
};
