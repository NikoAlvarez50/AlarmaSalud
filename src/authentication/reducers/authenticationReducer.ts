import { authenticationTypes } from "../../authentication/reducers/action_types/authenticationTypes";
import type { AuthenticationAction, AuthenticationState } from "./authenticationReducersInterfaces";

//action: {type, payload}
//state: {username, email, errorMessage}
export const authenticationReducer = (state: AuthenticationState, action: AuthenticationAction) => {
    switch (action.type) {
        case authenticationTypes.login:
            return {
                ...state,
                logged: true,
                user: action.payload.user,
                errorMessage: null,

            }
        case authenticationTypes.logout:
            return {
                ...state,
                logged: false,
                user: {},
                errorMessage: null,

            }
        case authenticationTypes.error:
            return {
                ...state,
                logged: false,
                errorMessage: action.payload.errorMessage
            }


        default:
            return state;
    }
}
