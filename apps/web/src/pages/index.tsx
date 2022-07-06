import { useEffect, useState } from 'react'
import { Character } from 'api/src/entities/Character'
import AddCharacter from '../components/AddCharacter'
import EditCharacter from '../components/EditCharacter'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const baseApiURL = 'http://localhost:3000/api/v1'

export default function Home() {
	const [characters, setCharacters] = useState<Character[]>([])
	const [selectedCharacter, setSelectedCharacter] = useState<null | Character>(
		null
	)

	useEffect(() => {
		getCharacters()
	}, [])

	async function getCharacters() {
		const characters = await fetch(`${baseApiURL}/characters`, {
			method: 'GET',
		})
			.then((_res) => _res.json())
			.then((_res) => _res.data as Character[])

		setCharacters(characters)
	}

	async function addCharacter(character: Omit<Character, 'id'>) {
		await fetch(`${baseApiURL}/characters`, {
			method: 'POST',
			headers: {
				Accept: 'application.json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(character),
		})
		getCharacters()
	}

	function handleEditCharacterButton(character: Character) {
		setSelectedCharacter(character)
	}

	async function editCharacter(character: Omit<Character, 'id'>) {
		if (!selectedCharacter?.id) return

		await fetch(`${baseApiURL}/characters/${selectedCharacter.id}`, {
			method: 'PUT',
			headers: {
				Accept: 'application.json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(character),
		})
		getCharacters()
	}

	async function handleDeleteCharacterButton(id: number) {
		await fetch(`${baseApiURL}/characters/${id}`, {
			method: 'DELETE',
		})

		getCharacters()
	}

	return (
		<>
			<Typography variant='h1'>Dragon Ball Characters</Typography>
			<AddCharacter addCharacter={addCharacter} />

			<EditCharacter
				key={selectedCharacter?.id}
				closeDialog={() => setSelectedCharacter(null)}
				character={selectedCharacter}
				editCharacter={editCharacter}
			/>

			<List dense sx={{ width: '100%' }}>
				{characters.map((character) => {
					const { id, image_url, name, description } = character
					return (
						<ListItem
							key={id}
							alignItems='flex-start'
							secondaryAction={
								<>
									<IconButton
										aria-label='delete'
										onClick={() => handleDeleteCharacterButton(id)}
									>
										<DeleteIcon />
									</IconButton>
									<IconButton
										aria-label='edit'
										onClick={() => handleEditCharacterButton(character)}
									>
										<EditIcon />
									</IconButton>
								</>
							}
						>
							<ListItemAvatar>
								<Avatar alt={name} src={image_url} sizes='lg' />
							</ListItemAvatar>
							<ListItemText
								primary={name}
								primaryTypographyProps={{ variant: 'h4' }}
								secondary={description}
								secondaryTypographyProps={{ paragraph: true }}
							/>
						</ListItem>
					)
				})}
			</List>
		</>
	)
}
