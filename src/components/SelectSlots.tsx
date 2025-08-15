import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SelectSlots.css";

function SelectSlots() {
  const availableSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
  ];

  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);

  const toggleSlot = (slot: string) => {
    const slotIndex = availableSlots.indexOf(slot);

    if (selectedSlots.length === 0) {
      // First slot selection
      setSelectedSlots([slot]);
    } else {
      const selectedIndexes = selectedSlots.map((s) =>
        availableSlots.indexOf(s)
      );
      const minIndex = Math.min(...selectedIndexes);
      const maxIndex = Math.max(...selectedIndexes);

      if (
        slotIndex === minIndex - 1 || // Adjacent before
        slotIndex === maxIndex + 1 // Adjacent after
      ) {
        setSelectedSlots([...selectedSlots, slot]);
      } else if (selectedSlots.includes(slot)) {
        // Allow deselect
        setSelectedSlots(selectedSlots.filter((s) => s !== slot));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSlots.length > 0) {
      alert(`Selected slots: ${selectedSlots.join(", ")}`);
    } else {
      alert("Please select at least one adjacent slot!");
    }
  };

  return (
    <div className="select-slots-page">
      <div className="select-slots-card">
        <h2 className="select-slots-title">🕒 Select Available Slots</h2>

        <form onSubmit={handleSubmit} className="select-slots-form">
          <ul className="slots-list">
            {availableSlots.map((slot) => (
              <li
                key={slot}
                className={`slot-item ${
                  selectedSlots.includes(slot) ? "selected" : ""
                }`}
                onClick={() => toggleSlot(slot)}
              >
                {slot}
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
