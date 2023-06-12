import { NextApiResponse, NextApiRequest } from 'next'

export type LoginRequst = {
    username: string
    password: boolean
}

export type LoginResponse = {
    authenticated: boolean
}

export type LoginError = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<LoginResponse | LoginError>) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }

    const body = req.body
    console.log("[API] /api/auth/login >", body)
    const respData: LoginResponse = {
        authenticated: true,
    }
    console.log("[API] /api/auth/login", respData)
    return res.status(200).json(respData)
}