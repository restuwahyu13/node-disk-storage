/**
 * node-disk-storage
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */


export class TempStorageError extends Error {
	constructor(message: string) {
		super(message)
		this.name = this.constructor.name
		this.message = message
		Error.captureStackTrace(this, this.constructor)
	}
}
