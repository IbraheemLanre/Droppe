import { useState } from "react";

import { useQuery } from "react-query";
import List from "./main/product/list";
import "./App.css";
import { DataState } from "./main/enum/DataState.enum";
import { Product } from "./main/interface/product.interface";
import { getLists } from "./main/service/droppe.service";

const App = () => {
  const [productCart, setProductCart] = useState([] as Product[]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { data, isLoading, error } = useQuery<Product[]>("products", getLists);
  console.log(data);

  // Returns the number of quantity in for each child
  const getTotalLists = (productList: Product[]) => {
    productList.forEach((product) =>
      product.products.reduce(
        (ack: number, product) => ack + product.quantity,
        0
      )
    );
  };
  const handleAddToCart = (selectedProduct: Product) => null;
  const handledRemoveFromCart = () => null;

  if (isLoading) return <div>{DataState.LOADING}</div>;
  if (error) return <div>{DataState.ERROR}</div>;

  return (
    <>
      <div className="slider"></div>
      <div className="container-cart">
        <button onClick={() => setIsCartOpen(false)}>X</button>
        <div className="forshoppingCartIcon"></div>
      </div>
      <div className="all-carts">
        {data?.map((product) => (
          <div key={product.id}>
            <List productList={product} handleAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
