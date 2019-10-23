var StarbucksGrade;
(function (StarbucksGrade) {
    StarbucksGrade[StarbucksGrade["WELCOME"] = 0] = "WELCOME";
    StarbucksGrade[StarbucksGrade["GREEN"] = 1] = "GREEN";
    StarbucksGrade[StarbucksGrade["GOLD"] = 2] = "GOLD";
})(StarbucksGrade || (StarbucksGrade = {}));
var NewStarbucksGrade;
(function (NewStarbucksGrade) {
    NewStarbucksGrade[NewStarbucksGrade["WELCOME"] = 0] = "WELCOME";
    NewStarbucksGrade[NewStarbucksGrade["DDDD"] = 3] = "DDDD";
    NewStarbucksGrade[NewStarbucksGrade["GREEN"] = 1] = "GREEN";
    NewStarbucksGrade[NewStarbucksGrade["GOLD"] = 2] = "GOLD";
})(NewStarbucksGrade || (NewStarbucksGrade = {}));
var StringStarbucksGrade;
(function (StringStarbucksGrade) {
    StringStarbucksGrade["WELCOME"] = "WELCOME";
    StringStarbucksGrade["GREEN"] = "GREEN";
    StringStarbucksGrade["GOLD"] = "GOLD";
})(StringStarbucksGrade || (StringStarbucksGrade = {}));
function getDiscount(v) {
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
console.log(StarbucksGrade);
//# sourceMappingURL=enum.js.map