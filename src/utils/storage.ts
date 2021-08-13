/**
 * node-disk-storage
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import { assert } from 'is-any-type'
import { NDSCore } from 'nds-core'
const storage = new NDSCore()

export const setItem = (items: Record<string, any>): boolean | undefined => {
	if (assert.isArray(items as any)) {
		if (assert.isUndefined(storage.match() as undefined)) {
			return storage.set(items)
		} else {
			return storage.set(items)
		}
	} else {
		return undefined
	}
}

export const getItem = (key: string): string | undefined => {
	const getItem = storage.get(key)
	if (
		!assert.isFunction(getItem) ||
		!assert.isPromise(getItem) ||
		!assert.isNull(getItem) ||
		!assert.isUndefined(getItem)
	) {
		return getItem
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

export const keysItem = (): string[] | undefined => {
	const allKeysItem = storage.allKeys()
	if (assert.isArray(allKeysItem as any)) {
		return allKeysItem
	} else {
		return []
	}
}
