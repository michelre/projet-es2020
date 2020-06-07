/**
 * Nullish coalescing Operator
 */

const values = {
    nullValue: null,
    falseValue: false,
}

//En utilisant ||
console.log(values.nullValue || 'defaut') // defaut
console.log(values.falseValue || 'defaut') // defaut (alors que nous voulons false)

// En utilisant ??
console.log(values.nullValue ?? 'defaut') // defaut
console.log(values.falseValue ?? 'defaut') // false