import { useContext, useState } from "react";
import { useForm } from "../../ui/hooks/useForm";
import { TreatmentsContext } from "../../authentication/context/TreatmentsContext";
import { AuthenticationContext } from "../../authentication/context/AuthenticationContext";

const initialForm = {
  name: "",
  dose: "",
  frequency: "",
  duration: "",
};

export const TreatmentsPage = () => {
  const { treatments, addTreatment, deleteTreatment, updateTreatment } = useContext(TreatmentsContext);

  const { authState } = useContext(AuthenticationContext);
  const { logged } = authState;

  const { name, dose, frequency, duration, onInputChange, onResetForm } = useForm(initialForm);
  const [editingId, setEditingId] = useState<number | null>(null);

  const onAddOrUpdateTreatment = () => {
    if (!logged) return;

    const newTreatment = {
      id: editingId ?? Date.now(),
      name,
      dose,
      frequency,
      duration,
    };

    if (editingId) {
      updateTreatment(newTreatment);
      setEditingId(null);
    } else {
      addTreatment(newTreatment);
    }

    onResetForm();
  };


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onEdit = (t: any) => {
    setEditingId(t.id);
    onInputChange({ target: { name: "name", value: t.name } });
    onInputChange({ target: { name: "dose", value: t.dose } });
    onInputChange({ target: { name: "frequency", value: t.frequency } });
    onInputChange({ target: { name: "duration", value: t.duration } });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-primary">Gestión de Tratamientos</h2>

      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-header text-white text-center" style={{ backgroundColor: "teal" }}>
              <h5 className="mb-0">{editingId ? "Editar Tratamiento" : "Registrar Tratamiento"}</h5>
            </div>
            <div className="card-body">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Nombre del medicamento"
                name="name"
                value={name}
                onChange={onInputChange}
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Dosis"
                name="dose"
                value={dose}
                onChange={onInputChange}
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Frecuencia"
                name="frequency"
                value={frequency}
                onChange={onInputChange}
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Duración"
                name="duration"
                value={duration}
                onChange={onInputChange}
              />

              <button
                type="button"
                className="btn w-100 text-white fw-semibold rounded-3"
                style={{ backgroundColor: logged ? "teal" : "gray" }}
                onClick={onAddOrUpdateTreatment}
              >
                <i className="bi bi-plus-circle me-2"></i>
                {editingId ? "Guardar Cambios" : logged ? "Agregar" : "Inicia sesión para agregar"}
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card shadow-sm border-0">
            <div className="card-header text-center fw-semibold bg-light">Tratamientos Actuales</div>
            <div className="card-body">
              {treatments.length === 0 ? (
                <p className="text-muted text-center">No hay tratamientos registrados.</p>
              ) : (
                <table className="table table-hover align-middle">
                  <thead>
                    <tr>
                      <th>Nombre</th>
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
                          <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(t)}>
                            <i className="bi bi-pencil"></i>
                          </button>
                          <button className="btn btn-sm btn-danger" onClick={() => deleteTreatment(t.id)}>
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
