const moveForward = (facing, currentPos) => {


    const isFacingRight = facing.direction === 'right'
    const isFacingLeft = facing.direction === 'left'
    const isFacingUp = facing.direction === 'up'
    const isFacingDown = facing.direction === 'down'

    if (isFacingRight) {
        currentPos.row++
    } else if (isFacingUp) {
        currentPos.collumn--
    } else if (isFacingDown) {
        currentPos.collumn++
    } else if (isFacingLeft) {
        currentPos.row--
    }

}

export default moveForward
