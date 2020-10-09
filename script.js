class Wagon {
    constructor(capacity, passengers) {
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount() { //começa uma função
        console.log(`There are ${this.capacity} seats available`) // imprime o numero de lugares disponiveis
        return this.capacity // retorna o numero de lugares
    }

    join(Traveler) {
        let capacity = this.capacity // 4 = 4
        let arrayOfPeople = this.passengers // 0

        if (capacity === 0) {
            console.log(`no more vacancies on this wagon`)
            return this.capacity

        } else if (capacity >= arrayOfPeople.length || 1) { // 0 >= 4? true 
            let travelersName = Traveler // acrescenta o nome do viajante no array 
            arrayOfPeople.push(travelersName) //  retorna o array com nome
            let answer = this.capacity - 1 // cria uma var que tira do 1- 1 
            this.capacity = answer //atribui o novo numero ao this capacity
            return this.capacity // retorna a nova capacidade 0

        }
    }
    totalFood() {
        let allFood = 0
        for (let i = 0; i < this.passengers.length; i++) {
            let person = this.passengers[i]
            let answer = person.food + allFood
            allFood = answer
        }
        return allFood
    }

    shouldQuarantine() {
        let result = []
        for (let index = 0; index < this.passengers.length; index++) { // passa cada passageiro do array
            let person = this.passengers[index] // atribui o passageiro do array a variavel pessoa
            let health = person.isHealthy
            result.push(health)
        }
        return result.includes(false)
    }
}


class Traveler {
    constructor(name, food, isHealthy) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt() {

        if (isNaN(this.food)) {
            this.food = 1
            let currentFood = this.food
            this.food = currentFood + 2
            console.log(`The ${this.name} quantity of food is ${this.food}`)
            return this.food
        } else {

            let currentFood = this.food
            this.food = currentFood + 2
            console.log(`The ${this.name} quantity of food is ${this.food}`)
            return this.food

        }
    }
    eat() {

        if (this.food === 0) {
            console.log(`The ${this.name} is not healthy `)
            this.isHealthy = false
            return this.isHealthy

        } else if (isNaN(this.food)) {
            food = 1
            let eatfood = food - 1
            console.log(`The ${this.name} quantity of food is ${eatfood}`)
            this.food = eatfood
            return Traveler.food
        } else {
            let eatfood = this.food - 1
            console.log(`The ${this.name} quantity of food is ${eatfood}`)
            this.food = eatfood
            return Traveler.food
        }
    }

}
class Doctor extends Traveler {
    constructor(name, food, isHealthy) {
        super(name, food, isHealthy)

    }
    heal(Traveler) {
        Traveler.isHealthy = true
    }
}
class Hunter extends Traveler {
    constructor(name, food, isHealthy) {
        super(name, food, isHealthy)
        this.food = 2

    }

    hunt() {

        let currentFood = this.food
        this.food = currentFood + 5
        console.log(`The ${this.name} quantity of food is ${this.food}`)
        return this.food

    }
    eat() {

        if (0 === this.food) {
            console.log(`The ${this.name} is not healthy `)
            this.isHealthy = false
            return this.isHealthy

        } else if (isNaN(this.food)) {
            food = 2
            let eatfood = food - 2
            console.log(`The ${this.name} quantity of food is ${eatfood}`)
            this.food = eatfood
            return Traveler.food
        } else {
            if (this.food === 1) {
                this.food = 0
                console.log(`The ${this.name} is not healthy `)
                this.isHealthy = false
                return this.isHealthy
            } else {
                let eatfood = this.food - 2
                console.log(`The ${this.name} quantity of food is ${eatfood}`)
                this.food = eatfood
                return Traveler.food
            }
        }
    }
    giveFood(Traveler, numOfFoodUnits) {
        let giver = this.food - numOfFoodUnits
        let result = Traveler.food + numOfFoodUnits
        Traveler.food = result
        let foodOfHunter = this.food = giver
        return Traveler.food
    }
}



let wagon = new Wagon(4);
// Cria cinco viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');

console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);

wagon.join(maude); // Não tem espaço para ela!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);

sarahunter.hunt(); // pega mais 5 comidas
drsmith.hunt();

console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);

henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan agora está doente (sick)

console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);

drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);

sarahunter.giveFood(juan, 4);
sarahunter.eat(); // Ela só tem um, então ela come e fica doente

console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);