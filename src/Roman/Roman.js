

export const Roman = ( number ) => {
    if(number == 1) {
        return "I"
    } else if (number == 2) {
        return "II"
    } else if (number == 3) {
        return "III"
    } else if (number == 4) {
        return "IV"
    } else if (number == 5) {
        return "V"
    } else {
        return null
    }
}