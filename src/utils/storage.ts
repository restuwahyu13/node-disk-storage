/**
 * node-disk-storage
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import { assert } from 'is-any-type'
import { NDSCore } from 'nds-core'
import { propertyValidator } from './validator'

let storage: InstanceType<typeof NDSCore> = new NDSCore()

export const setItem = async (items: Record<string, any>, options: Record<string, any>): Promise<any> => {
	if (assert.isBoolean(propertyValidator(options))) {
		if (assert.isArray(items as any)) {
			const matchItem: boolean = await storage.match()
			if (matchItem === false) {
				return Promise.resolve(await storage.set(items))
			} else {
				return Promise.resolve(await storage.set(items))
			}
		} else {
			return Promise.resolve(false)
		}
	}
}

export const getItem = async (key: string, options: Record<string, any>): Promise<any> => {
	if (assert.isBoolean(propertyValidator(options))) {
		const getItem: any = await storage.get(key)
		if (!assert.isFunction(getItem) || !assert.isPromise(getItem) || !assert.isNull(getItem) || !assert.isUndefined(getItem)) {
			return Promise.resolve(getItem)
		} else {
			return Promise.resolve(undefined)
		}
	}
}

export const removeItem = async (key: string, options: Record<string, any>): Promise<any> => {
	if (assert.isBoolean(propertyValidator(options))) {
		const removeItem: boolean = await storage.remove(key)
		if (removeItem) {
			return Promise.resolve(removeItem)
		} else {
			return Promise.resolve(false)
		}
	}
}

export const clearItem = async (options: Record<string, any>): Promise<any> => {
	if (assert.isBoolean(propertyValidator(options))) {
		const clearItem: boolean = await storage.clear()
		if (clearItem) {
			return Promise.resolve(clearItem)
		} else {
			return Promise.resolve(false)
		}
	}
}

export const allKeysItem = async (options: Record<string, any>): Promise<any> => {
	if (assert.isBoolean(propertyValidator(options))) {
		const allKeysItem: string[] = await storage.allKeys()
		if (allKeysItem.length > 0) {
			return Promise.resolve(allKeysItem)
		} else {
			return Promise.resolve([])
		}
	}
}

export const keysItem = async (key: string, options: Record<string, any>): Promise<any> => {
	if (assert.isBoolean(propertyValidator(options))) {
		const keyItem: any = await storage.keys(key)
		if (!assert.isFunction(keyItem) || !assert.isPromise(keyItem) || !assert.isNull(keyItem) || !assert.isUndefined(keyItem)) {
			return Promise.resolve(keyItem)
		} else {
			return Promise.resolve(undefined)
		}
	}
}
