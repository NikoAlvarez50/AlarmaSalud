import { createContext } from "react";
import type { Treatment } from "../../interfaces/TreatmentInterface";

interface TreatmentsContextProps {
  treatments: Treatment[];
  addTreatment: (treatment: Treatment) => void;
  deleteTreatment: (id: number) => void;
  updateTreatment: (updated: Treatment) => void;
}

export const TreatmentsContext = createContext({} as TreatmentsContextProps);
