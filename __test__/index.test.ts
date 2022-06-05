import { NodeDiskStorage } from '../dist'

describe('Node Disk Storage Group Testing', function () {
	let nds

	beforeAll(async () => {
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

	it('Should be nds get is success', () => {
		setTimeout(async () => {
			expect(nds.get).toBeDefined()
			expect(await nds.get('name')).toEqual('john doe')
		}, 500)
	})

	it('Should be nds keys is success', async () => {
		setTimeout(async () => {
			expect(nds.keys).toBeDefined()
			expect(await nds.keys()).toBeInstanceOf(Array)
			expect(await nds.keys()).toStrictEqual(['name', 'age'])
		}, 500)
	})

	it('Should be nds remove is success', () => {
		setTimeout(async () => {
			expect(nds.remove).toBeDefined()
			expect(await nds.remove('name')).toBeTruthy()
		}, 500)
	})
})
