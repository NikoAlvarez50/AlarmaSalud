import { authenticationTypes } from "../../authentication/reducers/action_types/authenticationTypes"
import type { User } from "../../authentication/reducers/authenticationReducersInterfaces";

interface LoginUserParams{
    email: string;
    username: string;
    password: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useAuthenticate = (dispatch : any) =>{
    const loginUser = ({email , username, password}: LoginUserParams) =>{
        const user: User ={
            email,
            username,
            password,
        };

        dispatch({ type: authenticationTypes.login, payload: {user}});
    };

const logoutUser = () =>{
    dispatch({type: authenticationTypes.logout})
}

 return{loginUser, logoutUser};
    
}