let num = [3,4,5,6,2,7,9,5,4]

num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições `)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(2)
if ( pos == -1 ){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${posi}`)
}