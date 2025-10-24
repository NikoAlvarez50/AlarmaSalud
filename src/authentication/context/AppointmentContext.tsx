import { createContext } from "react";
import type { Appointment } from "../../interfaces/AppointmentInterface";

interface AppointmentsContextProps {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
  deleteAppointment: (id: number) => void;
  updateAppointment: (updated: Appointment) => void;
}

export const AppointmentsContext = createContext({} as AppointmentsContextProps);
