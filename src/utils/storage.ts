/**
 * node-disk-storage
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import { assert } from 'is-any-type'
import { NDSCore } from 'nds-core'
import { zip, unzip } from './compress'
import { propertyValidator } from './validator'
const storage = new NDSCore()

export const setItem = (items: Record<string, any>, compress: boolean, options: Record<string, any>): boolean | undefined => {
	if (assert.isBoolean(propertyValidator(options))) {
		if (assert.isArray(items as any)) {
			if (assert.isUndefined(storage.match() as undefined)) {
				if (compress !== false) {
					const zp = zip(items)
					const uz = unzip(zp)
					storage.set(uz)
					return true
				} else {
					storage.set(items)
					return true
				}
			} else {
				if (compress !== false) {
					const zp = zip(items)
					const uz = unzip(zp)
					storage.set(uz)
					return true
				} else {
					storage.set(items)
					return true
				}
			}
		} else {
			return undefined
		}
	}
}

export const getItem = (key: string, compress: boolean, options: Record<string, any>): string | undefined => {
	if (assert.isBoolean(propertyValidator(options))) {
		const getItem = storage.get(key)
		if (!assert.isFunction(getItem) || !assert.isPromise(getItem) || !assert.isNull(getItem) || !assert.isUndefined(getItem)) {
			if (compress !== false) {
				const zp = zip(getItem)
				const uz = unzip(zp)
				return uz
			} else {
				return getItem
			}
		} else {
			return undefined
		}
	}
}

export const removeItem = (key: string, options: Record<string, any>): boolean | undefined => {
	if (assert.isBoolean(propertyValidator(options))) {
		const removeItem = storage.remove(key)
		if (assert.isBoolean(removeItem as boolean)) {
			return removeItem
		} else {
			return undefined
		}
	}
}

export const clearItem = (options: Record<string, any>): boolean | undefined => {
	if (assert.isBoolean(propertyValidator(options))) {
		const clearItem = storage.clear()
		if (assert.isBoolean(clearItem as boolean)) {
			return clearItem
		} else {
			return undefined
		}
	}
}

export const keysItem = (compress: boolean, options: Record<string, any>): string[] | undefined => {
	if (assert.isBoolean(propertyValidator(options))) {
		const allKeysItem = storage.allKeys()
		if (assert.isArray(allKeysItem as any)) {
			if (compress !== false) {
				const zp = zip(getItem)
				const uz = unzip(zp)
				return uz
			} else {
				return allKeysItem
			}
		} else {
			return []
		}
	}
}
