import React, { FC, useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Character } from 'api/src/entities/Character'

interface Props {
	addCharacter: (character: Omit<Character, 'id'>) => void
}

const AddCharacter: FC<Props> = ({ addCharacter }) => {
	const [openDialog, setOpenDialog] = useState(false)

	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [imageURL, setImageURL] = useState('')

	function handleCloseDialog() {
		setOpenDialog(false)
	}

	function handleAddCharacter() {
		addCharacter({ name, description, image_url: imageURL })
		handleCloseDialog()
	}

	return (
		<>
			<Button variant='outlined' onClick={() => setOpenDialog(true)}>
				Add
			</Button>
			<Dialog fullWidth open={openDialog} onClose={handleCloseDialog}>
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
					<Button onClick={handleCloseDialog}>Cancel</Button>
					<Button variant='contained' onClick={handleAddCharacter}>
						Add
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default AddCharacter
