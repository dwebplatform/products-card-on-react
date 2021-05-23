import "./styles.css";

import { ProductItem } from "./ProductItem";
export default function App() {
  return (
    <main className="main">
      <div className="product-items">
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return <ProductItem className="product-item" key={index} />;
        })}
      </div>
    </main>
  );
}
