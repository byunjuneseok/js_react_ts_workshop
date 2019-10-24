interface Props {
    name: string;
    [key: string]: string;
    // index : string or number
}

const p: Props = {
    name: 'hello~',
    a: 'd',
    b: 'e',
    // c: 3,
    0: 'd',
    1: 'e', 
}

p["a"];
p[0];

p.name;
console.log(p.a);

// string | number
let keys: keyof Props;

interface User {
    name: string;
    age: number;
    hello(msg: string): void;
}

let keysOfUser: keyof User;
keysOfUser = "age";

let helloMethod: User["hello"];
helloMethod = function(msg: string) {

}
