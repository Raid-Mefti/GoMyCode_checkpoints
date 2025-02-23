class Fighter{
    name;
    health;
    attackPower;

    constructor(name, health, attackPower){
        this.name = name;
        this.health = health
        this.attackPower = attackPower
    }
    getName(){
        return this.name
    }
    setName(newName){
        this.name = newName
    }
    getHealth(){
        return this.health
    }
    setHealth(newHealth){
        this.health = newHealth
    }   
    getAttackPower(){
        return this.attackPower
    }
    setAttackPower(newAttackPower){
        this.attackPower = newAttackPower
    }

    getHit(power){
        this.setHealth(this.getHealth() - power)
    }
    attack(opponent){
        opponent.getHit(this.getAttackPower())
    }

    toString(){
        return this.getName()+"'s current health is : " + (this.getHealth() > 0 ? this.getHealth() : 0)
    }
}

class Warrior extends Fighter{
    constructor(name,health,attackPower) {
        super(name,health,attackPower)
    }
    getHit(power){
        this.setHealth(this.getHealth() - power*0.8)
    }
}

class Mage extends Fighter{
    constructor(name,health,attackPower) {
        super(name,health,attackPower)
    }

    castSpell(opponent){
        opponent.getHit(this.getAttackPower()*2)
        this.getHealth() -= 10
    }
}

class Referee{
    turn;
    constructor(turn){
        this.turn = turn
    }
    getTurn(){
        return this.turn
    }
    setTurn(newTurn){
        this.turn = newTurn
    }
    startMatch(fighter1, fighter2) {
        let currentTurn = fighter1;

        while (fighter1.health > 0 && fighter2.health > 0) {
            const opponent = currentTurn === fighter1 ? fighter2 : fighter1;
            currentTurn.attack(opponent);

            console.log(`${currentTurn.name} attacks ${opponent.name}. ${opponent.name}'s health is now ${opponent.health > 0 ? opponent.health : 0}.`);

            if (opponent.health <= 0) {
                console.log(`${currentTurn.name} wins!`);
                break;
            }

            currentTurn = opponent;
        }
    }
}


const warrior = new Warrior("Nazghul", 100, 15)
const mage = new Mage("Gandalf", 80, 20)
const referee = new Referee()

referee.startMatch(warrior, mage)


//////////////////////////////////////////////////////////////



//sections query selectors
const fOneHealth = document.querySelector('#FighterOneHealth');
const fTwoHealth = document.querySelector('#FighterTwoHealth');
const fOneAttacks = document.querySelector('#FighterOneAtks');
const fTwoAttacks = document.querySelector('#FighterTwoAtks');
const Winner = document.querySelector('#WinnerDiv');
const StartBtn = document.querySelector('#StartFight');

//selectors for the fighters


const fighters = [
    { name: "Raid", img: "images/raid_idl.gif", actionImgs: ["images/raid_attack1.gif", "images/raid_gethit.gif"] },
    { name: "Moh", img: "images/moh_idl.gif", actionImgs: ["images/moh_attack1.gif", "action4.png"] },
];

let fighter1Index = 0;
let fighter2Index = 1;


let fighter1Class = "warrior";
let fighter2Class = "mage";

function changeFighter(fighter, direction) {
    if (fighter === 'fighter1') {
        fighter1Index = (fighter1Index + direction + fighters.length) % fighters.length;
        document.getElementById('fighter1-img').src = fighters[fighter1Index].img;
        document.getElementById('fighter1-name').textContent = fighters[fighter1Index].name;
    } else if (fighter === 'fighter2') {
        fighter2Index = (fighter2Index + direction + fighters.length) % fighters.length;
        document.getElementById('fighter2-img').src = fighters[fighter2Index].img;
        document.getElementById('fighter2-name').textContent = fighters[fighter2Index].name;
    }
}

function setClass(fighter) {
    if (fighter === 'fighter1') {
        fighter1Class = document.getElementById('fighter1-class').value;
    } else if (fighter === 'fighter2') {
        fighter2Class = document.getElementById('fighter2-class').value;
    }
}

function animateFighter(fighterId, actionImgs) {
    let imgIndex = 0;
    const imgElement = document.getElementById(fighterId);
    const interval = setInterval(() => {
        imgElement.src = actionImgs[imgIndex];
        imgIndex = (imgIndex + 1) % actionImgs.length;
    }, 200); // Change image every 200ms

    setTimeout(() => clearInterval(interval), 2000); // Stop animation after 2 seconds
}

function startMatch() {
    const fighter1 = fighter1Class === 'warrior'
        ? new Warrior(fighters[fighter1Index].name, 100, 15)
        : new Mage(fighters[fighter1Index].name, 80, 20);

    const fighter2 = fighter2Class === 'warrior'
        ? new Warrior(fighters[fighter2Index].name, 100, 15)
        : new Mage(fighters[fighter2Index].name, 80, 20);

    alert(`Starting match between ${fighter1.name} and ${fighter2.name}!`);

    animateFighter('fighter1-img', fighters[fighter1Index].actionImgs);
    animateFighter('fighter2-img', fighters[fighter2Index].actionImgs);

    const referee = new Referee(fighter1);
    referee.startMatch(fighter1, fighter2);
}
