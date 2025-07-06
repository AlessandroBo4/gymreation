import { useEffect, useState } from "react";
import { getBookingsApi } from "../services/getBookings";

export type EquipmentBooking = {
  id: number;
  equipment_id: number;
  user_id: string;
  start_date: string; // ISO 8601 format
  end_date: string; // ISO 8601 format
};

const useGetBookingsApi = () => {
  const [bookings, setBookings] = useState<EquipmentBooking[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getBookingsApi()
      .then((data: EquipmentBooking[]) => {
        setBookings(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { bookings, isLoading };
};

export default useGetBookingsApi;
