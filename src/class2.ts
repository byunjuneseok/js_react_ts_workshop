interface Person {
    name: string;
    say(message: string): void;

}

interface Programmer {
    writeCode(requirements: string): string;
}

class KoreanProgrammer implements Person, Programmer {
    constructor(public name: string) {
    }

    say(message: string): void {
        // throw new Error("Method not implemented");
        console.log(message);
    }

    writeCode(requirements: string): string {
        console.log(requirements);
        return requirements + '...';
    }
    
    loveKimchi() {
        console.log('kimchi <3');
    }
}

const jay = new KoreanProgrammer('jay');

// Abstract class
abstract class Korean implements Person {
    public abstract jumin: number;
    constructor(public name: string) {

    }   
    
    say(msg: string) {
        console.log(msg);
    }

    abstract loveKimchi(): void;
}

class KoreanCoder extends Korean implements Programmer {
    constructor(public name: string, public jumin: number) {
        super(name);
    }

    say(message: string): void  {
        console.log(message);
    }

    writeCode(requirements: string): string {
        console.log(requirements);
        return requirements + '...';
    }

    loveKimchi(): void {
        console.log('<3 <3');
    }

}

const jay2 = new KoreanCoder('jay2', 2222);
