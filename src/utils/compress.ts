import zlib from 'zlib'

export const zip = (items: any): Buffer => {
	return zlib.gzipSync(Buffer.from(JSON.stringify({ items })), {
		level: zlib.constants.Z_BEST_COMPRESSION,
		memLevel: zlib.constants.Z_RLE,
		strategy: zlib.constants.Z_RLE,
		chunkSize: 999999999,
		maxOutputLength: 999999999
	})
}

export const unzip = (items: any): any => {
	const data = zlib
		.gunzipSync(items, {
			level: zlib.constants.Z_BEST_COMPRESSION,
			memLevel: zlib.constants.Z_RLE,
			strategy: zlib.constants.Z_RLE,
			chunkSize: 999999999,
			maxOutputLength: 999999999
		})
		.toString('utf-8')
	return JSON.parse(data).items
}
