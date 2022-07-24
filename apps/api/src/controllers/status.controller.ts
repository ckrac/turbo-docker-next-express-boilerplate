import { Request, Response } from 'express'
import { operations } from '@src/types/schema'

export const getStatus = (
	req: Request,
	res: Response<
		operations['getStatus']['responses']['200']['content']['text/plain'],
		{}
	>
) => res.status(200).send('ok')
