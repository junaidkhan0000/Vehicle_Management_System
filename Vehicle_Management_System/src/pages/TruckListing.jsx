import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import TruckItem from "../components/UI/TruckItem";
import TruckData from "../assets/data/TruckData";

const TruckListing = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assuming the user is logged in initially

  const handleLogout = () => {
    setIsLoggedIn(false);
    window.location.href = '/'; // Redirect to home page
  };

  return (
    <Helmet title="Truck">
      <CommonSection title="Truck Listing" />

      <section>
        <Container>
          <Row>
            {TruckData.map((item) => (
              <TruckItem item={item} key={item.id} />
            ))}
            <Col className="text-center mt-4">
              <Button color="danger" onClick={handleLogout}>
                Logout
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default TruckListing;
