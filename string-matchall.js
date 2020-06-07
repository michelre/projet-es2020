/**
 * String.prototype.matchAll
 */
const regexp = RegExp('foo*','g');
const str = 'table football, foosball';

for(const match of str.matchAll(regexp)){
    console.log(match)
}