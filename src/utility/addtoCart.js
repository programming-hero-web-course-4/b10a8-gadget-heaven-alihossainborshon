import toast from "react-hot-toast";

const getStoredAddToCart = () => {
  const all = localStorage.getItem('addToCart');
  if(all) {
    const storedList = JSON.parse(all);
    return storedList;
  }
  else {
    return [];
  }
}

const addToStoredAddToCart = (id) => {
  const storedList = getStoredAddToCart();
  if (storedList.includes(id)) {
    toast.error('Already Add To Carted !!!');
  }
  else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('addToCart', storedListStr);
    toast.success('Successfully Add To Cart !!!');
  }
}


export {addToStoredAddToCart, getStoredAddToCart } 