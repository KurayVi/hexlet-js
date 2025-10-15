import set from './set.js'
const obj = {}
set(obj, 'key1', 'value1')
if (obj.key1 !== 'value1') {
    throw new Error('The function does not work correctly!')
}

set(obj,'key1', 'next value')
if (obj.key1 === 'next value') {
    throw new Error('The function does not work correctly!')
}

console.log('Done!')