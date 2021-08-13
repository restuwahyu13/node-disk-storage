/**
 * node-disk-storage
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import { assert } from 'is-any-type'
import { NDSCore } from 'nds-core'
import { zip, unzip } from './compress'
const storage = new NDSCore()

export const setItem = (items: Record<string, any>, compress: boolean): boolean | undefined => {
	if (assert.isArray(items as any)) {
		if (assert.isUndefined(storage.match() as undefined)) {
			if (compress !== false) {
				const zp = zip(items)
				const uz = unzip(zp)
				return storage.set(uz)
			} else {
				return storage.set(items)
			}
		} else {
			if (compress !== false) {
				const zp = zip(items)
				const uz = unzip(zp)
				return storage.set(uz)
			} else {
				return storage.set(items)
			}
		}
	} else {
		return undefined
	}
}

export const getItem = (key: string, compress: boolean): string | undefined => {
	const getItem = storage.get(key)
	if (
		!assert.isFunction(getItem) ||
		!assert.isPromise(getItem) ||
		!assert.isNull(getItem) ||
		!assert.isUndefined(getItem)
	) {
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

export const removeItem = (key: string): boolean | undefined => {
	const removeItem = storage.remove(key)
	if (assert.isBoolean(removeItem as boolean)) {
		return removeItem
	} else {
		return undefined
	}
}

export const clearItem = (): boolean | undefined => {
	const clearItem = storage.clear()
	if (assert.isBoolean(clearItem as boolean)) {
		return clearItem
	} else {
		return undefined
	}
}

export const keysItem = (compress: boolean): string[] | undefined => {
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
