export interface TimeSlot {
  id: number;
  date?: Date;
  startTime: string;
  endTime: string;
  slotPrice: number;
  availabilityStatus: string;
  description?: string;
}
