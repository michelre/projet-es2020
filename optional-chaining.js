/**
 * Optional Chaining
 */
const obj = {
    a: 'foo',
    b: {
        c: 'bar',
    }
}

console.log(obj.a) // foo
console.log(obj.b.c) // bar
//console.log(obj.d.e) // Erreur car le nœud d n'existe pas

// Sans l'opérateur
if (obj.d) {
    console.log(e)
}

// Avec l'opérateur
console.log(obj.d?.e)