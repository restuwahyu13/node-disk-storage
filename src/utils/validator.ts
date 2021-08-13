/**
 * node-disk-storage
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import { assert } from 'is-any-type'
import zlib from 'zlib'
import reqSize from 'human-size'
import { next } from '../utils/next'
import { TempStorageError } from '../utils/error'

interface NodeDiskStorageOptions {
	minSize: number
	maxSize: number
	compress: boolean
}

export const validatorKeyVal = (...data: Record<string, any>[]): any => {
	const res = data.map((v) => {
		if (
			assert.isFunction(v.key) ||
			assert.isFunction(v.value) ||
			assert.isPromise(v.key) ||
			assert.isPromise(v.value) ||
			assert.isNull(v.key) ||
			assert.isNull(v.value) ||
			assert.isUndefined(v.key) ||
			assert.isUndefined(v.value)
		) {
			return Promise.reject(new TempStorageError('key or value format not supported'))
		} else {
			return true
		}
	})
	return res.includes(true) ? next() : res
}

export const validatorKey = (...keys: string[]): any => {
	const res = keys.map((v: any) => {
		if (assert.isFunction(v) || assert.isPromise(v) || assert.isNull(v) || assert.isUndefined(v)) {
			return Promise.reject(new TempStorageError('key format not supported'))
		} else {
			return true
		}
	})
	return res.includes(true) ? next() : res
}

export const sizeValidator = (options: NodeDiskStorageOptions, value: string): boolean | Promise<Error> => {
	let toJSON: string

	if (!options.compress) {
		toJSON = zlib.gzipSync(Buffer.from(JSON.stringify({ data: value }))).toString('utf-8')
	} else {
		toJSON = JSON.stringify({ data: value })
	}

	const bodySize: string = reqSize(toJSON.length)
	const sizeMatch: string[] = []
	let MB: string = ''
	for (let i = options.minSize + 1; i <= options.maxSize; i++) {
		MB = i + 'MB'
		sizeMatch.push(MB)
	}
	if (sizeMatch.length < 1) {
		return Promise.reject(new TempStorageError('maximal size under 25 MB'))
	} else {
		const isCheckSize = sizeMatch.includes(bodySize)
		if (!isCheckSize) {
			return next()
		} else {
			return Promise.reject(new TempStorageError('maximal size under 25 MB'))
		}
	}
}
