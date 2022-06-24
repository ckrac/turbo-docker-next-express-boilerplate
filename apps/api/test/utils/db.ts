import { repository } from '../../src/dataSource'

export const clearAllRepository = async () => {
	const repositoryKeys = Object.keys(repository) as Array<
		keyof typeof repository
	>

	return Promise.all(repositoryKeys.map((key) => repository[key].clear()))
}
