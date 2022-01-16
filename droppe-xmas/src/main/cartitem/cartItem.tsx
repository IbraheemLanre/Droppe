import { Product } from "../interface/product.interface";

type Props = {
  item: Product;
  addToCart: (selectedItem: Product[] | any) => void;
};

const CartItem = ({ item, addToCart }: Props) => {
  return (
    <>
      <div className="info">
        <h3>
          This is the cart item for child{" "}
          {item.products.map((child) => child.productId)}
        </h3>
        {/*change to total product*/}
        <p>Total Product: {item.products.map((child) => child.quantity)}</p>
      </div>
      <div className="btn">
        <button
          onClick={() =>
            addToCart(item.products.map((child) => child.productId))
          }
        >
          +
        </button>
      </div>
    </>
  );
};

export default CartItem;
