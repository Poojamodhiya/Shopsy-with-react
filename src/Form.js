import React from "react";

const Form = () => {
  return (
    <>
      <div style={{ backgroundColor: "rgb(243,243,243)" }}>
        <div className="container d-flex justify-content-around py-5">
          <img
            src="https://images-static.nykaa.com/media/catalog/product/8/0/806360051948-1new.jpg"
            className="w-25"
          />
          <form>
            <h1 className="text-dark">Login Form</h1>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <a className="btn btn-danger text-white">Submit</a>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
