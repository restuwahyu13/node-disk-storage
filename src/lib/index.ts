/**
 * node-disk-storage
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import { assert } from 'is-any-type'
import { NodeDiskStorageOptions } from '../types'
import * as store from '../utils/storage'
import { validatorKey, sizeValidator, validatorKeyVal } from '../utils/validator'

export class NodeDiskStorage {
	protected minSize: number = 1
	protected maxSize: number = 25
	protected compress: boolean = false
	protected items: Record<string, any>[] = []

	constructor(options: Readonly<NodeDiskStorageOptions>) {
		this.minSize = options.minSize
		this.maxSize = options.maxSize
		this.compress = options.compress
	}

	set(key: string, value: string, ttl?: string): boolean | undefined {
		if (validatorKeyVal({ key, value })) {
			const options = {
				minSize: this.minSize,
				maxSize: this.maxSize,
				compress: this.compress
			}

			if (sizeValidator(options, value)) {
				this.items.push({ key, value, ttl })
				return store.setItem(this.items)
			}
		}
	}

	get(key: string): string | undefined {
		if (assert.isBoolean(validatorKey(key))) {
			return store.getItem(key)
		}
	}

	remove(key: string): boolean | undefined {
		if (assert.isBoolean(validatorKey(key))) {
			return store.removeItem(key)
		}
	}

	clear(): boolean | undefined {
		return store.clearItem()
	}

	keys(): string[] | undefined {
		return store.keysItem()
	}
}
