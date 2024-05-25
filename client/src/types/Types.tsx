export interface AuthResponse{
    body: {
        user: User;
        acccessToken: string;
        refreshToken: string;
    };
}

export interface AuthResponseError {
    body: {
        error: string;
    };
}