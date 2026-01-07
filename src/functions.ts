// the `: number` here specifies that this function returns a number
function getTime(): number {
    return new Date().getTime();
}

// Functions can return nothing with "void"
function printHello(): void {
    console.log('Hello!');
}

// Parameters are typed similarly to variables
function multiply(a: number, b: number) {
    return a * b;
}

// The `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}

// You can also allow default values to unassigned parameters
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}

// You can also declare an undefined amount of parameters with the keyword "rest"
function addRest(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}