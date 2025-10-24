export interface User {
    email: string;
    username: string;
    password:string;
}

export interface AuthenticationState{
    logged: boolean;
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    user: User | {};
    errorMessage: string | null | undefined;
}

export interface AuthenticationActionPayload{
    logged?: boolean;
    user?: User;
    errorMessage?: string | null;
}


export interface AuthenticationAction{
    type: string;
    payload: AuthenticationActionPayload 
}