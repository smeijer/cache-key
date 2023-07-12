# cache-key

> create stable cache keys from complex objects

## Install

```sh
npm install cache-key
```

## Usage

Just pass an array of values to `hashCacheKey` and it will return a stable hash. The order of items in the array is untouched. The keys of objects are sorted alphabetically.

```js
import { hashCacheKey } from 'cache-key';

hashCacheKey(['users', { id: 1, name: 'person' }]);
//=> '["users",{"id":1,name:"person"}]'

hashCacheKey(['users', { name: 'person', id: 1 }]);
//=> '["users",{"id":1,name:"person"}]'
```
