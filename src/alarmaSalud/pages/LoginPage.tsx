import { useContext } from "react";
import { useForm } from "../../ui/hooks/useForm";
import { AuthenticationContext } from "../../authentication/context/AuthenticationContext";
import { useNavigate } from "react-router-dom";

interface LoginForm {
  email: string;
  username: string;
  password: string;
}

const initialForm = {
  email: "",
  username: "",
  password: "",
} as LoginForm;

export const LoginPage = () => {
  const { email, username, password, onInputChange } = useForm(initialForm);
  const { loginUser } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const onAuthenticate = () => {
    loginUser({
      email,
      username,
      password,
    });

    navigate("/", {
      replace: true,
    });
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundColor: "lightcyan",
      }}
    >
      <div className="card shadow-lg border-0 rounded-4" style={{ width: "400px" }}>
        <div
          className="card-header text-center text-white"
          style={{ backgroundColor: "teal" }}
        >
          <h4 className="mb-0">Iniciar Sesión</h4>
        </div>
        <div className="card-body p-4">
          <form onSubmit={onAuthenticate}>
            <div className="mb-3">
              <label className="form-label fw-semibold">
                <i className="bi bi-envelope me-2"></i>Email
              </label>
              <input
                type="email"
                className="form-control rounded-3"
                placeholder="correo@ejemplo.com"
                name="email"
                value={email}
                onChange={onInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">
                <i className="bi bi-person-circle me-2"></i>Usuario
              </label>
              <input
                type="text"
                className="form-control rounded-3"
                placeholder="Nombre de usuario"
                name="username"
                value={username}
                onChange={onInputChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">
                <i className="bi bi-lock-fill me-2"></i>Contraseña
              </label>
              <input
                type="password"
                className="form-control rounded-3"
                placeholder="********"
                name="password"
                value={password}
                onChange={onInputChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn w-100 text-white fw-semibold rounded-3"
              style={{ backgroundColor: "teal" }}
            >
              <i className="bi bi-box-arrow-in-right me-2"></i> Entrar
            </button>
          </form>
        </div>
        <div
          className="card-footer text-center text-muted small"
          style={{ backgroundColor: "mintcream" }}
        >
          <i className="bi bi-shield-check me-1"></i>
          Sistema de Gestión de Medicamentos
        </div>
      </div>
    </div>
  );
};
