import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../alarmaSalud/pages/LoginPage"
import { GeneralRouter } from "./GeneralRouter"
import { PublicPolicyRouter} from "./PublicPolicyRouter"

export const AppRouter = () => {
  return (
    <>
        <Routes>
          <Route
          path="/login"
          element={
            <PublicPolicyRouter>
              <LoginPage/>
            </PublicPolicyRouter>
          }
        />
         <Route path="*" element = {<GeneralRouter/>} />
        </Routes>
    </>
  );
};
