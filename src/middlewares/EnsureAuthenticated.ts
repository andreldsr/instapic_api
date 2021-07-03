import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';

function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const token = request.get('x-access-token');

    if (!token) {
        return response.status(401).end()
    }
    try {
        const { id } = verify(token, process.env.JWT_KEY) as { id }
        request.userId = id;
        return next()
    } catch (error) {
        return response.status(401).end()
    }
}

export { ensureAuthenticated }