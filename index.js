var grocery = new Items ("Fruite", "Vegetable", "Meat","Drink");

function Items (fruite, vegetable, meat, drink) {
    this.fruit = "Fruite";
    this.vegetable = "Vegetable";
    this.meat = "Meat";
    this.drink = "Drink";
    }
    console.log(grocery);

    grocery = new Fruit ("Orange", 400, 24);
    function Fruit (name, price, quantity) {
        this.name = "Orange";
        this.price = 400;
        this.quantity = 24;
    }

console.log(grocery);

grocery = new Vegetable ("Ladyfinger","Green", 250, "2kg");
function Vegetable (name, colour, price, quantity) {
    this.name = "Ladyfinger";
    this.colour = "Green";
    this.price = 250;
    this.quantity = "2kg";
}
console.log(grocery);

grocery = new Meat ("Ladyfinger", 5000, "4kg");
function Meat (name, price, quantity) {
    this.name = "Meat";
    this.price = 5000;
    this.quantity = "4kg";
}
console.log(grocery);

grocery = new Drink ("sting", 250, 12);
function Drink (name, price, quantity) {
    this.name = "Sting";
    this.price = 250;
    this.quantity = 12;
}
console.log(grocery);

