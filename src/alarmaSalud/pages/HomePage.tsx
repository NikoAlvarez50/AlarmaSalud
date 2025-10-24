import { useContext } from "react";
import { TreatmentsContext } from "../../authentication/context/TreatmentsContext";
import { AppointmentsContext } from "../../authentication/context/AppointmentContext";
import { AuthenticationContext } from "../../authentication/context/AuthenticationContext";

export const HomePage = () => {
  const { authState } = useContext(AuthenticationContext);
  const { logged } = authState;
  const { treatments, deleteTreatment } = useContext(TreatmentsContext);
  const { appointments, deleteAppointment } = useContext(AppointmentsContext);

  return (
    <div className="container mt-4">
      <h2 className="bi bi-house-heart text-center text-primary mb-4">
        Bienvenido a Alarma Salud
      </h2>

      {!logged ? (
        <div className="text-center text-muted mt-5">
          <i className="bi bi-info-circle me-2"></i>
          <strong>Inicia sesión para ver tus tratamientos y citas médicas.</strong>
        </div>
      ) : (
        <>
        
          <div className="card mb-4 shadow-sm border-0">
            <div className="card-header text-white text-center" style={{ backgroundColor: "teal" }}>
              <h5 className="mb-0">Tratamientos Activos</h5>
            </div>
            <div className="card-body">
              {treatments.length === 0 ? (
                <p className="text-muted text-center">
                  <i className="bi bi-info-circle me-2"></i>
                  Agrega tus tratamientos para verlos aquí.
                </p>
              ) : (
                <table className="table table-hover align-middle">
                  <thead>
                    <tr>
                      <th>Medicamento</th>
                      <th>Dosis</th>
                      <th>Frecuencia</th>
                      <th>Duración</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {treatments.map((t) => (
                      <tr key={t.id}>
                        <td>{t.name}</td>
                        <td>{t.dose}</td>
                        <td>{t.frequency}</td>
                        <td>{t.duration}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => deleteTreatment(t.id)}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          <div className="card shadow-sm border-0">
            <div className="card-header text-white text-center" style={{ backgroundColor: "teal" }}>
              <h5 className="mb-0">Citas Médicas Pendientes</h5>
            </div>
            <div className="card-body">
              {appointments.length === 0 ? (
                <p className="text-muted text-center">
                  <i className="bi bi-info-circle me-2"></i>
                  Agrega tus citas médicas para verlas aquí.
                </p>
              ) : (
                <table className="table table-hover align-middle">
                  <thead>
                    <tr>
                      <th>Entidad</th>
                      <th>Tipo</th>
                      <th>Fecha</th>
                      <th>Hora</th>
                      <th>Notas</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((a) => (
                      <tr key={a.id}>
                        <td>{a.entity}</td>
                        <td>{a.type}</td>
                        <td>{a.date}</td>
                        <td>{a.time}</td>
                        <td>{a.notes}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => deleteAppointment(a.id)}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
