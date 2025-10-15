import capitalize from '../src/index.js'
if (capitalize('hello') !== 'Hello') {
    throw new Error ('The function does not work correctly!')
}

if (capitalize('') !== '') {
    throw new Error('The function does not work correctly!')
}

console.log('Done!')