import { checkAvailability, moveForward, turn, updateStorage } from './functions'

function App() {


  let Array = [[1, 4, 7, 10], [2, 5, 8, 11], [3, 6, 9, 12]],
    spiralDirection = 'right',
    facing = { direction: 'up' },
    storage = [],
    currentPos = {
      row: 2,
      collumn: 2
    }


  const moveUntilAvailable = () => {
    let notAvailable = true
    turn(spiralDirection, facing)
    while (notAvailable) {
      let checkResult = checkAvailability('forward', facing, currentPos, storage, Array)
      if (checkResult === 'outOfArray') {
        turn(spiralDirection, facing)
      } else if (checkResult === 'unavailable') {
        moveForward(facing, currentPos)
      } else {
        moveForward(facing, currentPos)
        updateStorage(currentPos, storage, Array)
        notAvailable = false
      }
    }
  }

  const calculateTheFirstStep = (direction, spiralDirection, facing) => {
    let directionIsRight = direction === 'right',
      directionIsLeft = direction === 'left',
      directionIsUp = direction === 'up',
      directionIsDown = direction === 'down',
      spiralDirectionIsRight = spiralDirection === 'right',
      spiralDirectionIsLeft = spiralDirection === 'left'

    if ((spiralDirectionIsRight && directionIsLeft) || (spiralDirectionIsLeft && directionIsRight)) {
      facing.direction = 'down'
    } else if ((spiralDirectionIsRight && directionIsRight) || (spiralDirectionIsLeft && directionIsLeft)) {
      facing.direction = 'up'
    } else if ((spiralDirectionIsRight && directionIsUp) || (spiralDirectionIsLeft && directionIsDown)) {
      facing.direction = 'left'
    } else if ((spiralDirectionIsRight && directionIsDown) || (spiralDirectionIsLeft && directionIsUp))
      facing.direction = 'right'
  }


  const algorithm = () => {

    let algorithmIsNotDone = true
    updateStorage(currentPos, storage, Array)
    while (algorithmIsNotDone) {
      //delay

      if (storage.length === Array.length * Array[0].length - 1) {
        algorithmIsNotDone = false
      }

      let result = checkAvailability(spiralDirection, facing, currentPos, storage, Array)
      let isAvailable = result === 'available',
        isUnAvailable = result === 'unavailable',
        isOutOfArray = result === 'outOfArray'

      if (isAvailable) {

        turn(spiralDirection, facing)
        moveForward(facing, currentPos)
        updateStorage(currentPos, storage, Array)

      } else if (isUnAvailable) {

        //if unavailable on the right, goes forward if available
        if (checkAvailability('forward', facing, currentPos, storage, Array) === 'available') {
          moveForward(facing, currentPos)
          updateStorage(currentPos, storage, Array)

        } else {
          moveUntilAvailable()
        }
      } else if (isOutOfArray) {
        moveUntilAvailable()
      }

    }
  }
  calculateTheFirstStep('left', spiralDirection, facing)
  algorithm()
  console.log(storage)

  return (
    <>
    </>
  );
}

export default App;
