import { createContext } from "react";
import type { AuthenticationState } from "../../authentication/reducers/authenticationReducersInterfaces";

interface AuthenticationContextState {
    authState: AuthenticationState,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    loginUser: any;
    logoutUser: () => void;
}

export const AuthenticationContext = createContext({} as AuthenticationContextState);

