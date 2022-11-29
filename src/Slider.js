import React from "react";

const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images-static.nykaa.com/uploads/f9b97797-a307-4c00-ae97-2f56f1544697.jpg?tr=w-1200,cm-pad_resize"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images-static.nykaa.com/uploads/fbdcb683-da05-4c01-9627-536a89ccbfa7.gif?tr=w-1200,cm-pad_resize"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images-static.nykaa.com/uploads/7b262068-d779-4e93-a529-10305bcdcaa1.gif?tr=w-1200,cm-pad_resize"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
