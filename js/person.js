const Person = function(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
    this.calcAge = function () {
        return new Date().getFullYear() - this.birthYear
    }
}

let pers = new Person("Kurt", 1981)

pers.lastName = "moller"

console.log(pers)
console.log(pers.calcAge())

console.log(Person.prototype)

Person.prototype.calcNameLength = function () {
    return this.firstName.length
}

console.log(pers.calcNameLength())

const arrnum = [1,2,3,2,3,4,5,4]
Array.prototype.unique = function () {return [... new Set(this)]}
const arrunik = arrnum.unique()
console.log(arrunik)

//console.log(typeof pers)
//console.log(typeof Person)
//console.log(pers instanceof Person)

