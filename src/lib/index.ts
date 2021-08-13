/**
 * node-disk-storage
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import { assert } from 'is-any-type'
import * as store from '../utils/storage'
import { validatorKey, sizeValidator, validatorKeyVal } from '../utils/validator'

interface NodeDiskStorageOptions {
	readonly minSize?: number
	readonly maxSize?: number
	readonly compress?: boolean
}

interface NodeDiskStorage {
	set(key: string, value: string): boolean | undefined
	get(key: string): string | undefined
	remove(key: string): boolean | undefined
	clear(): boolean | undefined
	keys(): string[] | undefined
}

export class NDS implements NodeDiskStorage {
	protected minSize: number
	protected maxSize: number
	protected compress: boolean
	protected items: Record<string, any>[] = []

	constructor(options: Partial<NodeDiskStorageOptions> = {}) {
		this.minSize = (options.minSize as number) || 1
		this.maxSize = (options.maxSize as number) || 26
		this.compress = (options.compress as boolean) || false
	}

	/**
	 * set any data using key and value
	 *
	 * @param { String } input - required
	 * @param { string } value - required
	 * @return boolean | undefined
	 */
	set(key: string, value: string): boolean | undefined {
		if (validatorKeyVal({ key, value })) {
			const options = {
				minSize: this.minSize,
				maxSize: this.maxSize,
				compress: this.compress
			}

			if (sizeValidator(options, value)) {
				this.items.push({ key, value })
				return store.setItem(this.items, options.compress)
			}
		}
	}

	/**
	 * get any data by specific key
	 *
	 * @param { String } key - required
	 * @return string | undefined
	 */
	get(key: string): string | undefined {
		if (assert.isBoolean(validatorKey(key))) {
			return store.getItem(key, this.compress)
		}
	}

	/**
	 * remove any data by specific key
	 *
	 * @param { String } key - required
	 * @return boolean | undefined
	 */
	remove(key: string): boolean | undefined {
		if (assert.isBoolean(validatorKey(key))) {
			return store.removeItem(key)
		}
	}

	/**
	 * clear all key and value exist
	 *
	 * @return boolean | undefined
	 */
	clear(): boolean | undefined {
		return store.clearItem()
	}

	/**
	 * get all key exist
	 *
	 * @return boolean | undefined
	 */
	keys(): string[] | undefined {
		return store.keysItem(this.compress)
	}
}
