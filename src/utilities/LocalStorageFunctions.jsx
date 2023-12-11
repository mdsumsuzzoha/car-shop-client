const getCartItems = () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
};

const setCartItems = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

export { getCartItems, setCartItems };