

const getCartFromLocalStorage=()=>{
    const storedCartString=localStorage.getItem('cart');
    if(storedCartString){
        const storedCart=JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const addItemToCartLocalStorage=id=>{
    const cart=getCartFromLocalStorage();
    // cart.push(id) This is correct for plain js ,this is not react.
    const newCart=[...cart,id];

    // save new cart to the local storage
    saveCartToLocalStorage(newCart)

}


const saveCartToLocalStorage=cart=>{
    const cartStringified=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified)
}

export { getCartFromLocalStorage as getStoreCart , addItemToCartLocalStorage as addToStoreCart}
