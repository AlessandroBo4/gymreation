import { useState } from "react";
import type { Equipment } from "../../hooks/useGetEquipsApi";
import "./EquipCard.css";
import BookModal from "../BookModal/BookModal";

const EquipCard = (props: Equipment) => {
  const { id, name, claim, image, pricePerMinute } = props;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const switchModalStatus = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="equip-card" onClick={switchModalStatus}>
        <img src={image} />
        <h3>{name}</h3>
        <p>{claim}</p>
        <p>Price per Minute: {pricePerMinute}</p>
      </div>
      {isModalOpen && <BookModal equipId={id} onClick={switchModalStatus} />}
    </>
  );
};

export default EquipCard;
