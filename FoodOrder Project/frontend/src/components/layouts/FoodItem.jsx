import React from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";

export default function FoodItem() {
  return (
    
      <div className="col-sm-12 col-md-6 col-lg-3my-3">
<div className="card p-3 rounded">
    <img src="https://tse3.mm.bing.net/th?id=OIP.XzUnt5Afjbz_9Bmkng2IMQHaEK&pid=Api&P=0&h=180" alt="pizza" className="card-img-top mx-auto" />
<div className="card-body d-flex flex-column">
    <h5 className="card-title">Veg Loaded Pizza</h5>
    <P className="fooditem-des">
        Crunchy and Chessy veg loaded piza served
    </P>
    <p className="card-text">
    <FaIndianRupeeSign /> 180
    <br />

    </p>
<button className="btn btn-primary d-inline ml-4"> Add to Cart</button>
<P> Status:<span>
    {10 > 5 ? "In Stock" : "Out of Stock"}
    </span>

</P>
</div>

</div>

      </div>
    
  );
}
