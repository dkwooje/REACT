
import { useState } from "react";

export default function App() {
  const [price, setPrice] = useState(100);

    function clickHandler(){
      setPrice = price * 0.75;
      console.log(price);
    }
    return (
        <div>
            <p data-testid="price">${price}</p>
            <button onClick={clickHandler}>Apply Discount</button>
        </div>
    )
}
