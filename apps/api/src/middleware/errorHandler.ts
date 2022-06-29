import { NextFunction, Request, Response } from 'express'
import { HttpError } from 'restify-errors'

export const errorHandler = (
	err: HttpError,
	req: Request,
	res: Response,
	next: NextFunction // Required to include argument for middleware to fire
) => {
	console.log({ error: err.toJSON() })
	res.status(err.statusCode).json({ error: err.toJSON() })
}
