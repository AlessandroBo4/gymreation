import { useEffect, useState } from "react";
import { getEquipApi } from "../services/getEquipsApi";

export type Equipment = {
  id: number;
  name: string;
  claim: string;
  icon: string; // L'icona è rappresentata come una stringa SVG
  image: string; // URL
  pricePerMinute: number;
};

const useGetEquipsApi = () => {
  const [equips, setEquips] = useState<Equipment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getEquipApi()
      .then((data: Equipment[]) => {
        setEquips(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { equips, isLoading };
};

export default useGetEquipsApi;
