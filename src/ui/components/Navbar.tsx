import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../authentication/context/AuthenticationContext";

export const Navbar = () => {
  const navigate = useNavigate();
  const {
    authState: { user, logged },
    logoutUser,
  } = useContext(AuthenticationContext);

  const onLogin = () => {
    navigate("/login", {
      replace: true,
    });
  };

  const onLogout = () => {
    logoutUser();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light custom-navbar shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">
            <img width="40" height="45" src="src/assets/Logo.png" alt="Logo" /> Alarma Salud
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/treatments" className="nav-link">
                  Tratamientos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/MedicalAppointment" className="nav-link">
                  Citas medicas
                </NavLink>
              </li>

              {!logged && (
                <li className="nav-item ms-3">
                  <button className="btn btn-primary" onClick={onLogin}>
                    <i className="bi bi-box-arrow-in-right me-2"></i> Iniciar sesión
                  </button>
                </li>
              )}

              {logged && (
                <>
                  <li className="nav-item ms-3">
                    <span className="nav-link fw-semibold d-flex align-items-center">
                      <i className="bi bi-person-circle me-2"></i> {user.username}
                    </span>
                  </li>
                  <li className="nav-item ms-2">
                    <button className="btn btn-primary" onClick={onLogout}>
                      <i className="bi bi-box-arrow-right me-2"></i> Cerrar sesión
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
