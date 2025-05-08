import React, { useState } from "react";
import "../../styles/find-Truck-form.css";
import { Form, FormGroup } from "reactstrap";

const FindTruckForm = () => {
  const [formData, setFormData] = useState({
    fromAddress: "",
    toAddress: "",
    journeyDate: "",
    journeyTime: "",
    truckType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Form
      className="form"
      action="/truck" // Redirects to /truck after form submission
      method="get" // Use get method for navigation
    >
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input
            type="text"
            placeholder="From address"
            name="fromAddress"
            value={formData.fromAddress}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="text"
            placeholder="To address"
            name="toAddress"
            value={formData.toAddress}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="date"
            placeholder="Journey date"
            name="journeyDate"
            value={formData.journeyDate}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            name="journeyTime"
            value={formData.journeyTime}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__truck-btn" type="submit">
            Find Truck
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindTruckForm;