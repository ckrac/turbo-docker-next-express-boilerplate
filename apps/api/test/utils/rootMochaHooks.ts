import dataSource from '../../src/dataSource'
import { clearAllRepository } from './db'

export const mochaHooks = (): Mocha.RootHookObject => {
	return {
		beforeAll: () => dataSource.initialize(),
		afterAll: async () => {
			await clearAllRepository()
			dataSource.destroy()
		},
	}
}
