import { NodeDiskStorage } from '../dist'

describe('Node Disk Storage Group Testing', function () {
	let nds

	beforeAll(() => {
		nds = new NodeDiskStorage()
	})

	afterAll(async () => {
		await nds.clear()
	})

	it('Should be nds cleanup is failed', async (): Promise<void> => {
		expect(nds.clear).toBeDefined()
		expect(await nds.clear()).toBeFalsy()
	})

	it('Should be nds get is failed', async (): Promise<void> => {
		expect(nds.get).toBeDefined()
		expect(await nds.get('string')).toBeFalsy()
		expect(await nds.get('number')).toBeFalsy()
		expect(await nds.get('boolean')).toBeFalsy()
		expect(await nds.get('array')).toBeFalsy()
		expect(await nds.get('object')).toBeFalsy()
	})

	it('Should be nds key is failed', async (): Promise<void> => {
		expect(nds.key).toBeDefined()
		expect(await nds.key('string')).toBeFalsy()
		expect(await nds.key('number')).toBeFalsy()
		expect(await nds.key('boolean')).toBeFalsy()
		expect(await nds.key('array')).toBeFalsy()
		expect(await nds.key('object')).toBeFalsy()
	})

	it('Should be nds all keys is failed', async (): Promise<void> => {
		expect(nds.keys).toBeDefined()
		expect(await nds.keys()).toBeInstanceOf(Array)
		expect((await nds.keys()).length).toBe(0)
	})

	it('Should be nds remove is failed', async (): Promise<void> => {
		expect(nds.remove).toBeDefined()
		expect(await nds.remove('string')).toBeFalsy()
		expect(await nds.remove('number')).toBeFalsy()
		expect(await nds.remove('boolean')).toBeFalsy()
		expect(await nds.remove('array')).toBeFalsy()
		expect(await nds.remove('object')).toBeFalsy()
	})

	it('Should be nds set is success', async (): Promise<void> => {
		expect(nds.set).toBeDefined()
		expect(await nds.set('string', 'john doe')).toBeTruthy()
		expect(await nds.set('number', 23)).toBeTruthy()
		expect(await nds.set('boolean', true)).toBeTruthy()
		expect(await nds.set('array'), [1,2,3,4,5])).toBeTruthy()
		expect(await nds.set('object'), {name: "john doe"})).toBeTruthy()
	})

	it('Should be nds get is success', async (): Promise<void> => {
		expect(nds.get).toBeDefined()
		expect(await nds.get('string')).toEqual('john doe')
		expect(await nds.get('number')).toEqual(23)
		expect(await nds.get('boolean')).toEqual(true)
		expect(await nds.get('array')).toEqual([1,2,3,4,5])
		expect(await nds.get('object')).toEqual({name: "john doe"})
	})

	it('Should be nds key is success', async (): Promise<void> => {
		expect(nds.get).toBeDefined()
		expect(await nds.key('string')).toEqual('string')
		expect(await nds.key('number')).toEqual('number')
		expect(await nds.key('boolean')).toEqual('boolean')
		expect(await nds.key('array')).toEqual('array')
		expect(await nds.key('object')).toEqual('object')
	})

	it('Should be nds all keys is success', async (): Promise<void> => {
		expect(nds.keys).toBeDefined()
		expect(await nds.keys()).toBeInstanceOf(Array)
		expect((await nds.keys()).length).toBe(5)
	})

	it('Should be nds remove is success', async (): Promise<void> => {
		expect(nds.remove).toBeDefined()
		expect(await nds.remove('string')).toBeTruthy()
		expect(await nds.remove('number')).toBeTruthy()
		expect(await nds.remove('boolean')).toBeTruthy()
		expect(await nds.remove('array')).toBeTruthy()
		expect(await nds.remove('object')).toBeTruthy()
	})
})
