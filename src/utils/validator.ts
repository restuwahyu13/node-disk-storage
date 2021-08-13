/**
 * node-disk-storage
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import { assert } from 'is-any-type'
import reqSize from 'human-size'
import { next } from '../utils/next'
import { TempStorageError } from '../utils/error'

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

export const sizeValidator = (options: Record<string, any>, value: string): boolean | Promise<Error> => {
	options.size = 1
	const size = options.size
	const toJSON = JSON.stringify({ data: value })
	const bodySize = reqSize(toJSON.length)
	const sizeMatch: string[] = []
	let MB: string = ''

	for (let i = size + 1; i <= 26; i++) {
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
