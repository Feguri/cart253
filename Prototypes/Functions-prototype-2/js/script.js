/**
 * Fortune machine
 * Felipe Paiva
 * 
 * A button-driven generator that produces randomized “cards” (fortunes, potion recipes, band names, or alien species) made of several parts. Small functions each return one piece of data: a random name, a random color from your palette, a random rarity. A bigger function combines them and returns one complete card object. Another function takes a card object and draws it, so the data and the drawing stay separate.
 */

"use strict";

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const r = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
const g = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
const b = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
const backgroundColor = `rgb(${Math.floor(r - r / 2)}, ${Math.floor(g - g/2)}, ${Math.floor (b - b/2)})`;
const cardBackgroundColor = `rgb(${r}, ${g}, ${b})`;
const textColor = `rgb(246, 237, 232)`;
const strokeColor = `rgb(246, 237, 232)`;
let pixelFont;

const fortuneObjects = {
    magicStones: {
        commonStones: [
            "spadow",
            "sphynx",
            "cornelious",
            "abraham",
            "dragsten",
            "sparklows",
            "amerix",
            "cardoush",
            "yoklow",
            "jaminix"
        ],
        rareStones: [
            "pendragon",
            "amerix",
            "glownatrax",
            "galliardo",
        ],
        ultraRareStones: [
            "spanxlow"
        ],
        impossible: [
            "wuyowa"
        ]
    },
    powers: {
        // power: damage
        commonPowers: {
            shadow: 40,
            sponk: 50,
            drawg: 13,
        },
        rarePowers: {
            grapple: 67,
            casticize: 80,
            galvazprinx: 100,
            "gluon array": 200,
            "sparker grind": 156,
        },
        ultraRarePowers: {
            "atom bomb": 123049,
            "ant army": 1034,
            "crystal bomb": 670,
        }
    },
    order: {
        commonOrders: [
            "smiths",
            "sphynxs",
            "shallows",
            "gravestones union",
            "galeccia family",
            "cascadia",
            "klorence army",
            "vegetables",
            "caned",
        ],
        rareOrders: [
            "sparxiax galactic",
            "cullmanstox",
            "imperial family",
            "clarxmaidens"
        ],
        ultraRareOrders: [
            "royal family",
            "ultimum",
            "glass'o corp.",
            "sp4ti4l 4n0m4ly",
        ]
    },
    class: {
        commonClasses: [
            "technologist",
            "spiritualist",
            "farmer",
            "explorer",
            "settler",
            "scientist",
            "fugitive",
            "funeralist",
            "healer",
            "warrior",
            "soldier",
            "criminal"
        ],
        rareClasses: [
            "office clerk",
            "medic",
            "governor",
            "ally",
            "leader",
            "landlord",
            "conquistador",
            "mastermind",
            "specialist",
            "cyborg"
        ],
        UltraRareClasses: [
            "monopolist",
            "agent",
            "world leader",
            "star fighter",
        ]
    }
};
/**
 * Setup Description
*/
function drawFortuneCard(
    x,
    y,
    cardWidth,
    cardHeight,
    stroke,
    strokeColor,
    background,
    font,
    fontSize,
    textColor,
    title,
    firstFortune,
    firstFortuneResult,
) {
    push();
    // draws the card rectangle
    fill(strokeColor);
    rect(x, y, cardWidth, cardHeight);

    // draws the card
    fill(background);
    rect(x, y, cardWidth - stroke, cardHeight - stroke);
    
    // draws the text inside of the card
    textSize(fontSize);
    textFont(font);
    fill(textColor);
    // title
    text(title, x - (x/8), y - (y/2));
    pop();
}

// loads the pixel font style for typography
function preload() {
    pixelFont = loadFont('assets/fonts/pixelated.ttf');
}

