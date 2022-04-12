// Only change code below this line
class Book {
    constructor(title) {
        this._title = title;
    }
    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }
}
// Only change code above this line
const littlePrince = new Book("The Little Prince"); // Change this line
console.log(littlePrince.title); // The Little Prince
littlePrince.title = "Le Petit Prince"; // Change this line
console.log(littlePrince.title); // Le Petit Prince
module.exports = Book;