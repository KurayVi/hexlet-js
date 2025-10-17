import capitalize from '../src/index.js'
import { strict as assert } from 'node:assert'

assert(capitalize('') === '')
assert(capitalize('hello') === 'Hello')

console.log('Done!')