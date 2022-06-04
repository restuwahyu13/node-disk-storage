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
}

interface NodeDiskStorage {
	set(key: string, value: any): Promise<boolean | undefined>
	get(key: string): Promise<any | undefined>
	remove(key: string): Promise<boolean | undefined>
	clear(): Promise<boolean | undefined>
	keys(): Promise<string[] | undefined>
}

export class NDS implements NodeDiskStorage {
	protected minSize: number
	protected maxSize: number
	protected items: Record<string, any>[] = []
	protected options: Record<string, any>

	constructor(options: Partial<NodeDiskStorageOptions> = {}) {
		this.options = options
		this.minSize = (options.minSize as number) || 1
		this.maxSize = (options.maxSize as number) || 26
	}

	/**
	 * set data using key and value, into disk
	 *
	 * @param { String } input - required
	 * @param { any } value - required
	 * @return Promise<boolean | undefined>
	 */

	async set(key: string, value: any): Promise<boolean | undefined> {
		if (assert.isBoolean(validatorKeyVal({ key, value }))) {
			const options: any = {
				minSize: this.minSize,
				maxSize: this.maxSize
			}

			if (assert.isBoolean(sizeValidator(options, value) as boolean)) {
				this.items.push({ key, value })
				return Promise.resolve(await store.setItem(this.items, this.options))
			}
		}
	}

	/**
	 * get specific data using key, after saving data into disk
	 *
	 * @param { String } key - required
	 * @return Promise<string | undefined>
	 */

	async get(key: string): Promise<any | undefined> {
		if (assert.isBoolean(validatorKey(key))) {
			return Promise.resolve(await store.getItem(key, this.options))
		}
	}

	/**
	 * remove specific data already exist using key, after saving data into disk
	 *
	 * @param { String } key - required
	 * @return Promise<boolean | undefined>
	 */

	async remove(key: string): Promise<boolean | undefined> {
		if (assert.isBoolean(validatorKey(key))) {
			return Promise.resolve(await store.removeItem(key, this.options))
		}
	}

	/**
	 * clear all keys exist, after saving data into disk
	 *
	 * @return Promise<boolean | undefined>
	 */

	async clear(): Promise<boolean | undefined> {
		return Promise.resolve(await store.clearItem(this.options))
	}

	/**
	 * get all keys exist, after saving data into disk
	 *
	 * @return Promise<string[] | undefined>
	 */

	async keys(): Promise<string[] | undefined> {
		return Promise.resolve(await store.keysItem(this.options))
	}
}
