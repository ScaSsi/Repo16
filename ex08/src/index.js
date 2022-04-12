class Person {
    constructor(name, email, age) {
        this._name = name;
        this._email = email;
        this._age = age;
    }

    getPerson() {
        var personInfo = `Name: ${this._name}, email: ${this._email}, age: ${this._age}`;
        return personInfo
    }
}
let person = new Person("Andrej", "av@gmail.com", 25);
console.log(person.getPerson());

module.exports = Person;