import { useState } from "react";
import "./BookModal.css";
import useBookEquipApi from "../../hooks/useBookEquipApi";

type modalProps = {
  equipId: number;
  onClick: () => void;
};

const BookModal = (props: modalProps) => {
  const { equipId, onClick } = props;

  const [duration, setDuration] = useState<number>(5);
  const [showBookResult, setShowBookResult] = useState<boolean>(false);
  const { bookResult, bookEquip } = useBookEquipApi();

  const changeDuration = (change: number) => {
    setDuration(duration + change);
  };

  const handleBooking = () => {
    bookEquip(equipId, duration);
    setShowBookResult(true);
    setTimeout(() => {
      onClick();
    }, 1500);
  };

  return (
    <div className="modal-background">
      <div className="book-modal">
        <div className="close-modal-btn" onClick={onClick}>
          X
        </div>
        <h2>Book Equipment</h2>
        <p>Select duration</p>
        <div className="duration-controls">
          <button
            onClick={() => {
              changeDuration(-5);
            }}
            disabled={duration < 5}
          >
            -
          </button>
          {duration} min
          <button
            onClick={() => {
              changeDuration(+5);
            }}
            disabled={duration > 15}
          >
            +
          </button>
        </div>

        {showBookResult ? (
          <div>{bookResult}</div>
        ) : (
          <button className="book-btn" type="submit" onClick={handleBooking}>
            Book
          </button>
        )}
      </div>
    </div>
  );
};

export default BookModal;
