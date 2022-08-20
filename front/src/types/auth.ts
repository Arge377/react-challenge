export type User = {
    username: string
    password: string
}

export type AuthenticatedUser = {
    uid: number, 
    name: string, 
    isAdmin: boolean
}