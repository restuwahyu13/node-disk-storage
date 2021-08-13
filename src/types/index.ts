export interface NodeDiskStorageOptions {
	minSize: number
	maxSize: number
	compress: boolean
}

export interface NodeDiskStorage {
	set(key: string, value: string, ttl?: string): boolean | undefined
	get(key: string): string | undefined
	remove(key: string): boolean | undefined
	clear(): boolean | undefined
	keys(): string[] | undefined
}
