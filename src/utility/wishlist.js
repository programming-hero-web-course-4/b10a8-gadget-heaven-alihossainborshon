import toast from "react-hot-toast";

const getStoredWishlist = () => {
  const storedListStr = localStorage.getItem('wishlist');
  if(storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  }
  else {
    return [];
  }
}

const addToStoredWishlist = (id) => {
  const storedList = getStoredWishlist();
  if (storedList.includes(id)) {
    toast.error('Already Added In Wishlist !!!');
  }
  else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('wishlist', storedListStr);
    toast.success('Successfully Add in Wishlist !!!');
  }
}

export {addToStoredWishlist, getStoredWishlist}