
const checkAvailability = (checkDirection, facing, currentPos, storage, Array) => {

    const isCheckDirectionForward = checkDirection === 'forward'
    const isCheckDirectionRight = checkDirection === 'right'
    const isCheckDirectionLeft = checkDirection === 'left'
    const isFacingRight = facing.direction === 'right'
    const isFacingLeft = facing.direction === 'left'
    const isFacingUp = facing.direction === 'up'
    const isFacingDown = facing.direction === 'down'


    if ((isCheckDirectionRight && isFacingUp) ||
        (isCheckDirectionLeft && isFacingDown)||
        (isCheckDirectionForward && isFacingRight)) {
        if (currentPos.row === Array.length) {
            return 'outOfArray'
        } else if (storage.includes(Array[currentPos.row ][currentPos.collumn - 1])) {
            return 'unavailable'
        } else return 'available'

    } else if ((isCheckDirectionRight && isFacingLeft) ||
        (isCheckDirectionLeft && isFacingRight)||
        (isCheckDirectionForward && isFacingUp)) {
        if (currentPos.collumn === 1) {
            return 'outOfArray'
        } else if (storage.includes(Array[currentPos.row - 1][currentPos.collumn - 2])) {
            return 'unavailable'
        } else return 'available'

    } else if ((isCheckDirectionRight && isFacingRight) ||
        (isCheckDirectionLeft && isFacingLeft)||
        (isCheckDirectionForward && isFacingDown)) {
        if (currentPos.collumn === Array[0].length) {
            return 'outOfArray'
        } else if (storage.includes(Array[currentPos.row - 1][currentPos.collumn])) {
            return 'unavailable'
        } else return 'available'

    } else if ((isCheckDirectionRight && isFacingDown) ||
        (isCheckDirectionLeft && isFacingUp)||
        (isCheckDirectionForward && isFacingLeft)) {
        if (currentPos.row === 1) {
            return 'outOfArray'
        } else if (storage.includes(Array[currentPos.row - 2][currentPos.collumn - 1])) {
            return 'unavailable'
        } else return 'available'
    }



}



export default checkAvailability 