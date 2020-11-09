const tomsMass = 8;
const tomsHeight = 9;
const jerrysMass = 1;
const jerrysHeight = 4;

const BmiTom = tomsMass / tomsHeight ** 2;
const BmiJerry = jerrysMass / (jerrysHeight * jerrysHeight);

const tomHigherBMI = BmiTom > BmiJerry;
console.log(`Is Tom's BMI higher than Jerrys? ${tomHigherBMI}`);
