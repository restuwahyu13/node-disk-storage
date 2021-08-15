/**
 * node-disk-storage
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

export const matchProperty = (compare: Record<string, any>): boolean | undefined => {
	const defaultProperty = { minSize: undefined, maxSize: undefined, compress: undefined }
	const compareIn: string[] = Object.keys(compare)
	const newInData: boolean[] = compareIn.map((v) => `${v}` in defaultProperty)
	return newInData.includes(false) ? undefined : true
}
