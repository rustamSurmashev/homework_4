export function calculateOboi(roomPerimetr, roomHeight, oboiWidth, oboiLength) {
    let sizePerimetr = roomPerimetr;
    let sizeHeidht = roomHeight + 0.1;
    let sizeOboiWidth = oboiWidth;
    let sizeOboiLenght = oboiLength;

    let polosaOboi = sizePerimetr/sizeOboiWidth;
    let dlinaOboi = sizeHeidht/sizeOboiLenght;

    let result = polosaOboi/dlinaOboi;

    return Math.ceil(result);
}

console.log(calculateOboi(5.75, 2.75, 0.75, 12));