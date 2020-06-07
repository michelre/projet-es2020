/**
 * Promise.allSettled
 */

const p1 = Promise.resolve('OK')
const p2 = Promise.reject('KO')
const p3 = Promise.resolve('OK')

// Avec l'opérateur all
Promise
    .all([p1, p2, p3])
    .then(
        (res) => console.log('SUCCESS =>', res),
        (err) => console.log('ERROR =>', err)
    )

// Avec l'opérateur allSettled
Promise
    .allSettled([p1, p2, p3])
    .then(
        (res) => console.log('SUCCESS =>', res),
        (err) => console.log('ERROR =>', err)
    )