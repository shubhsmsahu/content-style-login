import React from "react";

const PostSection = () => {
  return (
    <div className="From my-5 mx-5">
      <div className="container">
        <h1 className="about">Post</h1>
        <div className="row py-5 justify-content-center">
          <div className="col-lg-3">
            <div className="card">
              <img
                src="https://source.unsplash.com/1920x1080/?nature,adventurous"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Quia voluptatem et non ea maxime. Et veritatis aut labore
                  sapiente nostrum vero. Praesentium ut reiciendis neque sit.
                </p>
                <i className="fa fa-eye" aria-hidden="true">
                  <strong> 340</strong>
                </i>
                <i className="fa fa-thumbs-up" aria-hidden="true">
                  <strong> 500</strong>
                </i>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <img
                src="https://source.unsplash.com/1920x1080/?nature,beloved"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Quia voluptatem et non ea maxime. Et veritatis aut labore
                  sapiente nostrum vero. Praesentium ut reiciendis neque sit.
                </p>
                <i className="fa fa-eye" aria-hidden="true">
                  <strong> 340</strong>
                </i>
                <i className="fa fa-thumbs-up" aria-hidden="true">
                  <strong> 500</strong>
                </i>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <img
                src="https://source.unsplash.com/1920x1080/?nature,awesome"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Quia voluptatem et non ea maxime. Et veritatis aut labore
                  sapiente nostrum vero. Praesentium ut reiciendis neque sit.
                </p>
                <i className="fa fa-eye" aria-hidden="true">
                  <strong> 340</strong>
                </i>
                <i className="fa fa-thumbs-up" aria-hidden="true">
                  <strong> 500</strong>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSection;
