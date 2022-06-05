import { Request, Response } from 'express'

export const getStatus = (req: Request, res: Response) =>
	res.status(200).json({ version: '2' })
