import React from 'react'

export default function Restaurant() {
  return (
    <div className="col=sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img src="https://tse2.mm.bing.net/th?id=OIP.UsTdcdwI9KQNitBaLD8rSgHaFx&pid=Api&P=0&h=180;"
        alt="cake"/>
        
        <div className="card-body d-flex flex-colum">
          <h5 className="card-title">Dominos cake</h5>
          <p className="rest_address">123 street,place,city- 000000.state </p>

<div className="rating-outer">
  <div className="rating-inner"></div>
  <span className="number-reviews">(140 reviews)</span>
</div>

        </div>
      </div>
    </div>
  );
}
