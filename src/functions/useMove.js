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

export default move