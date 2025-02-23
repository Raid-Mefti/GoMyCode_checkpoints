class Attack {
	name;
	power;
	sideEffect;
	constructor(name, power, sideEffect) {
		this.name = name;
		this.power = power;
		this.sideEffect = sideEffect;
	}
}
class Fighter {
	name;
	health;
	attacks = [];

	constructor(name, health, attacks) {
		this.name = name;
		this.health = health;
		this.attacks = attacks;
	}
	getHit(power) {
		this.health -= power;
	}
	attackRandom(opponent) {
		const randomIndex = Math.floor(Math.random() * this.attacks.length);
		const currentAttack = this.attacks[randomIndex];
		opponent.getHit(currentAttack.power);
		console.log(
			`${this.name} has attacked with ${currentAttack.name}, ${currentAttack.power} damage and side effect of ${currentAttack.sideEffect} `
		);
		if (currentAttack.sideEffect) {
			this.health -= currentAttack.sideEffect;
		}
	}
	isAlive() {
		return this.health > 0;
	}
}

class Warrior extends Fighter {
	constructor(name, health) {
		const defaultAttacks = [
			new Attack("Darbt bou3bou3", 23, 23),
			new Attack("death grip", 20, 5),
			new Attack("Execute", 0, -5),
		];
		super(name, health, defaultAttacks);
	}
	attackRandom(opponent) {
		const randomIndex = Math.floor(Math.random() * this.attacks.length);
		const currentAttack = this.attacks[randomIndex];
		if(Math.random() > 0.2)
			opponent.getHit(currentAttack.power);
		else
			opponent.getHit(currentAttack.power*2);
		console.log(
			`${this.name} has attacked with ${currentAttack.name}, ${currentAttack.power} damage and side effect of ${currentAttack.sideEffect} `
		);
		if (currentAttack.sideEffect) {
			this.health -= currentAttack.sideEffect;
		}
	}

}
class Mage extends Fighter {
	constructor(name, health) {
		const defaultAttacks = [
			new Attack("Fire ball", 15),
			new Attack("mental break down", 10, -4),
			new Attack("Freeze", 18, 4),
		];
		super(name, health, defaultAttacks);
	}
	attack(opponent) {
		const randomIndex = Math.floor(Math.random() * this.attacks.length);
		const currentAttack = this.attacks[randomIndex];
		opponent.getHit(currentAttack.power);
		console.log(
			`${this.name} has attacked with ${currentAttack.name}, ${currentAttack.power} damage and side effect of ${currentAttack.sideEffect} `
		);
		if (currentAttack.sideEffect) {
			if (Math.random() < 0.3) this.health += Math.abs(currentAttack.sideEffect);
			else this.health -= currentAttack.sideEffect;
		}
	}
}

class Archer extends Fighter {
	constructor(name, health) {
		const defaultAttacks = [
			new Attack("harsh strike", 18, 4),
			new Attack("Precision shot", 18, 4),
			new Attack("Focus", 18, 4),
		];
		super(name, health, defaultAttacks);
	}
	attack(opponent) {
		const randomIndex = Math.floor(Math.random() * this.attacks.length);
		const currentAttack = this.attacks[randomIndex];
		if(Math.random() < 0.2){
			opponent.getHit(currentAttack.power);
			opponent.getHit(currentAttack.power);
		}
		else opponent.getHit(currentAttack.power);
		console.log(
			`${this.name} has attacked with ${currentAttack.name}, ${currentAttack.power} damage and side effect of ${currentAttack.sideEffect} `
		);
		if (currentAttack.sideEffect) {
			this.health -= currentAttack.sideEffect;
		}
	}
}

class Tank extends Fighter {
	constructor(name, health) {
		const defaultAttacks = [
			new Attack("Defend", 18, 4),
			new Attack("Metal skin", 18, 4),
			new Attack("Shield bash", 18, 4),
		];
		super(name, health, defaultAttacks);
	}
	attack(opponent) {
		const randomIndex = Math.floor(Math.random() * this.attacks.length);
		const currentAttack = this.attacks[randomIndex];
		opponent.getHit(currentAttack.power);		
		console.log(
			`${this.name} has attacked with ${currentAttack.name}, ${currentAttack.power} damage and side effect of ${currentAttack.sideEffect} `
		);
		if (currentAttack.sideEffect) {
			this.health -= currentAttack.sideEffect;
		}
	}
	getHit(power) {
		this.health -= power * 0.5;
	}
}

class Demon extends Fighter {
	constructor(name, health) {
		const defaultAttacks = [
			new Attack("Life drain", 20, 0),
			new Attack("Possession", 20, 0),
			new Attack("Immolation", 20, 0),
		];
		super(name, health, defaultAttacks);
	}
	attack(opponent) {
		const randomIndex = Math.floor(Math.random() * this.attacks.length);
		const currentAttack = this.attacks[randomIndex];
		opponent.getHit(currentAttack.power);		
		console.log(
			`${this.name} has attacked with ${currentAttack.name}, ${currentAttack.power} damage and side effect of ${currentAttack.sideEffect} `
		);
		if (currentAttack.sideEffect) {
			this.health -= currentAttack.sideEffect;
		}
	}

}

class Referee {
	constructor() {}
	gameEnded(winner) {
		console.log(`fighter ${winner.name} has won`);
	}
	startMatch(fighter1, fighter2) {
		if (!fighter1 || !fighter2) {
			throw new Error("There is at least one fighter missing");
		}
		let turn = fighter1;
		const opponent = turn
		const interval = setInterval(() => {
			if (turn instanceof Demon && Math.random() <= 0.15) {
				// Do nothing, I want the Demon class to keep their turn
			} else {
				turn = turn === fighter1 ? fighter2 : fighter1;
			}

			if (!turn.isAlive()) {
				this.gameEnded(opponent);
				clearInterval(interval);
				return;
			}
			turn.attack(opponent);

			turn = opponent;
		}, 3000);
	}
}

const referee = new Referee();
const thor = new Warrior("Thor", 250);
const Gandalf = new Warrior("Gandalf", 250);
referee.startMatch(thor, Gandalf);
