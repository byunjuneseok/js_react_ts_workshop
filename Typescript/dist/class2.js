class KoreanProgrammer {
    constructor(name) {
        this.name = name;
    }
    say(message) {
        console.log(message);
    }
    writeCode(requirements) {
        console.log(requirements);
        return requirements + '...';
    }
    loveKimchi() {
        console.log('kimchi <3');
    }
}
const jay = new KoreanProgrammer('jay');
class Korean {
    constructor(name) {
        this.name = name;
    }
    say(msg) {
        console.log(msg);
    }
}
class KoreanCoder extends Korean {
    constructor(name, jumin) {
        super(name);
        this.name = name;
        this.jumin = jumin;
    }
    say(message) {
        console.log(message);
    }
    writeCode(requirements) {
        console.log(requirements);
        return requirements + '...';
    }
    loveKimchi() {
        console.log('<3 <3');
    }
}
const jay2 = new KoreanCoder('jay2', 2222);
//# sourceMappingURL=class2.js.map