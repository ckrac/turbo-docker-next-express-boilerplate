import express from 'express'
import charactersController from '@src/controllers/characters.controller'

const router = express.Router()

router.post('/', charactersController.registerCharacter)
router.get('/', charactersController.getCharacters)
router.put('/:id', charactersController.updateCharacter)
router.delete('/:id', charactersController.deleteCharacter)

export default router
