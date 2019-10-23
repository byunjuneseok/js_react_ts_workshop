enum StarbucksGrade {
    WELCOME,
    GREEN,
    GOLD
}

enum NewStarbucksGrade {
    WELCOME = 0,
    DDDD = 3,
    GREEN = 1,
    GOLD = 2
}

enum StringStarbucksGrade {
    WELCOME = "WELCOME",
    GREEN = "GREEN",
    GOLD = "GOLD"
}

function getDiscount(v: StarbucksGrade): number {
    switch (v) {
        case StarbucksGrade.WELCOME:
            return 0;
        case StarbucksGrade.GREEN:
            return 5;
        case StarbucksGrade.GOLD:
            return 10;
    }
}

console.log(getDiscount(StarbucksGrade.GREEN));
console.log(StarbucksGrade.GREEN);
console.log(StarbucksGrade)

// console.log(getDiscount(StringStarbucksGrade["GOLD"]));