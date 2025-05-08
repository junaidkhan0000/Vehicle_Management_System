import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";

import driverImg from "../../assets/all-images/slider-img/BharatBenz.png";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          

          <Col lg="5" md="5" sm="30">
  <p className="white-text text-center larger-text">
    The BharatBenz brand offers a range of ultra-modern trucks in all weight categories from 10 to 55 tones. In addition to our portfolio of trucks. These vehicles are specifically tailored for the Indian market.
    BharatBenz trucks are sold and serviced through a pan-Indian network of more than 300 touch points which is continuously expanded further also beyond the tier-2 and tier-3 cities.<br></br><br></br>
    We at BharatBenz are committed to play an important role in India’s economic advancement through commercial mobility solutions that will accelerate the progress of business in India.
    The new markets and opportunities that we create are the result of the value we place in excellence. Our constant endeavour is to provide only the best in Truck-o-nomics. We believe in value-led globally proven technology. As a technology leader we further stand for India’s safest and most reliable trucks.
  </p>
</Col>

        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
