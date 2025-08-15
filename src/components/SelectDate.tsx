import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SelectDate.css";

function SelectDate() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate) {
      alert(`You selected: ${selectedDate.toDateString()}`);
    } else {
      alert("Please select a date!");
    }
  };

  return (
    <div className="select-date-page">
      <div className="select-date-card">
        <h2 className="select-date-title">📅 Select a Date</h2>

        <form onSubmit={handleSubmit} className="select-date-form">
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Click to select a date"
            className="form-control select-date-input"
          />

          <button type="submit" className="btn btn-primary select-date-button">
            Submit
          </button>
        </form>

        {selectedDate && (
          <p className="select-date-result">
            Selected Date: <span>{selectedDate.toDateString()}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default SelectDate;
