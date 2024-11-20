// redisMethods.js
import { promisify } from 'util';
import { redisClient } from './redis.js';

// Promisified Redis commands

// Set a string value for a given key
// Data is stored as a key-value pair
const asyncSet = promisify(redisClient.set).bind(redisClient);

// Get the string value associated with a given key
// Data is retrieved as a single key-value pair
const asyncGet = promisify(redisClient.get).bind(redisClient);

// Add one or more members to a set
// Data is stored as a set (unordered collection of unique values)
const asyncSadd = promisify(redisClient.sAdd).bind(redisClient);

// Remove one or more members from a set
// Data is removed from the set
const asyncSrem = promisify(redisClient.sRem).bind(redisClient);

// Get all members of a set
// Data is retrieved as a list (array) of items
const asyncSmembers = promisify(redisClient.sMembers).bind(redisClient);

// Check if a member exists in a set
// Data is retrieved as a boolean (whether the member exists in the set)
const asyncSismember = promisify(redisClient.sIsMember).bind(redisClient);

// Set multiple field-value pairs in a hash
// Data is stored as a hash (key-value pairs) under a single key
const asyncHset = promisify(redisClient.HSET).bind(redisClient);

// Get the value of a field in a hash
// Data is retrieved as a single field-value pair from a hash (key-value)
const asyncHget = promisify(redisClient.HGET).bind(redisClient);

// Get all fields and values in a hash
// Data is retrieved as all field-value pairs in the hash (returns an object)
const asyncHgetall = promisify(redisClient.HGETALL).bind(redisClient);

// Set a value for a given key with an expiration time (TTL)
const asyncSetEx = promisify(redisClient.setEx).bind(redisClient);

// Increment the integer value of a key by one
// Data is stored as a simple integer key-value pair and is incremented by 1
const asyncIncr = promisify(redisClient.incr).bind(redisClient);

// Decrement the integer value of a key by one
// Data is stored as a simple integer key-value pair and is decremented by 1
const asyncDecr = promisify(redisClient.decr).bind(redisClient);

// Get the value of a key as a list (e.g., a queue or stack)
const asyncLpush = promisify(redisClient.lPush).bind(redisClient);

// Pop the first element from a list
// Data is retrieved as a single item from the list
const asyncLpop = promisify(redisClient.lPop).bind(redisClient);

// Get all elements of a list
// Data is retrieved as a list (array) of items
const asyncLrange = promisify(redisClient.lRange).bind(redisClient);

// Set the value of a key in a sorted set
// Data is stored in a sorted set where each member is associated with a score
const asyncZadd = promisify(redisClient.ZADD).bind(redisClient);

// Get all elements from a sorted set, ordered by score
// Data is retrieved as a list (array) of items from a sorted set
const asyncZrange = promisify(redisClient.zRange).bind(redisClient);

// Get the score of a member in a sorted set
// Data is retrieved as a single score value (numeric)
const asyncZscore = promisify(redisClient.zScore).bind(redisClient);

// Delete a key
// Data is deleted from the Redis store
const asyncDel = promisify(redisClient.del).bind(redisClient);
const asyncExists = promisify(redisClient.exists).bind(redisClient);
// Exporting the methods
export {
    asyncSet,        // Set a key-value pair (string)
    asyncGet,        // Get a value for a specific key (string)
    asyncSadd,       // Add items to a set (unique unordered values)
    asyncSrem,       // Remove items from a set
    asyncSmembers,   // Get all members of a set (list of unique items)
    asyncSismember,  // Check if an item exists in a set (boolean)
    asyncHset,       // Set multiple key-value pairs in a hash (stored as key-value pairs)
    asyncHget,       // Get a specific field from a hash (single key-value pair)
    asyncHgetall,    // Get all key-value pairs from a hash (retrieves all data)
    asyncSetEx,      // Set a key-value pair with an expiration time (TTL)
    asyncIncr,       // Increment a value by 1 (stored as integer key-value)
    asyncDecr,       // Decrement a value by 1 (stored as integer key-value)
    asyncLpush,      // Push an item to the start of a list (array-like structure)
    asyncLpop,       // Pop an item from the start of a list (retrieves single item)
    asyncLrange,     // Get all items in a list (array-like structure)
    asyncZadd,       // Add a member to a sorted set (member-score pair)
    asyncZrange,     // Get members of a sorted set (list, sorted by score)
    asyncZscore,     // Get score of a specific member in a sorted set (numeric value)
    asyncDel  ,       // Delete a key from Redis (removes data)
    asyncExists
};
