let storage = [0, 4, 5]


const checkAvailability = (checkDirection, facing, currentPos) => {

    const isCheckDirectionForward = checkDirection === 'forward'
    const isCheckDirectionRight = checkDirection === 'right'
    const isCheckDirectionLeft = checkDirection === 'left'
    const isFacingRight = facing === 'right'
    const isFacingLeft = facing === 'left'
    const isFacingUp = facing === 'up'
    const isFacingDown = facing === 'down'

    if ((isCheckDirectionRight && isFacingUp) ||
        (isCheckDirectionLeft && isFacingDown)||
        (isCheckDirectionForward && isFacingRight)) {
        if (currentPos.row === Array.length) {
            return 'outOfArray'
        } else if (storage.includes(Array[currentPos.row + 1][currentPos.collumn])) {
            return 'unavailable'
        } else return 'available'

    } else if ((isCheckDirectionRight && isFacingLeft) ||
        (isCheckDirectionLeft && isFacingRight)||
        (isCheckDirectionForward && isFacingUp)) {
        if (currentPos.collumn === 1) {
            return 'outOfArray'
        } else if (storage.includes(Array[currentPos.row][currentPos.collumn - 1])) {
            return 'unavailable'
        } else return 'available'

    } else if ((isCheckDirectionRight && isFacingRight) ||
        (isCheckDirectionLeft && isFacingLeft)||
        (isCheckDirectionForward && isFacingDown)) {
        if (currentPos.collumn === Array[0].length) {
            return 'outOfArray'
        } else if (storage.includes(Array[currentPos.row][currentPos.collumn + 1])) {
            return 'unavailable'
        } else return 'available'

    } else if ((isCheckDirectionRight && isFacingDown) ||
        (isCheckDirectionLeft && isFacingUp)||
        (isCheckDirectionForward && isFacingLeft)) {
        if (currentPos.row === 1) {
            return 'outOfArray'
        } else if (storage.includes(Array[currentPos.row - 1][currentPos.collumn])) {
            return 'unavailable'
        } else return 'available'
    }



}

const move = (moveDirection, facing, currentPos) => {

    const isMoveDirectionForward = moveDirection === 'forward'
    const isMoveDirectionRight = moveDirection === 'right'
    const isMoveDirectionLeft = moveDirection === 'left'
    const isFacingRight = facing === 'right'
    const isFacingLeft = facing === 'left'
    const isFacingUp = facing === 'up'
    const isFacingDown = facing === 'down'

    if ((isMoveDirectionRight && isFacingUp) ||
        (isMoveDirectionLeft && isFacingDown) ||
        (isMoveDirectionForward && isFacingRight)) {
        currentPos.row++
    } else if ((isMoveDirectionRight && isFacingLeft) ||
        (isMoveDirectionLeft && isFacingRight) ||
        (isMoveDirectionForward && isFacingUp)) {
        currentPos.collumn--
    } else if ((isMoveDirectionRight && isFacingRight) ||
        (isMoveDirectionLeft && isFacingLeft) ||
        (isMoveDirectionForward && isFacingDown)) {
        currentPos.collumn++
    } else if ((isMoveDirectionRight && isFacingDown) ||
        (isMoveDirectionLeft && isFacingUp) ||
        (isMoveDirectionForward && isFacingLeft)) {
        currentPos.row--
    }

}

export { move, checkAvailability }