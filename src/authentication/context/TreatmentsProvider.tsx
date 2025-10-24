import { useState } from "react";
import { TreatmentsContext } from "./TreatmentsContext";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TreatmentsProvider = ({ children }: any) => {
  const [treatments, setTreatments] = useState<
    {
      id: number;
      name: string;
      dose: string;
      frequency: string;
      duration: string;
    }[]
  >([]);

  const addTreatment = (treatment: {
    id: number;
    name: string;
    dose: string;
    frequency: string;
    duration: string;
  }) => {
    setTreatments([...treatments, treatment]);
  };

  const deleteTreatment = (id: number) => {
    setTreatments(treatments.filter((t) => t.id !== id));
  };

  const updateTreatment = (updatedTreatment: {
    id: number;
    name: string;
    dose: string;
    frequency: string;
    duration: string;
  }) => {
    setTreatments(
      treatments.map((t) =>
        t.id === updatedTreatment.id ? updatedTreatment : t
      )
    );
  };

  return (
    <TreatmentsContext.Provider
      value={{
        treatments,
        addTreatment,
        deleteTreatment,
        updateTreatment,
      }}
    >
      {children}
    </TreatmentsContext.Provider>
  );
};
