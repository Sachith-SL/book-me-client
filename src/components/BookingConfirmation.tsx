import "bootstrap/dist/css/bootstrap.min.css";
import "./BookingConfirmation.css";

interface TimeSlot {
  startTime: string;
  endTime: string;
  price: number;
}

interface BookingConfirmationProps {
  date: string;
  slots: TimeSlot[];
  name: string;
  phone: string;
  onConfirm?: () => void;
  onHome?: () => void;
}

function BookingConfirmation({
  date,
  slots,
  name,
  phone,
  onConfirm,
  onHome,
}: BookingConfirmationProps) {
  return (
    <div className="booking-confirmation-page">
      <div className="booking-confirmation-card">
        <h2 className="booking-confirmation-title">✅ Booking Confirmation</h2>

        <div className="booking-details">
          <p>
            <strong>Date:</strong> {date}
          </p>
          <p>
            <strong>Time Slots:</strong>
          </p>
          <ul className="slot-list">
            {slots.map((slot) => (
              <li key={slot.startTime}>
                {slot.startTime} - {slot.endTime} (${slot.price})
              </li>
            ))}
          </ul>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
        </div>

        <div className="button-group mt-3">
          <button className="btn btn-tomato me-2" onClick={onConfirm}>
            Confirm Booking
          </button>
          <button className="btn btn-outline-tomato" onClick={onHome}>
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation;
