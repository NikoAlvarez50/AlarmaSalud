import { Route, Routes } from "react-router-dom"
import { HomePage } from "../alarmaSalud/pages/HomePage"
import { MedicalAppointmentsPage } from "../alarmaSalud/pages/MedicalAppointmentsPage"
import { TreatmentsPage } from "../alarmaSalud/pages/TreatmentsPage"
import { NotFoundPage } from "../alarmaSalud/pages/NotFoundPage"
import { Navbar } from "../ui/components/Navbar"

export const GeneralRouter = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/medicalAppointment" element={<MedicalAppointmentsPage />} />
                    <Route path="/treatments" element={<TreatmentsPage />} />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </>
    );
};
