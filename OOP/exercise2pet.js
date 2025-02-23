class Pet{
    name;
    happiness;
    hunger;

    constructor(name, happiness, hunger){
        this.name = name;
        this.happiness = happiness;
        this.hunger = hunger;
    }

    getName(){
        return this.name
    }
    getHappiness(){
        return this.happiness
    }
    getHunger(){
        return this.hunger
    }
    setName(newName){
        this.name = newName
    }
    setHappiness(newHappiness){
        this.happiness = newHappiness
    }
    setHunger(newHunger){
        this.hunger = newHunger
    }


    feed(){
        this.setHunger(this.getHunger() - 10) 
        this.setHappiness(this.getHappiness() + 5) 
    }
    play(){
        this.setHappiness(this.getHappiness() + 10) 
        this.setHunger(this.getHunger() - 5)

    }
}

class Dog extends Pet{
    constructor(name,happiness,hunger){
        super(name,happiness,hunger)
    }
    play(){
        this.setHappiness(this.getHappiness() + 15)
        this.setHunger(this.getHunger() - 5)
    }
}
class Cat extends Pet{
    constructor(name,happiness,hunger){
        super(name,happiness,hunger)
    }
    feed(){
        this.setHunger(this.getHunger() - 10)
        this.setHappiness(this.getHappiness() + 3)
    }
}

class Player{
    name;
    pets;

    constructor(name, pets){
        this.name = name
        this.pets = pets
    }
    get Name(){
        return this.name
    }

    getPets(){
        return this.pets
    }
    setName(newName){
        this.name = newName
    }
    setPets(newPets){
        this.getPets = newPets
    }

    adoptPet(pet){
        this.pets.push(pet)
    }

    interactWithPet(petName, action){
        const pet = this.pets.find(pet => pet.name === petName)
        if(pet){
            pet[action]()// pet.feed() // pet["feed"]()
            //action.call(pet); // Execute the action in the context of the pet

        } else {
            console.log(`There is no pet named ${petName}`);
        }

    }
}

let player1 = new Player("Dja3fer", [])
let cat1 = new Cat("Sylvestre", 100, 50)
let dog1 = new Dog("Falko", 100, 150)

player1.adoptPet(dog1)
player1.adoptPet(cat1)

console.log(player1);

console.log(cat1);

player1.interactWithPet(cat1, "feed")

console.log(cat1);