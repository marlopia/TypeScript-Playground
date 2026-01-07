// Boolean
let isActive: boolean = true;
let hasPermission = false; //TS can infer booleans

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let float: number = 3.14;

// String
let color: string = "blue";
let fullName: string = 'Jhon Doe';

let age: number = 30;
let sencente: string = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`

// BigInt
const bigNumber: bigint = 9007199254740991n;
const hugeNumber = BigInt(9007199254740991); // Alternative syntax

//symbol
const uniqueKey: symbol = Symbol('description');
const obj = {
    [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]); // "This is a unique property"

// TypeScript infers 'string'
let username = "alice";

// TypeScript infers 'number'
let score = 100;

// TypeScript infers 'boolean[]'
let flags = [true, false, true];

// TypeScript infers return type as 'number'
function add(a: number, b: number) {
    return a + b;
}

// Arrays
let ages: number[] = [22, 32, 41]
let constants: readonly number[] = [3.1415, 0.5, 2.3] // will throw if altered

// Tuple
let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Coding God was here']; // Initializes correctly
// It is adviced to create these as readonly as new items won't get typechecked
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// Named tuples
const graph: [x: number, y: number] = [55.2, 41.3];

// Objects
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};

// Enum
// Acts as a counter, if not declared will start from 0
enum CardinalDirections {
    North = 1,
    East,
    South,
    West
}
// logs 1
console.log(CardinalDirections.North);
// logs 4
console.log(CardinalDirections.West);
// Usefull for constants for example
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
// can also use strings, but all of the items in an enum must be initialized

// Aliases
// Aliases let you rename primitive and complex types
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}
// They can be concatenated or can define a short range of options
type Animal = { name: string };
type Bear = Animal & { honey: boolean };
const bear: Bear = { name: "Winnie", honey: true };

type Status = "success" | "error";
let response: Status = "success";

// Interface
// Same as aliases but exclusive to objects, forces an object to have a blueprint of typed attributes
interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 20,
    width: 10
};
// Interfaces are better for objects, as they can be extended and adapt to OOP code
interface ColoredRectangle extends Rectangle {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};