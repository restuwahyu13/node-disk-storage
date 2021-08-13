import fs from 'fs'
import path from 'path'
import { isType } from 'is-any-type'
import { config } from '../src/lib'
import { matchFirstProperty, matchPropertyDeep } from '../src/utils/matchProperty'
import { mergeProperty } from '../src/utils/mergeProperty'
import { validatorCheck, allConfigValidator, configValidator } from '../src/utils/validatorCheck'

jest.mock('../src/lib/')

describe('Kraken Node Group Testing', function () {
	beforeAll(function () {
		const krakenConfig = {
			packages: [
				{
					name: '$axios',
					module: 'axios'
				},
				{
					name: '$_',
					module: 'lodash'
				}
			]
		}
		fs.writeFileSync(path.resolve(process.cwd(), 'kraken.config.json'), JSON.stringify({ ...krakenConfig }))
	})

	afterAll(function () {
		jest.resetAllMocks()
		fs.unlinkSync(path.resolve(process.cwd(), 'kraken.config.json'))
	})

	it('Should be kraken config first property is valid', function () {
		const kinode = matchFirstProperty({ packages: [] })

		expect(matchFirstProperty).toBeDefined()
		expect(isType(kinode)).toEqual('boolean')
		expect(kinode).toBeTruthy()
	})

	it('Should be kraken config first property  is not valid', function () {
		const kinode = matchFirstProperty({ packagesx: {} })

		expect(matchFirstProperty).toBeDefined()
		expect(isType(kinode)).toEqual('boolean')
		expect(kinode).toBeFalsy()
	})

	it('Should be kraken config property is valid', function () {
		const kinode = matchPropertyDeep([{ name: undefined, module: undefined, inject: undefined }])

		expect(matchPropertyDeep).toBeDefined()
		expect(isType(kinode)).toEqual('boolean')
		expect(kinode).toBeTruthy()
	})

	it('Should be kraken config property is not valid', function () {
		const kinode = matchPropertyDeep([{ namex: undefined, modulex: undefined, injectx: undefined }])

		expect(matchPropertyDeep).toBeDefined()
		expect(isType(kinode)).toEqual('boolean')
		expect(kinode).toBeFalsy()
	})

	it('Should be merge kraken config property is valid', function () {
		const kinode = mergeProperty({ packages: [{ name: undefined, module: undefined }] })

		expect(matchPropertyDeep).toBeDefined()
		expect(isType(kinode)).toEqual('object')
		expect(kinode).toMatchObject({ packages: [{ name: undefined, module: undefined, inject: true }] })
		expect(kinode).toStrictEqual({ packages: [{ name: undefined, module: undefined, inject: true }] })
	})

	it('Should be merge kraken config property is not valid', function () {
		const kinode = mergeProperty({ packages: [{ namex: undefined, modulex: undefined }] })

		expect(mergeProperty).toBeDefined()
		expect(isType(kinode)).toEqual('object')
		expect(kinode).toMatchObject({ packages: [{ namex: undefined, modulex: undefined, inject: true }] })
		expect(kinode).toStrictEqual({ packages: [{ namex: undefined, modulex: undefined, inject: true }] })
	})

	it('Should be kraken config file exist', function () {
		const kinode = validatorCheck({ directory: undefined })

		expect(validatorCheck).toBeDefined()
		expect(isType(kinode)).toEqual('boolean')
	})

	it('Should be kraken config file not exist', async function (done) {
		const kinode = validatorCheck({ directory: 'test' })

		expect(validatorCheck).toBeDefined()
		expect(isType(kinode)).toEqual('promise')
		done()
	})

	it('Should be kraken all config file valid', function () {
		const kinode = allConfigValidator({ packages: [{ name: undefined, module: undefined, inject: true }] })

		expect(allConfigValidator).toBeDefined()
		expect(isType(kinode)).toEqual('boolean')
	})

	it('Should be kraken all config file not valid', function () {
		const kinode = allConfigValidator({ packagesx: [{ name: undefined, module: undefined, inject: true }] })

		expect(allConfigValidator).toBeDefined()
		expect(isType(kinode)).toEqual('promise')
	})

	it('Should be kraken all config file property valid', function () {
		const kinode = configValidator({ packages: [{ name: undefined, module: undefined, inject: true }] })

		expect(configValidator).toBeDefined()
		expect(isType(kinode)).toEqual('boolean')
	})

	it('Should be kraken all config file property not valid', function () {
		const kinode = configValidator({ packages: [{ namex: undefined, modulex: undefined, injectx: true }] })

		expect(configValidator).toBeDefined()
		expect(isType(kinode)).toEqual('promise')
	})

	it('Should be kraken all config file property value valid', function () {
		const kinode = configValidator({ packages: [{ name: '$axios', module: 'axios', inject: true }] })

		expect(configValidator).toBeDefined()
		expect(isType(kinode)).toEqual('boolean')
	})

	it('Should be config is mock function', function () {
		expect(config).toBeDefined()
		expect(isType(config)).toBe('function')
		expect(jest.isMockFunction(config)).toBeTruthy()
	})

	it('Should be config is working', function () {
		config({ directory: 'test' })
		expect(config).toBeDefined()
		expect(isType(config)).toBe('function')
		expect(jest.isMockFunction(config)).toBeTruthy()
	})
})
