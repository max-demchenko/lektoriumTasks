const turn = (turnDirection, facing) => {
    const isTurnDirectionRight = turnDirection === 'right'
    const isTurnDirectionLeft = turnDirection === 'left'
    const isFacingRight = facing.direction === 'right'
    const isFacingLeft = facing.direction === 'left'
    const isFacingUp = facing.direction === 'up'
    const isFacingDown = facing.direction === 'down'

    if ((isTurnDirectionRight && isFacingLeft) || (isTurnDirectionLeft && isFacingRight)) {
        facing.direction = 'up'
    } else if ((isTurnDirectionRight && isFacingUp) || (isTurnDirectionLeft && isFacingDown)) {
        facing.direction = 'right'
    } else if ((isTurnDirectionRight && isFacingRight) || (isTurnDirectionLeft && isFacingLeft)) {
        facing.direction = 'down'
    } else if ((isTurnDirectionRight && isFacingDown) || (isTurnDirectionLeft && isFacingUp)) {
        facing.direction = 'left'
    }

}

export default turn