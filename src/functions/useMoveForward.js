const moveForward = (facing, currentPos) => {


    const isFacingRight = facing === 'right'
    const isFacingLeft = facing === 'left'
    const isFacingUp = facing === 'up'
    const isFacingDown = facing === 'down'

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
