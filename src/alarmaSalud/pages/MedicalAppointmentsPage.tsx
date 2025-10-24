import { useContext, useState } from "react";
import { useForm } from "../../ui/hooks/useForm";
import { AppointmentsContext } from "../../authentication/context/AppointmentContext";
import { AuthenticationContext } from "../../authentication/context/AuthenticationContext";

const initialForm = {
  entity: "",
  type: "",
  date: "",
  time: "",
  notes: "",
};

export const MedicalAppointmentsPage = () => {
  const { appointments, addAppointment, deleteAppointment, updateAppointment } = useContext(AppointmentsContext);

  const { authState } = useContext(AuthenticationContext);
  const { logged } = authState;

  const { entity, type, date, time, notes, onInputChange, onResetForm } = useForm(initialForm);
  const [editingId, setEditingId] = useState<number | null>(null);

  const onAddOrUpdateAppointment = () => {
    if (!logged) return;

    const newAppointment = {
      id: editingId ?? Date.now(),
      entity,
      type,
      date,
      time,
      notes,
    };

    if (editingId) {
      updateAppointment(newAppointment);
      setEditingId(null);
    } else {
      addAppointment(newAppointment);
    }

    onResetForm();
  };


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onEdit = (a: any) => {
    setEditingId(a.id);
    onInputChange({ target: { name: "entity", value: a.entity } });
    onInputChange({ target: { name: "type", value: a.type } });
    onInputChange({ target: { name: "date", value: a.date } });
    onInputChange({ target: { name: "time", value: a.time } });
    onInputChange({ target: { name: "notes", value: a.notes } });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-primary">Gestión de Citas Médicas</h2>

      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-header text-white text-center" style={{ backgroundColor: "teal" }}>
              <h5 className="mb-0">{editingId ? "Editar Cita" : "Registrar Cita"}</h5>
            </div>
            <div className="card-body">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Entidad Hospitalaria"
                name="entity"
                value={entity}
                onChange={onInputChange}
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Tipo de cita"
                name="type"
                value={type}
                onChange={onInputChange}
              />
              <input type="date" className="form-control mb-3" name="date" value={date} onChange={onInputChange} />
              <input type="time" className="form-control mb-3" name="time" value={time} onChange={onInputChange} />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Notas (opcional)"
                name="notes"
                value={notes}
                onChange={onInputChange}
              />

              <button
                type="button"
                className="btn w-100 text-white fw-semibold rounded-3"
                style={{ backgroundColor: logged ? "teal" : "gray" }}
                onClick={onAddOrUpdateAppointment}
              >
                <i className="bi bi-plus-circle me-2"></i>
                {editingId ? "Guardar Cambios" : logged ? "Agregar" : "Inicia sesión para agregar"}
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card shadow-sm border-0">
            <div className="card-header text-center fw-semibold bg-light">Citas Pendientes</div>
            <div className="card-body">
              {appointments.length === 0 ? (
                <p className="text-muted text-center">No hay citas registradas.</p>
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
                          <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(a)}>
                            <i className="bi bi-pencil"></i>
                          </button>
                          <button className="btn btn-sm btn-danger" onClick={() => deleteAppointment(a.id)}>
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
        </div>
      </div>
    </div>
  );
};
