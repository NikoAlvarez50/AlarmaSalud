import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AlarmaSaludApp } from "./AlarmaSaludApp";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AuthenticationProvider } from "./authentication/context/AuthenticationProvider";
import { TreatmentsProvider } from "./authentication/context/TreatmentsProvider";
import { AppointmentsProvider } from "./authentication/context/AppointmentProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthenticationProvider>
        <TreatmentsProvider>
          <AppointmentsProvider>
            <AlarmaSaludApp />
          </AppointmentsProvider>
        </TreatmentsProvider>
      </AuthenticationProvider>
    </BrowserRouter>
  </StrictMode>
);
