/**
 * node-disk-storage
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

export const next = (): boolean => {
	process.nextTick(() => 'next to step')
	return true
}
