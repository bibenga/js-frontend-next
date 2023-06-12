import { NextApiResponse, NextApiRequest } from 'next'

export type User = {
    id: number
    name: string
    authenticated: boolean
    moment: Date
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<User>) {
    const user: User = {
        id: 1,
        name: "Obi-Wan Kenobi",
        authenticated: true,
        moment: new Date(),
    }
    console.log("[API] /api/users/current", user)
    return res.status(200).json(user)
}