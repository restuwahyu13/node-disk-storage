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
	protected options: Record<string, any>

	constructor(options: Partial<NodeDiskStorageOptions> = {}) {
		this.options = options
		this.minSize = (options.minSize as number) || 1
		this.maxSize = (options.maxSize as number) || 26
		this.compress = (options.compress as boolean) || false
	}

	/**
	 * set data using key and value, into disk
	 *
	 * @param { String } input - required
	 * @param { string } value - required
	 * @return boolean | undefined
	 */

	set(key: string, value: string): boolean | undefined {
		if (assert.isBoolean(validatorKeyVal({ key, value }))) {
			const options = {
				minSize: this.minSize,
				maxSize: this.maxSize,
				compress: this.compress
			}

			if (assert.isBoolean(sizeValidator(options, value) as boolean)) {
				this.items.push({ key, value })
				return store.setItem(this.items, options.compress, this.options)
			}
		}
	}

	/**
	 * get specific data using key, after saving data into disk
	 *
	 * @param { String } key - required
	 * @return string | undefined
	 */

	get(key: string): string | undefined {
		if (assert.isBoolean(validatorKey(key))) {
			return store.getItem(key, this.compress, this.options)
		}
	}

	/**
	 * remove specific data already exist using key, after saving data into disk
	 *
	 * @param { String } key - required
	 * @return boolean | undefined
	 */

	remove(key: string): boolean | undefined {
		if (assert.isBoolean(validatorKey(key))) {
			return store.removeItem(key, this.options)
		}
	}

	/**
	 * clear all keys exist, after saving data into disk
	 *
	 * @return boolean | undefined
	 */

	clear(): boolean | undefined {
		return store.clearItem(this.options)
	}

	/**
	 * get all keys exist, after saving data into disk
	 *
	 * @return string[] | undefined
	 */

	keys(): string[] | undefined {
		return store.keysItem(this.compress, this.options)
	}
}
