import { move, checkAvailability } from './functions'

function App() {


  let Array = [[1, 4, 7], [2, 5, 8], [3, 6, 9]],
    spiralDirection,
    facing,
    storage = [],
    currentPos = {
      row: 2,
      collumn: 2
    }

  const updateStorage = (currentPos) => {
    storage.push(Array[currentPos.row][currentPos.collumn])
  }



  const algorithm = () => {
    checkAvailability('left', facing, currentPos, storage, Array)
    let i = false
    while (!i) {

      let result = checkAvailability(spiralDirection, facing, currentPos, storage, Array)
      let isAvailable = result === 'available',
        isUnAvailable

      if (isAvailable) {
        move(spiralDirection, facing, currentPos)
        updateStorage(currentPos)
      } else if (isUnAvailable) {

        let result = checkAvailability('forward', facing, currentPos, storage, Array)
        if (result === 'available') {
          move('forward')
          updateStorage(currentPos)
        } else {
          //move untill available
        }
      } else {
        //move untill available
      }

    }
  }

  return (
    <>
    </>
  );
}

export default App;
