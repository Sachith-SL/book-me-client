import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SelectSlots.css";
import { useLocation } from "react-router-dom";

interface TimeSlot {
  id: number;
  startTime: string;
  endTime: string;
  slotPrice: number;
}

function SelectSlots() {
  const location = useLocation();
  const selectedDate = location.state?.date
    ? new Date(location.state.date)
    : null;

  const availableSlots: TimeSlot[] = [
    { id: 11, startTime: "09:00 AM", endTime: "10:00 AM", slotPrice: 1000 },
    { id: 2, startTime: "10:00 AM", endTime: "11:00 AM", slotPrice: 1000 },
    { id: 13, startTime: "11:00 AM", endTime: "12:00 PM", slotPrice: 1200 },
    { id: 5, startTime: "01:00 PM", endTime: "02:00 PM", slotPrice: 1000 },
    { id: 7, startTime: "02:00 PM", endTime: "03:00 PM", slotPrice: 1200 },
    { id: 8, startTime: "03:00 PM", endTime: "04:00 PM", slotPrice: 1500 },
  ];

  const [selectedSlots, setSelectedSlots] = useState<number[]>([]);

  const toggleSlot = (slotId: number) => {
    const clickedIndex = availableSlots.findIndex((slot) => slot.id === slotId);

    if (selectedSlots.includes(slotId)) {
      // Allow deselect
      setSelectedSlots(selectedSlots.filter((id) => id !== slotId));
    } else {
      if (selectedSlots.length === 0) {
        setSelectedSlots([slotId]);
      } else {
        const selectedIndexes = selectedSlots.map((id) =>
          availableSlots.findIndex((slot) => slot.id === id)
        );
        const minIndex = Math.min(...selectedIndexes);
        const maxIndex = Math.max(...selectedIndexes);

        if (clickedIndex === minIndex - 1 || clickedIndex === maxIndex + 1) {
          // Allow only if adjacent in the array order
          setSelectedSlots([...selectedSlots, slotId]);
        } else {
          alert("You can only select adjacent slots.");
        }
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSlots.length > 0) {
      const selectedSlotDetails = availableSlots
        .filter((slot) => selectedSlots.includes(slot.id))
        .map((slot) => `${slot.startTime} - ${slot.endTime}`)
        .join(", ");

      alert(`Selected slots: ${selectedSlotDetails}`);
      setSelectedSlots([]); // clear after submit
    } else {
      alert("Please select at least one slot!");
    }
  };

  return (
    <div className="select-slots-page">
      <div className="select-slots-card">
        <h2 className="select-slots-title">🕒 Select Available Slots</h2>
        <p className="selected-date">
          Date:{" "}
          {selectedDate instanceof Date
            ? selectedDate.toLocaleDateString()
            : selectedDate}
        </p>

        <form onSubmit={handleSubmit} className="select-slots-form">
          <ul className="slots-list">
            {availableSlots.map((slot) => (
              <li
                key={slot.id}
                className={`slot-item ${
                  selectedSlots.includes(slot.id) ? "selected" : ""
                }`}
                onClick={() => toggleSlot(slot.id)}
              >
                {slot.startTime} - {slot.endTime} | Rs. {slot.slotPrice}
              </li>
            ))}
          </ul>

          <button type="submit" className="btn select-slots-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SelectSlots;
