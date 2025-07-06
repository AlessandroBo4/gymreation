import EquipCard from "../components/EquipCard/EquipCard";
import useGetEquipApi, { type Equipment } from "../hooks/useGetEquipsApi";

const Home = () => {
  const { equips, isLoading } = useGetEquipApi();

  return (
    <div className="main-container">
      <h1>GYM REACTION</h1>
      <h2>Equipment List</h2>

      {isLoading ? (
        <div>Loading list...</div>
      ) : (
        equips.map((equip: Equipment) => (
          <EquipCard
            key={equip.id}
            id={equip.id}
            name={equip.name}
            claim={equip.claim}
            icon={equip.icon}
            image={equip.image}
            pricePerMinute={equip.pricePerMinute}
          />
        ))
      )}
    </div>
  );
};

export default Home;
