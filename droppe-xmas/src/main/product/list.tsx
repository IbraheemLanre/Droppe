import { Product } from "../interface/product.interface";

import './list.css';


type Props = {
  productList: Product;
  handleAddToCart: (selectedProduct: Product) => void;
};

const List = ({ productList, handleAddToCart }: Props) => (
  
  <div className="singleCart">
    <h3 className="childIdentity">
      {"Child Identity:"} {productList.userId}
    </h3>
    <h5 className="product-title">{"Product Choice"}</h5>
    <div className="productChoice">
      {productList.products.map((product) => (
        <p key={product.productId}>
          {"productId:"} {product.productId} {"quantity:"} {product.quantity}
        </p>
      ))}
    </div>
    <button onClick={()=> handleAddToCart(productList)}>Add to cart</button>
  </div>
);

export default List;