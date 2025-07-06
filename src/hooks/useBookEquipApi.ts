import { useState } from "react";
import { bookEquipApi } from "../services/bookEquipApi";

const useBookEquipApi = () => {
  const [bookResult, setBookResult] = useState<string>("");

  const bookEquip = (equipId: number, duration: number) => {
    bookEquipApi(equipId, duration).then((data: string) => {
      setBookResult(data);
    });
  };

  return { bookResult, bookEquip };
};

export default useBookEquipApi;
