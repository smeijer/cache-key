export type CacheKey = readonly unknown[];

export function isCacheKey(value: unknown): value is CacheKey {
	return Array.isArray(value)
}

/**
 * Default query keys hash function.
 * Hashes the value into a stable hash.
 *
 * Copied from https://github.com/TanStack/query
 */
export function hashCacheKey(cacheKey: CacheKey): string {
	return JSON.stringify(cacheKey, (_, val) =>
		isPlainObject(val)
			? Object.keys(val)
				.sort()
				.reduce((result, key) => {
					result[key] = val[key];
					return result;
				}, {} as any)
			: val,
	);
}

// Copied from: https://github.com/jonschlinkert/is-plain-object
function isPlainObject(o: any): o is Record<string, unknown> {
	if (!hasObjectPrototype(o)) {
		return false;
	}

	// If has modified constructor
	const ctor = o.constructor;
	if (typeof ctor === 'undefined') {
		return true;
	}

	// If has modified prototype
	const proto = ctor.prototype;
	if (!hasObjectPrototype(proto)) {
		return false;
	}

	// If constructor does not have an Object-specific method
	if (!proto.hasOwnProperty('isPrototypeOf')) {
		return false;
	}

	// Most likely a plain Object
	return true;
}

function hasObjectPrototype(o: any): boolean {
	return Object.prototype.toString.call(o) === '[object Object]';
}

