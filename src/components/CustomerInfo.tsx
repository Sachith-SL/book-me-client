import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomerInfo.css";

function CustomerInfo() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      alert("Please fill in all fields");
      return;
    }

    alert(`Name: ${name}\nPhone: ${phone}`);
  };

  return (
    <div className="customer-info-page">
      <div className="customer-info-card">
        <h2 className="customer-info-title">📋 Customer Information</h2>

        <form onSubmit={handleSubmit} className="customer-info-form">
          <div className="mb-3 w-100">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control customer-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3 w-100">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control customer-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone"
            />
          </div>

          <button type="submit" className="btn customer-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomerInfo;
