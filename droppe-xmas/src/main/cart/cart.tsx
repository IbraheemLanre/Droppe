import CartItem from "../cartitem/cartItem";

import { Product } from "../interface/product.interface";

type Props = {
  cartItems: Product[];
  addToCart: (selectedItem: Product[]) => void;
};

const Cart = ({ cartItems, addToCart }: Props) => {
   return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>You've an empty cart</p> : null}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Cart;
