/**
 * node-disk-storage
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

export const matchProperty = (data: Record<string, any>, compare: Record<string, any>): boolean => {
	const compareIn: string[] = Object.keys(compare)
	const newInData: boolean[] = compareIn.map((v) => `${v}` in data)
	return newInData.includes(false) ? false : true
}

export const matchPropertyDeep = (compare: Record<string, any>): boolean => {
	const compareIn: string[] = Object.values(compare)
	const defaultProperty: Record<string, any> = []

	for (let i = 1; i <= compareIn.length; i++) {
		defaultProperty.push({ name: undefined, module: undefined, inject: undefined })
	}

	const keysStore: Record<string, any> = compareIn.map((v) => Object.keys(v)).flat(Infinity)
	const newInData: boolean[] = defaultProperty
		.map((v) => Object.keys(v))
		.flat(Infinity)
		.map((v, i) => v === keysStore[i])

	return newInData.includes(false) ? false : true
}

// export const matchFirstProperty = (compare: Record<string, any>): boolean => {
// 	const isKeys = Object.keys(compare).includes('packages')
// 	const isValue = isType(Object.values(compare)[0]) !== 'array' ? false : true
// 	const isMatch = Object.keys(compare)

// 	return isKeys && isValue && isMatch.length > 0 ? true : false
// }
