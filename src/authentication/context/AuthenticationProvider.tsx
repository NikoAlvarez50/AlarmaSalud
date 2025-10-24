import { useReducer } from "react"
import { AuthenticationContext } from "./AuthenticationContext"
import { authenticationReducer } from "../../authentication/reducers/authenticationReducer"
import type { AuthenticationState } from "../../authentication/reducers/authenticationReducersInterfaces"
import { useAuthenticate } from "../../authentication/hooks/useAuthenticate"

const initialState = {
  logged: false,
  user: {},
  errorMessage: '',
} as AuthenticationState

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthenticationProvider = ({ children }: any) => {

  const [authState, dispatch] = useReducer(authenticationReducer, initialState)


  const { loginUser, logoutUser } = useAuthenticate(dispatch);


  return (
    <AuthenticationContext.Provider value={{ authState, loginUser, logoutUser }}>
      {children}
    </AuthenticationContext.Provider>
  )
}