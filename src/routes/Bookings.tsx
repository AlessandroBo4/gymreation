import BookCard from "../components/BookCard/BookCard";
import useGetBookingsApi, {
  type EquipmentBooking,
} from "../hooks/useGetBookingsApi";

const Bookings = () => {
  const { bookings, isLoading } = useGetBookingsApi();

  return (
    <>
      <h2>Bookings List</h2>
      {isLoading ? (
        <div>Loading list...</div>
      ) : (
        bookings.map((booking: EquipmentBooking) => (
          <BookCard
            id={booking.id}
            equipment_id={booking.equipment_id}
            user_id={booking.user_id}
            start_date={booking.start_date}
            end_date={booking.end_date}
          />
        ))
      )}
    </>
  );
};

export default Bookings;
