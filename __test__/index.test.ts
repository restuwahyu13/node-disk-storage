import { NodeDiskStorage } from '../dist'

describe('Node Disk Storage Group Testing', function () {
	let nds

	beforeAll(() => {
		nds = new NodeDiskStorage()
	})

	afterAll(async () => {
		await nds.clear()
	})

	it('Should be nds get is failed', async (): Promise<void> => {
		expect(nds.get).toBeDefined()
		expect(await nds.get('name')).toBeUndefined()
	})

	it('Should be nds keys is failed', async (): Promise<void> => {
		expect(nds.keys).toBeDefined()
		expect(await nds.key('name')).toBeUndefined()
		expect(await nds.key('age')).toBeUndefined()
	})

	it('Should be nds all keys is failed', async (): Promise<void> => {
		expect(nds.keys).toBeDefined()
		expect(await nds.keys()).toBeInstanceOf(Array)
		expect((await nds.keys()).length).toBe(0)
	})

	it('Should be nds remove is failed', async (): Promise<void> => {
		expect(nds.remove).toBeDefined()
		expect(await nds.remove('name')).toBeFalsy()
		expect(await nds.remove('age')).toBeFalsy()
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

	it('Should be nds key is success', async (): Promise<void> => {
		expect(nds.get).toBeDefined()
		expect(await nds.key('name')).toEqual('name')
		expect(await nds.key('age')).toEqual('age')
	})

	it('Should be nds all keys is success', async (): Promise<void> => {
		expect(nds.keys).toBeDefined()
		expect(await nds.keys()).toBeInstanceOf(Array)
		expect((await nds.keys()).length).toBe(2)
	})

	it('Should be nds remove is success', async (): Promise<void> => {
		expect(nds.remove).toBeDefined()
		expect(await nds.remove('name')).toBeTruthy()
		expect(await nds.remove('age')).toBeTruthy()
	})
})
