import React from "react";

function Shopnow() {
  return (
    <>
      <div className="container d-flex justify-content-between my-5 ">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://sdcdn.io/mac/in/mac_sku_SK6P04_1x1_0.png?width=1080&height=1080"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">Matt Lipstick</h5>
            <p className="card-text">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i> (130)
            </p>
            <a className="btn btn-danger text-white">Shop Now</a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://sdcdn.io/mac/in/mac_sku_M6JC08_1x1_0.png?width=1080&height=1080"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">Fix Flude SPF</h5>
            <p className="card-text">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i> (130)
            </p>
            <a className="btn btn-danger text-white">Shop Now</a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://sdcdn.io/mac/in/mac_sku_SLEH01_1x1_0.png?width=1080&height=1080"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">Macstack Mascara</h5>
            <p className="card-text">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i> (130)
            </p>
            <a className="btn btn-danger text-white">Shop Now</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shopnow;
