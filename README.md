# book-me-client
Book Me Client

src/
│
├── api/
│   ├── axiosInstance.ts           # Reusable Axios configuration (base URL, interceptors, headers)
│
├── services/
│   ├── timeSlotService.ts         # Handles all /api/timeslots related requests
│   ├── bookingService.ts          # (future) handles booking API requests
│   ├── customerService.ts         # (future) handles customer API requests
│
├── components/
│   ├── TimeSlot/
│   │   ├── TimeSlotList.tsx       # Component for displaying available time slots
│   │   ├── TimeSlotItem.tsx       # (optional) Child component for single slot
│   │   └── index.ts               # Barrel export
│   ├── Booking/
│   │   ├── BookingForm.tsx
│   │   ├── BookingSummary.tsx
│   │   └── index.ts
│
├── pages/
│   ├── TimeSlotPage.tsx           # Page where user views time slots
│   ├── BookingPage.tsx
│
├── hooks/
│   ├── useFetchTimeSlots.ts       # (optional) Custom hook to encapsulate fetch logic
│
├── types/
│   ├── TimeSlot.ts                # TypeScript interfaces & types for TimeSlot
│   ├── Booking.ts
│
├── utils/
│   ├── dateUtils.ts               # Helper functions for formatting dates/times
│   ├── priceUtils.ts
│
├── App.tsx
├── main.tsx
└── index.css