function getFortunes() {
    // generates numbers between 1 and 1000 to get rarity
    const fortuneNum1 = Math.floor(Math.random() * 1000) + 1;
    const fortuneNum2 = Math.floor(Math.random() * 1000) + 1;
    const fortuneNum3 = Math.floor(Math.random() * 1000) + 1;
    const fortuneNum4 = Math.floor(Math.random() * 1000) + 1;
    const fortuneList = [fortuneNum1, fortuneNum2, fortuneNum3, fortuneNum4];

    let chosenStone;
    let chosenPower;
    let chosenOrder;
    let chosenClass;

    function returnObjectFromCollection(collection, rarity) {
        if (Array.isArray(collection)) {
            let arrLength = collection.length;
            let chosenItem = collection[Math.floor(Math.random() * arrLength)];
            return [chosenItem, rarity];
        }
        else if (collection !== null && typeof collection === 'object') {
            let keys = Object.keys(collection);
            let chosenKey = keys[Math.floor(Math.random() * keys.length)];
            let chosenValue = collection[chosenKey];

            return [chosenKey, chosenValue, rarity];
        }

        return [null, rarity];
    }

    for (let i = 0; i < fortuneList.length; i++) {
        // first fortune: stones
        if (i === 0) {
            if (fortuneList[i] > 200) {
                chosenStone = returnObjectFromCollection(fortuneObjects.magicStones.commonStones, " common");
            }
            else if (fortuneList[i] > 20) {
                chosenStone = returnObjectFromCollection(fortuneObjects.magicStones.rareStones, " rare");
            }
            else if (fortuneList[i] > 2) {
                chosenStone = returnObjectFromCollection(fortuneObjects.magicStones.ultraRareStones, " ultra rare");
            }
            else {
                chosenStone = returnObjectFromCollection(fortuneObjects.magicStones.impossible, " impossible??!");
            }
        }
        // second fortune: powers
        else if (i === 1) {
            if (fortuneList[i] > 200) {
                chosenPower = returnObjectFromCollection(fortuneObjects.powers.commonPowers, " common");
            }
            else if (fortuneList[i] > 20) {
                chosenPower = returnObjectFromCollection(fortuneObjects.powers.rarePowers, " rare");
            }
            else if (fortuneList[i] >= 1) {
                chosenPower = returnObjectFromCollection(fortuneObjects.powers.ultraRarePowers, " ultra rare");
            }
        }
        // third fortune: Order
        else if (i === 2) {
            if (fortuneList[i] > 200) {
                chosenOrder = returnObjectFromCollection(fortuneObjects.order.commonOrders, " common");
            }
            else if (fortuneList[i] > 20) {
                chosenOrder = returnObjectFromCollection(fortuneObjects.order.rareOrders, " rare");
            }
            else if (fortuneList[i] >= 1) {
                chosenOrder = returnObjectFromCollection(fortuneObjects.order.ultraRareOrders, " ultra rare");
            }
        }
        // fourth fortuhe: Class
        else if (i === 3) {
            if (fortuneList[i] > 200) {
                chosenClass = returnObjectFromCollection(fortuneObjects.class.commonClasses, " common");
            }
            else if (fortuneList[i] > 20) {
                chosenClass = returnObjectFromCollection(fortuneObjects.class.rareClasses, " rare");
            }
            else if (fortuneList[i] >= 1) {
                chosenClass = returnObjectFromCollection(fortuneObjects.class.UltraRareClasses, " ultra rare");
            }
        }
    }

    let chosenStoneText = [[chosenStone[0], chosenStone[1]], [chosenPower[0], chosenPower[1], chosenPower[2]], [chosenOrder[0], chosenOrder[1]], [chosenClass[0], chosenClass[1]]];

    return chosenStoneText;
}
function setup() {
    rectMode(CENTER);
    createCanvas(canvasWidth, canvasHeight);

    // let chosenFortunes = getFortunes();
    // console.log(chosenFortunes)

    for (let i = 0; i < 1000; i++) {
        let chosenFortunes = getFortunes();
        console.log(chosenFortunes);
    }

}


/**
 * Draw description
*/
function draw() {
    background(backgroundColor);
    drawFortuneCard(
        canvasWidth / 2, // x
        canvasHeight / 2, // y
        350, // card width
        550, // card height
        15, // stroke
        strokeColor, // stroke color
        cardBackgroundColor, // bakcground color
        pixelFont, // font
        15, // font size
        textColor, //textColor
        "Fortune Card 1", // title
        "Magic Stone: ", // title of first fortune
    );
}