import { NodeDiskStorage } from '../dist'

describe('Node Disk Storage Group Testing', function () {
	let nds

	beforeAll(() => {
		nds = new NodeDiskStorage()
	})

	afterAll(async () => {
		await nds.clear()
	})

	it('Should be nds set is success', async (): Promise<void> => {
		expect(nds.set).toBeDefined()
		expect(await nds.set('name', 'john doe')).toBeTruthy()
		expect(await nds.set('age', 23)).toBeTruthy()
	})

	it('Should be nds get is success', async (): Promise<void> => {
		expect(nds.get).toBeDefined()
		expect(await nds.get('name')).toEqual('john doe')
	})

	it('Should be nds keys is success', async (): Promise<void> => {
		expect(nds.keys).toBeDefined()
		expect(await nds.keys()).toBeInstanceOf(Array)
		expect((await nds.keys()).length).toBe(2)
	})

	it('Should be nds remove is success', async (): Promise<void> => {
		expect(nds.remove).toBeDefined()
		expect(await nds.remove('name')).toBeTruthy()
	})
})
