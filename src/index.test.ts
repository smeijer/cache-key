import { hashCacheKey } from './index.js';

test('returns a stable hash', () => {
	const key1 = hashCacheKey([{ a: 'b', c: 'd' }, 'e', 6, 7]);
	const key2 = hashCacheKey([{ c: 'd', a: 'b' }, 'e', 6, 7]);
	const user = hashCacheKey(['users', { id: 1 }]);

	expect(key1).toBe(key2);
	expect(key1).toBe('[{"a":"b","c":"d"},"e",6,7]');
	expect(user).toBe('["users",{"id":1}]');
})
