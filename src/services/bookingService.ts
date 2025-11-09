import axiosInstance from "../api/axiosInstance";

// Save booking request
export const saveBooking = async (bookingData:any) => {
  try {
    const response = await axiosInstance.post("/bookings", bookingData);
    return response.data;
  } catch (error) {
    console.error("Error saving booking:", error);
    throw error;
  }
};
