import React from "react";
import img from "../assets/tools.avif";
import img1 from "../assets/security.avif";
import img2 from "../assets/post.avif";
import img3 from "../assets/layer.avif";

const Info = () => {
  return (
    <div className="main py-5 px-5">
      <div className="flex justify-between flex-wrap gap-14 mx-10 py-5 ">
        <div class="card">
          <img src={img} alt="" />
          <h1 className="font-semibold">Millions of business offerings</h1>
          <p>
            Explore products and suppliers for your business from millions of
            offerings worldwide.
          </p>
        </div>
        <div class="card">
          <img src={img1} alt="" />
          <h1 className="font-semibold">Assured quality and transactions</h1>
          <p>
            Ensure production quality from verified suppliers, with your orders
            protected from payment to delivery.
          </p>
        </div>
        <div class="card">
          <img src={img2} alt="" />
          <h1 className="font-semibold">One-stop trading solution</h1>
          <p>
            Order seamlessly from product/supplier search to order management,
            payment, and fulfillment.
          </p>
        </div>
        <div class="card">
          <img src={img3} alt="" />
          <h1 className="font-semibold">Tailored trading experience</h1>
          <p>
            Get curated benefits, such as exclusive discounts, enhanced
            protection, and extra support, to help grow your business every step
            of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
