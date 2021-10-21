//======= 1 =========

let miArray = [10,20,55,321321,312,4043,4341,0,312321,1]
let suma=0
for (let contador = 0 ; contador < miArray.length; contador++){
    suma = suma + miArray[contador]
}
console.log(suma)

//======= 2 =========
let numeros = [2,5,22,43124,32321,12,321312,10,1]
let promedio = 0

for (num of numeros){
    promedio += num
}
promedio = promedio / numeros.length

console.log(promedio)

//======= 3 =========
let users = [
    { name: 'juana', age: 12 },
    { name: 'jhonny', age: 22 },
    { name: 'luis', age: 51 },
    { name: 'claudia', age: 33 },
]

let mayores = users.filter(function (user){
    return user.age >= 18
})
mayores = mayores.length

console.log(`La cantidad de usuarios mayores de edad es: ${mayores}`)
console.log(`La cantidad de usuarios menores de edad es: ${users.length - mayores}`)