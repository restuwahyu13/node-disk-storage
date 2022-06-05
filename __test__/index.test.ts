import { NodeDiskStorage } from '../src/'

describe('Node Disk Storage Group Testing', function () {
	let nds

	beforeAll(async () => {
		nds = new NodeDiskStorage()
	})

	afterAll(async () => {
		await nds.clear()
	})

	it('Should be nds set is success', async (): Promise<any> => {
		expect(nds.set).toBeDefined()
		expect(await nds.set('name', 'john doe')).toBeTruthy()
	})

	it('Should be nds get is success', async (): Promise<any> => {
		expect(nds.get).toBeDefined()
		expect(await nds.get('name')).toEqual('john doe')
	})

	it('Should be nds remove is success', async () => {
		await nds.set('name', 'john doe')
		expect(nds.remove).toBeDefined()
		expect(await nds.remove('name')).toBeTruthy()
	})

	it('Should be nds keys is success', async () => {
		await nds.set('age', '23')
		expect(nds.keys).toBeDefined()
		expect(await nds.keys()).toBeInstanceOf(Array)
		expect(await nds.keys()).toStrictEqual(['name', 'age'])
	})

	it('Should be nds clear is success', async () => {
		expect(nds.clear).toBeDefined()
		expect(await nds.clear()).toBeTruthy()
	})
})
