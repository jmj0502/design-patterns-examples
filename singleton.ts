class Adder {
	public constructor() {}

	public add(x: number, y: number): number {
		return x + y;
	}
}

class DifferentAdder extends Adder {
	public add(x: number, y: number): number {
		return (x * 2) + (y * 2);
	}
}

class BadSingleton {
	private addder: Adder = new Adder();

	private constructor() {}

	private static instance: BadSingleton;

	public getAddionResult(x: number, y: number) {
		return  this.addder.add(x, y);
	}

	public static getInstance() {
		if (this.instance === undefined) {
			this.instance = new BadSingleton();
		}
		return this.instance;
	}
}

const badSingletonOne = BadSingleton.getInstance();
const badSingletonTwo = BadSingleton.getInstance();
console.log("/// Bad singleton example ///");
console.log(badSingletonOne === badSingletonTwo);
console.log(badSingletonOne.getAddionResult(4,4));
console.log(badSingletonTwo.getAddionResult(4,4));


class GoodSingleton {
	private adder: Adder;

	private constructor(adder: Adder) {
		this.adder = adder;
	}

	private static instance: GoodSingleton;

	public getAddionResult(x: number, y: number) {
		return  this.adder.add(x, y);
	}

	public static getInstance(adder: Adder) {
		if (this.instance === undefined) {
			this.instance = new GoodSingleton(adder);
		}
		return this.instance;
	}
}

const goodSingletonOne = GoodSingleton.getInstance(new DifferentAdder());
const goodSingletonTwo = GoodSingleton.getInstance(new Adder());
console.log("/// Good singleton ///");
console.log(goodSingletonOne === goodSingletonTwo);
console.log(goodSingletonOne.getAddionResult(4,5));
console.log(goodSingletonTwo.getAddionResult(4,5));