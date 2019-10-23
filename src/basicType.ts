// ~ ES5 ; basic type.
let numValue: number;
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined;
let nullValue: null;

let anyValue: any;

let objValue: object;
let symbolValue: symbol;

numValue = 3;

stringValue = "hello";
stringValue = 'hello';
stringValue = `
hello.
${1+1}
`

booleanValue = true;

undefinedValue = undefined;
undefinedValue = null;

anyValue = 1;
anyValue = "3";
anyValue = null;
anyValue = {};

objValue = {
    name: 'jay'
};
objValue = {}
objValue = new String(33);   // object!
// objValue = String(33);

// symbolValue = Symbol();

let nameList: string[];
nameList = ["1", "3"];
// nameList = [1, 3];
nameList.push("333");

let anyList: any[];
anyList = [1, "3"];

let user1: { name: string, score: number };
user1 = {
    name: "jay",
    score: 30
}

let tuple2: [number, string];
tuple2 = [3, "2"];
// tuple2 = [3, 3];


