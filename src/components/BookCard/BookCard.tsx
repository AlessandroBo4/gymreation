import type { EquipmentBooking } from "../../hooks/useGetBookingsApi";
import useGetEquipsApi from "../../hooks/useGetEquipsApi";
import "./BookCard.css";

const BookCard = (props: EquipmentBooking) => {
  const { id, equipment_id, user_id, start_date, end_date } = props;
  const { equips } = useGetEquipsApi();

  const findEquipName = (bookingEquipId: number) => {
    const equip = equips.find((eq) => eq.id === bookingEquipId);

    return equip?.name;
  };

  const formatDate = (date: string) => {
    const dateObj = new Date(date);

    const pad = (part: number) => part.toString().padStart(2, "0");

    const day = pad(dateObj.getDate());
    const month = pad(dateObj.getMonth());
    const year = pad(dateObj.getFullYear());

    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  };

  return (
    <div className="book-card">
      <h3>{findEquipName(equipment_id)}</h3>
      <p>ID: {id}</p>
      <p>User ID: {user_id}</p>
      <p>Start Date: {formatDate(start_date)}</p>
      <p>End Date: {formatDate(end_date)}</p>
    </div>
  );
};

export default BookCard;
