import { NextFunction, Request, Response } from "express";
import { ErrorType } from "../../domain";

export class SecretValidator {

    static async validate(req: Request, res: Response, next: NextFunction) {
        try {

            const secret = req.headers.authorization as string;

            if (!secret) {
                return res.status(401).json({ error: ErrorType.Unauthorized })
            }

            if (secret !== process.env.SECRET) {
                return res.status(401).json({ error: ErrorType.Unauthorized })
            }

            next();
        }
        catch (error) {
            return res.status(401).json({ error: ErrorType.Unauthorized })
        }
    }
}