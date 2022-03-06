interface Client {
    email: string;
    token: string;
    refreshToken: string;
    createdAt: Date;
    expiresIn: number;
}