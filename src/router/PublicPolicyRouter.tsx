import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthenticationContext } from "../authentication/context/AuthenticationContext";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PublicPolicyRouter =({children} : any) => {

const {authState: {logged}} = useContext(AuthenticationContext);

return(!logged ? children : <Navigate to ="/" />)


}