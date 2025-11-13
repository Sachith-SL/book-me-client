import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomerInfo.css";
import { useLocation, useNavigate } from "react-router-dom";
import type { TimeSlot } from "../types/TimeSlot";

function CustomerInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedDate = location.state?.date ? location.state.date : null;
  const selectedSlots = location.state?.slots ? location.state.slots : null;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      alert("Please fill in all fields");
      return;
    }
    navigate("/confirm", {
      state: {
        date: selectedDate,
        slots: selectedSlots,
        name: name,
        phone: phone,
      },
    });

  };

  return (
    <div className="bm-page">
      <div className="bm-card">
        <h2 className="bm-title">📋 Customer Information</h2>
        <p className="selected-date">
          Date:{" "}
          {selectedDate instanceof Date
            ? selectedDate.toLocaleDateString()
            : selectedDate}
        </p>
        <ul className="slot-list">
          {selectedSlots.map((slot:TimeSlot) => (
            <li key={slot.id}>
              {slot.id}-{slot.startTime} - {slot.endTime} (Rs {slot.slotPrice}.00)
            </li>
          ))}
        </ul>

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

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomerInfo;
