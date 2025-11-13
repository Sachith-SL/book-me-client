import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SelectSlots.css";
import { useLocation, useNavigate } from "react-router-dom";
import { getTimeSlotsByDate } from "../services/timeSlotService";
import type { TimeSlot } from "../types/TimeSlot";

function SelectSlots() {
  const navigate = useNavigate();
  const location = useLocation();
  const [availableSlots, setSlots] = useState<TimeSlot[]>([]);
  const selectedDate = location.state?.date
    ? new Date(location.state.date).toLocaleDateString("en-CA").split("T")[0]
    : null;

  useEffect(() => {
    if (!selectedDate) return;
    getTimeSlotsByDate(selectedDate).then(setSlots).catch(console.error);
  }, [selectedDate]);

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
        .map((slot) => ({
          id: slot.id,
          date: slot.date,
          startTime: slot.startTime,
          endTime: slot.endTime,
          slotPrice: slot.slotPrice,
          availabilityStatus: slot.availabilityStatus,
          description: slot.description,
        }));

      setSelectedSlots([]); // clear after submit
      navigate("/info", {
        state: { date: selectedDate, slots: selectedSlotDetails },
      });
    } else {
      alert("Please select at least one slot!");
    }
  };

  return (
    <div className="bm-page">
      <div className="bm-card">
        <h2 className="bm-title">🕒 Select Available Slots</h2>
        <p className="selected-date">{selectedDate}</p>

        <form onSubmit={handleSubmit} className="form">
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

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SelectSlots;
