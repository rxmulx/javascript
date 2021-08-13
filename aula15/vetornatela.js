let num = [1,2,3,7,0,5,6]


/*
console.log(num[0])
console.log(num[0])
console.log(num[0])
console.log(num[0])
console.log(num[0])
console.log(num[0])
console.log(num[0])



for ( let posi = 0 ;posi <num.length ; posi++ ) {
    console.log(`A posição ${posi} tem o valor ${num[posi]}`)
}
*/

for(let posi in num) {
    console.log(`A posição ${posi} tem o valor ${num[posi]}`)
}