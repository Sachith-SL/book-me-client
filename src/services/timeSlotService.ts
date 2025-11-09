import axiosInstance from "../api/axiosInstance";
import type { TimeSlot } from "../types/TimeSlot";

export const getTimeSlotsByDate = async (date: String): Promise<TimeSlot[]> => {
  const response = await axiosInstance.get(`/timeslots/date`, {
    params: { date },
  });
  return response.data;
};
