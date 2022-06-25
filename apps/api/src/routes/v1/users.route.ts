import express from 'express'
import usersController from '@src/controllers/users.controller'

const router = express.Router()

router.post('/', usersController.registerUser)
router.get('/', usersController.getUsers)

export default router
