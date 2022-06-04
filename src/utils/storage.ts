/**
 * node-disk-storage
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import { assert } from 'is-any-type'
import { NDSCore } from 'nds-core'
import { propertyValidator } from './validator'

let storage: InstanceType<typeof NDSCore> = new NDSCore()

export const setItem = async (items: Record<string, any>, options: Record<string, any>): Promise<boolean | undefined> => {
	if (assert.isBoolean(propertyValidator(options))) {
		if (assert.isArray(items as any)) {
			if (assert.isUndefined((await storage.match()) as undefined)) {
				return Promise.resolve(await storage.set(items))
			} else {
				return Promise.resolve(await storage.set(items))
			}
		} else {
			return Promise.resolve(undefined)
		}
	}
}

export const getItem = async (key: string, options: Record<string, any>): Promise<string | undefined> => {
	if (assert.isBoolean(propertyValidator(options))) {
		const getItem = await storage.get(key)
		if (!assert.isFunction(getItem) || !assert.isPromise(getItem) || !assert.isNull(getItem) || !assert.isUndefined(getItem)) {
			return Promise.resolve(getItem)
		} else {
			return Promise.resolve(undefined)
		}
	}
}

export const removeItem = async (key: string, options: Record<string, any>): Promise<boolean | undefined> => {
	if (assert.isBoolean(propertyValidator(options))) {
		const removeItem = await storage.remove(key)
		if (assert.isBoolean(removeItem as boolean)) {
			return Promise.resolve(removeItem)
		} else {
			return Promise.resolve(removeItem)
		}
	}
}

export const clearItem = async (options: Record<string, any>): Promise<boolean | undefined> => {
	if (assert.isBoolean(propertyValidator(options))) {
		const clearItem = await storage.clear()
		if (assert.isBoolean(clearItem as boolean)) {
			return Promise.resolve(clearItem)
		} else {
			return Promise.resolve(undefined)
		}
	}
}

export const keysItem = async (options: Record<string, any>): Promise<string[] | undefined> => {
	if (assert.isBoolean(propertyValidator(options))) {
		const allKeysItem = await storage.allKeys()
		if (assert.isArray(allKeysItem as any)) {
			return Promise.resolve(allKeysItem)
		} else {
			return Promise.resolve([])
		}
	}
}
