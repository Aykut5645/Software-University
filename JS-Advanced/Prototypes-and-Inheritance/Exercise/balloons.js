function solve() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }
    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            };
        }

        get ribbon() {
            return this._ribbon;
        }
    }
    class BirthdaBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text() {
            return this._text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdaBalloon
    };
}

let classes = solve();

let testBalloon = new classes.Balloon("Tumno-bqlo", 20.5);
let testPartyBalloon = new classes.PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25);
let testBirthdayBalloon = new classes.BirthdaBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25, 'Happy Birthday!!!');

console.log(testBalloon);
console.log(testPartyBalloon);
console.log(testBirthdayBalloon.text);