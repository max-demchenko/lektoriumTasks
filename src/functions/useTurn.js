const turn = (turnDirection, facing) => {
    const isTurnDirectionRight = turnDirection === 'right'
    const isTurnDirectionLeft = turnDirection === 'left'
    const isFacingRight = facing === 'right'
    const isFacingLeft = facing === 'left'
    const isFacingUp = facing === 'up'
    const isFacingDown = facing === 'down'

    if ((isTurnDirectionRight && isFacingLeft) || (isTurnDirectionLeft && isFacingRight)) {
        facing = 'up'
    } else if ((isTurnDirectionRight && isFacingUp) || (isTurnDirectionLeft && isFacingDown)) {
        facing = 'right'
    } else if ((isTurnDirectionRight && isFacingRight) || (isTurnDirectionLeft && isFacingLeft)) {
        facing = 'down'
    } else if ((isTurnDirectionRight && isFacingDown) || (isTurnDirectionLeft && isFacingUp)) {
        facing = 'left'
    }

}

export default turn