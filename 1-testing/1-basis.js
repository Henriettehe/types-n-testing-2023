export function add(a, b) {
    if (typeof a === 'string' || typeof b === ' string')
    throw new Error('Parameter must be a string')
    return a + b 
}