import React, { FC, useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Character } from 'api/src/entities/Character'

interface Props {
	closeDialog: () => void
	character: Character | null
	editCharacter: (character: Omit<Character, 'id'>) => void
}

const EditCharacter: FC<Props> = ({
	closeDialog,
	character,
	editCharacter,
}) => {
	const [name, setName] = useState(character?.name || '')
	const [description, setDescription] = useState(character?.description || '')
	const [imageURL, setImageURL] = useState(character?.image_url || '')

	function handleEditCharacter() {
		editCharacter({ name, description, image_url: imageURL })
		closeDialog()
	}

	return (
		<Dialog fullWidth open={!!character} onClose={closeDialog}>
			<DialogTitle>Add New Character</DialogTitle>
			<DialogContent>
				<TextField
					margin='dense'
					id='name'
					label='Name'
					placeholder='Add Name'
					type='text'
					fullWidth
					variant='standard'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<TextField
					margin='dense'
					id='description'
					label='Description'
					type='text'
					fullWidth
					variant='standard'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<TextField
					margin='dense'
					id='imageURL'
					label='Image URL'
					type='text'
					fullWidth
					variant='standard'
					value={imageURL}
					onChange={(e) => setImageURL(e.target.value)}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={closeDialog}>Cancel</Button>
				<Button variant='contained' onClick={handleEditCharacter}>
					Edit
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default EditCharacter
