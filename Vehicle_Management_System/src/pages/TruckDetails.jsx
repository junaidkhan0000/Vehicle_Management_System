
import React, { useEffect } from "react";
import TruckData from "../assets/data/TruckData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import PaymentMethod from "../components/UI/PaymentMethod";

const TruckDetails = () => {
  const { slug } = useParams();
  const singleTruckItem = TruckData.find((item) => item.TruckName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleTruckItem]);

  return (
    <Helmet title={singleTruckItem.TruckName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleTruckItem.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="Truck__info">
                <h2 className="section__title">{singleTruckItem.TruckName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                  ₹{singleTruckItem.price}.00 / Day
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    ({singleTruckItem.rating} ratings)
                  </span>
                </div>

                <div
                  className="section__description"
                  dangerouslySetInnerHTML={{ __html: singleTruckItem.description }}
                ></div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleTruckItem.automatic}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleTruckItem.speed}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleTruckItem.gps}
                  </span>

                  
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleTruckItem.brand}
                  </span>
                </div>
              </div>
            </Col>

           
            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <PaymentMethod />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default TruckDetails;
