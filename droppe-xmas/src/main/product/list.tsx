import { Product } from "../interface/product.interface";

import { Wrapper } from "./list.styles";

type Props = {
  productList: Product;
  handleAddToCart: (clickedItem: Product) => void;
};

const List: React.FC<Props> = ({ productList, handleAddToCart }) => (
  <Wrapper>
    <h3>
      {"Child No:"} {productList.userId}
    </h3>
    <h4>{"Product Choice"}</h4>
    <ul>
      {productList.products.map((product) => (
        <li key={product.productId}>
          {product.productId} {product.quantity}
        </li>
      ))}
    </ul>
    <button onClick={()=> handleAddToCart(productList)}>Add to cart</button>
  </Wrapper>
);

export default List;