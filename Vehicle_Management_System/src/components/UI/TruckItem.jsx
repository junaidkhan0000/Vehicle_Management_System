import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/Truck-item.css";

const TruckItem = (props) => {
  const { imgUrl, model, TruckName, automatic, speed, price } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="Truck__item">
        <div className="Truck__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="Truck__item-content mt-4">
          <h4 className="section__title text-center">{TruckName}</h4>
          <h6 className="rent__price text-center mt-">
          ₹{price}.00 <span>/ Day</span>
          </h6>

          <div className="Truck__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-Truck-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {speed}
            </span>
          </div>

          <button className=" w-50 Truck__item-btn Truck__btn-rent">
            <Link to={`/Truck/${TruckName}`}>Rent</Link>
          </button>

          <button className=" w-50 Truck__item-btn Truck__btn-details">
            <Link to={`/Truck/${TruckName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default TruckItem;
