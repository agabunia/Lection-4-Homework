//Task 1
function parameterFunction(a, b, ...arg){
    let sum = a + b

    let mult = 1
    for(const num of arg){
        mult *= num
    }

    return [sum, mult]
}

let output = parameterFunction(2, 3, 4, 5, 6)
console.log(output)


//Task 2
function getCityFromUser(obj){
    const {banks} = obj

    if (banks && banks[2] && banks[2].address && banks[2].address.city){
        const {address: {city}} = banks[2]
        return city
    }

    return undefined
}

const user = {
    banks: [
        {address: {city: 'Tbilisi'}},
        {address: {city: 'Tbilisi'}},
        {address: {city: 'Batumi'}}
    ]
}
  
const city = getCityFromUser(user)
console.log(city)
  

//Task 3
function copyObject(obj) {
    return { ...obj }
}

const firstObject = {
    name: 'James',
    age: 45,
    address: {
        country: 'USA',
        phone: '+123 456 6789'
    }
}
  
const copiedObject = copyObject(firstObject)
  
console.log(firstObject)
console.log(copiedObject)

firstObject.name = 'Sandro'
firstObject.address.country = 'Georgia'

console.log(firstObject)
console.log(copiedObject)