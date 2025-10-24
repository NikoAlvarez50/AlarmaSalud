import { useState } from "react";
import { AppointmentsContext } from "./AppointmentContext";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AppointmentsProvider = ({ children }: any) => {
  const [appointments, setAppointments] = useState<
    {
      id: number;
      entity: string;
      type: string;
      date: string;
      time: string;
      notes: string;
    }[]
  >([]);

  const addAppointment = (appointment: {
    id: number;
    entity: string;
    type: string;
    date: string;
    time: string;
    notes: string;
  }) => {
    setAppointments([...appointments, appointment]);
  };

  const deleteAppointment = (id: number) => {
    setAppointments(appointments.filter((a) => a.id !== id));
  };

  const updateAppointment = (updatedAppointment: {
    id: number;
    entity: string;
    type: string;
    date: string;
    time: string;
    notes: string;
  }) => {
    setAppointments(
      appointments.map((a) =>
        a.id === updatedAppointment.id ? updatedAppointment : a
      )
    );
  };

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        addAppointment,
        deleteAppointment,
        updateAppointment,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
};
