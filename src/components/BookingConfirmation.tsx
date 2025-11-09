import "bootstrap/dist/css/bootstrap.min.css";
import "./BookingConfirmation.css";
import { useLocation, useNavigate } from "react-router-dom";
import type { TimeSlot } from "../types/TimeSlot";
import { useState } from "react";
import { saveBooking } from "../services/bookingService";

function BookingConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();

  const { date, slots, name, phone } = location.state || {
    date: "",
    slots: [],
    name: "",
    phone: "",
  };

  const totalPrice = slots.reduce(
    (sum: number, slot: TimeSlot) => sum + slot.slotPrice,
    0
  );

  const slotIds = slots.map((slot: any) => slot.id);

  // state variable to hold the selected sport
  const [sportType, setSportType] = useState("");

  // handle checkbox change
  const handleCheckboxChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    setSportType(value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Check if sport type is selected
    if (!sportType) {
      alert("Please select a sport type before booking!");
      return; // stop submission
    }

    const bookingData = {
      date: date,
      slotIds: slotIds,
      sportType: sportType.toUpperCase(), // match backend enum (CRICKET/FUTSAL)
      name: name,
      phone: phone,
    };
    try {
      const result = await saveBooking(bookingData);
      console.log("Booking successful:", result);
      alert("Booking successful!");
      navigate("/");
    } catch (err) {
      console.error("Booking failed:", err);
      alert("Booking failed! Please try again.");
    }
  };

  return (
    <div className="booking-confirmation-page">
      <div className="booking-confirmation-card">
        <h2 className="booking-confirmation-title">✅ Booking Confirmation</h2>

        <div className="booking-details">
          <p>
            <strong>Date:</strong> {date}
          </p>
          <div>
            <ul className="slots-list">
              {slots.map((slot: TimeSlot) => (
                <li key={slot.id}>
                  {slot.startTime} - {slot.endTime} (Rs{" "}
                  {slot.slotPrice}.00)
                </li>
              ))}
            </ul>
          </div>
          <p>
            <strong>Total:</strong> Rs {totalPrice}.00
          </p>

          <div className="btn btn-outline-tomato">
            <h3>Select Sport Type</h3>

            <label>
              <input
                type="checkbox"
                value="Cricket"
                checked={sportType === "Cricket"}
                onChange={handleCheckboxChange}
              />
              Cricket
            </label>

            <br />

            <label>
              <input
                type="checkbox"
                value="Futsal"
                checked={sportType === "Futsal"}
                onChange={handleCheckboxChange}
              />
              Futsal
            </label>

            <p>Selected Sport: {sportType || "None"}</p>
          </div>

          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
        </div>

        <div className="button-group">
          <form onSubmit={handleSubmit}>
            <button className="btn btn-outline-tomato" type="submit">
              Book Now
            </button>
          </form>

          <button
            type="button" // important to avoid submitting the form
            className="btn btn-outline-tomato"
            onClick={() => navigate("/")}
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation;
