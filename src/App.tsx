import BookingConfirmation from "./components/BookingConfirmation";
import CustomerInfo from "./components/CustomerInfo";
import NavBar from "./components/NavBar";
import SelectDate from "./components/SelectDate";
import SelectSlots from "./components/SelectSlots";

function App() {
  return (
    <>
      <div className="card">
        <NavBar />
        <SelectDate />
        <hr></hr>
        <SelectSlots />
        <hr></hr>
        <CustomerInfo />
        <hr></hr>
        <BookingConfirmation
          date="15/08/2025"
          slots={[
            { startTime: "09:00 AM", endTime: "10:00 AM", price: 25 },
            { startTime: "10:00 AM", endTime: "11:00 AM", price: 25 },
          ]}
          name="Sachith Nanayakkara"
          phone="0771234567"
        />
      </div>
    </>
  );
}

export default App;
